import Link from "next/link";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section";
import { ExpandableProcess } from "@/components/services/expandable-process";
import type { ServicePageContent } from "@/types/service";
import { getService } from "@/content/services";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

type SectionTone = "light" | "dark";

function sectionToneClass(tone: SectionTone) {
  return tone === "light" ? "section-light" : "section-dark";
}

export function ProblemSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  const visibleProblems = service.problemPoints.slice(0, 4);
  const additionalProblems = service.problemPoints.slice(4);

  const renderProblem = (item: ServicePageContent["problemPoints"][number]) => (
    <li key={item.title} className="surface-panel rounded-sm p-5 md:p-6">
      <h3 className="text-base font-semibold text-text-primary">
        <span className="text-silver-primary" aria-hidden="true">
          ▸{" "}
        </span>
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
    </li>
  );

  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="The problem"
          title={service.problemTitle}
          description={service.problemIntro}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {visibleProblems.map(renderProblem)}
        </ul>
        {additionalProblems.length ? (
          <details className="mt-6">
            <summary className="cursor-pointer text-sm font-medium text-silver-primary marker:text-silver-dark">
              Show all concerns ({service.problemPoints.length})
            </summary>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {additionalProblems.map(renderProblem)}
            </ul>
          </details>
        ) : null}
      </div>
    </section>
  );
}

export function ServiceScopeDetails({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: SectionTone;
}) {
  return (
    <details className={cn(sectionToneClass(tone), "group")}>
      <summary className="container-avelion cursor-pointer list-none py-12 md:py-16">
        <div className="flex items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
              Optional detail
            </p>
            <h2 className="mt-3 font-display text-3xl text-text-primary md:text-4xl">
              Full program scope
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
              Expand for detailed deliverables, responsibilities, limitations, and the operational
              framework specific to this service.
            </p>
          </div>
          <span
            className="shrink-0 text-2xl text-silver-primary transition-transform group-open:rotate-45"
            aria-hidden="true"
          >
            +
          </span>
        </div>
      </summary>
      <div className="border-t border-border-subtle">{children}</div>
    </details>
  );
}

export function IncludesAudienceSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-text-primary">What this service includes</h2>
          <ul className="mt-6 space-y-3">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl text-text-primary">Who this service is for</h2>
          <ul className="mt-6 space-y-3">
            {service.audience.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function EvaluationMatrixSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.evaluationMatrix?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Evaluation"
          title="What Avelion evaluates"
          description="Factory fit is assessed across commercial, operational, quality, and documentation factors—not unit price alone."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.evaluationMatrix.map((row) => (
            <div key={row.item} className="surface-panel rounded-sm p-4">
              <p className="text-sm font-medium text-text-primary">{row.item}</p>
              {row.note ? (
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">{row.note}</p>
              ) : null}
            </div>
          ))}
        </div>
        {service.evaluationDisclaimer ? (
          <p className="mt-8 max-w-3xl border-l border-champagne-deep/50 pl-4 text-sm leading-relaxed text-text-secondary">
            {service.evaluationDisclaimer}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function ProcessSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <ExpandableProcess title={service.processTitle} steps={service.process} />
      </div>
    </section>
  );
}

export function DeliverablesNeedsSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-text-primary">What the buyer receives</h2>
          <ul className="mt-6 space-y-3">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl text-text-primary">What we need from you</h2>
          <ul className="mt-6 space-y-3">
            {service.buyerNeeds.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ResponsibilitiesSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion grid gap-10 lg:grid-cols-2">
        <div className="surface-panel rounded-sm p-6 md:p-8">
          <h2 className="font-display text-2xl text-text-primary">Avelion’s responsibilities</h2>
          <ul className="mt-5 space-y-3">
            {service.avelionResponsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-panel rounded-sm p-6 md:p-8">
          <h2 className="font-display text-2xl text-text-primary">Buyer responsibilities</h2>
          <ul className="mt-5 space-y-3">
            {service.buyerResponsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="shrink-0 text-silver-primary" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LimitationsSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion max-w-3xl">
        <SectionHeading
          eyebrow="Limitations"
          title="Important limitations and clarifications"
          description="Clear boundaries protect buyers. The points below describe what this service does and does not claim."
        />
        {service.disclaimer ? (
          <p className="mt-8 rounded-sm border border-border-light bg-card-light p-5 text-sm leading-relaxed text-text-secondary">
            {service.disclaimer}
          </p>
        ) : null}
        {service.clarification ? (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary">{service.clarification.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.clarification.body}</p>
          </div>
        ) : null}
        <ul className="mt-8 space-y-3">
          {service.limitations.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
              <span className="shrink-0 text-silver-primary" aria-hidden="true">
                ▸
              </span>
              {item}
            </li>
          ))}
        </ul>
        {service.notMeans?.length ? (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-text-primary">What this does not mean</h3>
            <ul className="mt-4 space-y-3">
              {service.notMeans.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span className="shrink-0 text-silver-primary" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.partnerPlaceholder ? (
          <p className="mt-8 text-sm leading-relaxed text-text-secondary">{service.partnerPlaceholder}</p>
        ) : null}
      </div>
    </section>
  );
}

export function SampleTypesSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.sampleTypes?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Sample types"
          title="Sampling is a sequence, not a single event"
          description="Not every program requires every sample type. The cards below explain common sample categories and what should be approved."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {service.sampleTypes.map((sample) => (
            <article key={sample.title} className="surface-panel rounded-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary">{sample.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs tracking-[0.14em] text-silver-primary uppercase">Purpose</dt>
                  <dd className="mt-1 text-text-secondary">{sample.purpose}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-silver-primary uppercase">When used</dt>
                  <dd className="mt-1 text-text-secondary">{sample.whenUsed}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-silver-primary uppercase">Approve</dt>
                  <dd className="mt-1 text-text-secondary">{sample.approve}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DevelopmentExtrasSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.developmentInputs?.length && !service.whySamplingMatters?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion grid gap-10 lg:grid-cols-2">
        {service.whySamplingMatters?.length ? (
          <div>
            <h2 className="font-display text-3xl text-text-primary">Why sampling matters</h2>
            <ul className="mt-6 space-y-3">
              {service.whySamplingMatters.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span className="shrink-0 text-silver-primary" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.developmentInputs?.length ? (
          <div>
            <h2 className="font-display text-3xl text-text-primary">Development inputs</h2>
            <ul className="mt-6 space-y-3">
              {service.developmentInputs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span className="shrink-0 text-silver-primary" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {service.sampleReviewDemo?.length ? (
        <div className="container-avelion mt-10">
          <div className="surface-panel rounded-sm p-6 md:p-8">
            <p className="text-xs tracking-[0.16em] text-silver-primary uppercase">
              Demonstration · sample review record
            </p>
            <h3 className="mt-3 font-display text-2xl text-text-primary">Sample review interface</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Example fields only. Not a client record.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.sampleReviewDemo.map((row) => (
                <div key={row.label} className="border-b border-border-subtle pb-3">
                  <dt className="text-xs text-silver-dark uppercase">{row.label}</dt>
                  <dd className="mt-1 text-sm text-text-primary">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function TimelineDemoSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.timelineDemo?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Critical path"
          title="Production critical path"
          description="Demonstration milestones only. Planned and actual dates are illustrative and do not represent a live order."
        />
        <p className="mt-6 text-xs text-text-secondary md:hidden">Swipe to view full table →</p>
        <div className="mt-2 overflow-x-auto md:mt-8">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-light text-xs tracking-[0.12em] text-silver-dark uppercase">
                <th className="py-3 pr-4 font-medium">Milestone</th>
                <th className="py-3 pr-4 font-medium">Planned</th>
                <th className="py-3 pr-4 font-medium">Actual</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Owner</th>
                <th className="py-3 pr-4 font-medium">Evidence</th>
                <th className="py-3 font-medium">Risk</th>
              </tr>
            </thead>
            <tbody>
              {service.timelineDemo.map((row) => (
                <tr key={row.label} className="border-b border-border-light/80">
                  <td className="py-3 pr-4 font-medium text-text-primary">{row.label}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.planned}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.actual}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.status}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.owner}</td>
                  <td className="py-3 pr-4 text-text-secondary">{row.evidence}</td>
                  <td className="py-3 text-text-secondary">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(service.reportingItems || service.changeControlSteps || service.escalationLevels) && (
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {service.reportingItems?.length ? (
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Production reporting</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  {service.reportingItems.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">▸ </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {service.changeControlSteps?.length ? (
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Change control</h3>
                <ol className="mt-4 space-y-2 text-sm text-text-secondary">
                  {service.changeControlSteps.map((item, i) => (
                    <li key={item}>
                      {i + 1}. {item}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            {service.escalationLevels?.length ? (
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Escalation framework</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {service.escalationLevels.map((item) => (
                    <li key={item.level}>
                      <span className="font-medium text-text-primary">{item.level}</span>
                      <p className="mt-1 text-text-secondary">{item.meaning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

export function QualityExtrasSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.inspectionCategories?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Inspection scope"
          title="What may be inspected"
          description="Inspection focus follows the agreed specification package. Categories below are common reference areas—not a universal checklist for every order."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.inspectionCategories.map((group) => (
            <div key={group.title} className="surface-panel rounded-sm p-5">
              <h3 className="font-semibold text-text-primary">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {group.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">▸ </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {service.inspectionTypes?.length ? (
          <div className="mt-12">
            <h3 className="font-display text-2xl text-text-primary">Inspection types</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.inspectionTypes.map((item) => (
                <div key={item.title} className="surface-panel rounded-sm p-5">
                  <h4 className="font-medium text-text-primary">{item.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {service.acceptanceCriteria?.length ? (
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl text-text-primary">Acceptance criteria</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {service.acceptanceCriteria.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.defectSteps?.length ? (
          <div className="mt-12">
            <h3 className="font-display text-2xl text-text-primary">Defect management</h3>
            <ol className="mt-6 grid gap-3 md:grid-cols-3">
              {service.defectSteps.map((item, i) => (
                <li key={item} className="surface-panel rounded-sm p-4 text-sm text-text-secondary">
                  <span className="text-xs text-silver-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {service.shipmentOutcomes?.length ? (
          <div className="mt-12">
            <h3 className="font-display text-2xl text-text-primary">Shipment decision outcomes</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.shipmentOutcomes.map((item) => (
                <div key={item.title} className="surface-panel rounded-sm p-5">
                  <h4 className="font-medium text-text-primary">{item.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ComplianceExtrasSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.complianceCategories?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="Documentation categories"
          title="Compliance categories"
          description="Document requests vary by buyer, product, and destination. Availability depends on the selected Bangladesh manufacturer and program requirements."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.complianceCategories.map((group) => (
            <div key={group.title} className="surface-panel rounded-sm p-5">
              <h3 className="font-semibold text-text-primary">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {group.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">▸ </span>
                    {item}
                  </li>
                ))}
              </ul>
              {group.note ? <p className="mt-3 text-xs text-silver-dark">{group.note}</p> : null}
            </div>
          ))}
        </div>
        {service.documentStatusDemo?.length ? (
          <div className="mt-12 surface-panel rounded-sm p-6 md:p-8">
            <p className="text-xs tracking-[0.16em] text-silver-primary uppercase">
              Demonstration · document status dashboard
            </p>
            <h3 className="mt-3 font-display text-2xl text-text-primary">Example status board</h3>
            <ul className="mt-6 divide-y divide-border-subtle">
              {service.documentStatusDemo.map((row) => (
                <li key={row.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-text-primary">{row.name}</span>
                  <span className="text-silver-primary">{row.status}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.certificationExamples?.length ? (
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl text-text-primary">Certification examples buyers may request</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Availability depends on the selected manufacturer, facility, product, material, buyer requirement, and
              validity period.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.certificationExamples.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-border-subtle px-3 py-1.5 text-xs text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.canadianConsiderations?.length ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-text-primary">Canadian buyer considerations</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {service.canadianConsiderations.map((item) => (
                  <li key={item}>▸ {item}</li>
                ))}
              </ul>
            </div>
            {service.canadianLinks?.length ? (
              <div>
                <h3 className="font-display text-2xl text-text-primary">Authoritative resources</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.canadianLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-silver-primary hover:text-silver-light"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LogisticsExtrasSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  if (!service.logisticsScope?.length && !service.shipmentJourney?.length) return null;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        {service.logisticsScope?.length ? (
          <>
            <SectionHeading
              eyebrow="Scope"
              title="Logistics coordination scope"
              description="Avelion organizes handoffs and information between factories, freight partners, brokers, warehouses, and buyers."
            />
            <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {service.logisticsScope.map((item) => (
                <li key={item} className="surface-panel rounded-sm p-4 text-sm text-text-secondary">
                  <span aria-hidden="true">▸ </span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {service.shipmentJourney?.length ? (
          <div className="mt-14">
            <h3 className="font-display text-2xl text-text-primary">Shipment journey</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Illustrative route stages. Transit times are not universal promises and vary by mode, season, and
              service providers.
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.shipmentJourney.map((item, i) => (
                <li key={item} className="surface-panel rounded-sm p-4">
                  <span className="text-xs text-silver-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-sm text-text-primary">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {service.shippingMethods?.length ? (
          <div className="mt-14">
            <h3 className="font-display text-2xl text-text-primary">Shipping methods</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.shippingMethods.map((method) => (
                <article key={method.title} className="surface-panel rounded-sm p-5">
                  <h4 className="font-semibold text-text-primary">{method.title}</h4>
                  <dl className="mt-4 space-y-2 text-xs text-text-secondary">
                    <div>
                      <dt className="text-silver-primary uppercase tracking-wide">Use cases</dt>
                      <dd className="mt-1">{method.useCases}</dd>
                    </div>
                    <div>
                      <dt className="text-silver-primary uppercase tracking-wide">Speed</dt>
                      <dd className="mt-1">{method.speed}</dd>
                    </div>
                    <div>
                      <dt className="text-silver-primary uppercase tracking-wide">Cost</dt>
                      <dd className="mt-1">{method.cost}</dd>
                    </div>
                    <div>
                      <dt className="text-silver-primary uppercase tracking-wide">Limits</dt>
                      <dd className="mt-1">{method.limits}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        ) : null}
        {service.shipmentDocuments?.length ? (
          <div className="mt-14 max-w-3xl">
            <h3 className="font-display text-2xl text-text-primary">Shipment documents</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {service.shipmentDocuments.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {service.responsibilityMatrix?.length ? (
          <div className="mt-14">
            <h3 className="font-display text-2xl text-text-primary">Responsibility matrix</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Contractual responsibility depends on agreed commercial terms and Incoterms. This matrix is a planning
              aid, not a contract.
            </p>
            <p className="mt-4 text-xs text-text-secondary md:hidden">Swipe to view full table →</p>
            <div className="mt-2 overflow-x-auto md:mt-6">
              <table className="min-w-[960px] w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-border-subtle text-silver-dark uppercase tracking-wide">
                    <th className="py-3 pr-3">Activity</th>
                    <th className="py-3 pr-3">Buyer</th>
                    <th className="py-3 pr-3">Factory</th>
                    <th className="py-3 pr-3">Avelion</th>
                    <th className="py-3 pr-3">Forwarder</th>
                    <th className="py-3 pr-3">Broker</th>
                    <th className="py-3 pr-3">Warehouse</th>
                    <th className="py-3">Carrier</th>
                  </tr>
                </thead>
                <tbody>
                  {service.responsibilityMatrix.map((row) => (
                    <tr key={row.activity} className="border-b border-border-subtle/70">
                      <td className="py-3 pr-3 font-medium text-text-primary">{row.activity}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.buyer}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.factory}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.avelion}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.forwarder}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.broker}</td>
                      <td className="py-3 pr-3 text-text-secondary">{row.warehouse}</td>
                      <td className="py-3 text-text-secondary">{row.carrier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
        {service.shipmentVisibilityDemo?.length ? (
          <div className="mt-14 surface-panel rounded-sm p-6 md:p-8">
            <p className="text-xs tracking-[0.16em] text-silver-primary uppercase">
              Demonstration · shipment visibility
            </p>
            <h3 className="mt-3 font-display text-2xl text-text-primary">Example milestone board</h3>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.shipmentVisibilityDemo.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs text-silver-dark uppercase">{row.label}</dt>
                  <dd className="mt-1 text-sm text-text-primary">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
        {service.exceptionItems?.length ? (
          <div className="mt-14 max-w-3xl">
            <h3 className="font-display text-2xl text-text-primary">Exception management</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {service.exceptionItems.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ServiceFaqSection({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Practical answers for Canadian buyers evaluating this service before sampling or production commitments."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={service.faq} />
        </div>
      </div>
    </section>
  );
}

export function RelatedServicesSection({
  service,
  tone = "light",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  const related = service.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((item): item is ServicePageContent => Boolean(item));
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <SectionHeading eyebrow="Related services" title="Continue building a coordinated program" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="surface-panel block rounded-sm p-6 transition-colors hover:border-silver-dark/40"
            >
              <p className="text-xs tracking-[0.16em] text-silver-primary uppercase">
                Service {item.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                {item.heroCopy}
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-silver-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFinalCta({
  service,
  tone = "dark",
}: {
  service: ServicePageContent;
  tone?: SectionTone;
}) {
  const quoteHref = `/request-a-quote?service=${service.slug}`;
  return (
    <section className={cn("section-pad", sectionToneClass(tone))}>
      <div className="container-avelion">
        <div className="surface-panel rounded-sm px-6 py-12 md:px-12 md:py-16">
          <h2 className="font-display max-w-2xl text-3xl text-text-primary md:text-4xl">
            Not sure whether this service fits your program?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Book a short conversation to discuss your product, priorities, and current sourcing
            stage. A complete specification package is not required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={siteConfig.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-h-11 items-center rounded-sm bg-background-primary px-6 text-sm font-medium text-silver-light hover:bg-navy"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={quoteHref}
              className="inline-flex h-12 min-h-11 items-center rounded-sm border border-border-light px-6 text-sm font-medium text-text-primary hover:bg-canvas-muted"
            >
              Request a Quote
            </Link>
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            Prefer to start by email?{" "}
            <Link href="/contact" className="text-silver-primary underline-offset-2 hover:underline">
              Contact our sourcing team.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
