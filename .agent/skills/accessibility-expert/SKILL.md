---
name: accessibility-expert
description: Enforces WCAG 2.2 AA compliance, semantic HTML, ARIA attributes, and accessible automated testing (Axe/Vitest). Use this skill when building or refactoring UI components, writing UI tests, or addressing linting/Axe DevTools errors.
---

# Accessibility (A11y) Expert Skill

This skill serves as the foundational rulebook for strictly enforcing accessibility compliance on the GaborPortfolio. It dictates semantic HTML practices, ARIA attribute usage, and strict adherence to WCAG 2.2 AA standards based on Axe DevTools telemetry and "Shift-Left" quality assurance.

*(Note: Technical SEO, Rendering (SSG), and Lighthouse Performance are handled by separate specialized skills.)*

## When to use this skill
- When building or refactoring interactive elements (buttons, links, forms).
- When writing layout structures (headings, images).
- When configuring or fixing ESLint (`eslint-plugin-jsx-a11y`), Vitest, or Playwright a11y checks.
- When debugging Axe DevTools violations or addressing a "Shift-Left Quality" failure.

## How to use it
When reviewing, writing, or testing code, enforce the following core principles without exception:

### 1. Semantic Structure & Heading Hierarchy
- **The "One `<h1>`" Rule**: Every page (or pre-rendered route) must have exactly one `<h1>` element that accurately describes the primary purpose of the page. Visually hidden `<h1>` tags (e.g., `className="visually-hidden"`) are acceptable if the visual hero content serves the purpose.
- **Strictly Sequential Headings**: Headings must never skip levels (e.g., do not jump from `<h2>` directly to `<h4>`). If a visual design requires a smaller font, use CSS classes on the correct semantic tag.
- **Keyboard Navigation**: Implement skip-links (`<a href="#main-content">`) to allow keyboard users to bypass repetitive navigation.

### 2. Interactive Elements: Discernible Text & Semantics
- **Icon Links**: Links containing only an `<svg>` (like social links) are invisible to screen readers. Always provide discernible text using `aria-label` on the anchor tag, and add `aria-hidden="true"` and `focusable="false"` to the embedded `<svg>`.
- **Button Triggers**: Any element that performs a click action (like the video trigger on a ProjectCard facade) MUST be a semantic `<button>` with an appropriate `aria-label`. Do not attach `onClick` to `div` or `span` elements without exhaustive ARIA roles and keyboard event handlers.

### 3. Visual & Media Accessibility
- **Color Contrast**: Enforce WCAG 2.2 AA requirements: a contrast ratio of at least 4.5:1 for normal text.
- **Image `alt` Attributes**: Every `<img>` tag must have an `alt` attribute.
  - *Informative Images*: Must have a concise, descriptive `alt`.
  - *Decorative Images*: Must have an empty `alt=""` and `aria-hidden="true"`.

## Shift-Left Quality Assurance (Automation)
Accessibility regressions must be caught instantly in the IDE, unit tests, or CI/CD pipelines before reaching the build.

### A. Static Analysis (ESLint)
The project utilizes a "zero-tolerance" policy via `eslint-plugin-jsx-a11y`. Specific warnings (missing alt text, invalid ARIA props, anchor missing content) are escalated to hard errors in the ESLint configuration. 

### B. Component-Level Unit Testing (Vitest + axe)
Do not rely solely on full-page E2E testing for accessibility. Test components in total isolation to ensure complex interactive elements are accessible.
*Use `vitest-axe`*: Write unit tests specifically asserting `expect(results).toHaveNoViolations();` after running `axe(container)` on the rendered component.

### C. Playwright CI/CD Enforcement (E2E Integration)
Once unit tests pass, use `@axe-core/playwright` in the E2E suite to guarantee no contextual layout errors exist across the fully rendered page. The test suite must assert `expect(accessibilityScanResults.violations).toEqual([]);` using `['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']` tags.

---
**Enforcement Directive**: If the current codebase violates these rules, refactor it immediately before proceeding with new feature development. Zero lint errors (including WCAG 2.2) is a mandatory Definition of Done.
