import { QuoteForm } from "@/components/forms/quote-form";
import { Breadcrumbs, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Request an Apparel Manufacturing Quote",
  description:
    "Send a short quote request to Avelion Global for private-label apparel, uniforms, promotional garments, and Asian manufacturing programs—led by Bangladesh—with delivery into Canada.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote" },
        ])}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
          />
          <SectionHeading
            eyebrow="Request a quote"
            title="Send us what you have"
            description="Incomplete briefs are fine. Tell us what you need and we will follow up from sales."
          />
          <p className="mt-4 text-sm text-text-secondary">
            Requests go to{" "}
            <a
              href={`mailto:${siteConfig.contact.rfqEmail}`}
              className="text-silver-primary hover:text-silver-light"
            >
              {siteConfig.contact.rfqEmail}
            </a>
            . Prefer a call first?{" "}
            <a
              href={siteConfig.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-primary hover:text-silver-light"
            >
              Book a consultation
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion max-w-3xl">
          <QuoteForm />
          <p className="mt-8 text-sm text-text-secondary">
            Looking for general questions instead?{" "}
            <Link href="/contact" className="text-silver-primary hover:text-silver-light">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
