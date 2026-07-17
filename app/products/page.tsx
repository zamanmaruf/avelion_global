import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";
import { ProductsExplorer } from "./products-explorer";

export const metadata = createMetadata({
  title: "Apparel Product Categories",
  description:
    "Explore apparel categories Avelion supports for Canadian buyers—including basics, uniforms, promotional apparel, private label, knitwear, woven garments, and workwear.",
  path: "/products",
});

const categoryGuidance = [
  {
    title: "Basics and fleece",
    body: "T-shirts, polos, hoodies, and sweatshirts suit retail, promotional, and private-label programs. Start here when you need volume-friendly knits with clear fabric, GSM, and decoration assumptions.",
    examples: "T-shirts, polo shirts, hoodies, sweatshirts",
  },
  {
    title: "Uniforms and institutional apparel",
    body: "Corporate, hospitality, healthcare, and school uniforms are continuity programs. Prioritize fit libraries, decoration standards, laundry realities, and reorder references—not one-off catalogue picks.",
    examples: "Corporate, hospitality, healthcare, school uniforms",
  },
  {
    title: "Promotional and branded campaigns",
    body: "Campaign apparel is date-driven. Lock garment, decoration method, artwork status, and packaging early so production and delivery into Canada can reverse-plan against the event or warehouse window.",
    examples: "Promotional apparel, decorated tees and fleece",
  },
  {
    title: "Private-label and category depth",
    body: "Private-label basics, knitwear, woven shirts, and bottoms need stronger sampling discipline. Use these categories when brand standards, construction quality, and replenishment continuity matter across seasons.",
    examples: "Private-label basics, knitwear, woven shirts, trousers",
  },
  {
    title: "Workwear and outerwear",
    body: "Industrial workwear and jackets succeed when features match real environments—abrasion, climate, laundry, and crew movement—validated through functional samples before bulk.",
    examples: "Workwear, jackets, field apparel",
  },
  {
    title: "Custom fabric and textile programs",
    body: "Fabric-led programs belong here when hand feel, shade, or performance must be resolved before garment costing. Material clarity usually improves every downstream quotation.",
    examples: "Custom fabric and textile sourcing support",
  },
];

export default function ProductsPage() {
  const products = siteConfig.products.map((product) => ({
    slug: product.slug,
    title: product.title,
    category: product.category,
    description: product.description,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
          itemListJsonLd({
            name: "Apparel product categories",
            description:
              "Apparel categories Avelion coordinates for Canadian buyers through Asian manufacturing.",
            items: products.map((product) => ({
              name: product.title,
              path: `/products/${product.slug}`,
            })),
          }),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <SectionHeading
            eyebrow="Products"
            title="Apparel categories we commonly manufacture through partners"
            description="Filter by category to find the product families Avelion coordinates through Asian manufacturing—from private-label basics to uniforms, promotional apparel, and industrial workwear."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Product pages on this site describe the apparel families Canadian buyers most often ask
              Avelion to coordinate with Asian manufacturers. They are not a static catalogue of
              stock styles. Each category page outlines typical constructions, what buyers should
              prepare, sampling considerations, and how production and delivery into Canada are
              usually structured for that product family—from basics and fleece through uniforms,
              promotional apparel, private label, knit and woven categories, workwear, and textile
              programs.
            </p>
            <p>
              Choosing the right category first improves factory matching and commercial clarity. A
              promotional tee, a hospitality polo, and a private-label basic may look similar in a
              photo yet differ in fabric expectations, decoration method, packaging, MOQ reality, and
              reorder risk. Category intent also shapes quality checkpoints and packing rules before
              freight handoff into Canada, and it helps Avelion match Asian manufacturing partners to
              construction capability rather than convenience.
            </p>
            <p>
              Use the category guidance below to orient your assortment, then filter the explorer or
              open a product page for deeper detail. If your program spans several families, we can
              still review it as one brief—clear category intent simply makes the first conversation
              more useful and keeps quotations comparable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Category guidance"
            title="How to navigate product families"
            description="Start with end use and continuity needs, then refine by construction. Related services and industries are linked from each product detail page."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categoryGuidance.map((item) => (
              <div key={item.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                <p className="mt-4 text-xs tracking-[0.08em] text-silver-dark uppercase">
                  {item.examples}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text-secondary">
            Looking for buyer-type outcomes rather than product families? See{" "}
            <Link href="/industries" className="text-silver-primary hover:text-silver-light">
              industries
            </Link>{" "}
            and campaign{" "}
            <Link href="/solutions" className="text-silver-primary hover:text-silver-light">
              solutions
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <ProductsExplorer products={products} />
        </div>
      </section>

      <CtaBand
        title="Have a specific style or assortment in mind?"
        description="Share your tech pack, reference sample, quantity bands, and delivery window so we can assess factory fit and next steps."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
