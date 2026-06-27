# Security

---

## Legend

| Icon | Meaning |
|------|---------|
| 🔒 | Security |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 10.1 | No sensitive data in browser console | 🔒 | 1. Open DevTools Console 2. Perform all actions | No credentials, tokens, or PII logged |
| 10.2 | No sensitive data in network request payloads visible to other users | 🔒 | 1. Inspect API requests | Passwords not sent as plain query params; HTTPS enforced |
| 10.3 | XSS via category filter | 🔒 | 1. Try manipulating category API call | Sanitized |
| 10.4 | Direct cart page access without visiting home | 🔒 | 1. Navigate directly to `cart.html` | Cart loads (empty) — no crash |
| 10.5 | Place order with tampered total | 🔒 | 1. Modify total in localStorage/JS 2. Place order | Server-side validation should reject manipulated totals |
| 10.6 | Session token in localStorage inspection | 🔒 | 1. Log in 2. Inspect localStorage | Token stored; verify it's not plaintext credentials |
