import { cn } from "@/lib/utils";
import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl text-text-primary md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title,
  description,
  primary,
  secondary,
  tone = "dark",
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  const externalProps = (href: string) =>
    href.startsWith("http")
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

  return (
    <section className={cn("section-pad", tone === "light" ? "section-light" : "section-dark")}>
      <div className="container-avelion">
        <div
          className={cn(
            "relative overflow-hidden rounded-sm border px-6 py-12 md:px-12 md:py-16",
            tone === "light"
              ? "border-border-light bg-card-light shadow-[var(--shadow-card-light)]"
              : "border-border-subtle bg-surface-primary",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,183,163,0.12),transparent_45%)]"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl text-text-primary md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primary.href}
                {...externalProps(primary.href)}
                className={cn(
                  "inline-flex h-11 items-center rounded-sm px-5 text-sm font-medium",
                  tone === "light"
                    ? "bg-background-primary text-silver-light hover:bg-navy"
                    : "bg-silver-light text-background-primary hover:bg-silver-primary",
                )}
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  {...externalProps(secondary.href)}
                  className={cn(
                    "inline-flex h-11 items-center rounded-sm border px-5 text-sm font-medium text-text-primary",
                    tone === "light"
                      ? "border-border-light hover:bg-canvas-muted"
                      : "border-border-subtle hover:bg-surface-secondary",
                  )}
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-text-primary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-sm bg-surface-secondary", className)}
    />
  );
}

export function FormSuccess({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <div
      role="status"
      className="surface-panel rounded-sm border border-border-subtle p-8 text-center"
    >
      <h2 className="font-display text-2xl text-text-primary">{title}</h2>
      <p className="mt-3 text-text-secondary">{description}</p>
      {actions ? <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div> : null}
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div role="alert" className="rounded-sm border border-red-400/30 bg-red-950/40 p-4 text-sm text-red-200">
      {message}
    </div>
  );
}
