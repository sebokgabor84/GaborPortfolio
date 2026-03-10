---
name: design-system-expert
description: Handles UI/UX design changes, ensures fluid typography, prevents text overflow, enforces the Steampunk design system, manages AI image/asset generation, and owns the Maker Craftsman persona — artisan tone, hobby terminology, and brand voice.
---

# Design System Expert Skill

Enforces GaborPortfolio's CSS architecture and visual identity — fluid layouts, the Steampunk aesthetic, and AI asset generation standards. This is a showcase project; quality must impress.

*(Note: Color contrast ratios for accessibility → `accessibility-expert`. SEO `alt` and CLS attributes → `seo-expert`.)*

## When to use this skill
- Fixing mWeb (mobile) layout or horizontal scroll issues
- Modifying padding, margins, Flexbox, or Grid layouts
- Generating or replacing any image/video asset
- Enforcing the Steampunk component UI design

## How to use it

### 1. CSS Principles

| Principle | Rule |
|---|---|
| **Fluidity over fixes** | No fixed `px` for dimensions or typography. Use `clamp()`, `rem`, `vw`, logical properties. |
| **Text overflow** | `word-break: break-word`, `overflow-wrap: anywhere`, `hyphens: auto`. Never `white-space: nowrap` without an ellipsis strategy. |
| **Modern layout** | CSS Grid + Flexbox with `gap`. Always `flex-wrap: wrap` or `flex-direction` change for small screens. Every container: `max-width: 100%` + `box-sizing: border-box`. |
| **Safety Layer** | Group all layout-breaking fixes into a named "Safety Layer" in the CSS. |
| **CSS Variables** | All theme values (colors, spacing, font scales) use Custom Properties — no magic numbers. |
| **No Tailwind** | Vanilla CSS Modules or Inline Styles mapped to variables only. |
| **Icons** | Always SVG — aim for non-pixelated rendering. |

### 2. Steampunk Design System

**Aesthetic**: "Fancy Steampunk Futuristic Elegant Dark Mode" — Polished Copper, Brushed Gold, Carbon Fiber, Mahogany, Glowing Vacuum Tubes.

| Token | Value |
|---|---|
| `--color-bg-dark` | `#121010` |
| `--color-copper` | `#b87333` — **Large text / decorative borders only** (contrast ~4.48:1) |
| `--color-gold` | `#d4af37` |
| `--color-text-main` | `#e0dacc` |

**Typography**: Headings → `Courier New` (mechanical feel). Body → `system-ui`. Fluid scales with `clamp()`.

**Touch targets**: Internal `padding` inside interactive elements to satisfy the 48×48px rule *(handshake: `accessibility-expert`)*.

### 3. Asset Generation Rules

| Rule | Standard |
|---|---|
| Format | `webp` only |
| Max size | 200 KB |
| Resolution | 8K (retina-optimised) |
| Storage | `public/assets/` |
| Pattern | Facade Pattern — static image first, interactive media second |
| Tool | Nano Banana Pro (or equivalent when token budget is exhausted) |

**Asset Library** — use these anchored prompts to maintain visual consistency:

| File | Concept |
|---|---|
| `hero-cockpit.webp` | Panoramic copper gauges + digital displays, Mission Control feel |
| `thumb-qa.webp` | Futuristic terminal, glowing code streams, steampunk bug scanner |
| `thumb-brewing.webp` | Copper brewing vats, magnetic pumps, bubbling liquid, lab setting |
| `thumb-wedding.webp` | Hexagonal iron gate, welding sparks, elegant metalwork, rustic workshop |
| `thumb-house.webp` | Holographic blueprint overlaying rustic wood, fusion of old and new |

## Maker Craftsman Persona & Content Voice

When writing content, descriptions, or project copy, adopt the **Master Craftsman** voice: every project has a story, details matter (family milestones as KPIs), tone is witty and professional — never corporate.

### Artisan Terminology
Use authentic practitioner language rather than generic descriptions:

| Hobby | Terminology to use |
|---|---|
| **Brewing** | Mag-Drive Pumps, Semi-Automated, Fermentation cycles, Liters brewed |
| **Welding** | Old-fashioned Electrode Welding, Structural design, Custom Hexagonal Gates |
| **Beekeeping** | Apiary management, Honey extraction, Sustainable practices |
| **Bread Making** | Natural sourdough starters, Long fermentation, Perfect crust |

**Micro-animations**: UI transitions should feel mechanical — subtle, handcrafted, premium.
