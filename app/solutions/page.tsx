import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { solutionContent } from "@/content/solutions";
import { createMetadata, JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Apparel Sourcing Solutions",
  description:
    "Campaign solution pages for Canadian apparel brands, retailers, uniform suppliers, promotional distributors, hospitality, healthcare, education, and industrial buyers manufacturing with Asian partners.",
  path: "/solutions",
});

const solutionOrder = [
  "apparel-brands",
  "retail-wholesale",
  "uniform-suppliers",
  "promotional-products",
  "hospitality",
  "healthcare",
  "education",
  "industrial-construction",
] as const;

export default function SolutionsIndexPage() {
  const solutions = solutionOrder
    .map((slug) => {
      const content = solutionContent[slug];
      if (!content) return null;
      return { slug, ...content };
    })
    .filter(Boolean) as Array<{ slug: string } & (typeof solutionContent)[string]>;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
          itemListJsonLd({
            name: "Apparel sourcing solutions",
            description:
              "Campaign solution pages for Canadian apparel buyer segments manufacturing in Asia.",
            items: solutions.map((solution) => ({
              name: solution.title,
              path: `/solutions/${solution.slug}`,
            })),
          }),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <SectionHeading
            eyebrow="Solutions"
            title="Campaign landers for how Canadian buyers source apparel"
            description="Eight solution pages map common buyer segments to pain points, outcomes, process, what to send, and FAQs—built for Canadian programs manufacturing in Asia with delivery into Canada."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Solution pages are concise campaign landers. They sit alongside{" "}
              <Link href="/industries" className="text-silver-primary hover:text-silver-light">
                industry pages
              </Link>{" "}
              but emphasize a problem → outcome narrative: what typically breaks, what a structured
              Canada-based coordination model improves, how the process usually runs with Asian
              manufacturers, and what information to send before quoting. Use them when you want a
              focused entry point for outreach, referrals, or internal alignment before a formal RFQ.
            </p>
            <p>
              Avelion Global is not a factory. We coordinate qualified Asian manufacturing partners
              and support sampling, production visibility, quality checkpoints, documentation, and
              delivery handoff into Canada. Open the solution closest to your buying model, then
              request a quote with the checklist items listed on that page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <div className="grid gap-4 md:grid-cols-2">
            {solutions.map((solution) => (
              <article key={solution.slug} className="surface-panel flex h-full flex-col rounded-sm p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-silver-primary uppercase">
                  Solution
                </p>
                <h2 className="mt-3 font-display text-2xl text-text-primary">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="hover:text-silver-light"
                  >
                    {solution.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm font-medium text-text-primary">{solution.headline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {solution.description}
                </p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
                >
                  Open solution →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to brief a live program?"
        description="Share product details, quantities, quality expectations, and a delivery window into Canada. We will outline a practical next step."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "View Industries", href: "/industries" }}
      />
    </>
  );
}
