import { Breadcrumbs, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Avelion Global Inc., including how we collect, use, store, and share personal information, and how CASL consent applies to commercial electronic messages.",
  path: "/privacy",
});

const lastUpdated = "16 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description={`This Privacy Policy explains how ${siteConfig.legalName} (“Avelion”, “we”, “us”) collects, uses, discloses, and protects personal information when you use our website or contact us.`}
          />
          <p className="mt-4 text-sm text-silver-dark">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion prose-avelion max-w-3xl space-y-10 text-base leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-2xl text-text-primary">1. Who we are</h2>
            <p className="mt-4">
              {siteConfig.legalName} is a Canada-based apparel sourcing and production-management
              company. Contact:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-silver-light underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              . Location description: {siteConfig.address.display}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">2. Information we collect</h2>
            <p className="mt-4">We may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Identity and contact details you submit (name, email, phone, company, job title,
                province/country).
              </li>
              <li>
                Inquiry and quote details (product interest, quantities, timelines, notes, uploaded
                files such as tech packs or artwork).
              </li>
              <li>
                Consent records (inquiry consent, marketing consent, timestamp, and consent source).
              </li>
              <li>
                Attribution data (UTM parameters, landing page path, referring URL) when present.
              </li>
              <li>
                Technical data such as IP address, browser type, and basic usage analytics where
                permitted by your consent preferences.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">3. How we use information</h2>
            <p className="mt-4">We use personal information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and quote requests.</li>
              <li>Evaluate sourcing feasibility and communicate next steps.</li>
              <li>Operate, secure, and improve our website and forms.</li>
              <li>
                Send commercial electronic messages only where we have valid consent or another
                lawful basis under Canada’s Anti-Spam Legislation (CASL).
              </li>
              <li>Maintain business records and meet legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">4. CASL and commercial email</h2>
            <p className="mt-4">
              Under CASL, we distinguish transactional messages related to your inquiry from
              marketing messages.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Inquiry and quote confirmations are sent because you requested a response. These are
                not treated as marketing subscriptions.
              </li>
              <li>
                Newsletter or promotional emails are sent only if you provide express marketing
                consent (for example, by checking the marketing consent box).
              </li>
              <li>
                Marketing messages identify {siteConfig.legalName}, include our contact information,
                and provide an unsubscribe mechanism.
              </li>
              <li>
                You may withdraw marketing consent at any time by using the unsubscribe link or
                emailing{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-silver-light underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">5. Cookies and analytics</h2>
            <p className="mt-4">
              We may use cookies or similar technologies for essential site function and, where you
              consent, for analytics or advertising measurement. You can manage non-essential
              consent through our cookie banner where available, and through browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">6. Sharing and processors</h2>
            <p className="mt-4">
              We may share personal information with service providers who help us operate the
              website, store leads, send email, host files, or support CRM workflows. These
              providers are expected to process information under appropriate contractual and
              security safeguards. We do not sell personal information.
            </p>
            <p className="mt-4">
              We may also disclose information if required by law, to protect our rights, or in
              connection with a corporate transaction such as a merger or asset transfer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">7. International transfers</h2>
            <p className="mt-4">
              Because Avelion coordinates work between Canada and Asian manufacturing partners, and may use cloud
              vendors with infrastructure in other countries, personal information may be processed
              outside your province or country. We take reasonable steps to protect information in
              transit and at rest.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">8. Retention</h2>
            <p className="mt-4">
              We retain personal information only as long as needed for the purposes described in
              this policy, including business, legal, accounting, and dispute-resolution
              requirements. Marketing contacts who unsubscribe are suppressed from future commercial
              electronic messages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">9. Security</h2>
            <p className="mt-4">
              We use administrative, technical, and organizational measures appropriate to the
              sensitivity of the information, including access controls and secure form handling.
              No method of transmission or storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">10. Your rights</h2>
            <p className="mt-4">
              Subject to applicable Canadian privacy law, you may request access to, or correction
              of, personal information we hold about you. You may also ask questions about our
              privacy practices or withdraw marketing consent. Contact{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-silver-light underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">11. Children</h2>
            <p className="mt-4">
              Our website and services are directed to businesses and adult professionals. We do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">12. Changes</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. The “Last updated” date at the
              top of this page will change when we do. Continued use of the website after an update
              constitutes notice of the revised policy where permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-primary">13. Contact</h2>
            <p className="mt-4">
              Privacy questions:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-silver-light underline-offset-4 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              . Related pages:{" "}
              <Link href="/terms" className="text-silver-light underline-offset-4 hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/contact" className="text-silver-light underline-offset-4 hover:underline">
                Contact
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
