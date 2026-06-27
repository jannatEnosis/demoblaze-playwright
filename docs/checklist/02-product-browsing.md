# Home Page / Product Browsing

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |
| 📱 | Responsive |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 3.1 | Home page loads with product list | ✅ | 1. Navigate to `index.html` | Products displayed in a card grid |
| 3.2 | Carousel auto-rotates | ✅ | 1. Observe carousel for 10 seconds | Slides advance automatically every few seconds |
| 3.3 | Click carousel "Previous" arrow | ✅ | 1. Click left arrow | Previous slide shown |
| 3.4 | Click carousel "Next" arrow | ✅ | 1. Click right arrow | Next slide shown |
| 3.5 | Carousel wraps after last slide | ✅ | 1. Click "Next" past last slide | Loops back to first slide |
| 3.6 | Carousel hidden on mobile (< 800px width) | 📱 | 1. Resize viewport to 375px | Carousel not displayed (CSS media query) |
| 3.7 | Click "Phones" category filter | ✅ | 1. Click "Phones" | Only phone products shown |
| 3.8 | Click "Laptops" category filter | ✅ | 1. Click "Laptops" | Only laptop products shown |
| 3.9 | Click "Monitors" category filter | ✅ | 1. Click "Monitors" | Only monitor products shown |
| 3.10 | Click "CATEGORIES" header | ✅ | 1. Click "CATEGORIES" text | No filtering / resets to all products |
| 3.11 | Switch between categories multiple times | ✅ | 1. Click Phones → Laptops → Monitors → Phones | Each filter works correctly |
| 3.12 | Click "Next" pagination button | ✅ | 1. On home page 2. Click "Next" | Next page of products loads |
| 3.13 | Click "Previous" pagination button | ✅ | 1. Go to page 2 2. Click "Previous" | Returns to page 1 |
| 3.14 | "Previous" disabled on page 1 | ❌ | 1. On page 1 2. Observe "Previous" | Button disabled, not clickable, or hidden |
| 3.15 | "Next" disabled on last page | ❌ | 1. Go to last page 2. Observe "Next" | Button disabled, not clickable, or hidden |
| 3.16 | Rapid click "Next" multiple times | ❌ | 1. Double-click "Next" | Only one page advance (no duplicate API calls) |
| 3.17 | Switch category while on page 2+ | ✅ | 1. Go to page 2 2. Click a different category | Resets to page 1 of new category |
| 3.18 | Product card displays name, price, description, image | ✅ | 1. Observe any product card | All four elements visible |
| 3.19 | Long product description truncated | ✅ | 1. Observe a card with long description | CSS `overflow: hidden` truncates — "See more" or ellipsis |
| 3.20 | All product images load | ✅ | 1. Scroll through product list | No broken image placeholders |
| 3.21 | Product link navigates to correct product page | ✅ | 1. Click a product card | URL changes to `prod.html?idp_=<id>` with correct product details |
| 3.22 | Empty category state (if no products) | ❌ | If a category returns 0 products | Empty state message or no cards displayed |
