"use client";

import { ProductCard } from "@/components/cards";
import { useMemo, useState } from "react";

export type ProductListItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  basics: "Basics",
  fleece: "Fleece",
  outerwear: "Outerwear",
  uniforms: "Uniforms",
  industrial: "Industrial",
  promotional: "Promotional",
  knit: "Knitwear",
  woven: "Woven",
  "private-label": "Private Label",
  textiles: "Textiles",
};

export function ProductsExplorer({ products }: { products: ProductListItem[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...unique];
  }, [products]);

  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter products by category"
      >
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={
                selected
                  ? "rounded-sm bg-silver-light px-3 py-2 text-sm font-medium text-background-primary"
                  : "rounded-sm border border-border-subtle px-3 py-2 text-sm text-text-secondary hover:border-silver-dark/40 hover:text-text-primary"
              }
            >
              {CATEGORY_LABELS[category] || category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-x-10 md:grid-cols-2">
        {filtered.map((product) => (
          <ProductCard
            key={product.slug}
            title={product.title}
            description={product.description}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-text-secondary">No products in this category.</p>
      ) : null}
    </div>
  );
}
