# Apollo Campaign Guide — Avelion Global

This guide explains how to run Apollo Pro outbound campaigns against the Avelion website without treating Apollo as the system of record for website leads.

## 1. Create segmented lead lists in Apollo

Suggested segments:

| Segment | Example titles / firms | Landing page |
|---|---|---|
| Canadian apparel brands | Founder, Head of Product, Sourcing Manager | `/solutions/apparel-brands` |
| Uniform suppliers | Owner, Sales Director, Procurement | `/solutions/uniform-suppliers` |
| Promotional-product distributors | Merchandising, Account Manager | `/solutions/promotional-products` |
| Retailers & wholesalers | Buyer, Category Manager | `/solutions/retail-wholesale` |
| Hospitality groups | Procurement, F&B Ops, HR | `/solutions/hospitality` |
| Healthcare procurement | Supply Chain, Materials Management | `/solutions/healthcare` |
| Education | Purchasing, Operations | `/solutions/education` |
| Industrial / construction | Safety, Procurement, Ops | `/solutions/industrial-construction` |

Also use matching evergreen pages under `/industries/...` for nurture content.

## 2. Build UTM links

Pattern:

```text
https://avelionglobal.com/solutions/{segment}?utm_source=apollo&utm_medium=email&utm_campaign={campaign_id}&utm_content={variant}&utm_term={persona}
```

Example:

```text
https://avelionglobal.com/solutions/uniform-suppliers?utm_source=apollo&utm_medium=email&utm_campaign=canada_uniforms_q1&utm_content=seq1_primary&utm_term=owner
```

Rules:

- One campaign ID per sequence concept
- Keep `utm_campaign` stable across touches in the same sequence
- Vary `utm_content` for A/B subject/body variants

## 3. Track conversions

Website captures and stores:

- All UTM fields
- Landing-page path
- Referring URL
- Submission timestamp

Conversion events:

- `outbound_campaign_conversion` when Apollo-attributed forms complete
- `rfq_completed` / `contact_form_completed`
- `cta_book_consultation` when booking CTA is used

In Apollo, mark sequence goals around:

1. Link click to solution page
2. RFQ submit
3. Booked consultation (update manually or via webhook)

## 4. How website leads are stored

Primary store: Supabase `leads` table (see `supabase/schema.sql`).

Forms never rely on Apollo alone. Optional fan-out:

- `WEBHOOK_LEAD_URL` → Make / Zapier / n8n / HubSpot / Pipedrive
- `APOLLO_ENABLED=true` reserved for future direct API push (off by default)

## 5. Export qualified leads (Apollo-compatible)

```bash
curl -H "Authorization: Bearer $LEAD_EXPORT_SECRET" \
  "https://avelionglobal.com/api/leads/export?format=csv" -o avelion-leads.csv
```

CSV columns:

- first_name, last_name, work_email, phone, job_title, company, company_website
- industry, country, province
- lead_source, product_interest, estimated_quantity, timeline, notes
- utm_campaign, lead_status

Import into Apollo using **work email** as the unique key.

## 6. Avoid duplicate records

- Deduplicate on email before Apollo import
- Do not create a new Apollo contact for every page view — only for form submits / booked calls
- When a contact already exists, append activity notes rather than creating duplicates
- Keep website DB as source of truth for form payload + consent

## 7. Update lead status

```bash
curl -X PATCH "https://avelionglobal.com/api/leads/export" \
  -H "Authorization: Bearer $LEAD_EXPORT_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"id":"LEAD_UUID","status":"consultation_booked"}'
```

Suggested statuses: `new`, `contacted`, `qualified`, `consultation_booked`, `rfq_in_progress`, `won`, `lost`, `nurture`, `suppressed`.

## 8. Measure by campaign

In Supabase / export:

1. Filter `utm_campaign = canada_uniforms_q1`
2. Count RFQs (`lead_type = rfq`)
3. Count contacts (`lead_type = contact`)
4. Count `consultation_booked` statuses
5. Count `won` for orders (updated manually by ops)

Recommended weekly scorecard:

| Campaign | Clicks (Apollo) | RFQs | Contacts | Booked calls | Won |
|---|---|---|---|---|---|
| canada_uniforms_q1 |  |  |  |  |  |

## 9. Consent & CASL

- Inquiry consent ≠ marketing consent
- Do not auto-enroll RFQ submitters into newsletters
- Store consent timestamp + source
- Suppress marketing for unsubscribed emails via `suppression_list`

## 10. Sequence copy tips

- Lead with Canada-based production-management clarity
- Avoid “cheapest Asian factory” framing
- Point to process, quality checkpoints, and RFQ page
- Use solution pages, not the homepage, as the primary CTA destination
