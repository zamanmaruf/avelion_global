import { IndustryCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "Apparel sourcing support for Canadian brands, retailers, uniform suppliers, promotional distributors, hospitality, healthcare, education, and industrial buyers.",
  path: "/industries",
});

const segmentGuidance = [
  {
    segment: "Brands and private label",
    when: "You own the brand standard and need seasonal or core collections produced reliably.",
    focus: "Sampling lock, construction continuity, and reorder shade/fit control.",
  },
  {
    segment: "Retail and wholesale",
    when: "Assortments must hit intake windows and replenish without drifting from approved quality.",
    focus: "Category clustering, transparent costing, and warehouse receiving readiness into Canada.",
  },
  {
    segment: "Uniform suppliers",
    when: "Clients expect consistent decoration, size availability, and multi-year program continuity.",
    focus: "Style libraries, decorated references, and staged rollout packing.",
  },
  {
    segment: "Promotional distributors",
    when: "Campaign dates are fixed and artwork or kit rules can change late.",
    focus: "Date reverse-planning, decoration approvals, and packing for events or warehouses.",
  },
  {
    segment: "Hospitality, healthcare, education",
    when: "Institutional laundry, crest or logo standards, and calendar-driven intake dominate.",
    focus: "Role-based specs, durability realism, and documented replenishment pathways.",
  },
  {
    segment: "Industrial and construction",
    when: "Field conditions punish weak construction and inconsistent crew sizing.",
    focus: "Environment-led features, functional samples, and multi-site Canadian delivery.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
          itemListJsonLd({
            name: "Industries we serve",
            description:
              "Buyer segments Avelion supports for Asian apparel manufacturing and delivery into Canada.",
            items: siteConfig.industries.map((industry) => ({
              name: industry.title,
              path: industry.href,
            })),
          }),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <SectionHeading
            eyebrow="Industries"
            title="Sourcing support tailored to how your organization buys apparel"
            description="Avelion works with Canadian buyers who need Asian manufacturing coordination matched to category, volume, compliance expectations, and delivery into Canada."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Apparel sourcing problems look different depending on who is buying. A brand protecting
              private-label standards, a retailer defending intake calendars, a uniform supplier
              running multi-site rollouts, and a promotional distributor racing an event date all need
              Asian manufacturing—but they do not need the same operating emphasis. Hospitality,
              healthcare, education, and industrial buyers add another layer: laundry realities, crest
              or logo standards, institutional paperwork, and field durability that retail programs
              may never face.
            </p>
            <p>
              Avelion Global is a Canada-based partner that adapts factory matching, sampling,
              production visibility, quality checkpoints, and delivery coordination into Canada to the
              way your organization actually buys and replenishes garments. Volume bands, decoration
              standards, institutional paperwork, and intake calendars all change which risks matter
              most. Use this page to find the industry closest to your buying model. Each industry
              page covers typical challenges, outcomes, and related products.
            </p>
            <p>
              For campaign-oriented landing pages with pain points, process teasers, and FAQs, open
              the matching{" "}
              <Link href="/solutions" className="text-silver-primary hover:text-silver-light">
                solutions index
              </Link>
              . If you are between segments—for example a wholesaler also selling decorated
              campaigns—start with the industry that owns your quality standard, then mention the
              secondary use case in your brief.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Segment guidance"
            title="Which industry page to open first"
            description="Pick the segment that matches how decisions, risk, and replenishment work in your organization."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {segmentGuidance.map((item) => (
              <div key={item.segment} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.segment}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  <span className="font-medium text-text-primary">When: </span>
                  {item.when}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  <span className="font-medium text-text-primary">Focus: </span>
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 surface-panel rounded-sm p-6 md:p-8 max-w-3xl">
            <h3 className="text-lg font-semibold text-text-primary">Solutions vs industries</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Industry pages explain who we serve.{" "}
              <Link href="/solutions" className="text-silver-primary hover:text-silver-light">
                Solution pages
              </Link>{" "}
              are campaign landers for the same eight segments—useful when you want a concise pain
              points → outcomes → process narrative, what to send, and FAQs before requesting a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              title={industry.title}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </section>

      <CtaBand
        title="Looking for a campaign landing page?"
        description="Solution pages outline common pain points, outcomes, and related products for outbound and referral campaigns."
        primary={{ label: "Browse Solutions", href: "/solutions" }}
        secondary={{ label: "Request a Quote", href: "/request-a-quote" }}
      />
    </>
  );
}
