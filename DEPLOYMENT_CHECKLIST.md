# Deployment Checklist — Avelion Global

## Pre-deploy

- [ ] Replace placeholder logo with finalized `public/brand/avelion-logo.png`
- [ ] Replace OG image `public/brand/og-default.png`
- [ ] Replace hero/visual placeholders listed in `CONTENT_ASSET_CHECKLIST.md`
- [ ] Confirm all business details in `config/site.ts` and env vars
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain
- [ ] Configure booking URL (`NEXT_PUBLIC_BOOKING_URL`)
- [ ] Configure phone / WhatsApp only if ready to publish
- [ ] Configure social profile URLs

## Infrastructure

- [ ] Create Supabase project and run `supabase/schema.sql`
- [ ] Create private `rfq-attachments` storage bucket
- [ ] Add Supabase URL + service role key to Vercel env
- [ ] Verify Resend domain and set `RESEND_API_KEY` / `FROM_EMAIL`
- [ ] Set `INTERNAL_NOTIFICATION_EMAIL`
- [ ] Create Cloudflare Turnstile keys and add to Vercel
- [ ] Set strong `LEAD_EXPORT_SECRET`
- [ ] Optional: set `WEBHOOK_LEAD_URL` for Make/Zapier/n8n

## Analytics & SEO

- [ ] Add GA measurement ID
- [ ] Add Google Search Console verification
- [ ] Add LinkedIn Insight Partner ID (if used)
- [ ] Add Meta Pixel ID (if used)
- [ ] Submit sitemap: `https://your-domain/sitemap.xml`
- [ ] Verify robots.txt
- [ ] Spot-check Open Graph previews

## Vercel

- [ ] Import Git repository
- [ ] Set Node.js 20+
- [ ] Add all production environment variables
- [ ] Deploy preview and production
- [ ] Attach custom domain + TLS
- [ ] Confirm redirects from www/apex as intended

## Post-deploy smoke test

- [ ] Homepage loads with logo and navigation
- [ ] Mobile navigation works
- [ ] Request a Quote multi-step submit works
- [ ] Contact form submit works
- [ ] Confirmation emails arrive
- [ ] Internal notification arrives
- [ ] Lead appears in Supabase
- [ ] Attachment upload stores privately
- [ ] Lead export CSV works with Bearer token
- [ ] UTM params persist into lead records
- [ ] Cookie banner appears and gates optional tags
- [ ] 404 page renders
- [ ] `/solutions/uniform-suppliers?utm_source=apollo&utm_medium=email&utm_campaign=test` tracks attribution

## Security

- [ ] `npm run audit:deps` reviewed
- [ ] No secrets committed
- [ ] CSP headers present
- [ ] Rate limiting observed on repeated submissions
- [ ] Export route rejects unauthenticated requests
