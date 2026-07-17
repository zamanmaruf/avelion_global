import { ServiceCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { serviceContent } from "@/content/services";
import { createMetadata, JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Apparel Sourcing Services",
  description:
    "Supplier sourcing, product development, production management, quality assurance, compliance coordination, and logistics support for Canadian buyers manufacturing with Asian partners.",
  path: "/services",
});

const startHereGuide = [
  {
    when: "You need a factory match",
    service: "Supplier and Factory Sourcing",
    href: "/services/supplier-factory-sourcing",
    why: "Use this when you have a product category and volume band but no qualified Asian manufacturer—or when an existing supplier no longer fits quality, capacity, or commercial reality.",
  },
  {
    when: "The product is not locked yet",
    service: "Product Development and Sampling",
    href: "/services/product-development-sampling",
    why: "Start here when tech packs are incomplete, fit is unproven, or decoration and materials still need decisions before bulk commitment.",
  },
  {
    when: "An order is already in motion",
    service: "Production Management",
    href: "/services/production-management",
    why: "Choose this when purchase orders exist (or are imminent) and you need milestone tracking, issue escalation, and Canada-based communication across time zones.",
  },
  {
    when: "Quality risk is the main concern",
    service: "Quality Assurance",
    href: "/services/quality-assurance",
    why: "Prioritize QA when sample approvals, measurement discipline, inline checks, or final inspection coordination must protect the approved standard.",
  },
  {
    when: "Buyers ask for paperwork",
    service: "Compliance Coordination",
    href: "/services/compliance-coordination",
    why: "Use this when factory, testing, origin, or retailer documentation must be collected and organized for review—not when you need a lab or legal opinion.",
  },
  {
    when: "Cargo and delivery are next",
    service: "Logistics and Delivery Coordination",
    href: "/services/logistics-delivery",
    why: "Engage logistics when packing, commercial documents, freight-forwarder handoff, and broker liaison for delivery into Canada need structured support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListJsonLd({
            name: "Avelion Global apparel sourcing services",
            description:
              "Supplier sourcing, product development, production management, quality assurance, compliance, and logistics for Canadian buyers.",
            items: siteConfig.services.map((service) => ({
              name: service.title,
              path: service.href,
            })),
          }),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <SectionHeading
            eyebrow="Services"
            title="Structured support across the apparel sourcing lifecycle"
            description="Avelion coordinates the stages that commonly create risk for Canadian buyers: factory matching, sampling, production follow-through, quality checkpoints, documentation, and shipment handoff."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Canadian buyers rarely struggle because Asian manufacturing capacity is scarce. Programs
              stall when requirements stay informal, sampling decisions never become lasting
              references, production progress is hard to see across time zones, and shipment readiness
              is treated as an afterthought. Avelion Global is a Canada-based sourcing and
              production-management partner that keeps those stages organized while manufacturing
              happens with qualified Asian partners and delivery is coordinated into Canada.
            </p>
            <p>
              Our services can be engaged individually or as a connected program. Some buyers need
              factory matching first. Others already have a manufacturer and need sampling discipline,
              production visibility, quality checkpoints, documentation support, or logistics
              coordination. Private-label brands, retailers, uniform suppliers, promotional
              distributors, and institutional buyers often use the same capabilities in different
              sequences—what changes is which bottleneck appears first.
            </p>
            <p>
              The right starting point depends on where uncertainty is highest—not on which service
              sounds most comprehensive. Use the decision guide below if you are unsure where to
              begin, then open the service detail pages for scope, process, and what to send. When
              your brief spans multiple stages, say so in a quote request; we will recommend a
              practical path rather than forcing every program through every service.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Start here"
            title="Which service to use when"
            description="Match your current bottleneck to the service that reduces it. Many programs eventually use several stages; beginning with the right one shortens clarification cycles."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {startHereGuide.map((item) => (
              <div key={item.href} className="surface-panel rounded-sm p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-silver-primary uppercase">
                  {item.when}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                  <Link href={item.href} className="hover:text-silver-light">
                    {item.service}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.why}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
                >
                  Open service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="All services"
            title="Six coordinated capabilities"
            description="Each service has a dedicated page covering outcomes, process, what to prepare, and related products or industries."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const detail = serviceContent[service.slug as keyof typeof serviceContent];
              return (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={detail?.metaDescription || service.description}
                  href={service.href}
                  index={index + 1}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need first?"
        description="Book a short conversation and we will help identify whether supplier matching, sampling, production management, or a full program is the right next step."
        primary={siteConfig.primaryCta}
        secondary={siteConfig.secondaryCta}
      />
    </>
  );
}
