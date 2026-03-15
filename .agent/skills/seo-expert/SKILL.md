---
name: seo-expert
description: Enforces Technical SEO, Lighthouse Performance optimization, and Static Site Generation (vite-ssg) rules. Use this skill when configuring meta tags, optimizing loading speed (LCP/CLS), structured data, and internationalization (hreflang) maps.
---

# SEO & Lighthouse Performance Expert Skill

Single source of truth for optimizing GaborPortfolio's rendering strategy, Lighthouse scores, and technical SEO implementation.

*(Note: WCAG/A11y → `accessibility-expert`. i18n key sync and locale file content → `i18n-guardian`. Image format/size → `design-system-expert`.)*

## When to use this skill
- Editing `<head>` elements (meta tags, Open Graph, Twitter Cards)
- Implementing or updating `hreflang` maps
- Optimizing for Lighthouse (LCP, CLS, font preloading)
- Configuring Vercel builds or writing SEO-focused tests

## How to use it

### 1. Rendering Architecture
- **Use `vite-ssg`**: Required for Google CWV compliance and immediate crawler indexing. No standard SPA.
- **Build command**: `package.json` must use `"build": "vite-ssg build"`.

### 2. Lighthouse Performance (Target: 100/100)

| Metric | Rule |
|---|---|
| **LCP** | Preload primary font in `<head>`. Use React 19 `preload()` API for hero images. |
| **CLS** | Explicit `width`/`height` on all images. Serve `webp` or `avif` only. |
| **Mobile** | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` must be in static `index.html`. All interactive elements: min 48×48px touch target. |

### 3. Technical SEO

| Area | Rule |
|---|---|
| **hreflang** | Hardcode canonical + alternates in `<head>` for `en`, `de`, `hu`, and `x-default`. Prevents duplicate content penalties. |
| **JSON-LD** | Inject `Person` schema to trigger Google Knowledge Graph — include QA, Brewer, Beekeeper, and social links. |
| **Meta tags** | Title ≤ 60 chars. Description ≤ 155 chars. `og:` and `twitter:` tags fully populated. |
| **Indexing** | Public `robots.txt` pointing to a `sitemap.xml` generated at build time. |

### 4. Shift-Left SEO QA

| Layer | Mechanism | Assertion |
|---|---|---|
| TypeScript | `PageSeoProps` interface on every route component | Guarantees `title`, `description`, `canonicalUrl`, `locale` are passed to `<SeoHead />` |
| Unit (Vitest) | Test `<SeoHead />` in isolation | Valid DOM elements produced from `PageSeoProps` |
| E2E (Playwright) | Assert compiled SSG output | `<title>` and `hreflang` tags present in rendered DOM |
## Implicit Loading (Handshakes)
This skill should almost always be loaded alongside:
- `design-system-expert`: Whenever assets (images/videos) are added or layouts change (CLS/LCP concerns).
- `i18n-guardian`: Specifically for `hreflang` verification when new locales or page sections are added.
