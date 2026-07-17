import { Resend } from "resend";
import { siteConfig } from "@/config/site";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.FROM_EMAIL);
}

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const resend = getResend();
  if (!resend) {
    if (process.env.NODE_ENV === "development") {
      console.info("[email:dev]", { to, subject });
    }
    return { id: "dev-mode" };
  }

  const from = process.env.FROM_EMAIL || "Avelion Global <sales@avelionglobal.ca>";
  const { data, error } = await resend.emails.send({ from, to, subject, html });
  if (error) throw error;
  return data;
}

export async function sendRfqConfirmation(input: {
  email: string;
  firstName: string;
  company: string;
}) {
  return sendEmail({
    to: input.email,
    subject: "We received your quote request — Avelion Global",
    html: `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6;max-width:560px">
        <p>Hello ${input.firstName},</p>
        <p>Thank you for submitting a quote request to ${siteConfig.legalName}. Our team will review the details for ${input.company} and respond with next steps.</p>
        <p>${siteConfig.contact.responseTime}</p>
        <p>If you have additional files or updates, reply to this email or contact <a href="mailto:${siteConfig.contact.rfqEmail}">${siteConfig.contact.rfqEmail}</a>.</p>
        <p>Regards,<br/>Avelion Global</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0" />
        <p style="font-size:12px;color:#666">You received this message because you submitted an inquiry. This is not a marketing subscription.</p>
      </div>
    `,
  });
}

export async function sendContactConfirmation(input: {
  email: string;
  firstName: string;
}) {
  return sendEmail({
    to: input.email,
    subject: "We received your message — Avelion Global",
    html: `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6;max-width:560px">
        <p>Hello ${input.firstName},</p>
        <p>Thank you for contacting ${siteConfig.legalName}. We have received your message and will follow up shortly.</p>
        <p>${siteConfig.contact.responseTime}</p>
        <p>Regards,<br/>Avelion Global</p>
      </div>
    `,
  });
}

export async function sendInternalLeadNotification(input: {
  type: string;
  name: string;
  email: string;
  company?: string;
  summary: string;
  to?: string;
}) {
  const to =
    input.to ||
    process.env.INTERNAL_NOTIFICATION_EMAIL ||
    siteConfig.contact.rfqEmail ||
    siteConfig.contact.email;
  return sendEmail({
    to,
    subject: `New ${input.type} — ${input.name}${input.company ? ` · ${input.company}` : ""}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
        <p><strong>Type:</strong> ${input.type}</p>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        ${input.company ? `<p><strong>Company:</strong> ${input.company}</p>` : ""}
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:4px">${input.summary}</pre>
      </div>
    `,
  });
}
