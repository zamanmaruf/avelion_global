import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .transform((v) => v || undefined)
  .refine((v) => !v || /^https?:\/\//i.test(v) || /^[\w.-]+\.[\w.-]+/.test(v), {
    message: "Enter a valid website",
  });

export const attributionSchema = z.object({
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  landing_page_path: z.string().optional(),
  referring_url: z.string().optional(),
  submission_timestamp: z.string().optional(),
});

export const contactSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(80),
  last_name: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid work email").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  job_title: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z.string().trim().min(10, "Please provide a bit more detail").max(5000),
  inquiry_consent: z.literal(true, {
    error: "Consent to be contacted about this inquiry is required",
  }),
  marketing_consent: z.boolean().optional().default(false),
  website_honeypot: z.string().max(0).optional().or(z.literal("")),
  turnstile_token: z.string().optional(),
  attribution: attributionSchema.optional(),
});

export const rfqSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(80),
  last_name: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid work email").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  company_website: optionalUrl,
  job_title: z.string().trim().max(120).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")).transform((v) => v || "Canada"),
  province: z.string().trim().max(80).optional().or(z.literal("")),
  service_interest: z.string().trim().max(120).optional().or(z.literal("")),
  product_category: z.string().trim().max(120).optional().or(z.literal("")),
  product_description: z
    .string()
    .trim()
    .min(10, "Describe what you are looking for")
    .max(5000),
  estimated_quantity: z.string().trim().max(80).optional().or(z.literal("")),
  number_of_styles: z.string().trim().max(40).optional().or(z.literal("")),
  size_range: z.string().trim().max(120).optional().or(z.literal("")),
  fabric_preference: z.string().trim().max(200).optional().or(z.literal("")),
  fabric_weight: z.string().trim().max(80).optional().or(z.literal("")),
  colour_requirements: z.string().trim().max(200).optional().or(z.literal("")),
  printing_or_embroidery: z.string().trim().max(200).optional().or(z.literal("")),
  branding_and_labels: z.string().trim().max(200).optional().or(z.literal("")),
  packaging_requirements: z.string().trim().max(200).optional().or(z.literal("")),
  target_price_range: z.string().trim().max(120).optional().or(z.literal("")),
  required_delivery_date: z.string().trim().max(80).optional().or(z.literal("")),
  previous_sourcing_experience: z.string().trim().max(200).optional().or(z.literal("")),
  existing_tech_pack: z.enum(["yes", "no", "partial", ""]).optional().or(z.literal("")),
  existing_sample: z.enum(["yes", "no", ""]).optional().or(z.literal("")),
  additional_notes: z.string().trim().max(5000).optional().or(z.literal("")),
  industry: z.string().trim().max(120).optional().or(z.literal("")),
  inquiry_consent: z.literal(true, {
    error: "Consent to be contacted about this inquiry is required",
  }),
  marketing_consent: z.boolean().optional().default(false),
  website_honeypot: z.string().max(0).optional().or(z.literal("")),
  turnstile_token: z.string().optional(),
  attribution: attributionSchema.optional(),
  attachment_paths: z.array(z.string()).max(8).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  marketing_consent: z.literal(true, {
    error: "Marketing consent is required for the newsletter",
  }),
  website_honeypot: z.string().max(0).optional().or(z.literal("")),
  attribution: attributionSchema.optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type RfqInput = z.infer<typeof rfqSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const ALLOWED_UPLOAD_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
] as const;

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
export const MAX_UPLOAD_FILES = 6;
