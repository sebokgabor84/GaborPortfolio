---
name: design-system-expert
description: Handles UI/UX design changes, ensures fluid typography, prevents text overflow, manages AI image/asset generation strategies, and enforces the Antigravity design system standards as per the CSS guiding principles.
---

# Design System Expert Skill

## Guiding Principles

When instructed to write or fix CSS, use these principles to ensure the output is a sustainable architectural change rather than just a hack. We generally aim for a very high-quality look and feel website, since this is a showcase project for investors.

### 1. The "Fluidity over Fixes" Principle
- Do not use fixed pixel values for dimensions or typography.
- Implement fluid typography using `clamp()`.
- Use relative units (`rem`, `em`, `vh`, `vw`) or logical properties.
- Ensure the layout is **Intrinsically Responsive**—it should adjust its own structure based on available space without relying solely on rigid media queries.

### 2. Preventing Text Overflow
- For any header or status text, ensure it never breaks the container.
- Use `word-break: break-word;` or `overflow-wrap: anywhere;`.
- Use fluid font sizing: `font-size: clamp(1.5rem, 5vw, 3rem);`.
- Use `hyphens: auto;` (if applicable).
- Avoid `white-space: nowrap;` unless paired with an ellipsis or a scrolling container strategy.

### 3. The "Modern Layout" Rule
- Prefer **CSS Grid** and **Flexbox** with `gap` over margins/padding for spacing layout items.
- *SEO Handshake*: Use internal `padding` *inside* interactive elements (like buttons) to satisfy the 48x48px touch target rule enforced by `seo-expert`.
- When using Flexbox, always provide a `flex-wrap: wrap;` strategy or a flex-direction change for small screens.
- Ensure every container has a `max-width: 100%` and `box-sizing: border-box` to prevent horizontal overflow.

### 4. Robust Framework Constraints & Styling
- Group all layout-breaking fixes into a "Safety Layer" in the CSS.
- Use **CSS Variables (Custom Properties)** for all theme-related values (colors, spacing, font-scales) to ensure global consistency and easy debugging.
- **Styling Method**: Vanilla CSS Modules or Inline Styles mapped to variables. **NO Tailwind**.
- **Icons**: Always use SVG for icons and always aim for non-pixelated rendering.

## Project Specific Rules (GaborPortfolio Steampunk Aesthetic)

### A. The Aesthetic Signature
- **Style**: "Fancy Steampunk Futuristic Elegant Dark Mode".
- **Materials**: Polished Copper, Brushed Gold, Carbon Fiber, Mahogany, Glowing Vacuum Tubes.
- **Lighting**: Cinematic, Volumetric support, "Golden Hour" or "Neon Blue" accents.

### B. Design System (Steampunk Palette)
- **Colors**:
    - Background: `--color-bg-dark` (`#121010`)
    - Accents: `--color-copper` (`#b87333`), `--color-gold` (`#d4af37`)
        - *A11y Handshake*: Copper has a contrast of ~4.48:1 against the dark background. To satisfy WCAG 2.2 (`accessibility-expert`), ONLY use Copper for Large Text (Headings/Bold) or decorative UI borders. Never use it for small body text.
    - Text: `--color-text-main` (`#e0dacc`)
- **Typography Constraints**: Headings should retain a digital/mechanical feel (`Courier New`), while body text uses `system-ui`. Fluid scales should anchor at these constraints.
- **Effects**: `radial-gradient` backgrounds, `box-shadow` panels.

## Image Generation Strategy (GenAI) & Asset Library

### Implementation Rules & Performance
- Store all generated assets in `public/assets`.
- Always use the **Facade Pattern** (Static image first, Interactive media second).
- **Tool Choice**: If generating an image, always use Nano Banana Pro, or any similar AI tool when we run out of budget for tokens.
- **Performance**: Always optimize for the performance of the webpage. All generated images must have the type `"webp"`.
- **Size Limits**: All generated images must be optimized by size; **no images above 200Kb are allowed**.
- **Resolution**: All generated images must also be optimized for retina displays (**8K resolution**).
- **Animations/Videos**: The exact same optimization rules (file size, webp format, 8K) apply to animations and video sequences as well. (Note: `AssetCheck` validation verifies `webp` assets like `/assets/thumb-id.webp`).

### Asset Library & Prompts
When regenerating assets, use these conceptual prompts to maintain consistency:
- `hero-cockpit.webp`: **Metric Dashboard** – Panoramic view of intricate copper gauges, digital displays, "Mission Control" feel, 8k resolution.
- `thumb-qa.webp`: **QA/Automation** – Futuristic computer terminal, glowing code streams, "Bug" icons being scanned, matrix style but steampunk.
- `thumb-brewing.webp`: **Engineering/Brewing** – High-tech copper brewing vats, magnetic pumps, bubbling liquid, laboratory setting.
- `thumb-wedding.webp`: **Welding/Craft** – Intricate hexagonal iron gate, welding sparks, rustic workshop background, elegant metalwork.
- `thumb-house.webp`: **Renovation** – Holographic blueprint of a house overlaying a rustic wood table, construction tools, fusion of old and new.

## When to use this skill
Trigger this skill whenever the task involves:
- Visual Vibe Coding or requesting/generating GenAI images/video assets.
- Fixing mWeb (mobile) view layouts.
- Correcting horizontal scrollbar issues.
- Modifying padding, margins, flexbox or grid layouts.
- Enforcing the overarching Steampunk component UI design.
