import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OverviewBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-4">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="text-base leading-relaxed text-text-secondary">
          {p}
        </p>
      ))}
    </div>
  );
}

export function BulletGrid({
  title,
  items,
  numbered,
}: {
  title: string;
  items: string[];
  numbered?: boolean;
}) {
  const Tag = numbered ? "ol" : "ul";
  return (
    <div>
      <h2 className="font-display text-2xl text-text-primary">{title}</h2>
      <Tag className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
            <span className="shrink-0 text-silver-primary" aria-hidden="true">
              {numbered ? String(index + 1).padStart(2, "0") : "▸"}
            </span>
            {item}
          </li>
        ))}
      </Tag>
    </div>
  );
}

export function StepCards({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-3xl text-text-primary">{title}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.title} className="surface-panel rounded-sm p-6">
            <span className="text-xs tracking-[0.16em] text-silver-dark uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FaqSection({
  faqs,
  tone = "light",
}: {
  faqs: { question: string; answer: string }[];
  tone?: "light" | "dark";
}) {
  if (!faqs.length) return null;
  return (
    <section className={cn("section-pad", tone === "light" ? "section-light" : "section-dark")}>
      <div className="container-avelion">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({
  title,
  links,
  tone = "dark",
}: {
  title: string;
  links: { label: string; href: string; description?: string }[];
  tone?: "light" | "dark";
}) {
  if (!links.length) return null;
  return (
    <section className={cn("section-pad", tone === "light" ? "section-light" : "section-dark")}>
      <div className="container-avelion">
        <h2 className="font-display text-2xl text-text-primary">{title}</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="surface-panel block rounded-sm p-5 transition-colors hover:border-silver-dark/40"
              >
                <span className="font-medium text-text-primary">{link.label}</span>
                {link.description ? (
                  <p className="mt-2 text-sm text-text-secondary">{link.description}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ChecklistBlock({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  return (
    <div className="surface-panel rounded-sm p-6 md:p-8">
      <h2 className="font-display text-2xl text-text-primary">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
      ) : null}
      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-text-secondary">
            <span className="text-silver-primary">□</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
