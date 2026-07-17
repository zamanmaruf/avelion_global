import {
  BulletGrid,
  ChecklistBlock,
  FaqSection,
  OverviewBlock,
  RelatedLinks,
} from "@/components/sections/content-detail";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { industryContent } from "@/content/industries";
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
  return Object.keys(industryContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryContent[slug];
  if (!industry) {
    return createMetadata({
      title: "Industry not found",
      description: "The requested industry page could not be found.",
      path: `/industries/${slug}`,
      noIndex: true,
    });
  }
  return createMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryContent[slug];
  if (!industry) notFound();

  const navItem = siteConfig.industries.find((item) => item.slug === slug);
  const products = siteConfig.products.filter((product) =>
    industry.products.includes(product.slug),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.title, path: `/industries/${slug}` },
          ]),
          ...(industry.faq?.length ? [faqJsonLd(industry.faq)] : []),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
          <SectionHeading
            eyebrow="Industry"
            title={industry.title}
            description={industry.description}
          />
          {industry.overview?.length ? (
            <div className="mt-6">
              <OverviewBlock paragraphs={industry.overview} />
            </div>
          ) : null}
          {navItem?.solutionHref ? (
            <Link
              href={navItem.solutionHref}
              className="mt-6 inline-block text-sm font-medium text-silver-primary hover:text-silver-light"
            >
              View campaign solution page →
            </Link>
          ) : null}
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <BulletGrid title="Common challenges" items={industry.challenges} />
          <BulletGrid title="How Avelion supports" items={industry.support} />
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <h2 className="font-display text-2xl text-text-primary">Relevant product categories</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="surface-panel rounded-sm p-5 transition-colors hover:border-silver-dark/40"
              >
                <span className="font-medium text-text-primary">{product.title}</span>
                <p className="mt-2 text-sm text-text-secondary">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <BulletGrid title="Quality considerations" items={industry.qualityConsiderations} />
          <BulletGrid title="Typical workflow" items={industry.workflow} numbered />
        </div>
      </section>

      {industry.rfqChecklist?.length ? (
        <section className="section-pad section-dark">
          <div className="container-avelion max-w-3xl">
            <ChecklistBlock
              title="What to include in your RFQ"
              description="A clearer brief helps Avelion match capability, coordinate quotations, and outline realistic next steps."
              items={industry.rfqChecklist}
            />
          </div>
        </section>
      ) : null}

      {industry.faq?.length ? (
        <FaqSection
          faqs={industry.faq}
          tone={industry.rfqChecklist?.length ? "light" : "dark"}
        />
      ) : null}

      <CtaBand
        title={industry.cta.title}
        description={industry.cta.description}
        primary={{ label: industry.cta.primaryLabel, href: industry.cta.primaryHref }}
        secondary={siteConfig.primaryCta}
        tone={
          industry.faq?.length
            ? industry.rfqChecklist?.length
              ? "dark"
              : "light"
            : industry.rfqChecklist?.length
              ? "light"
              : "dark"
        }
      />
    </>
  );
}
