-- Avelion Global leads schema for Supabase
-- Run in the Supabase SQL editor before going live.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  lead_type text not null check (lead_type in ('rfq', 'contact', 'newsletter', 'campaign', 'export')),
  status text not null default 'new',
  first_name text not null default '',
  last_name text not null default '',
  email text not null,
  phone text,
  job_title text,
  company text,
  company_website text,
  industry text,
  country text,
  province text,
  product_interest text,
  estimated_quantity text,
  timeline text,
  notes text,
  lead_source text not null default 'website',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  landing_page_path text,
  referring_url text,
  inquiry_consent boolean not null default false,
  marketing_consent boolean not null default false,
  consent_timestamp timestamptz,
  consent_source text,
  attachment_paths text[],
  payload jsonb
);

create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_utm_campaign_idx on public.leads (utm_campaign);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Optional suppression list for CASL / unsubscribe readiness
create table if not exists public.suppression_list (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  reason text,
  created_at timestamptz not null default now()
);

-- Storage bucket: create `rfq-attachments` as a private bucket in Supabase Storage.
-- Do not make attachment objects publicly readable.
