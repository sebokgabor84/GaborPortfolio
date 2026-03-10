---
name: seo-expert
description: Enforces Technical SEO, Lighthouse Performance optimization, and Static Site Generation (vite-ssg) rules. Use this skill when configuring meta tags, optimizing loading speed (LCP/CLS), structured data, and internationalization (hreflang) maps.
---

# SEO & Lighthouse Performance Expert Skill

This skill serves as the single source of truth for optimizing the GaborPortfolio. It dictates the architectural rendering strategy, strict Lighthouse performance standards (Mobile & Desktop), and technical SEO implementations.

*(Note: Accessibility (WCAG/A11y) is handled by the dedicated `accessibility-expert` skill module.)*

## When to use this skill
- When building layouts or editing `<head>` elements (Meta tags, Open Graph, Twitter Cards).
- When implementing internationalization (managing `hreflang` rules).
- When optimizing for Lighthouse (Image formats, font preloading, viewport scaling, CLS/LCP metrics).
- When configuring Vercel builds or writing SEO-focused Unit/E2E tests.

## How to use it
When modifying the application, enforce the following core SEO and performance principles:

### 1. Core Rendering Architecture: Static Site Generation (SSG)
- **Use `vite-ssg`**: To pass Google's Core Web Vitals (CWV) and ensure immediate crawler indexing without relying on JavaScript execution, the application must use Static Site Generation via `vite-ssg`. Do not build a standard SPA.
- **Build Command**: Ensure `package.json` uses `"build": "vite-ssg build"`.

### 2. Lighthouse Performance Metrics (Desktop & Mobile)
Maintain a 100/100 Lighthouse score by strictly enforcing:
- **LCP (Largest Contentful Paint)**: 
  - Stop font-swapping layout shifts by preloading the primary font in the `<head>`.
  - Utilize React 19's `preload` API for critical hero background images directly in the component (e.g., `preload('url.webp', { as: 'image' })`).
- **CLS (Cumulative Layout Shift)**:
  - Provide explicit `width` and `height` attributes or CSS constraints to reserve space before images download.
  - Serve all images exclusively in optimized `WebP` or `AVIX` formats.
- **Mobile Metrics**: 
  - The `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag must be present in the static `index.html`.
  - Ensure all interactive elements have a minimum touch target size of 48x48px (or sufficient padding).

### 3. Technical SEO Implementation
- **Trilingual Targeting (`hreflang`)**: Prevent "Duplicate Content" penalties by explicitly hardcoding canonical and alternate tags in the `<head>` for `en`, `de`, `hu`, and `x-default` mapping.
- **Structured Data (JSON-LD)**: Inject the `Person` schema to trigger Google's Knowledge Graph, mapping the unique skill set (QA, Brewer, Beekeeper, etc.) and social links.
- **Meta Tags**: 
  - Title strings must be under 60 characters.
  - Descriptions must be under 155 characters.
  - Open Graph (`og:`) and Twitter Card (`twitter:`) tags must be fully populated.
- **Indexing**: A public `robots.txt` must exist, pointing to a `sitemap.xml` generated during the build step.

## Shift-Left Quality Assurance (SEO Automation)
SEO rules must be enforced at compile-time and unit-test time instead of relying entirely on E2E testing.

### A. TypeScript Strictness for Page Components
Every route component must adhere to a strict interface (`PageSeoProps`) that guarantees essential SEO metadata (`title`, `description`, `canonicalUrl`, `locale`) is passed down to the `<SeoHead />` component.

### B. Component-Level Unit Testing (Vitest)
Write highly isolated unit tests (using Vitest and React Testing Library) to ensure the `<SeoHead />` component correctly translates `PageSeoProps` into valid DOM elements prior to the SSG build.

### C. Playwright CI/CD Enforcement (E2E Integration)
As the final safety net, E2E tests must verify that the SSG output resulted in actual, readable tags (e.g., asserting that `<title>` and `hreflang` tags exist in the compiled DOM via `@playwright/test`).
