import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/schemas";
import { rateLimit } from "@/lib/forms/security";
import { storeLead } from "@/lib/forms/leads";
import { notifyIntegrations } from "@/lib/integrations/crm";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limited = rateLimit(`newsletter:${ip}`);
    if (!limited.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;
    if (data.website_honeypot) {
      return NextResponse.json({ ok: true });
    }

    const lead = await storeLead({
      lead_type: "newsletter",
      status: "nurture",
      first_name: "",
      last_name: "",
      email: data.email,
      lead_source: data.attribution?.utm_source || "website_newsletter",
      utm_source: data.attribution?.utm_source || null,
      utm_medium: data.attribution?.utm_medium || null,
      utm_campaign: data.attribution?.utm_campaign || null,
      utm_content: data.attribution?.utm_content || null,
      utm_term: data.attribution?.utm_term || null,
      landing_page_path: data.attribution?.landing_page_path || "/insights",
      referring_url: data.attribution?.referring_url || null,
      inquiry_consent: false,
      marketing_consent: true,
      consent_timestamp: new Date().toISOString(),
      consent_source: "newsletter_form",
      payload: data as unknown as Record<string, unknown>,
    });

    await Promise.allSettled([notifyIntegrations(lead)]);

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("[api/newsletter]", error);
    return NextResponse.json({ error: "Unable to subscribe." }, { status: 500 });
  }
}
