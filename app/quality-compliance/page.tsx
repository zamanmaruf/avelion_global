import { QualitySteps } from "@/components/cards";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { createMetadata, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Quality Control & Compliance Coordination",
  description:
    "How Avelion coordinates apparel quality checkpoints, sample approvals, inspections, packaging verification, and compliance documentation for Canadian buyers.",
  path: "/quality-compliance",
});

const qualityItems = [
  {
    title: "Supplier screening",
    description:
      "Review category capability, capacity posture, and available documentation before a program is committed.",
  },
  {
    title: "Sample approval discipline",
    description:
      "Keep fit, size-set, and pre-production approvals as the reference for bulk production decisions.",
  },
  {
    title: "Inline inspection coordination",
    description:
      "Where risk warrants earlier review, coordinate mid-process checks before problems become shipment-level issues.",
  },
  {
    title: "Measurement and workmanship review",
    description:
      "Compare sizing and construction against approved standards rather than informal visual judgment alone.",
  },
  {
    title: "Final inspection planning",
    description:
      "Coordinate final random inspection timing and reporting so buyers can decide on release, rework, or hold.",
  },
  {
    title: "Packaging and labelling checks",
    description:
      "Verify folding, polybags, care labels, hangtags, and carton presentation against agreed instructions.",
  },
];

const complianceItems = [
  {
    title: "Factory-document collection",
    description: "Request and organize factory profiles and process documents required by the buyer.",
  },
  {
    title: "Audit-document support",
    description:
      "Help buyers receive available audit materials without implying Avelion certifies factories.",
  },
  {
    title: "Testing-document coordination",
    description: "Collect laboratory reports when a program requires testing evidence for review.",
  },
  {
    title: "Origin and shipment documents",
    description: "Support collection of origin-related and commercial documents needed for shipment workflows.",
  },
  {
    title: "Subcontracting disclosure",
    description: "Seek clarity on production locations when buyers require transparency.",
  },
  {
    title: "Traceability references",
    description: "Help structure style, lot, and shipment references for post-delivery review.",
  },
];

const documentationMatrix = [
  {
    document: "Factory profile / capability summary",
    purpose: "Establish category fit, capacity posture, and commercial context before commitment.",
    typicalOwner: "Factory / Avelion coordination",
  },
  {
    document: "Available audit or social-compliance materials",
    purpose: "Support buyer review of factory documentation posture—without Avelion certifying the facility.",
    typicalOwner: "Factory / third-party auditor (where applicable)",
  },
  {
    document: "Lab or testing reports",
    purpose: "Provide evidence against buyer-specified material or product tests when required.",
    typicalOwner: "Laboratory / buyer-specified testing partner",
  },
  {
    document: "Sample approval records",
    purpose: "Create the enforceable quality and commercial reference for bulk production.",
    typicalOwner: "Buyer sign-off / Avelion coordination",
  },
  {
    document: "Inspection reports",
    purpose: "Document measurement, workmanship, and packaging findings for release decisions.",
    typicalOwner: "Inspection partner / Avelion coordination",
  },
  {
    document: "Packing list and commercial invoice",
    purpose: "Support freight, brokerage, and receiving workflows into Canada.",
    typicalOwner: "Factory / shipper / Avelion coordination",
  },
  {
    document: "Origin-related documents (as required)",
    purpose: "Support shipment and buyer documentation needs under agreed commercial terms.",
    typicalOwner: "Factory / shipper / broker review",
  },
  {
    document: "Style, lot, and shipment references",
    purpose: "Enable post-delivery review and reorder continuity.",
    typicalOwner: "Avelion coordination / buyer records",
  },
];

const checkpointNarrative = [
  {
    title: "Before commitment",
    body: "Screening asks whether the factory can make this product at this quality posture and volume—not merely whether a quotation looks attractive. Documentation posture is reviewed early so later compliance requests are not a surprise bolted onto production.",
  },
  {
    title: "Before bulk",
    body: "Fit, size-set, and pre-production approvals become the reference. Written comments matter more than verbal comfort. If the reference is incomplete, bulk will amplify the gap across every carton destined for Canada.",
  },
  {
    title: "During production",
    body: "Inline checks are used where risk warrants earlier visibility—fabric issues, construction drift, decoration problems—so corrective action is still possible. Milestone communication keeps quality tied to the critical path, not to a final scramble.",
  },
  {
    title: "Before release",
    body: "Final inspection planning and packaging verification give buyers a clear decision: release, rework, or hold. Shipping under unresolved findings is a commercial choice that should be made consciously, not by default.",
  },
  {
    title: "After shipment",
    body: "Traceability references—style, lot, shipment—support post-delivery review and cleaner reorders. Quality discipline does not end when the container leaves; it informs how the next program starts.",
  },
];

const faqs = [
  {
    question: "Does Avelion certify factories or guarantee compliance outcomes?",
    answer:
      "No. Avelion coordinates quality checkpoints and documentation collection. We do not certify factories, issue legal opinions, or guarantee that a supplier will satisfy every future audit or regulatory requirement. Final determinations remain with buyers, laboratories, counsel, and authorities.",
  },
  {
    question: "What quality checkpoints do you typically coordinate?",
    answer:
      "Supplier screening, sample approvals, inline reviews where risk warrants, measurement and workmanship checks, final inspection planning, and packaging or labelling verification against agreed instructions.",
  },
  {
    question: "Who decides whether goods can ship after inspection?",
    answer:
      "The buyer decides—release, rework, or hold—based on findings against approved standards. Avelion coordinates reporting and context so that decision is informed rather than improvised under shipping pressure.",
  },
  {
    question: "Can you collect testing and audit documents?",
    answer:
      "Yes, where factories or laboratories can provide them. We organize materials for buyer review. Availability varies by supplier and program; we do not invent certificates that do not exist.",
  },
  {
    question: "How does quality work connect to delivery into Canada?",
    answer:
      "Inspection and packaging verification should complete before freight handoff. Document readiness—commercial, packing, and any origin-related materials—supports broker liaison and reduces arrival friction into Canada.",
  },
];

export default function QualityCompliancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Quality & Compliance", path: "/quality-compliance" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Quality & Compliance" }]}
          />
          <SectionHeading
            eyebrow="Quality & compliance"
            title="Checkpoints that reduce ambiguity—without overstating guarantees"
            description="Avelion coordinates quality-control activities and documentation collection. We do not claim that every supplier holds every certification, and we do not replace legal counsel, laboratories, customs brokers, or regulatory authorities."
          />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Quality"
            title="A practical quality sequence"
            description="Quality outcomes improve when approval records, inspection points, and packaging standards are defined before bulk production accelerates."
          />
          <div className="mt-10">
            <QualitySteps items={qualityItems} />
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Checkpoint narrative"
            title="How quality decisions unfold across the program"
            description="Each stage has a job. Skipping early discipline rarely gets cheaper later—it usually becomes a release-or-rework dilemma under freight pressure."
          />
          <div className="mt-10 space-y-4">
            {checkpointNarrative.map((item, index) => (
              <div key={item.title} className="surface-panel rounded-sm p-6 md:p-8">
                <span className="text-xs tracking-[0.16em] text-silver-dark uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Documentation matrix"
            title="What documents commonly support buyer review"
            description="Requirements vary by buyer, product, and destination. This matrix describes typical artifacts Avelion helps coordinate—not a guarantee that every program requires every item."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="py-3 pr-4 font-semibold text-text-primary">Document</th>
                  <th className="py-3 pr-4 font-semibold text-text-primary">Purpose</th>
                  <th className="py-3 font-semibold text-text-primary">Typical owner</th>
                </tr>
              </thead>
              <tbody>
                {documentationMatrix.map((row) => (
                  <tr key={row.document} className="border-b border-border-subtle/70 align-top">
                    <td className="py-4 pr-4 font-medium text-text-primary">{row.document}</td>
                    <td className="py-4 pr-4 text-text-secondary">{row.purpose}</td>
                    <td className="py-4 text-text-secondary">{row.typicalOwner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Compliance coordination"
            title="Documentation support for buyer review"
            description="Compliance requirements vary by buyer, product, and destination. Avelion helps gather and organize requested documents; final determinations remain with the appropriate professionals and authorities."
          />
          <div className="mt-10">
            <QualitySteps items={complianceItems} />
          </div>
          <p className="mt-8 max-w-3xl border-l border-silver-dark/40 pl-4 text-sm leading-relaxed text-silver-dark">
            Important: Avelion does not certify factories, issue legal opinions, or guarantee that a
            supplier will satisfy every future audit or regulatory requirement. We coordinate
            process and documentation so buyers can review evidence with clearer context.
          </p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="FAQ"
            title="Quality and compliance—common questions"
            description="Clear boundaries and practical answers for Canadian buyers evaluating inspection and documentation support."
          />
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Need quality or documentation support on an active program?"
        description="Share your product category, inspection expectations, and any buyer-specific checklists. We will outline a practical coordination approach."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
