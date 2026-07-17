export type FaqItem = { question: string; answer: string };

export type ProcessStep = {
  title: string;
  body: string;
};

export type SampleType = {
  title: string;
  purpose: string;
  whenUsed: string;
  approve: string;
};

export type ChecklistGroup = {
  title: string;
  items: string[];
  note?: string;
};

export type TimelineMilestone = {
  label: string;
  planned: string;
  actual: string;
  status: "On track" | "Attention required" | "At risk" | "Complete" | "Pending";
  owner: string;
  evidence: string;
  risk: string;
};

export type ShippingMethod = {
  title: string;
  useCases: string;
  speed: string;
  cost: string;
  limits: string;
};

export type ResponsibilityRow = {
  activity: string;
  buyer: string;
  factory: string;
  avelion: string;
  forwarder: string;
  broker: string;
  warehouse: string;
  carrier: string;
};

export type ServicePageContent = {
  slug: string;
  number: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroCopy: string;
  bestSuitedFor: string;
  problemTitle: string;
  problemIntro: string;
  problemPoints: { title: string; body: string }[];
  audience: string[];
  includes: string[];
  processTitle: string;
  process: ProcessStep[];
  deliverables: string[];
  buyerNeeds: string[];
  buyerResponsibilities: string[];
  avelionResponsibilities: string[];
  limitations: string[];
  disclaimer?: string;
  clarification?: { title: string; body: string };
  faq: FaqItem[];
  relatedServiceSlugs: string[];
  visualVariant: "matrix" | "samples" | "timeline" | "checklist" | "documents" | "route";
  /** Optional service-specific blocks */
  evaluationMatrix?: { item: string; note?: string }[];
  evaluationDisclaimer?: string;
  sampleTypes?: SampleType[];
  developmentInputs?: string[];
  whySamplingMatters?: string[];
  sampleReviewDemo?: { label: string; value: string }[];
  inspectionCategories?: ChecklistGroup[];
  inspectionTypes?: { title: string; body: string }[];
  acceptanceCriteria?: string[];
  defectSteps?: string[];
  shipmentOutcomes?: { title: string; body: string }[];
  complianceCategories?: ChecklistGroup[];
  documentStatusDemo?: { name: string; status: string }[];
  canadianConsiderations?: string[];
  canadianLinks?: { label: string; href: string }[];
  certificationExamples?: string[];
  timelineDemo?: TimelineMilestone[];
  reportingItems?: string[];
  changeControlSteps?: string[];
  escalationLevels?: { level: string; meaning: string }[];
  notMeans?: string[];
  logisticsScope?: string[];
  shipmentJourney?: string[];
  shippingMethods?: ShippingMethod[];
  shipmentDocuments?: string[];
  responsibilityMatrix?: ResponsibilityRow[];
  shipmentVisibilityDemo?: { label: string; value: string }[];
  exceptionItems?: string[];
  partnerPlaceholder?: string;
};

export const SERVICE_SLUGS = [
  "supplier-factory-sourcing",
  "product-development-sampling",
  "production-management",
  "quality-assurance",
  "compliance-coordination",
  "logistics-delivery",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
