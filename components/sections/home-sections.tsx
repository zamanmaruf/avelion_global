import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  IndustryCard,
  ProcessTimeline,
  ProductCard,
  QualitySteps,
  ServiceCard,
} from "@/components/cards";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section";
import { JsonLd, faqJsonLd } from "@/lib/seo/metadata";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle">
      <Image
        src="/images/hero-section-bg-rack.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_70%]"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background-primary via-background-primary/90 to-background-primary/55"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background-primary/25"
      />
      <div className="container-avelion relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-[fade-up_0.7s_ease-out_both]">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
            Avelion Global Inc.
          </p>
          <h1 className="font-display max-w-3xl text-4xl leading-tight text-text-primary md:text-5xl lg:text-6xl">
            Reliable Apparel Sourcing. Managed for Canadian Buyers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Avelion helps Canadian buyers evaluate, develop, and manage apparel manufacturing in
            Asia—led by Bangladesh—with one Canada-based point of contact from first brief through
            coordinated delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={siteConfig.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-sm bg-silver-light px-6 text-sm font-medium text-background-primary hover:bg-silver-primary"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-sm border border-border-subtle bg-background-primary/40 px-6 text-sm font-medium text-text-primary backdrop-blur-sm hover:bg-surface-secondary"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative animate-[fade-in_0.8s_ease-out_both]">
          <div className="surface-panel relative overflow-hidden rounded-sm">
            <Image
              src="/images/hero-inset-rack.png"
              alt="Premium coats and tailored garments on a rack, representing apparel manufacturing quality and finish"
              width={1600}
              height={1200}
              className="h-[320px] w-full object-cover object-right md:h-[420px]"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-primary/90 to-transparent p-6">
              <Image
                src="/brand/avelion-logo.png"
                alt=""
                width={96}
                height={72}
                className="h-14 w-auto opacity-90"
              />
              <p className="mt-3 max-w-sm text-sm text-text-secondary">
                Asian manufacturing led by Bangladesh, with Canada-based oversight and delivery
                coordination into Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    {
      label: "Canada-based commercial contact",
      detail: "Buyer communication and program accountability in Eastern Time business hours",
    },
    {
      label: "Asian manufacturing led by Bangladesh",
      detail: "Factory matching, sampling follow-through, and production milestone tracking",
    },
    {
      label: "Documented quality checkpoints",
      detail: "Sample approvals, inline reviews, and final inspection planning before release",
    },
    {
      label: "Delivery into Canada",
      detail: "Freight handoff, shipment documents, and customs-broker liaison support",
    },
  ];
  return (
    <section className="section-light border-b border-border-light">
      <div className="container-avelion grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="grid grid-cols-[auto_1fr] gap-x-2">
            <span className="text-sm text-silver-primary" aria-hidden="true">
              ▸
            </span>
            <p className="text-sm font-medium text-text-primary">{item.label}</p>
            <span aria-hidden="true" />
            <p className="mt-2 text-xs leading-relaxed text-text-secondary">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Services"
          title="Structured support across the sourcing lifecycle"
          description="From supplier identification to delivery into Canada, Avelion provides a clear operating process for Canadian buyers manufacturing with Asian partners."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCategories() {
  const featured = siteConfig.products.filter((p) =>
    [
      "corporate-uniforms",
      "promotional-apparel",
      "private-label-basics",
      "t-shirts",
      "polo-shirts",
      "hoodies",
      "sweatshirts",
      "workwear",
      "knitwear",
      "woven-shirts",
    ].includes(p.slug),
  );

  return (
    <section className="section-pad section-light">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Products"
          title="Apparel categories we commonly support"
          description="Private-label, uniforms, promotional apparel, basics, and workwear programs coordinated through qualified manufacturing partners."
        />
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {featured.slice(0, 8).map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              description={product.description}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/products" className="text-sm font-medium text-silver-primary hover:text-silver-light">
            View all product categories →
          </Link>
        </div>
      </div>
    </section>
  );
}

const processBuyerContext = [
  {
    step: 1,
    buyerDecisionContext:
      "Decide whether the brief is complete enough to quote, or whether materials, decoration, or delivery assumptions still need definition.",
  },
  {
    step: 2,
    buyerDecisionContext:
      "Choose which factories warrant sampling investment based on capability, MOQ fit, and capacity—not price alone.",
  },
  {
    step: 3,
    buyerDecisionContext:
      "Compare quotations with shared assumptions so fabric, trim, decoration, and responsibility boundaries stay visible.",
  },
  {
    step: 4,
    buyerDecisionContext:
      "Approve fit, size-set, and pre-production samples as the commercial and quality reference before bulk begins.",
  },
  {
    step: 5,
    buyerDecisionContext:
      "Confirm production readiness, material call-ins, and milestone dates so delays can be escalated while options remain open.",
  },
  {
    step: 6,
    buyerDecisionContext:
      "Review inspection findings and decide release, rework, or hold before goods leave the factory floor.",
  },
  {
    step: 7,
    buyerDecisionContext:
      "Align Incoterms, freight mode, and document readiness so cargo does not sit waiting on incomplete paperwork.",
  },
  {
    step: 8,
    buyerDecisionContext:
      "Coordinate with your customs broker and consignee so clearance and final delivery into Canada proceed without last-minute surprises.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from requirements to delivery support"
          description="Each program follows a documented sequence so buyers know what happens next and what decisions are required."
        />
        <div className="mt-10">
          <ProcessTimeline steps={siteConfig.processSteps} />
        </div>
        <div className="mt-8">
          <Link href="/process" className="text-sm font-medium text-silver-primary hover:text-silver-light">
            See the full process →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeProcessDetail() {
  return (
    <section className="section-pad section-light">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Buyer decisions"
          title="What you decide at each step"
          description="Process only helps when commercial choices are explicit. Below is the decision context that typically sits under each stage of an Avelion program."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.processSteps.map((step) => {
            const context = processBuyerContext.find((item) => item.step === step.step);
            return (
              <li key={step.step} className="surface-panel rounded-sm p-5">
                <span className="text-xs tracking-[0.16em] text-silver-dark uppercase">
                  Step {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {context?.buyerDecisionContext}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function WhyAvelion() {
  const items = [
    {
      title: "One Canada-based point of contact",
      body: "You work with a single commercial contact in Canada for requirements, approvals, and escalations—while manufacturing coordination continues with Asian partners across time zones.",
    },
    {
      title: "Access to qualified Asian manufacturers",
      body: "We match factories to category capability, MOQ reality, and capacity posture rather than forwarding generic supplier lists or opportunistic introductions.",
    },
    {
      title: "Production milestone visibility",
      body: "Materials, cutting, sewing, finishing, packing, and inspection readiness are tracked as milestones—so issues surface early enough to act, not after shipment pressure builds.",
    },
    {
      title: "Quality-control checkpoints",
      body: "Sample approvals, inline reviews, and final inspection planning are treated as decision gates, not informal visual checks after bulk is already committed.",
    },
    {
      title: "Delivery coordination into Canada",
      body: "Freight handoff, shipment documents, and customs-broker liaison are planned before cargo is ready, so delivery into Canada is not an afterthought bolted onto production.",
    },
  ];
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Why Avelion"
          title="A clearer way to evaluate overseas manufacturing"
          description="You do not need every answer before speaking with us. Avelion helps clarify fit, surface risks, and define sensible next steps before sampling or production commitments."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="surface-panel rounded-sm px-4 py-5">
              <h3 className="text-sm font-semibold text-text-primary">
                <span className="text-silver-primary">• </span>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const programTypes = [
  {
    title: "Private-label basics",
    body: "Core tees, polos, fleece, and related basics developed under your brand with structured sampling, size-set discipline, and reorder-ready production references.",
  },
  {
    title: "Uniform and workforce rollouts",
    body: "Corporate, hospitality, healthcare, school, and industrial apparel programs where consistency, durability, and repeat sizing matter across multiple delivery windows.",
  },
  {
    title: "Promotional and campaign apparel",
    body: "Decorated apparel for events, merchandising, and brand campaigns—coordinated so decoration, packaging, and ship dates align with launch timing into Canada.",
  },
  {
    title: "Knit and woven assortments",
    body: "Category programs spanning knitwear, woven shirts, bottoms, and light outerwear where factory matching must reflect construction skill—not just available capacity.",
  },
  {
    title: "Workwear and field apparel",
    body: "Durable garments for industrial and field teams, with attention to fabric performance, construction standards, and practical packaging for Canadian distribution.",
  },
  {
    title: "Seasonal reorder programs",
    body: "Ongoing replenishment where approved samples, retained factory context, and milestone visibility reduce the friction of restarting commercial conversations each season.",
  },
];

export function HomeProgramTypes() {
  return (
    <section className="section-pad section-light">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Program types"
          title="The kinds of apparel programs we support"
          description="Avelion works across anonymized program shapes—not named client logos. If your brief resembles one of these patterns, we can usually outline a practical path quickly."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programTypes.map((item) => (
            <div key={item.title} className="surface-panel rounded-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityComplianceTeaser() {
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Quality & compliance"
          title="Checkpoints that reduce ambiguity"
          description="Avelion coordinates screening, sample approvals, inspections, packaging verification, and documentation collection. We do not claim that every supplier holds every certification, and we do not replace legal or laboratory authorities."
        />
        <div className="mt-10">
          <QualitySteps
            items={[
              {
                title: "Supplier screening",
                description: "Review capability, capacity, and documentation posture before commitment.",
              },
              {
                title: "Sample approvals",
                description: "Keep fit, size-set, and pre-production approvals as the production reference.",
              },
              {
                title: "Inline and final checks",
                description: "Coordinate inspection points aligned to program risk and buyer standards.",
              },
              {
                title: "Packaging and labels",
                description: "Verify presentation, care labels, and carton instructions before release.",
              },
              {
                title: "Traceability expectations",
                description: "Support style, lot, and shipment references for post-delivery review.",
              },
              {
                title: "Subcontracting disclosure",
                description: "Seek clarity on where production is performed when buyers require it.",
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <Link
            href="/quality-compliance"
            className="text-sm font-medium text-silver-primary hover:text-silver-light"
          >
            Read quality & compliance approach →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SourcingInAsiaTeaser() {
  return (
    <section className="section-pad section-light">
      <div className="container-avelion grid gap-8 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Sourcing in Asia"
          title="A deep apparel-manufacturing landscape"
          description="Asia has extensive experience across knitwear, woven garments, uniforms, basics, and private-label manufacturing. Bangladesh is our primary manufacturing market within that landscape. Avelion helps Canadian buyers navigate it with structured processes—and coordinated delivery into Canada—rather than informal introductions."
        />
        <div className="surface-panel rounded-sm p-6 md:p-8">
          <ul className="space-y-4 text-sm leading-relaxed text-text-secondary">
            <li>Strong manufacturing capability across multiple apparel categories in Asia.</li>
            <li>Bangladesh named as Avelion’s primary market for factory depth and export programs.</li>
            <li>Suitable for private-label, uniform, promotional, and basics programs when matched correctly.</li>
            <li>Success depends on clear specifications, realistic timelines, and disciplined follow-through.</li>
          </ul>
          <Link
            href="/sourcing-in-asia"
            className="mt-6 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
          >
            Why buyers source in Asia →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustriesServed() {
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the buyers we actually serve"
          description="From apparel brands to institutional procurement teams, Avelion supports organizations that need reliable Asian manufacturing coordination and delivery into Canada."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              title={industry.shortTitle}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const homeFaqs = [
  {
    question: "What is a typical minimum order quantity (MOQ)?",
    answer:
      "MOQs vary by factory, fabric, decoration method, and colour or size complexity. Many apparel programs fall in practical production bands rather than a single fixed number. Avelion helps you understand MOQ reality early—before sampling spend—so volume expectations and factory fit stay aligned.",
  },
  {
    question: "What is Avelion—and what is it not?",
    answer:
      "Avelion Global is a Canada-based apparel sourcing and production-management partner. We coordinate factory matching, sampling, production milestones, quality checkpoints, documentation, and delivery support into Canada. We are not a factory, a customs broker, a testing laboratory, or a substitute for legal counsel.",
  },
  {
    question: "Who handles customs clearance into Canada?",
    answer:
      "Unless separately licensed, Avelion is not a customs broker. We coordinate shipment documents and liaison with your appointed broker and freight partners under the agreed commercial terms. Duties, clearance decisions, and brokerage remain with the appropriate licensed professionals and authorities.",
  },
  {
    question: "How long does a typical program take?",
    answer:
      "Timelines depend on brief clarity, materials, decoration, sampling rounds, production capacity, and shipping mode. A simple reorder with approved references moves faster than a new development with multiple fit revisions. We outline a realistic critical path once requirements and assumptions are clear—rather than promising a generic lead time.",
  },
  {
    question: "Why source apparel manufacturing in Asia?",
    answer:
      "Asia offers deep category experience, export-oriented production practices, and capacity across private-label, uniform, promotional, and basics programs. Outcomes improve when factories are matched correctly and when sampling, quality, and logistics are managed with discipline—not when sourcing is treated as a single introduction.",
  },
  {
    question: "How does delivery into Canada work with Avelion?",
    answer:
      "We coordinate freight-forwarder handoff, commercial and packing documents, and customs-broker liaison so delivery into Canada is planned before cargo is ready. Final carriage, clearance, and consignee receipt follow the Incoterms and partners appointed for your program.",
  },
];

export function HomeFaq() {
  return (
    <section className="section-pad section-light">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <div className="container-avelion">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Canadian buyers ask early"
          description="Straight answers on MOQs, what Avelion does and does not do, customs, timelines, Asian sourcing, and delivery into Canada."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
