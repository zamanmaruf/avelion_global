import { ArticleCard } from "@/components/cards";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/ui/section";
import { getAllArticles } from "@/lib/insights";
import { formatDate } from "@/lib/utils";
import { createMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Apparel Sourcing Insights for Canadian Buyers",
  description:
    "Practical guides for Canadian buyers on Asian apparel sourcing, sampling, quality control, tech packs, Incoterms basics, reorders, and manufacturing evaluation—written for operators preparing delivery into Canada.",
  path: "/insights",
});

const topicClusters = [
  {
    title: "Sourcing fundamentals",
    description:
      "How Asian apparel manufacturing programs typically move from brief to factory match, costing, and delivery into Canada.",
    topics: ["Apparel sourcing", "Manufacturing", "Canada–Asia trade"],
  },
  {
    title: "Product development & sampling",
    description:
      "Tech packs, fit samples, pre-production approvals, and the decisions that should lock before bulk release.",
    topics: ["Product development", "Buyer guides"],
  },
  {
    title: "Quality & compliance",
    description:
      "Checkpoints buyers should understand, documentation coordination, and how to evaluate factories beyond unit price.",
    topics: ["Quality control", "Compliance", "Manufacturing"],
  },
  {
    title: "Logistics & continuity",
    description:
      "Buyer primers on Incoterms for Canadian delivery, shipment readiness, and planning reorders without quality drift.",
    topics: ["Logistics", "Buyer guides"],
  },
];

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
          <SectionHeading
            eyebrow="Insights"
            title="Practical guidance for Canadian apparel buyers"
            description="Operator-focused articles on sourcing apparel from Asia, evaluating manufacturers, sampling stages, quality checkpoints, quote preparation, logistics basics, and reorder continuity—with delivery into Canada in mind."
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Avelion Insights is written for Canadian brands, retailers, uniform suppliers,
              promotional distributors, and institutional buyers who manufacture apparel with Asian
              partners and need clearer operating practices—not marketing slogans. Search-friendly
              guides cover apparel sourcing fundamentals, product development and sampling, factory
              evaluation beyond price, quality-control checkpoints, tech-pack preparation, quote
              readiness, Incoterms basics for Canadian delivery, and reorder continuity across
              seasons. The library is meant to reduce clarification cycles before RFQs and
              consultations—not to replace a live program brief.
            </p>
            <p>
              Topics follow the full path from requirements through factory matching, costing,
              sampling, production visibility, quality checkpoints, commercial assumptions, and
              coordinated delivery into Canada. Articles emphasize decisions operators can act on:
              what to prepare, what to lock before bulk, and which assumptions make quotations
              comparable for Canadian programs manufacturing with Asian partners.
            </p>
            <p>
              Use the topic clusters below to browse by problem area, then open individual articles
              for checklists and decision frameworks. When you are ready to act on a live program,
              pair an article with a{" "}
              <Link href="/request-a-quote" className="text-silver-primary hover:text-silver-light">
                quote request
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-silver-primary hover:text-silver-light">
                consultation
              </Link>
              . These guides are educational; they are not legal, customs, or certification advice.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="Topic clusters"
            title="Browse by sourcing problem"
            description="Articles are tagged by category. Clusters group related reading paths for Canadian buyers coordinating Asian manufacturing."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topicClusters.map((cluster) => (
              <div key={cluster.title} className="surface-panel rounded-sm p-6">
                <h3 className="text-lg font-semibold text-text-primary">{cluster.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {cluster.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cluster.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-sm border border-border-subtle px-2.5 py-1 text-xs text-silver-dark"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion">
          <SectionHeading
            eyebrow="All articles"
            title="Latest insights"
            description="Newest guides appear first. Reading time is estimated from article length."
          />
          <div className="mt-8">
            {articles.length ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    href={`/insights/${article.slug}`}
                    category={article.category}
                    readingTime={article.readingTime}
                    date={formatDate(article.publishedAt)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-text-secondary">Insights will appear here soon.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion max-w-2xl">
          <SectionHeading
            eyebrow="Newsletter"
            title="Occasional sourcing updates"
            description="Subscribe if you want practical notes on apparel sourcing, sampling, and production coordination. Marketing consent is required under CASL."
          />
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer a direct conversation?"
        description="If you have an active program or upcoming assortment, request a quote or book a consultation."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
