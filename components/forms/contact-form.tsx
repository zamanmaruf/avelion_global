"use client";

import { useAttribution } from "@/lib/analytics/attribution";
import { trackEvent } from "@/lib/analytics/events";
import { Button } from "@/components/ui/button";
import { Checkbox, FieldError, Input, Label, Textarea } from "@/components/ui/form-fields";
import { FormError, FormSuccess } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";
import { useState } from "react";

const initial = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company: "",
  job_title: "",
  subject: "",
  message: "",
  inquiry_consent: false,
  marketing_consent: false,
  website_honeypot: "",
};

export function ContactForm() {
  const { attribution } = useAttribution();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.first_name) next.first_name = "Required";
    if (!values.last_name) next.last_name = "Required";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Valid email required";
    if (!values.company) next.company = "Required";
    if (!values.subject) next.subject = "Required";
    if (!values.message || values.message.length < 10) next.message = "Please provide more detail";
    if (!values.inquiry_consent) next.inquiry_consent = "Required";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          turnstile_token: turnstileToken,
          attribution: {
            ...attribution,
            submission_timestamp: new Date().toISOString(),
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to send message");
      trackEvent("contact_form_completed", { utm_campaign: attribution.utm_campaign });
      if (attribution.utm_source === "apollo") {
        trackEvent("outbound_campaign_conversion", { campaign: attribution.utm_campaign });
      }
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
        title="Message sent"
        description="Thank you. We will review your inquiry and respond shortly."
        actions={
          <Button href={siteConfig.contact.bookingUrl || "/request-a-quote"}>
            Request a Quote
          </Button>
        }
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden>
        <input
          value={values.website_honeypot}
          onChange={(e) => update("website_honeypot", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="c_first_name" required>
            First name
          </Label>
          <Input
            id="c_first_name"
            value={values.first_name}
            onChange={(e) => update("first_name", e.target.value)}
            error={errors.first_name}
          />
          <FieldError id="c_first_name-error" message={errors.first_name} />
        </div>
        <div>
          <Label htmlFor="c_last_name" required>
            Last name
          </Label>
          <Input
            id="c_last_name"
            value={values.last_name}
            onChange={(e) => update("last_name", e.target.value)}
            error={errors.last_name}
          />
          <FieldError id="c_last_name-error" message={errors.last_name} />
        </div>
        <div>
          <Label htmlFor="c_email" required>
            Work email
          </Label>
          <Input
            id="c_email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            error={errors.email}
          />
          <FieldError id="c_email-error" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="c_phone">Phone</Label>
          <Input
            id="c_phone"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="c_company" required>
            Company
          </Label>
          <Input
            id="c_company"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            error={errors.company}
          />
          <FieldError id="c_company-error" message={errors.company} />
        </div>
        <div>
          <Label htmlFor="c_job_title">Job title</Label>
          <Input
            id="c_job_title"
            value={values.job_title}
            onChange={(e) => update("job_title", e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="c_subject" required>
          Subject
        </Label>
        <Input
          id="c_subject"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
            error={errors.subject}
        />
        <FieldError id="c_subject-error" message={errors.subject} />
      </div>
      <div>
        <Label htmlFor="c_message" required>
          Message
        </Label>
        <Textarea
          id="c_message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
            error={errors.message}
        />
        <FieldError id="c_message-error" message={errors.message} />
      </div>
      <Checkbox
        id="c_inquiry_consent"
        checked={values.inquiry_consent}
        onChange={(e) => update("inquiry_consent", e.target.checked)}
        label="I agree to be contacted about this inquiry."
      />
      <FieldError id="c_inquiry_consent-error" message={errors.inquiry_consent} />
      <Checkbox
        id="c_marketing_consent"
        checked={values.marketing_consent}
        onChange={(e) => update("marketing_consent", e.target.checked)}
        label="Optional: send me relevant sourcing insights and updates."
      />
      <p className="text-xs text-text-secondary">
        See our{" "}
        <Link href="/privacy" className="text-silver-light underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      {turnstileSiteKey ? (
        <Turnstile siteKey={turnstileSiteKey} onSuccess={setTurnstileToken} />
      ) : null}
      {serverError ? <FormError message={serverError} /> : null}
      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
