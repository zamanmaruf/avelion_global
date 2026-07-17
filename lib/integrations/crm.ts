import { dispatchLeadWebhook } from "@/lib/integrations/webhooks";
import type { LeadRecord } from "@/types";

export async function notifyIntegrations(lead: LeadRecord) {
  await dispatchLeadWebhook(lead);

  if (process.env.APOLLO_ENABLED === "true" && process.env.APOLLO_API_KEY) {
    // Optional future Apollo push — disabled by default.
    // Keep adapter-ready without assuming API access.
  }
}
