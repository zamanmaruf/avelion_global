# Form Testing Checklist — Avelion Global

## Contact form (`/contact`)

- [ ] Required field validation shows useful errors
- [ ] Invalid email rejected
- [ ] Inquiry consent required
- [ ] Marketing consent optional and separate
- [ ] Honeypot field hidden and ignored when empty
- [ ] Successful submit shows confirmation UI
- [ ] Prospect confirmation email sent (Resend configured)
- [ ] Internal notification email sent
- [ ] Lead stored in Supabase (or memory in local dev)
- [ ] UTM fields stored when present
- [ ] `contact_form_completed` analytics event fires
- [ ] Rate limiting returns 429 after repeated posts

## RFQ form (`/request-a-quote`)

- [ ] Step 1 contact validation
- [ ] Step 2 product requirements validation
- [ ] Step 3 consent required
- [ ] File type rejection for unsupported formats
- [ ] File size rejection over 10 MB
- [ ] Max attachment count enforced
- [ ] Attachments stored privately (not public URLs)
- [ ] Confirmation + internal emails sent
- [ ] Lead payload includes product fields + attribution
- [ ] `rfq_started` and `rfq_completed` events fire
- [ ] Apollo UTM campaign stored (`utm_source=apollo`)

## Newsletter (if shown)

- [ ] Requires marketing consent
- [ ] Does not auto-subscribe RFQ submitters

## Turnstile

- [ ] Widget renders when site key present
- [ ] API rejects missing/invalid token in production
- [ ] Local/dev can run without keys

## Lead export

- [ ] Unauthorized request → 401
- [ ] Authorized CSV contains Apollo fields
- [ ] Status PATCH updates lead

## Accessibility

- [ ] Labels associated with inputs
- [ ] Errors announced (`role="alert"`)
- [ ] Keyboard can complete full RFQ flow
- [ ] Focus states visible

## Example local contact test

```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{
    "first_name":"Alex",
    "last_name":"Buyer",
    "email":"alex@example.com",
    "company":"Northwind Apparel",
    "subject":"Uniform program inquiry",
    "message":"We are exploring polo and hoodie production for Q4.",
    "inquiry_consent":true,
    "marketing_consent":false,
    "attribution":{"utm_source":"apollo","utm_medium":"email","utm_campaign":"test"}
  }'
```
