import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "About Avelion Global",
  description:
    "Avelion Global is a Canada-based apparel sourcing and production-management partner connecting Canadian buyers with qualified Asian manufacturers and coordinating delivery into Canada.",
  path: "/about",
});

const principles = [
  {
    title: "Clarity over improvisation",
    body: "Buyers should know what happens next, what decisions are required, and what assumptions sit behind a quotation or production plan.",
  },
  {
    title: "Canada-based accountability",
    body: "Avelion provides a Canada-based point of contact so communication remains accessible across time zones while manufacturing coordination continues with Asian partners.",
  },
  {
    title: "Qualified factory matching",
    body: "Supplier selection should reflect category capability, capacity, quality expectations, and commercial reality—not a single opportunistic introduction.",
  },
  {
    title: "Documented checkpoints",
    body: "Sampling approvals, production milestones, quality reviews, and shipment readiness work better when records are visible and shared.",
  },
];

const whoWeServe = [
  "Apparel brands and private-label programs",
  "Retailers and wholesalers",
  "Uniform suppliers",
  "Promotional-product distributors",
  "Hospitality, healthcare, education, and industrial buyers",
];

const operatingModelDeep = [
  {
    title: "Canada — commercial ownership",
    body: "Requirements intake, quotation context, approval routing, escalation ownership, and buyer communication sit with a Canada-based contact. Eastern Time business hours keep program decisions accessible for Canadian teams.",
  },
  {
    title: "Asia — manufacturing execution",
    body: "Factory matching, sampling follow-through, production milestone tracking, and quality coordination continue with Asian manufacturing partners selected for category fit—not convenience introductions.",
  },
  {
    title: "Delivery into Canada — handoff discipline",
    body: "Freight-forwarder handoff, shipment document coordination, and customs-broker liaison are planned before cargo is ready. Clearance and final carriage remain with appointed professionals under agreed Incoterms.",
  },
  {
    title: "Program continuity",
    body: "Approved references, retained factory context, and documented packing standards make reorders cleaner. Long-term supplier management is part of the model—not a reset every season.",
  },
];

const whoWeAre = [
  "A Canada-based apparel sourcing and production-management partner",
  "A structured coordinator across requirements, sampling, production, quality, and delivery support",
  "A commercial contact that keeps assumptions, milestones, and documents visible",
];

const whoWeAreNot = [
  "Not a factory or garment manufacturer ourselves",
  "Not a customs broker (unless separately licensed)",
  "Not a testing laboratory or certification body",
  "Not a substitute for legal counsel or regulatory authorities",
  "Not an informal middleman that disappears after an introduction",
];

const faqs = [
  {
    question: "Where is Avelion based?",
    answer:
      "Avelion Global Inc. is Canada-based. We provide Canadian buyers with a domestic commercial contact while coordinating Asian manufacturing and delivery into Canada.",
  },
  {
    question: "Do you own factories in Asia?",
    answer:
      "No. We match and manage programs with qualified manufacturing partners. That model lets us align factory capability to each category and keep alternate paths available when risk warrants it.",
  },
  {
    question: "Who should work with Avelion?",
    answer:
      "Canadian brands, retailers, wholesalers, uniform suppliers, promotional-product companies, and institutional buyers who need structured Asian apparel manufacturing coordination—not a one-off supplier tip.",
  },
  {
    question: "How do engagements typically start?",
    answer:
      "With a brief: product category, quantities, quality expectations, timing, and destination in Canada. Incomplete briefs are welcome; we help identify gaps before sampling or production spend.",
  },
  {
    question: "What does success look like with Avelion?",
    answer:
      "Clear decisions at each stage, quotations with shared assumptions, approved samples before bulk, milestone visibility during production, and delivery coordination into Canada without last-minute document surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <SectionHeading
            eyebrow="About"
            title="A Canada-based partner for Asian apparel manufacturing"
            description="Avelion Global Inc. helps Canadian businesses source and manufacture apparel through qualified Asian factories, structured production management, quality checkpoints, and coordinated delivery into Canada."
          />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-text-primary">What we do</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Avelion is a sourcing and production-management company. We connect Canadian buyers
                with relevant Asian manufacturing capacity and help keep the commercial, sampling,
                production, quality, and logistics sequence organized from requirements through
                delivery into Canada.
              </p>
              <p>
                Our work focuses on private-label apparel, corporate and institutional uniforms,
                promotional apparel, basics, knit and woven categories, workwear, and related
                textile programs where clear specifications and follow-through matter.
              </p>
              <p>
                We are not a factory, a customs broker, a testing laboratory, or a substitute for
                legal counsel. Where those roles are required, Avelion coordinates with the
                appropriate partners and professionals.
              </p>
            </div>
          </div>
          <aside className="surface-panel rounded-sm p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-silver-primary uppercase">
              Operating model
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
              <li>
                <span className="font-medium text-text-primary">Canada:</span> buyer communication,
                commercial coordination, and program accountability.
              </li>
              <li>
                <span className="font-medium text-text-primary">Asia:</span> factory matching,
                sampling follow-through, production tracking, and quality coordination.
              </li>
              <li>
                <span className="font-medium text-text-primary">Delivery into Canada:</span> freight
                handoff, document preparation support, and customs-broker liaison.
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-secondary">{siteConfig.address.display}</p>
          </aside>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Operating model in depth"
            title="How accountability is split across the program"
            description="Avelion’s model is designed so Canadian buyers always know who owns communication, who executes manufacturing, and how delivery into Canada is coordinated."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {operatingModelDeep.map((item) => (
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
            eyebrow="Positioning"
            title="Who we are—and who we are not"
            description="Clear boundaries protect buyers. Here is how we describe Avelion without overclaiming."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="surface-panel rounded-sm p-6 md:p-8">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                Who we are
              </h3>
              <ul className="mt-5 space-y-3">
                {whoWeAre.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                    <span className="text-silver-primary">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-panel rounded-sm p-6 md:p-8">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                Who we are not
              </h3>
              <ul className="mt-5 space-y-3">
                {whoWeAreNot.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                    <span className="text-silver-primary">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="How we work"
            title="Principles that guide every program"
            description="Avelion is built for buyers who need visibility and disciplined process—not informal introductions without follow-through."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
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
              eyebrow="Buyers we support"
              title="Built for organizations that manufacture with intention"
              description="We work with Canadian companies that need reliable apparel manufacturing coordination rather than one-off, opaque introductions."
            />
            <ul className="mt-8 space-y-3">
              {whoWeServe.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <span className="text-silver-primary">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/industries"
              className="mt-8 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
            >
              Explore industries we serve →
            </Link>
          </div>
          <div className="surface-panel rounded-sm p-6 md:p-8">
            <h2 className="font-display text-2xl text-text-primary">What buyers can expect</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
              <li>A structured path from requirements to sampling, production, and delivery support.</li>
              <li>Transparent commercial assumptions whenever quotations are coordinated.</li>
              <li>Milestone communication during production rather than vague status updates.</li>
              <li>Quality and compliance coordination without overstating certifications or guarantees.</li>
              <li>Practical next steps when a brief is incomplete or a timeline is unrealistic.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/process"
                className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
              >
                How it works
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="FAQ"
            title="About Avelion—common questions"
            description="Straight answers on where we operate, how we work with factories, and who we serve."
          />
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to discuss a sourcing program?"
        description="Share your product category, quantity range, quality expectations, and delivery window into Canada. We will outline practical next steps."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Contact Avelion", href: "/contact" }}
      />
    </>
  );
}
