import { ViewTracker } from "@/components/analytics/view-tracker";
import {
  BulletGrid,
  ChecklistBlock,
  FaqSection,
  OverviewBlock,
  StepCards,
} from "@/components/sections/content-detail";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { solutionContent } from "@/content/solutions";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  JsonLd,
} from "@/lib/seo/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(solutionContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionContent[slug];
  if (!solution) {
    return createMetadata({
      title: "Solution not found",
      description: "The requested solution page could not be found.",
      path: `/solutions/${slug}`,
      noIndex: true,
    });
  }
  return createMetadata({
    title: solution.title,
    description: solution.description,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionContent[slug];
  if (!solution) notFound();

  const products = siteConfig.products.filter((product) =>
    solution.relatedProducts.includes(product.slug),
  );
  const services = siteConfig.services.filter((service) =>
    solution.relatedServices.includes(service.slug),
  );
  const industry = siteConfig.industries.find((item) => item.slug === slug);

  return (
    <>
      <ViewTracker
        event="industry_landing_viewed"
        payload={{ solution: slug, title: solution.title }}
        trackOutbound
      />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.title, path: `/solutions/${slug}` },
          ]),
          ...(solution.faq?.length ? [faqJsonLd(solution.faq)] : []),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.title },
            ]}
          />
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
            Solution
          </p>
          <h1 className="font-display max-w-4xl text-4xl leading-tight text-text-primary md:text-5xl">
            {solution.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            {solution.description}
          </p>
          {solution.body?.length ? (
            <div className="mt-6">
              <OverviewBlock paragraphs={solution.body} />
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request-a-quote"
              className="inline-flex h-12 items-center rounded-sm bg-silver-light px-6 text-sm font-medium text-background-primary hover:bg-silver-primary"
            >
              Request a Quote
            </Link>
            <Link
              href={siteConfig.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-sm border border-border-subtle px-6 text-sm font-medium text-text-primary hover:bg-surface-secondary"
            >
              {siteConfig.primaryCta.label}
            </Link>
            {industry ? (
              <Link
                href={industry.href}
                className="inline-flex h-12 items-center rounded-sm px-6 text-sm font-medium text-silver-primary hover:text-silver-light"
              >
                Industry overview →
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <BulletGrid title="Where programs usually break down" items={solution.painPoints} />
          <BulletGrid title="What a clearer process enables" items={solution.outcomes} />
        </div>
      </section>

      {solution.processSteps?.length ? (
        <section className="section-pad section-dark">
          <div className="container-avelion">
            <StepCards title="A practical path from brief to delivery into Canada" steps={solution.processSteps} />
            <Link
              href="/process"
              className="mt-8 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
            >
              See the full process →
            </Link>
          </div>
        </section>
      ) : null}

      {solution.whatToSend?.length ? (
        <section
          className={`section-pad ${solution.processSteps?.length ? "section-light" : "section-dark"}`}
        >
          <div className="container-avelion max-w-3xl">
            <ChecklistBlock
              title="What to send when you request a quote"
              description="Campaign visitors can include UTM context in the form; these details help us respond accurately."
              items={solution.whatToSend}
            />
          </div>
        </section>
      ) : null}

      <section
        className={`section-pad ${
          solution.whatToSend?.length
            ? solution.processSteps?.length
              ? "section-dark"
              : "section-light"
            : solution.processSteps?.length
              ? "section-light"
              : "section-dark"
        }`}
      >
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-text-primary">Related products</h2>
            <ul className="mt-5 space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-text-primary">Related services</h2>
            <ul className="mt-5 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {solution.faq?.length ? (
        <FaqSection
          faqs={solution.faq}
          tone={
            // related section tone flips; FAQ is opposite of related
            solution.whatToSend?.length
              ? solution.processSteps?.length
                ? "light"
                : "dark"
              : solution.processSteps?.length
                ? "dark"
                : "light"
          }
        />
      ) : null}

      <CtaBand
        title="Ready to move from interest to a workable brief?"
        description="Share your assortment, quantity bands, quality expectations, and delivery window into Canada. If this page was shared through a campaign, include any context that helps us respond accurately."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Contact Avelion", href: "/contact" }}
        tone={
          solution.faq?.length
            ? solution.whatToSend?.length
              ? solution.processSteps?.length
                ? "dark"
                : "light"
              : solution.processSteps?.length
                ? "light"
                : "dark"
            : solution.whatToSend?.length
              ? solution.processSteps?.length
                ? "light"
                : "dark"
              : solution.processSteps?.length
                ? "dark"
                : "light"
        }
      />
    </>
  );
}
