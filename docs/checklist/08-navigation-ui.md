# Navigation & UI

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| 📱 | Responsive / cross-browser |
| ♿ | Accessibility |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 9.1 | Click "Home" nav link | ✅ | 1. From any page 2. Click "Home" | Returns to `index.html` |
| 9.2 | Click "PRODUCT STORE" brand link | ✅ | 1. From any page 2. Click brand logo + text | Returns to `index.html` |
| 9.3 | Mobile hamburger menu on small viewport (375px) | 📱 | 1. Resize to 375px width | Hamburger icon visible; menu items collapsed |
| 9.4 | Expand hamburger menu on mobile | 📱 | 1. Click hamburger | Menu items expand vertically |
| 9.5 | Responsive layout on tablet (768px) | 📱 | 1. Resize to 768px width | Content reflows properly, no horizontal scroll |
| 9.6 | Responsive layout on desktop (1920px) | 📱 | 1. Resize to 1920px width | Full layout with proper spacing |
| 9.7 | Footer content displayed correctly | ✅ | 1. Scroll to bottom | About Us section, Get in Touch (address, phone, email), copyright notice |
| 9.8 | Page title is "STORE" | ✅ | 1. Check browser tab | Title reads "STORE" |
| 9.9 | Navbar gradient background | ✅ | 1. Observe navbar | Purple-to-cyan gradient, white text |
| 9.10 | Active nav link highlighting | ✅ | 1. Observe "Home" link on home page | Has `(current)` sr-only span or active styling |
| 9.11 | Tab order through nav links | ♿ | 1. Press Tab repeatedly | Focus moves: Home → Contact → About us → Cart → Log in → Sign up |
| 9.12 | Modals close on Escape key | ♿ | 1. Open any modal 2. Press Escape | Modal dismisses |
| 9.13 | All images have meaningful alt text | ♿ | 1. Inspect images with a screen reader or check `alt` attrs | Images have descriptive alt text |
