import { notFound } from "next/navigation";
import { ViewTracker } from "@/components/analytics/view-tracker";
import { ServiceHero } from "@/components/services/service-hero";
import {
  ProblemSection,
  IncludesAudienceSection,
  EvaluationMatrixSection,
  ProcessSection,
  DeliverablesNeedsSection,
  ResponsibilitiesSection,
  LimitationsSection,
  SampleTypesSection,
  DevelopmentExtrasSection,
  TimelineDemoSection,
  QualityExtrasSection,
  ComplianceExtrasSection,
  LogisticsExtrasSection,
  ServiceScopeDetails,
  ServiceFaqSection,
  RelatedServicesSection,
  ServiceFinalCta,
} from "@/components/services/service-sections";
import {
  SERVICE_SLUGS,
  getService,
  type ServiceSlug,
} from "@/content/services";
import {
  createMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.seoTitle.replace(" | Avelion Global", ""),
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const typedSlug = slug as ServiceSlug;

  return (
    <>
      <ViewTracker event="service_viewed" payload={{ service: typedSlug }} />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${slug}`,
          }),
          ...(service.faq.length ? [faqJsonLd(service.faq)] : []),
        ]}
      />

      <ServiceHero service={service} />
      <ProblemSection service={service} tone="light" />
      <IncludesAudienceSection service={service} tone="dark" />
      <ProcessSection service={service} tone="light" />

      <ServiceScopeDetails tone="dark">
        {service.visualVariant === "matrix" ? (
          <EvaluationMatrixSection service={service} tone="light" />
        ) : null}
        {service.visualVariant === "samples" ? (
          <>
            <DevelopmentExtrasSection service={service} tone="light" />
            <SampleTypesSection service={service} tone="dark" />
          </>
        ) : null}
        {service.visualVariant === "timeline" ? (
          <TimelineDemoSection service={service} tone="light" />
        ) : null}
        {service.visualVariant === "checklist" ? (
          <QualityExtrasSection service={service} tone="light" />
        ) : null}
        {service.visualVariant === "documents" ? (
          <ComplianceExtrasSection service={service} tone="light" />
        ) : null}
        {service.visualVariant === "route" ? (
          <LogisticsExtrasSection service={service} tone="light" />
        ) : null}
        <DeliverablesNeedsSection service={service} tone="dark" />
        <ResponsibilitiesSection service={service} tone="light" />
        <LimitationsSection service={service} tone="dark" />
      </ServiceScopeDetails>

      <ServiceFaqSection service={service} tone="light" />
      <RelatedServicesSection service={service} tone="dark" />
      <ServiceFinalCta service={service} tone="light" />
    </>
  );
}
