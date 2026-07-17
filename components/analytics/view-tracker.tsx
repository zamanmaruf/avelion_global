"use client";

import { useAttribution } from "@/lib/analytics/attribution";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics/events";
import { useEffect, useRef } from "react";

export function ViewTracker({
  event,
  payload = {},
  trackOutbound = false,
}: {
  event: AnalyticsEvent;
  payload?: Record<string, unknown>;
  /** Also fire outbound_campaign_conversion when UTM attribution is present */
  trackOutbound?: boolean;
}) {
  const { attribution } = useAttribution();
  const payloadKey = JSON.stringify(payload);
  const primaryFired = useRef(false);
  const outboundFired = useRef(false);

  useEffect(() => {
    if (primaryFired.current) return;
    primaryFired.current = true;
    trackEvent(event, JSON.parse(payloadKey) as Record<string, unknown>);
  }, [event, payloadKey]);

  useEffect(() => {
    if (!trackOutbound || outboundFired.current) return;
    const hasUtm = Boolean(
      attribution.utm_source || attribution.utm_campaign || attribution.utm_medium,
    );
    if (!hasUtm) return;
    outboundFired.current = true;
    trackEvent("outbound_campaign_conversion", {
      ...(JSON.parse(payloadKey) as Record<string, unknown>),
      utm_source: attribution.utm_source,
      utm_campaign: attribution.utm_campaign,
      utm_medium: attribution.utm_medium,
      type: "landing_view",
    });
  }, [trackOutbound, attribution, payloadKey]);

  return null;
}
