import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-10 scroll-mt-28 text-2xl text-text-primary md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 scroll-mt-28 text-xl font-semibold text-text-primary" {...props} />
  ),
  p: (props) => <p className="mt-4 text-base leading-relaxed text-text-secondary" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base text-text-secondary" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: ({ href = "", children, ...props }) => {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className="text-silver-light underline-offset-4 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className="text-silver-light underline-offset-4 hover:underline" {...props}>
        {children}
      </Link>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l border-silver-dark/50 pl-4 text-text-secondary italic"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-text-primary" {...props} />,
  hr: () => <hr className="my-10 border-border-subtle" />,
};

export async function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                properties: { className: ["no-underline"] },
              },
            ],
          ],
        },
      }}
    />
  );
}
