import type { ServicePageContent, ServiceSlug } from "@/types/service";
import { SERVICE_SLUGS } from "@/types/service";
import supplierFactorySourcing from "./supplier-factory-sourcing";
import productDevelopmentSampling from "./product-development-sampling";
import productionManagement from "./production-management";
import qualityAssurance from "./quality-assurance";
import complianceCoordination from "./compliance-coordination";
import logisticsDelivery from "./logistics-delivery";

export type { ServicePageContent, ServiceSlug };
export { SERVICE_SLUGS };

export const serviceContent: Record<ServiceSlug, ServicePageContent> = {
  "supplier-factory-sourcing": supplierFactorySourcing,
  "product-development-sampling": productDevelopmentSampling,
  "production-management": productionManagement,
  "quality-assurance": qualityAssurance,
  "compliance-coordination": complianceCoordination,
  "logistics-delivery": logisticsDelivery,
};

export function getService(slug: string): ServicePageContent | undefined {
  if ((SERVICE_SLUGS as readonly string[]).includes(slug)) {
    return serviceContent[slug as ServiceSlug];
  }
  return undefined;
}

export function getRelatedServices(slug: ServiceSlug): ServicePageContent[] {
  const current = serviceContent[slug];
  return current.relatedServiceSlugs.map((s) => serviceContent[s as ServiceSlug]);
}
