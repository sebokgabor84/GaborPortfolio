# 🎩 The Gabor Seboek Portfolio ("The Digital HQ")

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Coverage](https://img.shields.io/badge/Coverage-100%25-success?style=for-the-badge)
![A11y](https://img.shields.io/badge/WCAG-2.2_AA-blue?style=for-the-badge)
![Tech](https://img.shields.io/badge/Stack-React_|_Vite_|_TS-orange?style=for-the-badge)

> **"Where Exactitude Meets Craftsmanship."**

Welcome to the **Monorepo of Competence**. This isn't just a portfolio; it's a **Compliance-Ready, Single-Page Application** designed to demonstrate "Senior QA Specialist" capabilities in a live environment.

It features an **"Elegant Steampunk"** aesthetic (CSS Variables, no frameworks) and acts as a dashboard for my dual life: **High-Tech QA Automation** and **Old-World Craftsmanship**.

---

## 🚀 The "Elevator Pitch" (Why This Codebase Matters)

Recruiters asking "Can you code/test/architect?" --> **Just run this repo.**

*   **Zero-Config Reliability**: Clones and runs instantly.
*   **Shift-Left Quality**: Accessibility (a11y) and Linting strictness are baked into the build pipeline.
*   **360-Degree Validation**: Includes a robust **Playwright E2E Suite** covering Critical User Journeys (CUJs).
*   **Agent-Native**: Built with a "DebugGuide" component that enables AI Agents (via Chrome MCP) to debug the site in real-time.

## 🎥 Live Showcase (30s Tour)
Watch the "Elegant Steampunk" design in action (Smooth Scroll & Video Facade Pattern):
![Website Tour Review](public/assets/showcase_tour.webp)

---

## 🛠 The "Stainless Steel" Tech Stack

We chose tools that scream **reliability** and **performance**:

*   **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode Enabled).
*   **Build System**: [Vite](https://vitejs.dev/) (Next-gen frontend tooling).
*   **Internationalization**: Multi-language support (English, German, Hungarian) via `react-i18next`.
*   **SEO**: Open Graph, Twitter Cards, JSON-LD structured data, semantic HTML.
*   **Styling**: **Vanilla CSS Modules** + CSS Variables. (We don't hide behind Tailwind; we architect our own Design Systems).
*   **Testing (The Crown Jewel)**:
    *   **Unit**: [Vitest](https://vitest.dev/) (Jest-compatible).
    *   **E2E**: [Playwright](https://playwright.dev/) (Cross-browser, Mobile/Desktop validation).
*   **DX (Developer Experience)**: Prettier (Auto-format) + ESLint (Standard + Accessibility).

---

## 🕹 Features & Architecture

### 1. The "Cockpit" Dashboard
A visual "Mission Control" displaying real-time (mocked) metrics found in `src/components/Cockpit`.

We use a **Facade Pattern** for video embedding in `src/components/ProjectSection`.
*   *Optimization*: High-Res GenAI Thumbnails load first. YouTube Iframe only loads on interaction (`onClick`).
*   *A11y*: Interactive elements use semantic `<button>` tags.

### 3. The "Agent-Aware" Debug Mode
Hidden in the codebase (and visible in the UI) is `src/components/Guide/DebugGuide.tsx`.
*   *Innovation*: A self-documenting module that teaches developers/agents how to connect to the Chrome DevTools Protocol for live debugging.
*   **Guide**: See [DEBUGGING_GUIDE.md](docs/DEBUGGING_GUIDE.md) for the "Shift-Left" protocol.

### 4. Pluggable Skills Architecture (.agent System)
This project is built on a **Dual-Nature** agentic framework.
*   **The Rules** (`.agent/rules`): File-based routing that switches between "Maker" (Creative) and "QA Specialist" (Technical) personas.
*   **The Skills** (`.agent/skills`): Modular capabilities like the `artisan_interview` which gathers project data.
*   **The Hammer** (`.agent/commands`): A unified command that enforces strict quality gates (Lint -> Asset Check -> Test).
*   **The Contract** (`src/data/types.ts`): Zod schemas (`ProjectDTOSchema`) that act as the gatekeeper between the Agent and the UI.
*   **Visual Workflow**: See [Maker Extension Workflow](docs/architecture/maker_workflow.md) to understand how we map "User Intent" to "Deployment".

### 5. Data-Driven Components
Want to add a new skill? Just add an entry to `src/data/projects.ts` or `src/data/kpis.ts` and set `enabled: true`.
*   *Data-Driven*: Projects and KPIs are rendered dynamically from TypeScript arrays.
*   *i18n Ready*: Each skill has translation keys for EN, DE, HU.
*   *Toggle-Friendly*: Enable/disable skills without touching component code.

### 5. Proof of Verification (Visual Audit)
We don't just say it works; we prove it.
![QA Audit Evidence](public/assets/qa_audit_evidence.webp)
*Above: An automated Agent auditing the "QA Automation Framework" card for interaction and console errors.*

---

## ⚡ Quick Start (The "Happy Path")

Premise: You have `node` (v18+) installed.

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/your-username/GaborPortfolio.git
    cd GaborPortfolio
    npm install
    npx playwright install
    ```

2.  **Ignition (Dev Server)**:
    ```bash
    npm run dev
    # Opens http://localhost:5173
    ```

3.  **The "QA Audit" (Verify Competence)**:
    ```bash
    npm run lint       # 0 Errors Expected
    npm test           # Unit Tests (Green)
    npm run test:e2e   # Full Browser Suite (Green)
    ```

---

## 📂 Documentation & Standards

### 🧠 The "Brain" (Agentic Documentation)
*   **Architecture**: [Maker Workflow Visualization](docs/architecture/maker_workflow.md) - How the Agent thinks.
*   **Visualization Protocol**: [Mermaid Master Prompt](docs/architecture/mermaid_master_prompt.md) - How we generate diagrams.

### 📘 Operational Guides
*   **Handling Real-Time Debugging**: [DEBUGGING_GUIDE.md](docs/DEBUGGING_GUIDE.md) - MCP & Chrome Protocol.
*   **Collaboration & QA**: [COLLABORATION.md](docs/COLLABORATION.md) - Definition of Done & Workflow.
*   **Recruitment**: [Blueprint](prompts/master_prompt.md) - The "Regeneration Protocol".

---

## 📸 Attribution
*   **Assets**: Generated via "Nanono Banana Pro" (Internal AI Tool) - Prompted for "Elegant Steampunk, Copper, Carbon Fiber".
*   **Icons**: `react-icons` (Fa).

---

> *Built with precision by Gabor Seboek. Tested by Robots. Approved by Humans.*
