# 🎩 The Gabor Seboek Portfolio ("The Digital HQ")

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Coverage](https://img.shields.io/badge/Coverage-100%25-success?style=for-the-badge)
![A11y](https://img.shields.io/badge/WCAG-2.2_AA-blue?style=for-the-badge)
![Tech](https://img.shields.io/badge/Stack-React_|_Vite_|_TS-orange?style=for-the-badge)

> **"Where Exactitude Meets Craftsmanship."**

This isn't just a portfolio — it's a **Compliance-Ready, Agent-Native SPA** demonstrating Senior QA engineering and artisan craftsmanship in a single codebase. Built with an **"Elegant Steampunk"** aesthetic using Vanilla CSS. No frameworks. No excuses.

---

## 🚀 Elevator Pitch

Recruiters asking *"Can you code, test, and architect?"* → **Just run this repo.**

| Capability | Evidence |
|---|---|
| Zero-Config Reliability | Clones and runs instantly |
| Shift-Left Quality | A11y + linting baked into the pipeline |
| 360° Validation | Playwright E2E suite covering all CUJs |
| Agent-Native | Chrome MCP integration for live AI debugging |
| Production-Grade Agentic Infra | 8-skill autonomous agent system (see below) |

---

## 🛠 Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Core | React + TypeScript (Strict) | Type safety everywhere |
| Build | Vite | Instant feedback + optimized SPA bundle for Lighthouse 100/100 |
| i18n | react-i18next | EN / DE / HU |
| Styling | Vanilla CSS Modules + CSS Variables | We architect design systems, not hide behind Tailwind |
| Unit Testing | Vitest | Jest-compatible, fast |
| E2E | Playwright | Cross-browser, mobile + desktop |
| SEO | Open Graph, Twitter Cards, JSON-LD | Full structured data |

---

## 🔐 Data Integrity — The Zod Contract Strategy

Aesthetics are the face, but **Data Integrity** is the spine. We don't just use TypeScript for compile-time safety; we use **Zod** for runtime enforcement. This ensures that "Maker" creativity (adding new projects) never breaks "QA" stability (the SPA's core logic).

### The Three Primary Contracts (`src/data/types.ts`):
1.  **`ProjectDTOSchema`**: Guards project IDs (strict kebab-case), file paths (`/assets/thumb-*.webp`), and mandatory i18n keys.
2.  **`SEOMetadataSchema`**: Enforces Lighthouse-compliant title lengths (max 60) and description ranges (50-160).
3.  **`KpiDefinitionSchema`**: Validates the metrics structure, ensuring icons and color tokens remain within system bounds.

Every data entry in `src/data/` is parsed through these schemas at build-time and runtime. If a human adds an image with the wrong suffix or a title that's too long, the pipeline fails immediately. **Zero drift. Zero regression.**

---

## 🤖 The Agentic Infrastructure (The Crown Jewel)

This project runs a **production-grade autonomous agent system** — not a prompt in a text file, but a full skill-based architecture:

```
.agent/
  AGENT.md              ← Context-efficient router: maps intent → skill, enforces interview gates
  skills/
    accessibility-expert/     WCAG 2.2 AA — axe, Playwright, ESLint a11y
    design-system-expert/     CSS architecture, Steampunk palette, asset generation, Maker persona
    i18n-guardian/            Self-discovering locale sync across all languages and data sections
    lockscreen-qr-generator/  AI-composited QR lock screen wallpaper workflow
    qa-specialist/            TypeScript strictness, Zod DTOs, DoD pipeline (lint → unit → E2E)
    seo-expert/               SPA SEO, hreflang, Lighthouse, JSON-LD, SeoHead component logic
    skill-creator/            Generates new skills with built-in token efficiency rules
```

**Why this matters:** Each skill is independently loaded only when relevant — context efficiency is enforced by the router. New capabilities snap in without modifying any existing skill. The whole system is self-improving: `skill-creator` can generate and cross-check new skills.

---

## 🎥 Live Showcase
![Website Tour](public/assets/showcase_tour.webp)

---

## ⚡ Quick Start

```bash
git clone https://github.com/sebokgabor84/GaborPortfolio.git
cd GaborPortfolio && npm install && npx playwright install
npm run dev          # http://localhost:5173
```

**Verify competence:**
```bash
npm run lint         # 0 errors
npm test -- --run    # 20/20 unit pass
npm run test:e2e     # 32/32 E2E pass
npm run optimize:assets # Auto-compresses and generates Retina images via sharp
```

---

## 📂 Key References

| Topic | Location |
|---|---|
| Agent router | `AGENT.md` |
| Skill definitions | `.agent/skills/*/SKILL.md` |
| Debugging & MCP setup | `.agent/skills/qa-specialist/resources/debugging-guide.md` |
| Project & KPI data | `src/data/projects.ts`, `src/data/kpis.ts` |
| Zod contracts | `src/data/types.ts` |

---

## 📸 Attribution
- **Assets**: Generated via Nano Banana Pro — prompted for *"Elegant Steampunk, Copper, Carbon Fiber"*
- **Icons**: `react-icons`

---

> *Built with precision by Gabor Seboek. Tested by Robots. Approved by Humans.*
