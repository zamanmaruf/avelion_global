"use client";

import { useAttribution } from "@/lib/analytics/attribution";
import { Button } from "@/components/ui/button";
import { Checkbox, FieldError, Input, Label } from "@/components/ui/form-fields";
import { FormError, FormSuccess } from "@/components/ui/section";
import Link from "next/link";
import { useState } from "react";

export function NewsletterForm({ className }: { className?: string }) {
  const { attribution } = useAttribution();
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setConsentError("");
    setServerError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }
    if (!marketingConsent) {
      setConsentError("Marketing consent is required to subscribe");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          marketing_consent: true,
          website_honeypot: honeypot,
          attribution: {
            ...attribution,
            submission_timestamp: new Date().toISOString(),
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to subscribe");
      setSuccess(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <FormSuccess
        title="You are subscribed"
        description="Thank you. We will only send relevant apparel sourcing updates, and you can unsubscribe at any time."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Label htmlFor="newsletter-email" required>
            Work email
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
          <FieldError message={error} />
        </div>
        <Button type="submit" disabled={submitting} className="sm:mb-0">
          {submitting ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>

      <div className="mt-4">
        <Checkbox
          id="newsletter-consent"
          checked={marketingConsent}
          onChange={(e) => setMarketingConsent(e.target.checked)}
          label="I agree to receive occasional email updates from Avelion Global."
          description="You can unsubscribe at any time. See our Privacy Policy for details."
        />
        <p className="mt-2 text-xs text-text-secondary">
          Read the{" "}
          <Link href="/privacy" className="text-silver-light underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <FieldError message={consentError} />
      </div>

      <input
        type="text"
        name="website_honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      {serverError ? (
        <div className="mt-4">
          <FormError message={serverError} />
        </div>
      ) : null}
    </form>
  );
}
