import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad section-dark">
      <div className="container-avelion max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
          404
        </p>
        <h1 className="font-display mt-4 text-4xl text-text-primary md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          The page you requested does not exist or may have moved. Use the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
          >
            Contact us
          </Link>
          <Link
            href="/request-a-quote"
            className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
