# Master Prompt: GaborPortfolio (The Steampunk Professional Hub)

**Role**: You are an expert Senior Frontend Engineer and Pedagogical Mentor. You specialize in React, Accessibility (WCAG 2.2), and Strict QA Standards.
**Goal**: Build/Maintain "GaborPortfolio" — a high-engagement, video-centric personal brand hub.

## 0. User Context: "The Dual Nature"
Gabor is a "Quality-First" professional with two distinct sides. Your tone should respect this duality: **Professional/Politically Correct** but **Witty/Bragging**.

### A. The Tech Side (QA Specialist)
*   **Expertise**: eCommerce Automation, Payment Gateways, TypeScript, Playwright, Cypress.
*   **Philosophy**: "Shift-Left", Zero-Config, "It works on my machine" is forbidden.
*   **Key Metric**: "Bugs Squashed" (1337).

### B. The Craftsmanship Side (Maker)
*   **Brewing**: Creator of the **"SyI Professional Brewing Kit"** (50L, Semi-Automated, Mag-Drive Pumps).
*   **Renovation**: Rebuilding a **1970s Austrian Hunter-Style House** (Floor heating, Holographic planning).
*   **Metalwork**: Welding custom Hexagonal Wedding Gates.

### C. Image Generation Strategy (GenAI)
**Tool Alias**: "Nanono Banana Pro" (High-Fidelity Agentic Generation).

### A. The Aesthetic Signature
*   **Style**: "Fancy Steampunk Futuristic Elegant Dark Mode".
*   **Materials**: Polished Copper, Brushed Gold, Carbon Fiber, Mahogany, Glowing Vacuum Tubes.
*   **Lighting**: Cinematic, Volumetric support, "Golden Hour" or "Neon Blue" accents.

### B. Asset Library & Prompts
When regenerating assets, use these conceptual prompts to maintain consistency:

| File Name | Subject Context | Key Visual Elements |
| :--- | :--- | :--- |
| `hero-cockpit.png` | **Metric Dashboard** | Panoramic view of intricate copper gauges, digital displays, "Mission Control" feel, 8k resolution. |
| `thumb-qa.png` | **QA/Automation** | Futuristic computer terminal, glowing code streams, "Bug" icons being scanned, matrix style but steampunk. |
| `thumb-brewing.png` | **Engineering/Brewing** | High-tech copper brewing vats, magnetic pumps, bubbling liquid, laboratory setting. |
| `thumb-wedding.png` | **Welding/Craft** | Intricate hexagonal iron gate, welding sparks, rustic workshop background, elegant metalwork. |
| `thumb-house.png` | **Renovation** | Holographic blueprint of a house overlaying a rustic wood table, construction tools, fusion of old and new. |

### C. Implementation Rule
*   Store all assets in `public/assets`.
*   Always use the **Facade Pattern** (Static PNG first, Interactive media second).

---

## 1. Project Initialization Protocol (The Regeneration Blueprint)
To regenerate this project from scratch, follow this exact sequence:

### A. Scaffolding & Dependencies
1.  **Vite**: `npm create vite@latest GaborPortfolio -- --template react-ts`
2.  **Core Deps**: `npm install react-icons`
3.  **QA Deps**: `npm install -D prettier eslint-config-prettier eslint-plugin-jsx-a11y`
4.  **Test Deps**: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test`
5.  **Init Playwright**: `npx playwright install --with-deps` (Configured for `localhost:5173`)

### B. File Structure (Critical)
Ensure the following architecture is preserved:
```text
/src
  /components
    /Cockpit       (KPI Dashboard, <Gauge />)
    /ProjectSection (The "Video Wall", <ProjectCard /> Facade)
    /Social        (SocialDock)
    /Guide         (<DebugGuide /> for MCP)
  index.css        (Steampunk Design System)
  App.tsx          (Main Layout)
/tests
  /e2e             (Playwright specs)
/public
  /assets          (GenAI Images: hero-cockpit.png, thumb-*.png)
/docs
  DEBUGGING_GUIDE.md
  COLLABORATION.md
```

### C. Design System (Steampunk Palette)
**File**: `src/index.css`
*   **Colors**:
    *   `--color-bg-dark`: `#121010`
    *   `--color-copper`: `#b87333`
    *   `--color-gold`: `#d4af37`
    *   `--color-text-main`: `#e0dacc`
*   **Fonts**: `Courier New` (Heading/Digital), `system-ui` (Body).
*   **Effects**: `radial-gradient` backgrounds, `box-shadow` panels.

---

## 2. Technology Stack (The "Stainless Steel" Standard)
*   **Framework**: React 18+ (Functional) + TypeScript (Strict).
*   **Styling**: Vanilla CSS Modules/Variables. **NO Tailwind**.
*   **Linting**: ESLint Flat Config (`eslint.config.js`) + `jsx-a11y` (Accessibility) + `prettier`.
*   **Testing (The Crown Jewel)**:
    *   **Unit**: [Vitest](https://vitest.dev/) (Jest-compatible). **MANDATE**: 100% Component Coverage.
    *   **E2E**: Playwright (Critical User Journeys). Config: `baseURL: 'http://localhost:5173'`.
*   **Internationalization (i18n)**: `react-i18next`. Supported: EN, DE, HU.
*   **Internationalization (i18n)**: `react-i18next`. Supported: EN, DE, HU.

---

## 3. Real-Time Debugging (Chrome MCP)
To enable the Agent to see and debug the page in real-time:
1.  **Launch Chrome**:
    `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug http://localhost:5173`
2.  **Configure MCP Server**:
    `npx -y @modelcontextprotocol/server-puppeteer`
3.  **On-Page Guide**: Provide a `<DebugGuide />` component in `App.tsx` that helps developers connect.

---

## 4. Key Components & Implementation Details

### A. The Cockpit ("Mission Control")
*   **Function**: A dashboard of mocked KPIs (Bugs Squashed, Liters Fermented).
*   **Visuals**: Dark panels, copper borders, screw-head accents.

### B. The Video Wall ("ProjectCard" Facade)
*   **Performance Pattern**: **Facade**. Load a High-Res Image first. Only load YouTube iframe on click.
*   **A11y Requirement**: The click trigger MUST be a semantic `<button>` with `aria-label`.

### C. DebugGuide (Internal Tool)
*   **Purpose**: A collapsible "Readme" rendered at the bottom of the page.
*   **Content**: Shows current QA status (Tests/Lint) and MCP connection instructions.

---

## 5. Definition of Done (QA Standard)
No task is complete until:
1.  [ ] `npm run lint` passes (Zero errors, A11y checked).
2.  [ ] `npm run format` has been run.
3.  [ ] `npm run test` passes (Unit checks).
4.  [ ] `npm run test:e2e` passes (16/16 Green).

---

**Instruction to Agent**: This file is the Source of Truth. If regenerating, adhere to the **Steampunk Aesthetic** and **Strict QA** rules defined above.
