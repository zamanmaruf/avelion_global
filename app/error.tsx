"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <section className="section-pad section-dark">
      <div className="container-avelion max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-silver-primary uppercase">
          Error
        </p>
        <h1 className="font-display mt-4 text-4xl text-text-primary md:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          An unexpected error occurred while loading this page. You can try again, or return home
          and continue from there.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center rounded-sm bg-silver-light px-5 text-sm font-medium text-background-primary hover:bg-silver-primary"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-sm border border-border-subtle px-5 text-sm font-medium text-text-primary hover:bg-surface-secondary"
          >
            Contact support
          </Link>
        </div>
        {error.digest ? (
          <p className="mt-6 text-xs text-silver-dark">Reference: {error.digest}</p>
        ) : null}
      </div>
    </section>
  );
}
