import type { LeadRecord } from "@/types";

export async function dispatchLeadWebhook(lead: LeadRecord) {
  const url = process.env.WEBHOOK_LEAD_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "lead.created",
        provider_targets: ["make", "zapier", "n8n", "hubspot", "pipedrive", "apollo"],
        lead,
      }),
    });
  } catch (error) {
    console.error("[webhook] failed", error);
  }
}
