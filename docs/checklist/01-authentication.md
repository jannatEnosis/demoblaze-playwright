# Authentication — Sign Up & Log In

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |
| ❌ | Negative / error / edge case |
| 🔒 | Security |
| ♿ | Accessibility |

---

## Sign Up

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 1.1 | Sign up with valid new username & password | ✅ | 1. Click "Sign up" 2. Enter unused username + password 3. Click "Sign up" | "Sign up successful." alert appears |
| 1.2 | Sign up with an already-registered username | ❌ | 1. Sign up a user 2. Log out 3. Sign up again with same credentials | "This user already exist." alert |
| 1.3 | Sign up with empty username | ❌ | 1. Click "Sign up" 2. Leave username blank 3. Enter valid password 4. Click "Sign up" | Rejected — error shown or no API call made |
| 1.4 | Sign up with empty password | ❌ | 1. Click "Sign up" 2. Enter valid username 3. Leave password blank 4. Click "Sign up" | Rejected — error shown or no API call made |
| 1.5 | Sign up with both fields empty | ❌ | 1. Click "Sign up" 2. Click "Sign up" in modal | Rejected |
| 1.6 | Sign up with whitespace-only username | ❌ | 1. Enter `"   "` as username 2. Valid password | Treated as empty / rejected |
| 1.7 | Sign up with HTML/JS injection in username | 🔒 | 1. Enter `<script>alert(1)</script>` as username | Sanitized — script not executed, user created safely or rejected |
| 1.8 | Sign up with SQL injection in username | 🔒 | 1. Enter `' OR 1=1 --` as username | Sanitized / rejected |
| 1.9 | Sign up with very long username (256+ chars) | ❌ | 1. Enter 256+ char username 2. Valid password | Truncated or rejected |
| 1.10 | Sign up with very long password (256+ chars) | ❌ | 1. Enter valid username 2. 256+ char password | Truncated or rejected |
| 1.11 | Sign up with unicode / emoji in username | ❌ | 1. Enter `😀🔥test` as username | Handled gracefully (rejected or accepted) |
| 1.12 | Press "Close" button in sign-up modal | ✅ | 1. Open sign-up 2. Fill fields 3. Click "Close" | Modal dismisses, no user created |
| 1.13 | Press "X" button in sign-up modal | ✅ | 1. Open sign-up 2. Click "X" | Modal dismisses, no user created |
| 1.14 | Press Escape key in sign-up modal | ♿ | 1. Open sign-up 2. Press Escape | Modal dismisses |
| 1.15 | Sign up while already logged in | ❌ | 1. Log in 2. Click "Sign up" | Should be hidden or result in logout-then-signup |
| 1.16 | Rapid double-click on "Sign up" button | ❌ | 1. Fill fields 2. Double-click "Sign up" | Only one user created (no duplicate API calls) |
| 1.17 | Visual state of "Sign up" button during API call | ✅ | 1. Click "Sign up" 2. Observe button | Should show loading state or be disabled until response |
| 1.18 | Sign up with password as plain text visible | ❌ | Check the password input `type` attribute | Should be `type="password"` (masked) |

---

## Log In

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 2.1 | Log in with valid credentials | ✅ | 1. Sign up a user 2. Log out 3. Log in with same credentials | "Welcome `<username>`" displayed, "Log out" visible, "Log in" hidden |
| 2.2 | Log in with wrong password | ❌ | 1. Enter existing username 2. Enter incorrect password | "Wrong password." alert |
| 2.3 | Log in with non-existent username | ❌ | 1. Enter never-registered username 2. Any password | "User does not exist." alert |
| 2.4 | Log in with empty username | ❌ | 1. Leave username blank 2. Enter password | Rejected |
| 2.5 | Log in with empty password | ❌ | 1. Enter username 2. Leave password blank | Rejected |
| 2.6 | Log in with both fields empty | ❌ | 1. Open login modal 2. Click "Log in" | Rejected |
| 2.7 | Log in with whitespace-padded credentials | ❌ | 1. Enter `" validuser "` with spaces 2. Correct password | Should not accidentally log in (unless trimmed) |
| 2.8 | SQL injection in username field | 🔒 | 1. Enter `' OR '1'='1` as username | Rejected safely, no unauthorized access |
| 2.9 | Log in after session expires | ❌ | 1. Log in 2. Wait for token expiry 3. Perform action | Redirected to login or 401 handled gracefully |
| 2.10 | Log out | ✅ | 1. Log in 2. Click "Log out" | Session cleared, UI reverts to "Log in" / "Sign up" |
| 2.11 | Log out and verify cart state | ✅ | 1. Add items to cart 2. Log out 3. Log in 4. Check cart | Cart persists or clears per design (document expected behavior) |
| 2.12 | Refresh page after login | ✅ | 1. Log in 2. Refresh (F5) | Session persists (if token/cookie-based), user stays logged in |
| 2.13 | Close login modal without logging in | ✅ | 1. Open login 2. Click "Close" or "X" | Modal dismisses, no session created |
| 2.14 | Navigate directly to URL while logged in | ✅ | 1. Log in 2. Type `index.html` in address bar 3. Enter | Session preserved |
| 2.15 | Log in with browser autofill credentials | ✅ | 1. Saved credentials 2. Use autofill 3. Click "Log in" | Successful login |
| 2.16 | Visual state of "Log in" button during API call | ✅ | 1. Click "Log in" 2. Observe button | Should show loading state or be disabled |
