import { ProcessTimeline } from "@/components/cards";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "How Apparel Sourcing Works",
  description:
    "Avelion’s eight-step apparel sourcing process—from requirements and supplier matching through sampling, production, quality control, and delivery support.",
  path: "/process",
});

const stepDetails = [
  {
    step: 1,
    purpose:
      "Establish a shared commercial and technical brief so factory outreach, costing, and sampling start from the same facts—not from incomplete assumptions that resurface later as delays or disputes.",
    buyerDecisions: [
      "Confirm product type, materials direction, decoration method, and packaging expectations.",
      "Set quantity bands, quality posture, labelling needs, and delivery windows into Canada.",
      "Decide whether the brief is ready to quote or needs further definition before supplier engagement.",
    ],
    artifacts: [
      "Requirements summary or structured sourcing brief",
      "Reference samples, tech packs, drawings, or photo packs where available",
      "Initial risk notes on MOQ, timeline, and specification gaps",
    ],
    failureModes: [
      "Vague briefs produce mismatched quotations and wasted sampling rounds.",
      "Hidden decoration or packaging assumptions inflate landed cost after commitment.",
      "Unrealistic delivery windows force shortcuts that quality cannot recover.",
    ],
  },
  {
    step: 2,
    purpose:
      "Identify Asian manufacturers whose category capability, capacity, and commercial posture fit the program—so sampling investment goes to factories that can actually produce what you need.",
    buyerDecisions: [
      "Approve the shortlist criteria: category fit, MOQ range, capacity, and documentation posture.",
      "Select which factories proceed to RFQ or sampling versus remaining as alternates.",
      "Decline mismatches early rather than forcing a factory into the wrong product type.",
    ],
    artifacts: [
      "Factory profile summaries and capability notes",
      "Shortlist comparison with recommended next steps",
      "Alternate supplier options where available",
    ],
    failureModes: [
      "Price-first matching ignores construction skill and capacity reality.",
      "Single-factory dependency leaves no path when schedules slip.",
      "Informal introductions without screening create late-stage capability surprises.",
    ],
  },
  {
    step: 3,
    purpose:
      "Coordinate quotations with transparent commercial assumptions so buyers can compare options meaningfully—fabric, trim, decoration, sampling, and responsibility boundaries included.",
    buyerDecisions: [
      "Confirm which cost assumptions are fixed versus still open (fabric, trim, decoration, packing).",
      "Choose which quotation path warrants sampling spend.",
      "Clarify Incoterms direction and what is in or out of the factory quote.",
    ],
    artifacts: [
      "RFQ package with consistent assumptions",
      "Quotation comparison summary",
      "Notes on MOQ, lead time, and sampling path",
    ],
    failureModes: [
      "Comparing quotes built on different fabric or decoration assumptions misleads decisions.",
      "Missing packing or labelling costs distort landed-cost expectations into Canada.",
      "Unclear responsibility boundaries create disputes once production starts.",
    ],
  },
  {
    step: 4,
    purpose:
      "Create approved physical and measurement references—fit, size-set, and pre-production samples—so bulk production has a clear commercial and quality standard.",
    buyerDecisions: [
      "Approve or revise fit, construction, and size-set samples with written comments.",
      "Sign off pre-production samples before bulk materials and cutting accelerate.",
      "Decide whether further sampling rounds are justified versus accepting a defined compromise.",
    ],
    artifacts: [
      "Sample tracking log and approval records",
      "Measurement charts and comment sheets",
      "Approved pre-production reference for bulk",
    ],
    failureModes: [
      "Verbal or incomplete approvals leave factories without an enforceable reference.",
      "Skipping size-set creates systematic sizing issues across the order.",
      "Late design changes after bulk materials are committed drive cost and delay.",
    ],
  },
  {
    step: 5,
    purpose:
      "Plan the critical path and track production milestones—materials, cutting, sewing, finishing, packing—so issues escalate while corrective options still exist.",
    buyerDecisions: [
      "Confirm production start after approvals and material readiness are verified.",
      "Respond to escalations on materials, capacity, or schedule with clear priorities.",
      "Authorize change orders when scope or timing must shift mid-program.",
    ],
    artifacts: [
      "Production plan and milestone schedule",
      "Status updates tied to defined checkpoints",
      "Issue and escalation notes with recommended actions",
    ],
    failureModes: [
      "Vague status updates hide delay until shipping pressure is already high.",
      "Material late arrivals cascade into overtime quality risk.",
      "Unmanaged mid-order changes break critical-path commitments.",
    ],
  },
  {
    step: 6,
    purpose:
      "Coordinate inspection checkpoints—inline where risk warrants, and final before release—so buyers decide on ship, rework, or hold based on evidence against approved standards.",
    buyerDecisions: [
      "Set inspection intensity based on product risk and buyer standards.",
      "Review findings and decide release, rework, or hold.",
      "Confirm packaging and labelling checks before goods leave the factory.",
    ],
    artifacts: [
      "Inspection plans and reports",
      "Measurement and workmanship findings",
      "Packaging and labelling verification notes",
    ],
    failureModes: [
      "Relying on informal visual checks after packing is complete.",
      "Ignoring approved sample references during inspection judgment.",
      "Shipping under pressure without documenting open quality issues.",
    ],
  },
  {
    step: 7,
    purpose:
      "Align freight handoff, packing lists, commercial invoices, and related documents before cargo is ready—so shipment coordination is planned, not improvised at the dock.",
    buyerDecisions: [
      "Confirm shipping mode, Incoterms, and freight-forwarder appointment.",
      "Approve document package completeness before cargo release.",
      "Resolve carton marks, packing, and consignee details early.",
    ],
    artifacts: [
      "Commercial invoice and packing list coordination",
      "Freight-forwarder handoff notes",
      "Document checklist against agreed terms",
    ],
    failureModes: [
      "Incomplete documents delay cargo that is otherwise production-ready.",
      "Last-minute Incoterms confusion shifts unexpected cost and risk.",
      "Carton and packing mismatches create receiving and customs friction.",
    ],
  },
  {
    step: 8,
    purpose:
      "Support customs-broker liaison and final delivery coordination into Canada so clearance and consignee receipt proceed under the appointed partners and commercial terms.",
    buyerDecisions: [
      "Confirm broker and consignee contacts for liaison.",
      "Provide any buyer-side information required for clearance workflows.",
      "Accept delivery coordination boundaries: Avelion coordinates; brokers and carriers execute.",
    ],
    artifacts: [
      "Broker liaison notes and document handoff",
      "Delivery status coordination under agreed terms",
      "Post-delivery references for style, lot, or shipment review",
    ],
    failureModes: [
      "Assuming Avelion is the customs broker when it is not licensed as such.",
      "Missing broker engagement until goods are already in transit.",
      "Unclear consignee instructions create warehouse and final-mile delays.",
    ],
  },
] as const;

const operatingDiscipline = [
  {
    title: "Requirements clarity first",
    body: "Programs stall when briefs are incomplete. We start by clarifying product type, materials, decoration, quantity bands, quality expectations, labelling, packaging, and delivery windows.",
  },
  {
    title: "Commercial assumptions stay visible",
    body: "Quotations are only useful when fabric, trim, decoration, sampling, and responsibility boundaries are explicit. We coordinate costing so buyers can compare options with context.",
  },
  {
    title: "Approvals before bulk",
    body: "Fit, size-set, and pre-production samples create the commercial and quality reference. Production should not proceed on informal or incomplete sign-off.",
  },
  {
    title: "Milestones instead of vague updates",
    body: "Production management means tracking materials, cutting, sewing, finishing, packing, and inspection readiness—and escalating issues early enough to act.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/process" },
        ])}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
          <SectionHeading
            eyebrow="How it works"
            title="A documented path from brief to delivery support"
            description="Avelion uses a repeatable sequence so Canadian buyers know what happens next, which decisions matter, and where quality and commercial risk usually appear."
          />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <ProcessTimeline steps={siteConfig.processSteps} />
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion space-y-8">
          <SectionHeading
            eyebrow="Eight steps in detail"
            title="Purpose, decisions, artifacts, and failure modes"
            description="Each stage below uses the same titles as our operating process. Expand your planning around what the step is for, what you decide, what gets produced, and what typically goes wrong when discipline slips."
          />
          {siteConfig.processSteps.map((step) => {
            const detail = stepDetails.find((item) => item.step === step.step);
            if (!detail) return null;
            return (
              <article key={step.step} className="surface-panel rounded-sm p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs tracking-[0.16em] text-silver-dark uppercase">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl text-text-primary md:text-3xl">
                    {step.title}
                  </h2>
                </div>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                      Purpose
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {detail.purpose}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                      Buyer decisions
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {detail.buyerDecisions.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                          <span className="text-silver-primary">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                      Artifacts
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {detail.artifacts.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                          <span className="text-silver-primary">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] text-silver-primary uppercase">
                      Failure modes
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {detail.failureModes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                          <span className="text-silver-primary">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Operating discipline"
            title="Why process matters more than introductions"
            description="Factory access alone does not protect timelines, quality, or landed-cost expectations. Structure does."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {operatingDiscipline.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a conversation"
        description="You do not need a complete brief to evaluate fit. Bring a tech pack, reference sample, assortment idea, or simply the questions you are still working through."
        primary={siteConfig.primaryCta}
        secondary={siteConfig.secondaryCta}
      />
    </>
  );
}
