# Avelion Global Inc. Website

Production-ready marketing and lead-generation website for **Avelion Global Inc.** — a Canada-based sourcing and production-management partner helping Canadian buyers manufacture apparel with Asian partners and coordinate delivery into Canada.

## Technology stack

- Next.js (App Router) + TypeScript + React
- Tailwind CSS v4
- Zod + React Hook Form patterns for validation
- Supabase (leads + private attachment storage)
- Resend (transactional email)
- Cloudflare Turnstile (spam protection)
- Vercel Analytics + optional GA / Meta / LinkedIn tags
- MDX insights content system
- Sentry-ready (`@sentry/nextjs` installed; configure when ready)

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without Supabase/Resend/Turnstile configured, forms still validate and store leads in-memory for local development, and emails are logged to the console.

## Environment variables

See `.env.example` for the full list. Required for production:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_RFQ_EMAIL` | Public contact addresses |
| `NEXT_PUBLIC_BOOKING_URL` | Provider-agnostic consultation booking link |
| `RESEND_API_KEY` / `FROM_EMAIL` | Transactional email |
| `INTERNAL_NOTIFICATION_EMAIL` | Internal lead alerts |
| `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Lead storage |
| `SUPABASE_STORAGE_BUCKET` | Private RFQ attachments (`rfq-attachments`) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Spam protection |
| `LEAD_EXPORT_SECRET` | Bearer token for Apollo-compatible export |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `WEBHOOK_LEAD_URL` | Make / Zapier / n8n / CRM webhook |
| `APOLLO_ENABLED` / `APOLLO_API_KEY` | Optional direct Apollo push (off by default) |

Business copy and navigation live in `config/site.ts`.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Create a **private** storage bucket named `rfq-attachments`.
4. Add URL + service role key to `.env.local`.
5. Never expose the service role key to the browser.

## Resend setup

1. Create a Resend account and verify your sending domain.
2. Set `RESEND_API_KEY` and `FROM_EMAIL`.
3. Set `INTERNAL_NOTIFICATION_EMAIL` for ops alerts.

## Turnstile setup

1. Create a Cloudflare Turnstile widget.
2. Add site key (`NEXT_PUBLIC_…`) and secret key.
3. Forms send tokens; APIs verify server-side.

## Analytics setup

- Cookie banner gates non-essential tags (CASL / privacy readiness).
- Vercel Analytics loads by default.
- GA / Meta / LinkedIn load only after consent.

### Analytics events

Documented events (see `lib/analytics/events.ts`):

- `cta_request_quote`
- `cta_book_consultation`
- `rfq_started`
- `rfq_completed`
- `contact_form_completed`
- `capabilities_deck_downloaded`
- `email_clicked`
- `phone_clicked`
- `whatsapp_clicked`
- `service_viewed`
- `product_viewed`
- `industry_landing_viewed`
- `article_viewed`
- `outbound_campaign_conversion`

## Apollo campaign tracking

1. Use `/solutions/...` landing pages for outbound segments.
2. Append UTM parameters, e.g.

```text
https://avelionglobal.com/solutions/uniform-suppliers?utm_source=apollo&utm_medium=email&utm_campaign=canada_uniforms_q1
```

3. Attribution is stored in `sessionStorage` and submitted with every form.
4. Export Apollo-compatible CSV via:

```bash
curl -H "Authorization: Bearer $LEAD_EXPORT_SECRET" \
  "$NEXT_PUBLIC_SITE_URL/api/leads/export?format=csv" -o leads.csv
```

See `APOLLO_CAMPAIGN_GUIDE.md`.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.
5. Connect the custom domain and set `NEXT_PUBLIC_SITE_URL`.

Follow `DEPLOYMENT_CHECKLIST.md`.

## Form testing

See `FORM_TESTING_CHECKLIST.md`. Quick local test:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"first_name":"Test","last_name":"User","email":"test@example.com","company":"Acme","subject":"Hello","message":"Testing contact form submission.","inquiry_consent":true,"marketing_consent":false}'
```

## Lead export process

1. Ensure `LEAD_EXPORT_SECRET` is set.
2. `GET /api/leads/export?format=csv` with Bearer auth.
3. `PATCH /api/leads/export` with `{ "id": "...", "status": "qualified" }` to update status.
4. Import CSV into Apollo or your CRM. Prefer email as the unique key to avoid duplicates.

## Content editing

- Site details: `config/site.ts`
- Services: `content/services.ts`
- Products: `content/products.ts`
- Industries: `content/industries.ts`
- Solutions: `content/solutions.ts`
- Insights: `content/insights/*.mdx`

## Image replacement

Replace placeholder brand/visual assets listed in `CONTENT_ASSET_CHECKLIST.md`.

**Important:** The finalized logo is installed at `public/brand/avelion-logo.png`. Do not redraw or reinterpret it.

## Security checks

- Server-side Zod validation
- Rate limiting on form APIs
- Turnstile + honeypot
- Upload type/size limits + private storage paths
- Security headers + CSP in `next.config.ts`
- Protected lead export route
- No secrets in client bundles (`NEXT_PUBLIC_` only for publishable values)

```bash
npm run audit:deps
npm run typecheck
npm run lint
npm run build
```

## Production launch checklist

Use `DEPLOYMENT_CHECKLIST.md`, `SEO_CHECKLIST.md`, and `FORM_TESTING_CHECKLIST.md` before go-live.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
npm run audit:deps
```

## Project structure

```text
app/                 # App Router pages + API routes
components/          # Layout, forms, cards, sections, UI
config/site.ts       # Central business configuration
content/             # Services, products, industries, MDX insights
lib/                 # Analytics, email, forms, SEO, validation
public/brand/        # Logo and OG assets
supabase/schema.sql  # Database schema
```
