import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { ApolloExportRow, LeadRecord, LeadStatus } from "@/types";

let adminClient: SupabaseClient | null = null;

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function getSupabaseAdmin() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured");
  }
  if (!adminClient) {
    adminClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
  }
  return adminClient;
}

const memoryLeads: LeadRecord[] = [];

export async function storeLead(
  lead: Omit<LeadRecord, "id" | "created_at" | "updated_at"> & {
    id?: string;
  },
): Promise<LeadRecord> {
  const now = new Date().toISOString();
  const record: LeadRecord = {
    id: lead.id || crypto.randomUUID(),
    created_at: now,
    updated_at: now,
    ...lead,
  };

  if (!isSupabaseConfigured()) {
    memoryLeads.unshift(record);
    if (process.env.NODE_ENV === "development") {
      console.info("[leads:memory]", record.email, record.lead_type);
    }
    return record;
  }

  const table = process.env.SUPABASE_LEADS_TABLE || "leads";
  const { data, error } = await getSupabaseAdmin().from(table).insert(record).select().single();
  if (error) throw error;
  return data as LeadRecord;
}

export async function listLeads(limit = 500): Promise<LeadRecord[]> {
  if (!isSupabaseConfigured()) {
    return memoryLeads.slice(0, limit);
  }
  const table = process.env.SUPABASE_LEADS_TABLE || "leads";
  const { data, error } = await getSupabaseAdmin()
    .from(table)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data || []) as LeadRecord[];
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  if (!isSupabaseConfigured()) {
    const lead = memoryLeads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
      lead.updated_at = new Date().toISOString();
    }
    return lead;
  }
  const table = process.env.SUPABASE_LEADS_TABLE || "leads";
  const { data, error } = await getSupabaseAdmin()
    .from(table)
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as LeadRecord;
}

export function toApolloExportRows(leads: LeadRecord[]): ApolloExportRow[] {
  return leads.map((lead) => ({
    first_name: lead.first_name,
    last_name: lead.last_name,
    work_email: lead.email,
    phone: lead.phone || "",
    job_title: lead.job_title || "",
    company: lead.company || "",
    company_website: lead.company_website || "",
    industry: lead.industry || "",
    country: lead.country || "",
    province: lead.province || "",
    lead_source: lead.lead_source,
    product_interest: lead.product_interest || "",
    service_interest: lead.service_interest || "",
    estimated_quantity: lead.estimated_quantity || "",
    timeline: lead.timeline || "",
    notes: lead.notes || "",
    utm_campaign: lead.utm_campaign || "",
    lead_status: lead.status,
  }));
}

export async function uploadAttachment(
  file: File,
  pathPrefix: string,
): Promise<string> {
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "rfq-attachments";
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `${pathPrefix}/${Date.now()}-${safeName}`;

  if (!isSupabaseConfigured()) {
    return `local://${path}`;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const { error } = await getSupabaseAdmin().storage.from(bucket).upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });
  if (error) throw error;
  return path;
}
