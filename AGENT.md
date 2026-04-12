# GaborPortfolio Agent Router

This is the primary entrypoint. Read this first every session to understand the project context and route to the correct skill(s).

## Project Identity
**GaborPortfolio** — A multilingual (EN/DE/HU) SPA (Client-Side Rendering) showcase site for a QA Engineer & Artisan Maker. Aesthetic: "Fancy Steampunk Futuristic Elegant Dark Mode". Stack: React + TypeScript + Vite + Vitest + Playwright.

## Context Efficiency Rules
Load only the skills the current task genuinely needs. Skill files cost tokens on every load.

| Situation | Action |
|---|---|
| Task touches one clear domain | Load only that skill |
| Task touches multiple domains | Load all matching skills — cross-links inside each skill resolve conflicts |
| Uncertainty about which skill applies | Re-read the trigger keywords in the routing table below before loading |
| Read-only question (no code change) | Answer from memory if possible; only load a skill if the answer requires its rules |

**Quality is non-negotiable** — never skip a required skill to save tokens. The efficiency goal is to avoid loading *irrelevant* skills, not to shortcuts QA or correctness.

### 🛡️ Mandatory Pre-flight Check
Before performing any task, the Agent MUST:
1.  **State loaded skills**: Explicitly list which skills from the Routing Table were loaded.
2.  **Justify trigger**: Explain *why* each skill was loaded based on keywords or context.
3.  **UI Work Load-out**: If the task involves a UI component or page layout, ALWAYS consider loading the "Core Trio": `design-system-expert` + `accessibility-expert` + `i18n-guardian`.
4.  **Check for missing skills**: If no skill fits, trigger `skill-creator` immediately.

## Skill Routing Table

| Trigger keywords / context | Load skill |
|---|---|
| CSS, layout, mobile, overflow, flexbox, grid, image, asset, thumbnail, Steampunk, animation, content copy, hobby description, artisan, Mission Control, Zero-Selector, rAF, 3D Carousel, 60fps, IntersectionObserver, refactor component, new feature | `design-system-expert` |
| SEO, meta, Open Graph, hreflang, Lighthouse, LCP, CLS, JSON-LD, robots, sitemap, SPA SEO, performance, page update, asset change, loading speed, rendering | `seo-expert` |
| WCAG, accessibility, aria, a11y, axe, screen reader, contrast, keyboard, skip-link, UI refactor, component logic, html structure, interactive element | `accessibility-expert` |
| translation, locale, i18n, language, EN/DE/HU, titleKey, descKey, labelKey, new language, text change, copy update, data change | `i18n-guardian` |
| test, lint, TypeScript, E2E, Playwright, Vitest, unit test, type error, DoD, commit, push, build | `qa-specialist` |

### 🔄 Multi-Skill "Combo" Triggers
When the task involves these high-level actions, LOAD ALL listed skills immediately:

| Action | Skills to Load |
|---|---|
| **New Component / Page** | `design-system-expert` + `accessibility-expert` + `i18n-guardian` + `seo-expert` |
| **Refactoring UI Logic** | `design-system-expert` + `accessibility-expert` + `qa-specialist` |
| **Adding New Project/KPI** | `design-system-expert` + `i18n-guardian` + `seo-expert` |
| new skill, refactor rules, legacy prompt, create agent file | `skill-creator` |
| lock screen, wallpaper, QR code, mobile background | `lockscreen-qr-generator` |

### 🚨 Missing Skill Fallback
If no skill in the Routing Table matches the User Intent:
1.  **STOP** immediately.
2.  Do not guess or assume a workflow.
3.  Suggest creating a new skill or refactoring existing ones via `skill-creator`.
4.  Wait for user approval before proceeding.

> Multiple skills can be active simultaneously. Load all that match; resolve jurisdiction conflicts via each skill's cross-link notes.

## Mandatory Actions (Always)

| Event | Action |
|---|---|
| New project or KPI being added | Ask first: **Story** (1-liner), **Technical Details** (tools/methods), **KPI** (metric + unit), **Imagery** (thumbnail concept) — no files before answers |
| Any code change | `npm run lint` — 0 errors before commit |
| Any component change | `npm test -- --run` | 20/20 pass |
| Before push | `npm run test:e2e` | 32/32 pass |
| New project or KPI added | Update all locale files (EN, DE, HU) |
| SEO change | Verify JSON-LD in `index.html` |
| New image asset | Verify `webp`, ≤ 200 KB, stored in `public/assets/` |

## Key File Map

| What you're changing | Where to look |
|---|---|
| Agent router | `AGENT.md` |
| Skill definitions | `.agent/skills/*/SKILL.md` |
| Project data / KPIs | `src/data/projects.ts`, `src/data/kpis.ts` |
| Translations | `src/i18n/locales/en.json`, `de.json`, `hu.json` |
| Zod schemas | `src/data/types.ts` |
| SEO head tags | `src/components/Common/SeoHead.tsx` |
| Components | `src/components/` |
| E2E tests | `tests/` |
| Images / assets | `public/assets/` |
