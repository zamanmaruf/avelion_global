import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Sourcing Apparel in Asia",
  description:
    "Why Canadian buyers manufacture apparel with Asian manufacturers—and how Avelion helps navigate factory matching, sampling, quality, and delivery into Canada with structured oversight.",
  path: "/sourcing-in-asia",
});

const reasons = [
  {
    title: "Deep manufacturing ecosystems",
    body: "Asia offers extensive experience across knitwear, woven garments, uniforms, basics, private-label programs, and related apparel categories.",
  },
  {
    title: "Export-oriented production practices",
    body: "Many manufacturers are accustomed to international buyer requirements around sampling, packing, documentation, and shipment readiness.",
  },
  {
    title: "Category breadth for Canadian programs",
    body: "From promotional tees to corporate uniforms and private-label collections, Asian manufacturing can support a wide range of commercial apparel needs when factories are matched correctly.",
  },
  {
    title: "Scale that fits real order bands",
    body: "Capacity exists across a range of volumes. The key is aligning MOQs, lead times, and quality expectations with the right manufacturing partner—not forcing a mismatch.",
  },
];

const realities = [
  "Clear specifications matter more than optimistic pricing.",
  "Sampling rounds take time when revisions are informal or incomplete.",
  "Lead times depend on materials, decoration, approvals, and shipping mode.",
  "Quality improves when approved samples are treated as the production reference.",
  "Logistics and documentation need coordination before cargo is ready—not after.",
];

const capabilityByCategory = [
  {
    title: "Knits and basics",
    body: "T-shirts, polos, fleece, and related jersey programs where fabric consistency, decoration readiness, and reorder discipline matter for Canadian retail and promotional calendars.",
  },
  {
    title: "Wovens and shirts",
    body: "Woven shirts, bottoms, and structured garments that require construction skill, measurement control, and careful size-set management before bulk.",
  },
  {
    title: "Uniforms and workwear",
    body: "Corporate, hospitality, healthcare, school, and industrial apparel where durability, presentation, and repeat sizing across multi-drop deliveries are central.",
  },
  {
    title: "Promotional and decorated apparel",
    body: "Campaign and merchandising programs that need decoration method clarity, packaging standards, and ship-date discipline into Canada.",
  },
  {
    title: "Private-label collections",
    body: "Brand-owned assortments that benefit from retained factory context, approved references, and milestone visibility across seasons.",
  },
  {
    title: "Light outerwear and specialty builds",
    body: "Jackets and specialty constructions where factory matching must reflect technical capability—not only available sewing capacity.",
  },
];

const riskMitigation = [
  {
    risk: "Factory capability mismatch",
    mitigation:
      "Screen for category experience, construction skill, and capacity posture before sampling spend—then keep alternates warm where dependency risk is high.",
  },
  {
    risk: "Incomplete or shifting specifications",
    mitigation:
      "Lock a structured brief early, route changes through written approvals, and treat pre-production samples as the commercial reference before bulk accelerates.",
  },
  {
    risk: "Optimistic timelines",
    mitigation:
      "Build critical paths from materials, decoration, sampling rounds, production, and shipping mode—not from a single generic lead-time promise.",
  },
  {
    risk: "Quality drift in bulk",
    mitigation:
      "Use approved samples as the standard, coordinate inline checks where risk warrants, and plan final inspection before release—not after packing pressure peaks.",
  },
  {
    risk: "Documentation and delivery friction into Canada",
    mitigation:
      "Align Incoterms, freight handoff, and document checklists before cargo is ready; liaison with the appointed customs broker rather than improvising at arrival.",
  },
  {
    risk: "Opaque commercial assumptions",
    mitigation:
      "Coordinate quotations with shared fabric, trim, decoration, packing, and responsibility boundaries so comparisons remain meaningful.",
  },
];

const whenAsiaMayNotFit = [
  {
    title: "Ultra-low quantities with fashion-level complexity",
    body: "Very small runs of highly complex garments may be better served by local sampling shops or specialty makers until volume and specifications stabilize.",
  },
  {
    title: "Programs that require same-week domestic turnaround",
    body: "When delivery into Canada must happen in days rather than planned manufacturing cycles, Asian production is usually the wrong tool—regardless of unit cost.",
  },
  {
    title: "Unclear ownership of product standards",
    body: "If no one can approve fit, materials, or quality criteria, overseas production amplifies ambiguity. Brief clarity should come first.",
  },
  {
    title: "Buyer expectations that conflict with MOQ reality",
    body: "When target volumes sit far below practical factory minimums and no consolidation path exists, forcing a match creates cost and quality tension.",
  },
];

const faqs = [
  {
    question: "Is Asian manufacturing right for every Canadian apparel program?",
    answer:
      "No. Asia is a strong fit for many private-label, uniform, promotional, and basics programs when volumes, timelines, and specifications are realistic. It is a poor fit for ultra-rushed domestic turnarounds, undefined standards, or quantities that cannot meet practical MOQs.",
  },
  {
    question: "How does Avelion choose factories in Asia?",
    answer:
      "We match manufacturers to category capability, capacity, MOQ posture, and commercial clarity—not to a generic directory dump. The output is a disciplined shortlist with recommended next steps for RFQ or sampling.",
  },
  {
    question: "Can Avelion support delivery into Canada after production?",
    answer:
      "Yes. Delivery coordination—freight handoff, shipment documents, and customs-broker liaison—is part of the operating model. Avelion is not a customs broker unless separately licensed; clearance remains with appointed professionals.",
  },
  {
    question: "What information do you need to assess fit?",
    answer:
      "Product category, materials or references, decoration method, quantity bands, quality expectations, destination in Canada, and timing. Incomplete briefs are fine; we help identify what still needs definition.",
  },
  {
    question: "How do you reduce common sourcing risks?",
    answer:
      "Through shared quotation assumptions, written sample approvals, production milestone tracking, inspection planning, and early logistics documentation—so issues surface while options remain open.",
  },
];

export default function SourcingInAsiaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Sourcing in Asia", path: "/sourcing-in-asia" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sourcing in Asia" }]} />
          <SectionHeading
            eyebrow="Sourcing in Asia"
            title="Asian manufacturing capability—best approached with process"
            description="Asia offers meaningful apparel manufacturing capability for Canadian buyers. Bangladesh is our primary manufacturing market within that landscape. Success depends less on finding “a factory” and more on matching capability, clarifying commercial assumptions, and managing approvals through production and delivery into Canada."
          />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h2 className="text-lg font-semibold text-text-primary">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-navy">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Primary market"
            title="Bangladesh: our primary manufacturing market"
            description="Asia is the umbrella. Within that landscape, Bangladesh is where Avelion concentrates factory evaluation, production oversight, and Canada-bound delivery coordination for most apparel programs."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="surface-panel rounded-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary">Why we name it</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Buyers deserve clarity on where manufacturing depth is actually managed—not a vague
                “Asia” claim that hides where work happens day to day.
              </p>
            </div>
            <div className="surface-panel rounded-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary">What stays Asian-wide</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Category capability, export discipline, and process standards apply across Asian
                manufacturing. Bangladesh is the primary market we operate against those standards.
              </p>
            </div>
            <div className="surface-panel rounded-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary">Service-page depth</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Individual service pages go deeper on Bangladesh manufacturer matching, sampling,
                production, quality, compliance, and logistics for Canadian buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Capability by category"
            title="Where Asian manufacturing commonly supports Canadian buyers"
            description="Different apparel categories demand different factory skills. Matching the category—not only the price—is the first risk control."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityByCategory.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Risk and mitigation"
            title="Common failure patterns—and how we address them"
            description="Asian sourcing works when risk is managed deliberately. Below are pairs Canadian buyers encounter most often."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {riskMitigation.map((item) => (
              <div key={item.risk} className="surface-panel rounded-sm p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                  Risk
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{item.risk}</h3>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                  Mitigation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Fit assessment"
            title="When Asia may not be the right path"
            description="Avelion will say so when a brief is a poor match. Honest scoping protects timelines and budgets better than forcing an overseas production route."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whenAsiaMayNotFit.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Practical realities"
              title="Opportunity with clear eyes"
              description="Avelion does not treat Asian sourcing as effortless. We help buyers approach it with the discipline required for reliable outcomes."
            />
            <ul className="mt-8 space-y-3">
              {realities.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <span className="text-silver-primary">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-panel rounded-sm p-6 md:p-8">
            <h2 className="font-display text-2xl text-text-primary">How Avelion helps</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Canadian buyers get a Canada-based point of contact while factory matching, sampling
              follow-through, production tracking, and quality coordination continue with Asian
              manufacturing partners. Delivery into Canada is coordinated with clear documentation
              handoff. The goal is visibility and accountability—not opaque middleman behaviour.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/process"
                className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
              >
                How it works
              </Link>
              <Link
                href="/services/supplier-factory-sourcing"
                className="inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
              >
                Supplier sourcing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="FAQ"
            title="Sourcing in Asia—common questions"
            description="Practical answers for Canadian buyers evaluating Asian apparel manufacturing."
          />
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Considering Asian manufacturing for your next program?"
        description="Share your product category, quantity range, quality expectations, and delivery window into Canada. We will outline whether the opportunity is a practical fit and what the next steps should be."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={siteConfig.primaryCta}
      />
    </>
  );
}
