"use client";

import { useAttribution } from "@/lib/analytics/attribution";
import { trackEvent } from "@/lib/analytics/events";
import { FieldError, Input, Label, Select, Textarea, Checkbox } from "@/components/ui/form-fields";
import { FormError, FormSuccess } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const initial = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company: "",
  company_website: "",
  job_title: "",
  country: "Canada",
  province: "",
  service_interest: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  number_of_styles: "",
  size_range: "",
  fabric_preference: "",
  fabric_weight: "",
  colour_requirements: "",
  printing_or_embroidery: "",
  branding_and_labels: "",
  packaging_requirements: "",
  target_price_range: "",
  required_delivery_date: "",
  previous_sourcing_experience: "",
  existing_tech_pack: "",
  existing_sample: "",
  additional_notes: "",
  industry: "",
  inquiry_consent: false,
  marketing_consent: false,
  website_honeypot: "",
};

function QuoteFormInner() {
  const { attribution } = useAttribution();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const [values, setValues] = useState(() => ({
    ...initial,
    service_interest: serviceParam,
  }));
  const [files, setFiles] = useState<FileList | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const selectedService = siteConfig.services.find((s) => s.slug === values.service_interest);

  useEffect(() => {
    trackEvent("rfq_started", { service: serviceParam || undefined });
  }, [serviceParam]);

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.first_name) next.first_name = "Required";
    if (!values.last_name) next.last_name = "Required";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Valid email required";
    if (!values.company) next.company = "Required";
    if (!values.product_description || values.product_description.trim().length < 10)
      next.product_description = "Tell us a bit about what you need";
    if (!values.inquiry_consent) next.inquiry_consent = "Required to proceed";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError("");
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      formData.append("turnstile_token", turnstileToken);
      formData.append(
        "attribution",
        JSON.stringify({
          ...attribution,
          submission_timestamp: new Date().toISOString(),
        }),
      );
      if (files) {
        Array.from(files).forEach((file) => formData.append("attachments", file));
      }

      const res = await fetch("/api/rfq", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to submit quote request");

      trackEvent("rfq_completed", {
        product_category: values.product_category || undefined,
        service: values.service_interest || undefined,
        utm_campaign: attribution.utm_campaign,
      });
      if (attribution.utm_source === "apollo" || attribution.utm_medium === "email") {
        trackEvent("outbound_campaign_conversion", {
          campaign: attribution.utm_campaign,
          service: values.service_interest || undefined,
        });
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
        title="Quote request received"
        description={`Thank you. Your request was sent to ${siteConfig.contact.rfqEmail}. We typically respond within one to two business days.`}
        actions={
          <>
            <Button href={siteConfig.primaryCta.href}>Book a Consultation</Button>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </>
        }
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {selectedService ? (
        <p className="rounded-sm border border-border-subtle bg-surface-primary/50 px-4 py-3 text-sm text-text-secondary">
          Service interest:{" "}
          <span className="font-medium text-text-primary">{selectedService.title}</span>
        </p>
      ) : null}

      <div className="hidden" aria-hidden>
        <label htmlFor="website_honeypot">Website</label>
        <input
          id="website_honeypot"
          name="website_honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={values.website_honeypot}
          onChange={(e) => update("website_honeypot", e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="first_name" required>
            First name
          </Label>
          <Input
            id="first_name"
            value={values.first_name}
            onChange={(e) => update("first_name", e.target.value)}
            error={errors.first_name}
          />
          <FieldError id="first_name-error" message={errors.first_name} />
        </div>
        <div>
          <Label htmlFor="last_name" required>
            Last name
          </Label>
          <Input
            id="last_name"
            value={values.last_name}
            onChange={(e) => update("last_name", e.target.value)}
            error={errors.last_name}
          />
          <FieldError id="last_name-error" message={errors.last_name} />
        </div>
        <div>
          <Label htmlFor="email" required>
            Work email
          </Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            error={errors.email}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="company" required>
            Company
          </Label>
          <Input
            id="company"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            error={errors.company}
          />
          <FieldError id="company-error" message={errors.company} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="product_description" required>
            What are you looking for?
          </Label>
          <Textarea
            id="product_description"
            value={values.product_description}
            onChange={(e) => update("product_description", e.target.value)}
            error={errors.product_description}
            placeholder="Product type, quantity range, timing, and anything else useful. Incomplete briefs are fine."
          />
          <FieldError id="product_description-error" message={errors.product_description} />
        </div>
        <div>
          <Label htmlFor="estimated_quantity">Estimated quantity</Label>
          <Input
            id="estimated_quantity"
            value={values.estimated_quantity}
            onChange={(e) => update("estimated_quantity", e.target.value)}
            placeholder="Optional"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Optional"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="attachments">Attachments</Label>
          <Input
            id="attachments"
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xls,.xlsx"
            onChange={(e) => setFiles(e.target.files)}
          />
          <p className="mt-2 text-xs text-text-secondary">
            Optional. Tech packs, sketches, or photos. Max 6 files, 10 MB each.
          </p>
        </div>
      </div>

      <details className="rounded-sm border border-border-subtle">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-text-primary">
          Add more detail (optional)
        </summary>
        <div className="grid gap-4 border-t border-border-subtle p-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label htmlFor="service_interest">Service interest</Label>
            <Select
              id="service_interest"
              value={values.service_interest}
              onChange={(e) => update("service_interest", e.target.value)}
            >
              <option value="">Select a service (optional)</option>
              {siteConfig.services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="product_category">Product category</Label>
            <Select
              id="product_category"
              value={values.product_category}
              onChange={(e) => update("product_category", e.target.value)}
            >
              <option value="">Select a category</option>
              {siteConfig.products.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={values.country}
              onChange={(e) => update("country", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="required_delivery_date">Target delivery</Label>
            <Input
              id="required_delivery_date"
              value={values.required_delivery_date}
              onChange={(e) => update("required_delivery_date", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fabric_preference">Fabric preference</Label>
            <Input
              id="fabric_preference"
              value={values.fabric_preference}
              onChange={(e) => update("fabric_preference", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="printing_or_embroidery">Decoration</Label>
            <Input
              id="printing_or_embroidery"
              value={values.printing_or_embroidery}
              onChange={(e) => update("printing_or_embroidery", e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="additional_notes">Additional notes</Label>
            <Textarea
              id="additional_notes"
              value={values.additional_notes}
              onChange={(e) => update("additional_notes", e.target.value)}
            />
          </div>
        </div>
      </details>

      <Checkbox
        id="inquiry_consent"
        checked={values.inquiry_consent}
        onChange={(e) => update("inquiry_consent", e.target.checked)}
        label="I agree to be contacted about this inquiry."
      />
      <FieldError id="inquiry_consent-error" message={errors.inquiry_consent} />

      <Checkbox
        id="marketing_consent"
        checked={values.marketing_consent}
        onChange={(e) => update("marketing_consent", e.target.checked)}
        label="Optional: send me relevant sourcing insights and updates."
      />

      <p className="text-xs text-text-secondary">
        Submissions go to{" "}
        <a
          href={`mailto:${siteConfig.contact.rfqEmail}`}
          className="text-silver-primary underline-offset-2 hover:underline"
        >
          {siteConfig.contact.rfqEmail}
        </a>
        . See our{" "}
        <Link href="/privacy" className="text-silver-primary underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      {turnstileSiteKey ? (
        <Turnstile siteKey={turnstileSiteKey} onSuccess={setTurnstileToken} />
      ) : null}

      {serverError ? <FormError message={serverError} /> : null}

      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send quote request"}
      </Button>
    </form>
  );
}

export function QuoteForm() {
  return (
    <Suspense fallback={<div className="text-sm text-text-secondary">Loading form…</div>}>
      <QuoteFormInner />
    </Suspense>
  );
}
