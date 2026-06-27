# demoblaze_playwright

Playwright-based E2E test suite for [demoblaze.com](https://www.demoblaze.com/).

## Commands

```bash
npx playwright test                    # all tests, all browsers
npx playwright test --project=chromium # single browser
npx playwright test <file>             # single file
npx playwright show-report             # view HTML report
npx playwright install                 # install browsers
```

**Config is at `src/config/playwright.config.ts`** — `npx playwright test` (no flag) will NOT find it automatically. Always pass `--config=src/config/playwright.config.ts` or set `PLAYWRIGHT_CONFIG` env.

## CI (`.github/workflows/playwright.yml`)

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

CI runs on push/PR to `main`/`master`. Ubuntu, Node LTS. Workers=1, retries=2, forbidOnly enabled.

## Key config defaults

| Setting | Value |
|---|---|
| testDir | `./src/tests` |
| baseURL | `https://www.demoblaze.com/` |
| reporter | html |
| trace | on-first-retry |
| screenshot | on |
| browsers | chromium, firefox, webkit |
| parallel | fullyParallel: true (workers: 1 on CI) |

## Known state

- **Page objects** (`src/pages/`) are stubs — `HomePage.ts` is empty, `LoginPage.ts` is a skeleton.
- **`src/data/`, `src/reports/`, `src/utils/`** are empty — no test fixtures, data factories, or helpers exist yet.
- **`local.env`** is empty; dotenv is commented out in config.
- **No tsconfig**, **no lint/format config** — Playwright's own TS handling is used.
- **`requirements.md`** is empty placeholder.
- The stub test `example.spec.ts` navigates to `playwright.dev`, **not** to demoblaze — do not treat it as a reference for the real app under test.
