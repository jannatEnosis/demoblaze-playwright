# Cart

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 5.1 | Cart page displays all added products | ✅ | 1. Add 2+ products 2. Navigate to cart | Table rows with product pic, title, price |
| 5.2 | Cart total equals sum of all product prices | ✅ | 1. Add products with known prices 2. Check total | Total = sum of all prices |
| 5.3 | Delete a product from cart (click "Delete" link) | ✅ | 1. In cart 2. Click "Delete" on a row | Row removed, total recalculated |
| 5.4 | Delete all products from cart | ❌ | 1. Delete all items one by one | Empty cart, total = 0 |
| 5.5 | "Place Order" with empty cart | ❌ | 1. Empty cart 2. Click "Place Order" | Modal may show with total 0; should handle gracefully or block |
| 5.6 | Cart persists after navigating away and back | ✅ | 1. Add items 2. Go to home 3. Return to cart | Items retained (sessionStorage) |
| 5.7 | Cart persists after page refresh (F5) | ✅ | 1. Add items 2. Refresh 3. Check cart | Items retained (sessionStorage) |
| 5.8 | Cart state after log out then log in | ✅ | 1. Add items while logged in 2. Log out 3. Log in 4. Check cart | Document expected behavior (preserve or clear) |
| 5.9 | Cart total displays "$0" when empty | ✅ | 1. Empty cart 2. Observe total | "0" shown in total panel |
| 5.10 | Add 10+ different products to cart | ✅ | 1. Add 10 products 2. View cart | All items listed, scrollable, total correct |
| 5.11 | Same product added 5 times | ❌ | 1. Add same product 5 times | 5 rows or quantity increment — document expected |
| 5.12 | Total after deleting one product | ✅ | 1. Add 3 products 2. Delete 1 3. Check total | Total = sum of remaining 2 products |
| 5.13 | Cart accessible via top nav "Cart" link | ✅ | 1. Click "Cart" in navbar | Navigates to cart page |
| 5.14 | "Place Order" button visible when cart has items | ✅ | 1. Add item 2. Go to cart | "Place Order" button displayed |
