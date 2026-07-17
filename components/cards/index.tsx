import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServiceCard({
  title,
  description,
  href,
  index,
}: {
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  return (
    <Link
      href={href}
      className="surface-panel group flex h-full flex-col rounded-sm p-6 transition-colors hover:border-silver-dark/40"
    >
      {typeof index === "number" ? (
        <span className="mb-4 text-xs tracking-[0.16em] text-silver-dark uppercase">
          {String(index).padStart(2, "0")}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-text-primary group-hover:text-silver-light">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
      <span className="mt-6 text-sm font-medium text-silver-primary">Learn more →</span>
    </Link>
  );
}

export function ProductCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-b border-border-subtle py-5 transition-colors hover:border-silver-dark/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary group-hover:text-silver-light">
            {title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{description}</p>
        </div>
        <span className="text-silver-dark transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

export function IndustryCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="surface-panel block rounded-sm p-6 transition-colors hover:border-silver-dark/40"
    >
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
      <span className="mt-5 inline-block text-sm font-medium text-silver-primary">
        View industry page →
      </span>
    </Link>
  );
}

export function ArticleCard({
  title,
  excerpt,
  href,
  category,
  readingTime,
  date,
}: {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readingTime: string;
  date: string;
}) {
  return (
    <article className="surface-panel flex h-full flex-col rounded-sm p-6">
      <p className="text-xs tracking-[0.14em] text-silver-primary uppercase">{category}</p>
      <h3 className="mt-3 text-xl font-semibold text-text-primary">
        <Link href={href} className="hover:text-silver-light">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{excerpt}</p>
      <div className="mt-5 flex items-center gap-3 text-xs text-silver-dark">
        <time dateTime={date}>{date}</time>
        <span aria-hidden>·</span>
        <span>{readingTime}</span>
      </div>
    </article>
  );
}

export function ProcessTimeline({
  steps,
}: {
  steps: readonly { step: number; title: string; description: string }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.step} className="surface-panel rounded-sm p-5">
          <span className="text-xs tracking-[0.16em] text-silver-dark uppercase">
            Step {step.step}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-text-primary">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function QualitySteps({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={item.title} className="flex gap-4 border-l border-border-subtle pl-4">
          <span className={cn("mt-0.5 text-sm text-silver-dark")}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-medium text-text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
