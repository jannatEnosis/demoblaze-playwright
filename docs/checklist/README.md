# Demoblaze.com — QA Test Checklist

**Site:** https://www.demoblaze.com/  
**Author:** Senior QA Engineer  
**Last updated:** 2026-06-27

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |
| 🔒 | Security |
| ♿ | Accessibility |
| 📱 | Responsive / cross-browser |
| ⚡ | Performance |
| 🌐 | Cross-browser |

---

## Checklist files

| # | File | Feature | Tests |
|---|------|---------|-------|
| 1 | [01-authentication.md](./01-authentication.md) | Sign Up & Log In | 34 |
| 2 | [02-product-browsing.md](./02-product-browsing.md) | Home Page / Product Browsing | 22 |
| 3 | [03-product-detail.md](./03-product-detail.md) | Product Detail Page | 12 |
| 4 | [04-cart.md](./04-cart.md) | Cart | 14 |
| 5 | [05-place-order.md](./05-place-order.md) | Place Order / Checkout | 22 |
| 6 | [06-contact.md](./06-contact.md) | Contact Modal | 9 |
| 7 | [07-about-us.md](./07-about-us.md) | About Us Modal | 6 |
| 8 | [08-navigation-ui.md](./08-navigation-ui.md) | Navigation & UI | 13 |
| 9 | [09-security.md](./09-security.md) | Security | 6 |
| 10 | [10-performance.md](./10-performance.md) | Performance | 5 |
| 11 | [11-cross-browser.md](./11-cross-browser.md) | Cross-Browser Compatibility | 7 |
| 12 | [12-data-integrity.md](./12-data-integrity.md) | Data Integrity | 4 |

**Total: 154 test cases**

---

## Suggested execution order

| Phase | Scope | Files | Est. effort |
|-------|-------|-------|-------------|
| **P0 — Smoke** | Core happy path across all features | 01, 02, 03, 04, 05 (✅ only) | 30 min |
| **P1 — Functional positive** | All remaining ✅ tests | All files | 2 hours |
| **P2 — Negative & edge** | All ❌ tests | All files | 3 hours |
| **P3 — Security** | All 🔒 tests | 01, 05, 06, 09 | 1 hour |
| **P4 — UI / responsive / a11y** | All 📱 ♿ tests | 02, 08 | 1.5 hours |
| **P5 — Performance** | All ⚡ tests | 10 | 1 hour |
| **P6 — Cross-browser** | All 🌐 tests × 3 browsers | 11 | 3 hours |

**Total estimated manual execution:** ~12 hours (1 person)

---

## API reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `https://api.demoblaze.com/signup` | POST | Register new user |
| `https://api.demoblaze.com/login` | POST | Authenticate user |
| `https://api.demoblaze.com/entries` | GET | List all products |
| `https://api.demoblaze.com/entries/<id>` | GET | Single product details |
| `https://api.demoblaze.com/addtocart` | POST | Add item to cart (server-side) |
| `https://api.demoblaze.com/viewcart` | POST | View cart contents (server-side) |
| `https://api.demoblaze.com/deleteitem` | POST | Remove item from cart |
| `https://api.demoblaze.com/deletecart` | POST | Clear entire cart |

> **Note:** The front-end also uses `sessionStorage` for client-side cart management. Server-side calls may be for persistence across sessions.
