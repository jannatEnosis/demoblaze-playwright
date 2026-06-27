# Place Order / Checkout

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |
| 🔒 | Security |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 6.1 | Place order with all valid fields | ✅ | 1. Add item to cart 2. Click "Place Order" 3. Fill all fields 4. Click "Purchase" | "Thank you for your purchase!" popup with Id, Amount, Card Number, Name, Date |
| 6.2 | Order confirmation popup shows all required fields | ✅ | 1. Complete purchase 2. Observe confirmation | Id, Amount, Card Number, Name, Date all present |
| 6.3 | Click "OK" on confirmation popup | ✅ | 1. Purchase complete 2. Click "OK" | Popup closes, cart emptied, redirect to home |
| 6.4 | Place order with empty Name | ❌ | 1. Fill all fields except Name 2. Click Purchase | Alert / rejection (field-level validation) |
| 6.5 | Place order with empty Country | ❌ | 1. Fill all fields except Country | Alert / rejection |
| 6.6 | Place order with empty City | ❌ | 1. Fill all fields except City | Alert / rejection |
| 6.7 | Place order with empty Credit Card | ❌ | 1. Fill all fields except Credit Card | Alert / rejection |
| 6.8 | Place order with empty Month | ❌ | 1. Fill all fields except Month | Alert / rejection |
| 6.9 | Place order with empty Year | ❌ | 1. Fill all fields except Year | Alert / rejection |
| 6.10 | Place order with all fields empty | ❌ | 1. Open modal 2. Click "Purchase" | Alert / rejection |
| 6.11 | Credit card field with alphabetic characters | ❌ | 1. Enter "abcdefgh" in Credit Card | Alert / rejection |
| 6.12 | Credit card with special characters | ❌ | 1. Enter `!@#$%^&*()` in Credit Card | Alert / rejection |
| 6.13 | Month value > 12 | ❌ | 1. Enter "13" or "20" in Month | Alert / rejection |
| 6.14 | Month value = 0 or negative | ❌ | 1. Enter "0" in Month | Alert / rejection |
| 6.15 | Year value in the past | ❌ | 1. Enter "2020" in Year | Alert / rejection |
| 6.16 | Year value far in the future (e.g. 9999) | ❌ | 1. Enter "9999" in Year | Handled gracefully |
| 6.17 | Total displayed in modal matches cart total | ✅ | 1. Open Place Order modal | "Total: <amount>" matches cart total |
| 6.18 | Close modal without purchasing | ✅ | 1. Open Place Order 2. Click "Close" or "X" | Modal dismissed, cart unchanged |
| 6.19 | Purchase with very long Name (500+ chars) | ❌ | 1. Enter 500+ char name | Truncated or rejected |
| 6.20 | XSS in Name field (`<script>alert(1)</script>`) | 🔒 | 1. Enter script tag in Name 2. Purchase | Sanitized — script not executed |
| 6.21 | Order confirmation amount format | ✅ | 1. Purchase 2. Observe Amount field | Correct decimal format |
| 6.22 | Duplicate purchase submission (double-click) | ❌ | 1. Click "Purchase" twice rapidly | Only one order created |
