const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  key: string,
  options?: { windowMs?: number; max?: number },
): { success: boolean; remaining: number } {
  const windowMs = options?.windowMs ?? Number(process.env.RATE_LIMIT_WINDOW_MS || 900000);
  const max = options?.max ?? Number(process.env.RATE_LIMIT_MAX || 8);
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: max - 1 };
  }

  if (current.count >= max) {
    return { success: false, remaining: 0 };
  }

  current.count += 1;
  hits.set(key, current);
  return { success: true, remaining: max - current.count };
}

export async function verifyTurnstile(token?: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Allow local/dev without Turnstile; require in production when key is set.
    return process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  }
  if (!token) return false;

  const form = new URLSearchParams();
  form.set("secret", secret);
  form.set("response", token);
  if (ip) form.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}
