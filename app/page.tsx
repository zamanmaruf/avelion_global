import { CtaBand } from "@/components/ui/section";
import {
  HomeHero,
  TrustBar,
  ServicesOverview,
  HowItWorks,
  WhyAvelion,
} from "@/components/sections/home-sections";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <WhyAvelion />
      <CtaBand
        title="Still evaluating your sourcing options?"
        description="Book a short conversation to discuss your product, priorities, and whether Avelion is the right fit. You do not need a finished tech pack or complete brief."
        primary={siteConfig.primaryCta}
        secondary={siteConfig.secondaryCta}
      />
    </>
  );
}
