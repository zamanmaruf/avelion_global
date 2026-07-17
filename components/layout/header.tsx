"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border-light bg-canvas-light/95 text-ink shadow-[0_1px_0_rgba(21,26,34,0.06)] transition-all duration-300 backdrop-blur-md",
        scrolled
          ? "bg-canvas-light/98"
          : "bg-canvas-light/92",
      )}
    >
      <div
        className={cn(
          "container-avelion flex items-center justify-between transition-all",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="relative flex items-center gap-3" aria-label="Avelion Global home">
          <Image
            src="/brand/avelion-logo.png"
            alt="Avelion Global"
            width={96}
            height={72}
            className={cn(
              "h-11 w-auto object-contain transition-all md:h-12",
              scrolled && "h-9 md:h-10",
            )}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.primaryCta.href}
            onClick={() => trackEvent("cta_book_consultation", { location: "header" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 shrink-0 items-center rounded-sm bg-background-primary px-5 text-sm font-medium whitespace-nowrap text-silver-light hover:bg-navy"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-light bg-card-light lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("block h-0.5 w-5 bg-ink transition", open && "opacity-0")} />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border-light bg-canvas-light text-ink lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="container-avelion flex flex-col gap-1 py-4">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-3 text-base text-ink hover:bg-canvas-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 border-t border-border-light" />
          {siteConfig.navigationMore.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-2.5 text-sm text-ink-muted hover:bg-canvas-muted hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-11 items-center justify-center rounded-sm bg-background-primary text-sm font-medium text-silver-light"
            onClick={() => {
              trackEvent("cta_book_consultation", { location: "mobile_nav" });
              setOpen(false);
            }}
          >
            {siteConfig.primaryCta.label}
          </Link>
          <Link
            href={siteConfig.secondaryCta.href}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border-light text-sm font-medium text-ink"
            onClick={() => {
              trackEvent("cta_request_quote", { location: "mobile_nav" });
              setOpen(false);
            }}
          >
            {siteConfig.secondaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
