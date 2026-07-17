import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { createMetadata, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Apparel Logistics & Delivery Coordination",
  description:
    "Incoterms primer, Canada delivery scenarios, and document checklists for Canadian apparel buyers manufacturing in Asia—led by Bangladesh. Full service detail on Logistics and Delivery Coordination.",
  path: "/logistics",
});

const incotermsPrimer = [
  {
    term: "EXW",
    body: "Buyer arranges pickup from the factory or nominated place. Factory cost is often lowest on paper; logistics responsibility and risk transfer earlier to the buyer side.",
  },
  {
    term: "FOB",
    body: "Seller delivers goods on board the vessel at the named port. Common for ocean apparel programs; buyer typically controls main carriage and insurance beyond that point.",
  },
  {
    term: "CIF / CFR",
    body: "Seller arranges main carriage (and insurance under CIF) to a named destination port. Buyers still need clarity on who handles destination charges, brokerage, and inland delivery into Canada.",
  },
  {
    term: "DDP / DAP",
    body: "Seller-side responsibility extends further toward the destination. These terms require careful definition of duties, taxes, brokerage, and what “delivered” means for Canadian consignees.",
  },
];

const canadaScenarios = [
  {
    title: "Ocean container to a Canadian port, then inland",
    body: "Typical for larger apparel programs. Coordination focuses on packing readiness, commercial documents, forwarder handoff, and broker engagement before vessel departure—then inland delivery to warehouse or DC.",
  },
  {
    title: "Air freight for time-sensitive drops",
    body: "Used when launch dates or uniform rollouts cannot wait for ocean transit. Document accuracy and carton discipline matter even more because cycle times leave less room to correct paperwork mid-flight.",
  },
  {
    title: "Split shipments across multiple Canadian destinations",
    body: "Uniform or retail programs sometimes need multi-drop delivery. Carton marking, packing lists, and consignee instructions must be locked early to avoid receiving confusion.",
  },
  {
    title: "Reorder replenishment on retained references",
    body: "Repeat programs move cleaner when packing standards, broker contacts, and document templates are already established from the prior season.",
  },
];

const documentChecklist = [
  "Commercial invoice aligned to agreed values, styles, and quantities",
  "Packing list with carton counts, weights, and style/size breakdowns where required",
  "Bill of lading or air waybill coordination with the appointed forwarder",
  "Carton marks and shipping marks matching consignee instructions",
  "Origin-related documents when required for the program or destination workflow",
  "Buyer and broker contact details for liaison before cargo is in transit",
  "Any packing photos or verification notes agreed as a pre-release control",
  "Delivery appointment or warehouse receiving requirements for the Canadian consignee",
];

const faqs = [
  {
    question: "Is Avelion a customs broker?",
    answer:
      "Unless separately licensed, Avelion is not a customs broker and does not provide customs brokerage services. We coordinate documents and liaison with your appointed broker. Duties, clearance, and brokerage remain with licensed professionals and authorities.",
  },
  {
    question: "When should logistics planning start?",
    answer:
      "Before cargo is production-ready. Incoterms, freight mode, document checklists, and broker contacts should be aligned during production—not after goods are packed and waiting.",
  },
  {
    question: "Which Incoterms do Canadian apparel buyers commonly use?",
    answer:
      "FOB and related ocean terms are common, but the right choice depends on who should control freight, insurance, and destination charges. We help clarify assumptions; we do not replace freight or legal advice on term selection.",
  },
  {
    question: "Where is the full logistics service description?",
    answer:
      "The canonical service page is Logistics and Delivery Coordination under Services. This primer focuses on Incoterms context, Canada delivery scenarios, and document checklists that support that offering.",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Logistics", path: "/logistics" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="relative overflow-hidden border-b border-border-subtle">
        <Image
          src="/images/logistics-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background-primary via-background-primary/92 to-background-primary/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-background-primary/35"
        />
        <div className="container-avelion relative section-pad">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Logistics" }]} />
          <SectionHeading
            eyebrow="Logistics primer"
            title="Incoterms, Canada delivery paths, and document readiness"
            description="A practical primer for Canadian apparel buyers planning delivery into Canada from Asian manufacturing—led by Bangladesh. For the full service scope, process, and responsibility matrix, use the logistics service page."
          />
          <div className="mt-8">
            <Link
              href="/services/logistics-delivery"
              className="inline-flex h-12 min-h-11 items-center rounded-sm bg-silver-light px-6 text-sm font-medium text-background-primary hover:bg-silver-primary"
            >
              Open Logistics and Delivery Coordination →
            </Link>
          </div>
          <p className="mt-6 max-w-3xl border-l border-silver-dark/40 pl-4 text-sm leading-relaxed text-silver-dark">
            Unless separately licensed, Avelion is not a customs broker and does not provide customs
            brokerage services. Freight, duties, clearance, and final delivery remain with appointed
            carriers, brokers, and consignees under agreed commercial terms.
          </p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Incoterms primer"
            title="Clarify responsibility before freight is booked"
            description="Incoterms define who arranges carriage, where risk transfers, and which costs sit with which party. Ambiguity here becomes expensive mid-shipment. This primer is educational—not legal advice."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {incotermsPrimer.map((item) => (
              <div key={item.term} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.term}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-silver-dark">
            Always confirm the exact named place or port, destination charges, insurance expectations,
            and who appoints the forwarder and broker. Avelion helps surface these assumptions early
            so Canadian delivery planning is grounded.
          </p>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Canada delivery scenarios"
            title="How programs commonly arrive into Canada"
            description="The right logistics path depends on volume, timing, and receiving complexity—not a single default mode."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {canadaScenarios.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Document checklist"
              title="What should be ready before cargo moves"
              description="Incomplete paperwork is one of the most common reasons production-ready goods stall. Use this as a coordination checklist—not an exhaustive legal or brokerage requirement list."
            />
            <ul className="mt-8 space-y-3">
              {documentChecklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <span className="text-silver-primary" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-panel rounded-sm p-6 md:p-8">
            <h2 className="text-lg font-semibold text-text-primary">Full service detail</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Scope, shipment journey, shipping methods, responsibility matrix, and exception
              management live on the logistics service page—not duplicated here.
            </p>
            <Link
              href="/services/logistics-delivery"
              className="mt-6 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
            >
              Logistics and Delivery Coordination →
            </Link>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <Link href="/process" className="text-silver-primary hover:text-silver-light">
                  Full sourcing process →
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-compliance"
                  className="text-silver-primary hover:text-silver-light"
                >
                  Quality & compliance →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="FAQ"
            title="Logistics primer—common questions"
            description="Practical answers on brokerage boundaries, timing, Incoterms, and where to find the full service page."
          />
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Need delivery coordination on an apparel program?"
        description="Share destination, preferred shipping mode, Incoterms assumptions, and timing requirements. We will outline how coordination fits your program."
        primary={{ label: "Request a Quote", href: "/request-a-quote?service=logistics-delivery" }}
        secondary={{ label: "View logistics service", href: "/services/logistics-delivery" }}
      />
    </>
  );
}
