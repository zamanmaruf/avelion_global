"use client";

import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/types/service";
import { trackEvent } from "@/lib/analytics/events";
import { Breadcrumbs } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function ServiceHero({ service }: { service: ServicePageContent }) {
  const quoteHref = `/request-a-quote?service=${service.slug}`;

  return (
    <section className="section-pad section-dark border-b border-border-subtle">
      <div className="container-avelion">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
              {service.eyebrow}
            </p>
            <p className="mb-4 font-display text-5xl text-silver-dark/40 md:text-6xl">{service.number}</p>
            <h1 className="font-display max-w-3xl text-3xl leading-tight text-text-primary md:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
              {service.heroCopy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={siteConfig.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-h-11 items-center rounded-sm bg-silver-light px-6 text-sm font-medium text-background-primary hover:bg-silver-primary"
                onClick={() =>
                  trackEvent("cta_book_consultation", {
                    location: "service_hero",
                    service: service.slug,
                  })
                }
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={quoteHref}
                className="inline-flex h-12 min-h-11 items-center rounded-sm border border-border-subtle px-6 text-sm font-medium text-text-primary hover:bg-surface-secondary"
                onClick={() =>
                  trackEvent("cta_request_quote", {
                    location: "service_hero",
                    service: service.slug,
                  })
                }
              >
                Request a Quote
              </Link>
            </div>
            <p className="mt-8 max-w-2xl border-l border-silver-primary/40 pl-4 text-sm leading-relaxed text-text-secondary">
              <span className="font-medium text-text-primary">Best suited for: </span>
              {service.bestSuitedFor}
            </p>
          </div>
          <ServiceHeroVisual variant={service.visualVariant} number={service.number} />
        </div>
      </div>
    </section>
  );
}

function ServiceHeroVisual({
  variant,
  number,
}: {
  variant: ServicePageContent["visualVariant"];
  number: string;
}) {
  const labels: Record<ServicePageContent["visualVariant"], string> = {
    matrix: "Factory evaluation grid",
    samples: "Sample approval sequence",
    timeline: "Production critical path",
    checklist: "Inspection checkpoints",
    documents: "Document status board",
    route: "Shipment route milestones",
  };
  const items: Record<ServicePageContent["visualVariant"], string[]> = {
    matrix: [
      "Capability fit",
      "MOQ fit",
      "Capacity readiness",
      "Documentation posture",
      "Quotation transparency",
    ],
    samples: [
      "Prototype",
      "Fit sample",
      "Size set",
      "Pre-production sample",
      "Approval record",
    ],
    timeline: [
      "PO confirmed",
      "Materials booked",
      "Cutting",
      "Inline check",
      "Shipment readiness",
    ],
    checklist: [
      "Measurements",
      "Workmanship",
      "Materials",
      "Branding",
      "Packing",
    ],
    documents: [
      "Requested",
      "Received",
      "Under review",
      "Clarification required",
      "Submitted",
    ],
    route: [
      "Cargo ready",
      "Booking",
      "Export handoff",
      "Customs broker",
      "Final delivery",
    ],
  };

  const imageSrc =
    variant === "route" ? "/images/logistics-hero-bg.png" : "/images/service-hero-factory.png";
  const caption =
    variant === "route"
      ? "Freight and delivery visual · illustrative only"
      : "Production environment visual · illustrative only";

  return (
    <div
      className="relative min-h-[280px] overflow-hidden rounded-sm border border-border-subtle md:min-h-[360px]"
      aria-hidden
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className={
          variant === "route"
            ? "object-cover object-[center_30%]"
            : "object-cover object-center"
        }
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/80 to-background-primary/50"
      />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 md:min-h-[360px] md:p-8">
        <div>
          <p className="text-xs tracking-[0.16em] text-silver-primary uppercase">{labels[variant]}</p>
          <p className="mt-4 font-display text-6xl text-silver-light/35">{number}</p>
        </div>
        <div className="mt-10 space-y-2">
          {items[variant].map((item, i) => (
            <div
              key={item}
              className="flex items-center justify-between gap-4 rounded-sm border border-silver-primary/15 bg-background-primary/45 px-3 py-2 backdrop-blur-sm"
            >
              <span className="text-xs tracking-[0.12em] text-text-secondary uppercase">
                {item}
              </span>
              <span className="text-[0.65rem] text-silver-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-silver-dark">{caption}</p>
      </div>
    </div>
  );
}
