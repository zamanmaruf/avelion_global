"use client";

import { ConsentProvider } from "@/lib/analytics/consent";
import { AttributionProvider } from "@/lib/analytics/attribution";
import { AnalyticsScripts } from "@/lib/analytics/scripts";
import { ConsentBanner } from "@/components/ui/consent-banner";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/events";

function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("[data-analytics]");
      if (!target) return;
      const name = target.getAttribute("data-analytics");
      if (
        name === "email_clicked" ||
        name === "phone_clicked" ||
        name === "whatsapp_clicked"
      ) {
        trackEvent(name);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConsentProvider>
      <AttributionProvider>
        {children}
        <ConsentBanner />
        <AnalyticsScripts />
        <Analytics />
        <ClickTracker />
      </AttributionProvider>
    </ConsentProvider>
  );
}
