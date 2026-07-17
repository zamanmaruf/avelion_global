import Link from "next/link";

export type TocHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(markdown: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/#+$/, "").trim();
    if (!text) continue;
    headings.push({ id: slugify(text), text, level });
  }

  return headings;
}

export function ArticleToc({ headings }: { headings: TocHeading[] }) {
  if (!headings.length) return null;

  return (
    <nav aria-label="Table of contents" className="surface-panel rounded-sm p-5">
      <p className="text-xs font-semibold tracking-[0.16em] text-silver-primary uppercase">
        On this page
      </p>
      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "pl-3" : undefined}>
            <Link
              href={`#${heading.id}`}
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
