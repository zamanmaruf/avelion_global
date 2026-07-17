import { NextResponse } from "next/server";
import { rfqSchema, ALLOWED_UPLOAD_TYPES, MAX_UPLOAD_BYTES, MAX_UPLOAD_FILES } from "@/lib/validation/schemas";
import { rateLimit, verifyTurnstile } from "@/lib/forms/security";
import { storeLead, uploadAttachment } from "@/lib/forms/leads";
import {
  sendInternalLeadNotification,
  sendRfqConfirmation,
} from "@/lib/email/send";
import { notifyIntegrations } from "@/lib/integrations/crm";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limited = rateLimit(`rfq:${ip}`);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const formData = await request.formData();
    const attributionRaw = String(formData.get("attribution") || "{}");
    let attribution = {};
    try {
      attribution = JSON.parse(attributionRaw);
    } catch {
      attribution = {};
    }

    const attachments = formData.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
    if (attachments.length > MAX_UPLOAD_FILES) {
      return NextResponse.json({ error: "Too many attachments." }, { status: 400 });
    }

    for (const file of attachments) {
      if (file.size > MAX_UPLOAD_BYTES) {
        return NextResponse.json({ error: `File too large: ${file.name}` }, { status: 400 });
      }
      if (!ALLOWED_UPLOAD_TYPES.includes(file.type as (typeof ALLOWED_UPLOAD_TYPES)[number])) {
        return NextResponse.json({ error: `Unsupported file type: ${file.name}` }, { status: 400 });
      }
    }

    const parsed = rfqSchema.safeParse({
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      company: formData.get("company"),
      company_website: formData.get("company_website") || "",
      job_title: formData.get("job_title") || "",
      country: formData.get("country"),
      province: formData.get("province") || "",
      product_category: formData.get("product_category"),
      product_description: formData.get("product_description"),
      service_interest: formData.get("service_interest") || "",
      estimated_quantity: formData.get("estimated_quantity"),
      number_of_styles: formData.get("number_of_styles") || "",
      size_range: formData.get("size_range") || "",
      fabric_preference: formData.get("fabric_preference") || "",
      fabric_weight: formData.get("fabric_weight") || "",
      colour_requirements: formData.get("colour_requirements") || "",
      printing_or_embroidery: formData.get("printing_or_embroidery") || "",
      branding_and_labels: formData.get("branding_and_labels") || "",
      packaging_requirements: formData.get("packaging_requirements") || "",
      target_price_range: formData.get("target_price_range") || "",
      required_delivery_date: formData.get("required_delivery_date") || "",
      previous_sourcing_experience: formData.get("previous_sourcing_experience") || "",
      existing_tech_pack: formData.get("existing_tech_pack") || undefined,
      existing_sample: formData.get("existing_sample") || undefined,
      additional_notes: formData.get("additional_notes") || "",
      industry: formData.get("industry") || "",
      inquiry_consent: formData.get("inquiry_consent") === "true",
      marketing_consent: formData.get("marketing_consent") === "true",
      website_honeypot: formData.get("website_honeypot") || "",
      turnstile_token: formData.get("turnstile_token") || "",
      attribution,
    });

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

    const attachmentPaths: string[] = [];
    for (const file of attachments) {
      const path = await uploadAttachment(file, `rfq/${data.email}`);
      attachmentPaths.push(path);
    }

    const lead = await storeLead({
      lead_type: "rfq",
      status: "new",
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone || null,
      job_title: data.job_title || null,
      company: data.company,
      company_website: data.company_website || null,
      industry: data.industry || null,
      country: data.country,
      province: data.province || null,
      product_interest: data.product_category || null,
      service_interest: data.service_interest || null,
      estimated_quantity: data.estimated_quantity || null,
      timeline: data.required_delivery_date || null,
      notes: data.additional_notes || data.product_description,
      lead_source: data.attribution?.utm_source || "website_rfq",
      utm_source: data.attribution?.utm_source || null,
      utm_medium: data.attribution?.utm_medium || null,
      utm_campaign: data.attribution?.utm_campaign || null,
      utm_content: data.attribution?.utm_content || null,
      utm_term: data.attribution?.utm_term || null,
      landing_page_path: data.attribution?.landing_page_path || "/request-a-quote",
      referring_url: data.attribution?.referring_url || null,
      inquiry_consent: true,
      marketing_consent: Boolean(data.marketing_consent),
      consent_timestamp: new Date().toISOString(),
      consent_source: "rfq_form",
      attachment_paths: attachmentPaths,
      payload: data as unknown as Record<string, unknown>,
    });

    await Promise.allSettled([
      sendRfqConfirmation({
        email: data.email,
        firstName: data.first_name,
        company: data.company,
      }),
      sendInternalLeadNotification({
        type: "RFQ",
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        company: data.company,
        to: siteConfig.contact.rfqEmail,
        summary: JSON.stringify(
          {
            service_interest: data.service_interest || "",
            product: data.product_category,
            quantity: data.estimated_quantity,
            utm: data.attribution,
            notes: data.product_description,
          },
          null,
          2,
        ),
      }),
      notifyIntegrations(lead),
    ]);

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("[api/rfq]", error);
    return NextResponse.json({ error: "Unable to process quote request." }, { status: 500 });
  }
}
