import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const INSIGHTS_DIR = path.join(process.cwd(), "content/insights");

export const INSIGHT_CATEGORIES = [
  "Apparel sourcing",
  "Product development",
  "Quality control",
  "Manufacturing",
  "Compliance",
  "Logistics",
  "Canada–Asia trade",
  "Buyer guides",
] as const;

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number];

export type ArticleFrontmatter = {
  title: string;
  excerpt: string;
  category: InsightCategory | string;
  publishedAt: string;
  updatedAt: string;
  author: string;
};

export type Article = ArticleFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
  readingTimeMinutes: number;
};

function ensureInsightsDir(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) {
    return [];
  }
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function fileToArticle(filename: string): Article {
  const slug = filename.replace(/\.mdx?$/, "");
  const fullPath = path.join(INSIGHTS_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    category: String(data.category ?? "Apparel sourcing"),
    publishedAt: String(data.publishedAt ?? ""),
    updatedAt: String(data.updatedAt ?? data.publishedAt ?? ""),
    author: String(data.author ?? "Avelion Global"),
    content,
    readingTime: stats.text,
    readingTimeMinutes: Math.max(1, Math.ceil(stats.minutes)),
  };
}

export function getAllArticles(): Article[] {
  const files = ensureInsightsDir();
  return files
    .map(fileToArticle)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticle(slug: string): Article | null {
  const mdxPath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(INSIGHTS_DIR, `${slug}.md`);

  if (fs.existsSync(mdxPath)) {
    return fileToArticle(`${slug}.mdx`);
  }
  if (fs.existsSync(mdPath)) {
    return fileToArticle(`${slug}.md`);
  }
  return null;
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  const all = getAllArticles().filter((article) => article.slug !== slug);

  if (!current) {
    return all.slice(0, limit);
  }

  const sameCategory = all.filter((article) => article.category === current.category);
  const others = all.filter((article) => article.category !== current.category);

  return [...sameCategory, ...others].slice(0, limit);
}
