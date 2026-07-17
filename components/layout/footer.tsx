import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-light border-t border-border-light">
      <div className="container-avelion grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/avelion-logo.png"
            alt="Avelion Global"
            width={128}
            height={96}
            className="h-20 w-auto rounded-sm object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Canada-based sourcing and production-management partner for Asian apparel
            manufacturing—led by Bangladesh—with coordinated delivery into Canada.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-text-primary uppercase">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-text-primary uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/services"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                All services
              </Link>
            </li>
            {siteConfig.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-text-primary uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-text-primary"
                data-analytics="email_clicked"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            {siteConfig.contact.phone ? (
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-text-primary"
                  data-analytics="phone_clicked"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            ) : null}
            <li>{siteConfig.address.display}</li>
            <li>
              <a
                href={siteConfig.primaryCta.href}
                className="hover:text-text-primary"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta_book_consultation"
              >
                {siteConfig.primaryCta.label}
              </a>
            </li>
            <li>
              <Link href="/request-a-quote" className="hover:text-text-primary">
                Request a Quote
              </Link>
            </li>
          </ul>
          {(siteConfig.social.linkedin ||
            siteConfig.social.instagram ||
            siteConfig.social.x) && (
            <div className="mt-5 flex gap-4">
              {siteConfig.social.linkedin ? (
                <a
                  href={siteConfig.social.linkedin}
                  className="text-sm text-silver-primary hover:text-text-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  className="text-sm text-silver-primary hover:text-text-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              ) : null}
              {siteConfig.social.x ? (
                <a
                  href={siteConfig.social.x}
                  className="text-sm text-silver-primary hover:text-text-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  X
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border-light">
        <div className="container-avelion flex flex-col gap-3 py-6 text-xs text-silver-dark md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-primary">
              Terms of Use
            </Link>
            <Link href="/products" className="hover:text-text-primary">
              Products
            </Link>
            <Link href="/industries" className="hover:text-text-primary">
              Industries
            </Link>
            <Link href="/solutions" className="hover:text-text-primary">
              Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
