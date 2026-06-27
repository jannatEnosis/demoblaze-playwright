# Product Detail Page

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 4.1 | Click a product card to view details | ✅ | 1. Click any product | Navigates to `prod.html?idp_=<id>` with full details |
| 4.2 | Product image loads in detail carousel | ✅ | 1. Open product page | Image displayed |
| 4.3 | Product name, price, description displayed | ✅ | 1. Open product page | All fields populated correctly |
| 4.4 | Click "Add to cart" | ✅ | 1. On product page 2. Click "Add to cart" | "Product added." alert |
| 4.5 | Add same product to cart multiple times | ❌ | 1. Click "Add to cart" twice for same product | Both clicks add a row (duplicate rows expected — document behavior) |
| 4.6 | Add multiple different products to cart | ✅ | 1. Add Product A 2. Navigate 3. Add Product B | Both products in cart |
| 4.7 | Navigate to `prod.html?idp_=9999` (invalid ID) | ❌ | 1. Enter invalid product ID in URL | Graceful error / empty state |
| 4.8 | Navigate to `prod.html` without ID parameter | ❌ | 1. Enter `prod.html` directly | Graceful error / empty state |
| 4.9 | Add to cart without being logged in | ✅ | 1. Not logged in 2. Add product to cart | Product added (cart is client-side) |
| 4.10 | Rapid double-click "Add to cart" | ❌ | 1. Double-click "Add to cart" | Only one product added or two rows — no crash |
| 4.11 | Browser back after product page | ✅ | 1. Click product 2. Press browser back | Returns to previous page with state preserved |
| 4.12 | Product price format | ✅ | 1. Observe price | Displays as `$<number>` (e.g. `$360`) |
