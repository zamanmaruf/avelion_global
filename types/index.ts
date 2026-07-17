export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type AttributionData = UtmParams & {
  landing_page_path?: string;
  referring_url?: string;
  submission_timestamp?: string;
};

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "consultation_booked"
  | "rfq_in_progress"
  | "won"
  | "lost"
  | "nurture"
  | "suppressed";

export type LeadSource = "rfq" | "contact" | "newsletter" | "campaign" | "export";

export type LeadRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  lead_type: LeadSource;
  status: LeadStatus;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  job_title?: string | null;
  company?: string | null;
  company_website?: string | null;
  industry?: string | null;
  country?: string | null;
  province?: string | null;
  product_interest?: string | null;
  service_interest?: string | null;
  estimated_quantity?: string | null;
  timeline?: string | null;
  notes?: string | null;
  lead_source: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  landing_page_path?: string | null;
  referring_url?: string | null;
  inquiry_consent: boolean;
  marketing_consent: boolean;
  consent_timestamp?: string | null;
  consent_source?: string | null;
  attachment_paths?: string[] | null;
  payload?: Record<string, unknown> | null;
};

export type ApolloExportRow = {
  first_name: string;
  last_name: string;
  work_email: string;
  phone: string;
  job_title: string;
  company: string;
  company_website: string;
  industry: string;
  country: string;
  province: string;
  lead_source: string;
  product_interest: string;
  service_interest: string;
  estimated_quantity: string;
  timeline: string;
  notes: string;
  utm_campaign: string;
  lead_status: string;
};
