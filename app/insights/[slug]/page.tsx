import { ViewTracker } from "@/components/analytics/view-tracker";
import { ArticleCard } from "@/components/cards";
import { ArticleToc, extractHeadings } from "@/components/insights/article-toc";
import { Mdx } from "@/components/insights/mdx";
import { Breadcrumbs, CtaBand } from "@/components/ui/section";
import { getAllArticles, getArticle, getRelatedArticles } from "@/lib/insights";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  createMetadata,
  JsonLd,
} from "@/lib/seo/metadata";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return createMetadata({
      title: "Article not found",
      description: "The requested insight could not be found.",
      path: `/insights/${slug}`,
      noIndex: true,
    });
  }
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${slug}`,
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const headings = extractHeadings(article.content);
  const related = getRelatedArticles(slug, 3);

  return (
    <>
      <ViewTracker
        event="article_viewed"
        payload={{ slug, category: article.category, title: article.title }}
      />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${slug}` },
          ]),
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            path: `/insights/${slug}`,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt || article.publishedAt,
          }),
        ]}
      />
      <article>
        <section className="section-pad section-dark border-b border-border-subtle">
          <div className="container-avelion">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: article.title },
              ]}
            />
            <p className="text-xs font-semibold tracking-[0.16em] text-silver-primary uppercase">
              {article.category}
            </p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl leading-tight text-text-primary md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-silver-dark">
              <span>{article.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="container-avelion grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <Mdx source={article.content} />
            </div>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <ArticleToc headings={headings} />
              <div className="surface-panel mt-4 rounded-sm p-5">
                <p className="text-sm font-medium text-text-primary">Need sourcing support?</p>
                <p className="mt-2 text-sm text-text-secondary">
                  Share your brief and we will outline practical next steps.
                </p>
                <Link
                  href="/request-a-quote"
                  className="mt-4 inline-flex text-sm font-medium text-silver-primary hover:text-silver-light"
                >
                  Request a Quote →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      {related.length ? (
        <section className="section-pad section-dark">
          <div className="container-avelion">
            <h2 className="font-display text-2xl text-text-primary">Related insights</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard
                  key={item.slug}
                  title={item.title}
                  excerpt={item.excerpt}
                  href={`/insights/${item.slug}`}
                  category={item.category}
                  readingTime={item.readingTime}
                  date={formatDate(item.publishedAt)}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Turn this insight into an actionable brief"
        description="If you are preparing a quote request, include product type, quantities, materials, decoration, quality expectations, and delivery timing."
        primary={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondary={{ label: "Browse all insights", href: "/insights" }}
      />
    </>
  );
}
