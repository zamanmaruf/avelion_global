import { ContactForm } from "@/components/forms/contact-form";
import { FaqSection } from "@/components/sections/content-detail";
import { Breadcrumbs, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Contact Avelion Global",
  description:
    "Contact Avelion Global for apparel sourcing inquiries, consultations, and Asian manufacturing coordination. Canada-based response within one to two business days.",
  path: "/contact",
});

const prepareItems = [
  "Who you are and your role (brand, retailer, distributor, institution, or supplier)",
  "Product category and whether this is a new program or a reorder",
  "Rough quantity bands and target delivery timing into Canada",
  "What you need help with first: factory match, sampling, production visibility, quality, documents, or logistics",
  "Any hard constraints—budget band, compliance paperwork, event or intake dates",
  "Files you can share now (even incomplete tech packs, artwork, or reference photos)",
];

const contactFaqs = [
  {
    question: "How quickly do you respond?",
    answer:
      "We typically respond within one to two business days during Monday–Friday Eastern Time hours. Urgent campaign or intake dates should be stated clearly in the subject or first paragraph so we can prioritize clarification.",
  },
  {
    question: "Should I use Contact or Request a Quote?",
    answer:
      "Use Request a Quote when you have product, quantity, and delivery context and want a commercial next step. Use Contact for general questions, partnership introductions, or consultations when the brief is still forming. Either path can lead to the other.",
  },
  {
    question: "Do you manufacture in your own factory?",
    answer:
      "No. Avelion Global is a Canada-based sourcing and production-management partner. We coordinate qualified Asian manufacturers and support sampling, production follow-through, quality checkpoints, documentation, and delivery coordination into Canada.",
  },
  {
    question: "What should I prepare for a consultation?",
    answer:
      "Bring the same essentials as a light RFQ: category, volume bands, quality expectations, decoration needs if any, and a delivery window into Canada. Open questions are welcome—naming the uncertainty helps us structure the call.",
  },
];

export default function ContactPage() {
  const bookingUrl = siteConfig.contact.bookingUrl;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqJsonLd(contactFaqs),
        ]}
      />
      <section className="section-pad section-dark border-b border-border-subtle">
        <div className="container-avelion">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <SectionHeading
            eyebrow="Contact"
            title="Talk with Avelion about your apparel program"
            description="Use the form for general inquiries, or book a consultation if you prefer a scheduled conversation. For detailed costing requests, the quote form is usually faster."
          />
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="container-avelion grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What to prepare"
              title="Helpful details for a useful first reply"
              description="Incomplete messages still get answers—but clearer context shortens the path to a practical next step."
            />
            <ul className="mt-8 space-y-3">
              {prepareItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-silver-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-panel rounded-sm p-6 md:p-8">
            <h2 className="font-display text-2xl text-text-primary">Response expectations</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-medium text-text-primary">Timing</dt>
                <dd className="mt-1 leading-relaxed text-text-secondary">
                  {siteConfig.contact.responseTime} Hours: {siteConfig.contact.hours}.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-text-primary">What you should receive</dt>
                <dd className="mt-1 leading-relaxed text-text-secondary">
                  An acknowledgment of your request, clarifying questions if needed, and a suggested
                  next step—consultation, quote pathway, or a referral to the right service page.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-text-primary">What we will not do in a first reply</dt>
                <dd className="mt-1 leading-relaxed text-text-secondary">
                  Issue firm unit prices or guaranteed lead times without enough product, material,
                  and commercial assumptions. Useful numbers require clearer inputs.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-text-primary">Faster path for costing</dt>
                <dd className="mt-1 leading-relaxed text-text-secondary">
                  If you already have a brief, use{" "}
                  <Link
                    href="/request-a-quote"
                    className="text-silver-primary hover:text-silver-light"
                  >
                    Request a Quote
                  </Link>{" "}
                  and review{" "}
                  <Link
                    href="/insights/what-to-prepare-before-requesting-an-apparel-manufacturing-quote"
                    className="text-silver-primary hover:text-silver-light"
                  >
                    our quote preparation guide
                  </Link>
                  .
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-avelion grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="font-display text-2xl text-text-primary">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div id="book" className="surface-panel scroll-mt-28 rounded-sm p-6 md:p-8">
              <h2 className="font-display text-2xl text-text-primary">Book a consultation</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Prefer a scheduled call? Choose a 30-minute time that works for you on our calendar.
              </p>
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
                >
                  Open booking calendar
                </a>
              ) : (
                <Link
                  href="/request-a-quote"
                  className="mt-6 inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
                >
                  Request a Quote instead
                </Link>
              )}
            </div>

            <div className="surface-panel rounded-sm p-6 md:p-8">
              <h2 className="text-lg font-semibold text-text-primary">Business information</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-silver-dark">Company</dt>
                  <dd className="mt-1 text-text-secondary">{siteConfig.legalName}</dd>
                </div>
                <div>
                  <dt className="text-silver-dark">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-text-secondary hover:text-text-primary"
                      data-analytics="email_clicked"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                {siteConfig.contact.phone ? (
                  <div>
                    <dt className="text-silver-dark">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-text-secondary hover:text-text-primary"
                        data-analytics="phone_clicked"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-silver-dark">Location</dt>
                  <dd className="mt-1 text-text-secondary">{siteConfig.address.display}</dd>
                </div>
                <div>
                  <dt className="text-silver-dark">Hours</dt>
                  <dd className="mt-1 text-text-secondary">{siteConfig.contact.hours}</dd>
                </div>
                <div>
                  <dt className="text-silver-dark">Response time</dt>
                  <dd className="mt-1 text-text-secondary">{siteConfig.contact.responseTime}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} tone="light" />
    </>
  );
}
