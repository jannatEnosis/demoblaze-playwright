# Data Integrity

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 13.1 | Verify product data matches between list and detail | ✅ | 1. Note price/name on card 2. Open product | Same name and price |
| 13.2 | Cart total persists correctly across sessions | ✅ | 1. Add items 2. Close browser 3. Reopen | If sessionStorage: cleared. If localStorage: persists. Document expected. |
| 13.3 | Order confirmation Id is unique per order | ✅ | 1. Place 2 orders 2. Compare Ids | Different Ids |
| 13.4 | Product images match product name | ✅ | 1. Click Samsung phone 2. Check image | Image is of a Samsung phone |
