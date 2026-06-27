# About Us Modal

---

## Legend

| Icon | Meaning |
|------|---------|
| ✅ | Positive (happy path) |

---

| # | Test | Type | Steps | Expected Result |
|---|------|------|-------|-----------------|
| 8.1 | Open About Us modal | ✅ | 1. Click "About us" | Modal opens with video player element |
| 8.2 | Video player controls visible | ✅ | 1. Open About Us | Play/pause, volume, fullscreen controls present |
| 8.3 | Click play on video | ✅ | 1. Open About Us 2. Click play | Video begins playing (if source is available) |
| 8.4 | Close About Us modal while video is playing | ✅ | 1. Start video 2. Click "Close" | Video stops, modal dismisses |
| 8.5 | Close About Us with "X" button | ✅ | 1. Open About Us 2. Click "X" | Modal dismisses |
| 8.6 | Video loads with poster image | ✅ | 1. Open About Us | Poster `imgs/front.jpg` displayed before play |
