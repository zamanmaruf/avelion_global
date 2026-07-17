import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceContent } from "@/content/services";
import { productContent } from "@/content/products";
import { industryContent } from "@/content/industries";
import { solutionContent } from "@/content/solutions";
import { getAllArticles } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/products",
    "/industries",
    "/process",
    "/quality-compliance",
    "/sourcing-in-asia",
    "/logistics",
    "/insights",
    "/solutions",
    "/contact",
    "/request-a-quote",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/insights" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/request-a-quote" ? 0.9 : 0.7,
  }));

  const services = Object.keys(serviceContent).map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const products = Object.keys(productContent).map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industries = Object.keys(industryContent).map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const solutions = Object.keys(solutionContent).map((slug) => ({
    url: `${base}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const insights = getAllArticles().map((article) => ({
    url: `${base}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt || now),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...services, ...products, ...industries, ...solutions, ...insights];
}
