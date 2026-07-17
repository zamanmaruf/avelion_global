export type AnalyticsEvent =
  | "cta_request_quote"
  | "cta_book_consultation"
  | "rfq_started"
  | "rfq_completed"
  | "contact_form_completed"
  | "email_clicked"
  | "phone_clicked"
  | "whatsapp_clicked"
  | "service_viewed"
  | "product_viewed"
  | "industry_landing_viewed"
  | "article_viewed"
  | "outbound_campaign_conversion";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, payload);
  }

  if (typeof window.lintrk === "function" && event.includes("completed")) {
    window.lintrk("track", { conversion_id: event });
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload);
  }
}
