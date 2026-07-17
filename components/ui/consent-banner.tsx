"use client";

import { useConsent } from "@/lib/analytics/consent";
import Link from "next/link";
import { useState } from "react";

export function ConsentBanner() {
  const { consent, acceptAll, rejectNonEssential, savePreferences } = useConsent();
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (consent.decided) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-subtle bg-background-secondary/95 p-4 backdrop-blur-md md:p-6"
    >
      <div className="container-avelion max-w-4xl">
        <p className="text-sm text-text-secondary">
          We use necessary cookies to operate this site. Optional analytics and marketing cookies
          help us understand traffic and measure campaigns. See our{" "}
          <Link href="/privacy" className="text-silver-light underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>

        {showPrefs ? (
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm text-text-primary">
              <input type="checkbox" checked disabled className="accent-silver-primary" />
              Necessary (always on)
            </label>
            <label className="flex items-center gap-3 text-sm text-text-primary">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-silver-primary"
              />
              Analytics
            </label>
            <label className="flex items-center gap-3 text-sm text-text-primary">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-silver-primary"
              />
              Marketing
            </label>
            <button
              type="button"
              className="mt-2 inline-flex h-10 items-center rounded-sm bg-silver-light px-4 text-sm font-medium text-background-primary"
              onClick={() => savePreferences({ analytics, marketing })}
            >
              Save preferences
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex h-10 items-center rounded-sm bg-silver-light px-4 text-sm font-medium text-background-primary"
              onClick={acceptAll}
            >
              Accept all
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center rounded-sm border border-border-subtle px-4 text-sm text-text-primary"
              onClick={rejectNonEssential}
            >
              Reject non-essential
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center px-4 text-sm text-silver-primary"
              onClick={() => setShowPrefs(true)}
            >
              Cookie settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
