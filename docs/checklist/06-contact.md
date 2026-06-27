# Contact Modal

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
| 7.1 | Send message with valid Email, Name, Message | ✅ | 1. Click "Contact" 2. Fill all 3 fields 3. Click "Send message" | "Thanks for the message!!" alert |
| 7.2 | Send message with invalid email format | ❌ | 1. Enter "notanemail" in Contact Email | Alert / rejection |
| 7.3 | Send message with empty Email | ❌ | 1. Leave Email blank | Alert / rejection |
| 7.4 | Send message with empty Name | ❌ | 1. Leave Name blank | Alert / rejection |
| 7.5 | Send message with empty Message | ❌ | 1. Leave Message blank | Alert / rejection |
| 7.6 | Send message with all fields empty | ❌ | 1. Open modal 2. Click "Send message" | Alert / rejection |
| 7.7 | Close modal without sending | ✅ | 1. Open Contact 2. Click "Close" | Modal dismissed, no message sent |
| 7.8 | XSS in Message field | 🔒 | 1. Enter `<script>alert(1)</script>` in Message | Sanitized |
| 7.9 | Very long message (1000+ chars) | ❌ | 1. Enter 1000+ char message | Truncated or rejected |
