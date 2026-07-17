import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/schemas";
import { rateLimit, verifyTurnstile } from "@/lib/forms/security";
import { storeLead } from "@/lib/forms/leads";
import {
  sendContactConfirmation,
  sendInternalLeadNotification,
} from "@/lib/email/send";
import { notifyIntegrations } from "@/lib/integrations/crm";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limited = rateLimit(`contact:${ip}`);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
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

    const turnstileOk = await verifyTurnstile(data.turnstile_token, ip);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Spam verification failed." }, { status: 400 });
    }

    const lead = await storeLead({
      lead_type: "contact",
      status: "new",
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone || null,
      job_title: data.job_title || null,
      company: data.company,
      country: null,
      province: null,
      product_interest: data.subject,
      notes: data.message,
      lead_source: data.attribution?.utm_source || "website_contact",
      utm_source: data.attribution?.utm_source || null,
      utm_medium: data.attribution?.utm_medium || null,
      utm_campaign: data.attribution?.utm_campaign || null,
      utm_content: data.attribution?.utm_content || null,
      utm_term: data.attribution?.utm_term || null,
      landing_page_path: data.attribution?.landing_page_path || "/contact",
      referring_url: data.attribution?.referring_url || null,
      inquiry_consent: true,
      marketing_consent: Boolean(data.marketing_consent),
      consent_timestamp: new Date().toISOString(),
      consent_source: "contact_form",
      payload: data as unknown as Record<string, unknown>,
    });

    await Promise.allSettled([
      sendContactConfirmation({ email: data.email, firstName: data.first_name }),
      sendInternalLeadNotification({
        type: "Contact",
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        company: data.company,
        to: siteConfig.contact.email,
        summary: `${data.subject}\n\n${data.message}`,
      }),
      notifyIntegrations(lead),
    ]);

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
