import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/layout/providers";
import { siteConfig } from "@/config/site";
import { createMetadata, JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo/metadata";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  keywords: [...siteConfig.seo.keywords],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${manrope.variable} ${instrument.variable}`}>
      <body className="min-h-screen bg-background-primary font-sans text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-silver-light focus:px-4 focus:py-2 focus:text-background-primary"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
