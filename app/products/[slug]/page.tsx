import {
  BulletGrid,
  FaqSection,
  OverviewBlock,
  RelatedLinks,
} from "@/components/sections/content-detail";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { productContent } from "@/content/products";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  JsonLd,
} from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(productContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = productContent[slug];
  if (!product) {
    return createMetadata({
      title: "Product not found",
      description: "The requested product page could not be found.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }
  return createMetadata({
    title: `${product.title} Manufacturing & Sourcing`,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productContent[slug];
  if (!product) notFound();

  const navItem = siteConfig.products.find((item) => item.slug === slug);
  const related = siteConfig.products
    .filter((item) => item.slug !== slug && item.category === navItem?.category)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.title, path: `/products/${slug}` },
          ]),
          ...(product.faq?.length ? [faqJsonLd(product.faq)] : []),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.title },
            ]}
          />
          <SectionHeading
            eyebrow={navItem?.category ? navItem.category.replace(/-/g, " ") : "Product"}
            title={product.title}
            description={product.description}
          />
          {product.buyerNotes ? (
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
              {product.buyerNotes}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <BulletGrid title="Common use cases" items={product.useCases} />
          <BulletGrid title="Customization options" items={product.customization} />
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <BulletGrid title="Decoration" items={product.decoration} />
          <BulletGrid title="Materials" items={product.materials} />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-4 md:grid-cols-3">
          <div className="surface-panel rounded-sm p-6">
            <h3 className="font-semibold text-text-primary">MOQ notes</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{product.moqNote}</p>
          </div>
          <div className="surface-panel rounded-sm p-6">
            <h3 className="font-semibold text-text-primary">Sampling</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {product.samplingNote}
            </p>
          </div>
          <div className="surface-panel rounded-sm p-6">
            <h3 className="font-semibold text-text-primary">Lead times</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {product.leadTimeNote}
            </p>
          </div>
        </div>
      </section>

      {product.faq?.length ? <FaqSection faqs={product.faq} tone="dark" /> : null}

      {related.length ? (
        <RelatedLinks
          title="Related products"
          tone={product.faq?.length ? "light" : "dark"}
          links={related.map((item) => ({
            label: item.title,
            href: `/products/${item.slug}`,
            description: item.description,
          }))}
        />
      ) : null}

      <CtaBand
        title={`Request a quote for ${product.title.toLowerCase()}`}
        description="Tell us about styles, quantities, materials, decoration, and delivery timing into Canada. We will review factory fit and outline next steps."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Talk to Avelion", href: "/contact" }}
        tone={
          related.length
            ? product.faq?.length
              ? "dark"
              : "light"
            : product.faq?.length
              ? "light"
              : "dark"
        }
      />
    </>
  );
}
