import { Breadcrumbs, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for the Avelion Global website, covering acceptable use, disclaimers, intellectual property, and limitations of liability.",
  path: "/terms",
});

const lastUpdated = "16 July 2026";

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Use"
            description={`These Terms of Use govern your access to and use of the website operated by ${siteConfig.legalName} (“Avelion”, “we”, “us”).`}
          />
          <p className="mt-4 text-sm text-silver-dark">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion max-w-3xl space-y-10 text-base leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-2xl text-text-primary">1. Acceptance</h2>
            <p className="mt-4">
              By accessing this website, you agree to these Terms and our{" "}
              <Link href="/privacy" className="text-silver-light underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree, do not use the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">2. Informational purpose</h2>
            <p className="mt-4">
              Website content is provided for general business information. It does not constitute
              a binding offer, quotation, legal advice, customs advice, or certification of any
              factory, product, or compliance outcome. Formal commercial terms are established only
              through written agreements between the relevant parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">3. No professional substitution</h2>
            <p className="mt-4">
              Avelion is a sourcing and production-management partner. Unless separately licensed
              and expressly engaged for those services, we are not acting as your lawyer, customs
              broker, freight forwarder, testing laboratory, or insurer. You remain responsible for
              obtaining advice from qualified professionals where required.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">4. Acceptable use</h2>
            <p className="mt-4">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Use the site for unlawful, deceptive, or abusive purposes.</li>
              <li>Attempt to disrupt, scrape excessively, or compromise site security.</li>
              <li>Submit malicious files or false information through our forms.</li>
              <li>Misrepresent your identity or authority when contacting us.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">5. Intellectual property</h2>
            <p className="mt-4">
              Site content, branding, logos, and design elements are owned by Avelion or used under
              licence. You may not copy, modify, or distribute them without prior written
              permission, except for reasonable personal or internal business reference use of
              publicly available pages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">6. Third-party links</h2>
            <p className="mt-4">
              The website may link to third-party sites or tools (for example booking calendars). We
              are not responsible for third-party content, policies, or practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">7. Disclaimers</h2>
            <p className="mt-4">
              The website is provided on an “as is” and “as available” basis. To the fullest extent
              permitted by law, Avelion disclaims warranties of merchantability, fitness for a
              particular purpose, and non-infringement. We do not warrant that the site will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">8. Limitation of liability</h2>
            <p className="mt-4">
              To the fullest extent permitted by applicable law, Avelion and its directors,
              officers, employees, and agents will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, data, or
              business opportunity, arising from your use of the website. Our aggregate liability
              relating to website use is limited to CAD $100 or the amount you paid us (if any)
              specifically for website access during the preceding three months, whichever is
              greater.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">9. Indemnity</h2>
            <p className="mt-4">
              You agree to indemnify and hold harmless Avelion from claims arising out of your
              misuse of the website, your violation of these Terms, or your infringement of
              third-party rights.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">10. Governing law</h2>
            <p className="mt-4">
              These Terms are governed by the laws of the Province of Ontario and the applicable
              federal laws of Canada, without regard to conflict-of-law principles. Courts in
              Ontario shall have exclusive jurisdiction, subject to any mandatory consumer
              protections that cannot be waived.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">11. Changes</h2>
            <p className="mt-4">
              We may revise these Terms periodically. The updated version will be posted on this
              page with a revised “Last updated” date. Continued use after changes constitutes
              acceptance where permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">12. Contact</h2>
            <p className="mt-4">
              Questions about these Terms:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-silver-light underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
