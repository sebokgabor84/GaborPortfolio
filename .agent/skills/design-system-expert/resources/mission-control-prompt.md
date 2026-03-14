type: system-instruction
target-agent: antigravity-gemini-3.1
skill-context: design-system-expert
task: refactor-mission-control-carousel

MISSION DIRECTIVE: The 3D Steampunk Carousel Upgrade

Agent Role: Act as the Master Craftsman and Design System Expert. You are tasked with refactoring the current vertical "Mission Control Status" list on sebokgabor.com into a cinematic, 3D rotating hardware carousel.

Strict Architectural Rule: You must use the "Optimized JS Hybrid" (Option 1) approach. Do NOT use Tailwind. Use pure CSS Modules or styled vanilla CSS adhering to the fluid constraints in SKILL.md.

Architectural Rationale: Why Option 1?

We have explicitly chosen a JavaScript-driven requestAnimationFrame (rAF) loop over the Web Animations API (WAAPI) or Pure CSS for the following agentic reasons:

Transparent State for AI Debugging: Explicit math (rotationRef.current += deltaX) gives you (the agent) transparent, frame-by-frame control over the state. WAAPI hands the timeline to the browser's C++ engine, making autonomous debugging of scrub-states highly error-prone.

High-Density React Pattern: Bypassing the React render cycle via useRef and direct DOM style mutation is the industry-standard, most resilient method for 3D UI interactions.

1. The Core Engine (JavaScript Math)

Build the carousel using a continuous, high-performance requestAnimationFrame loop.

State Management: Store rotationX, startX, and isDragging in useRef hooks (not useState) to guarantee 60fps performance without re-renders.

Auto-Spin: The drum must automatically rotate negatively (-0.15deg per frame) unless hovered or dragged.

The 3D Math: Each tile's rotation is calculated as index * (360 / totalItems). The tile is pushed out via translateZ(var(--drum-radius)).

2. Core Web Vitals (CWV) Protection Protocol

You must implement these safeguards strictly to prevent SEO and performance regression:

INP Guard (IntersectionObserver): Implement an IntersectionObserver. When the carousel is off-screen, the requestAnimationFrame loop MUST be completely canceled.

INP Guard (Passive Listeners): Attach pointer events (pointerdown, pointermove, pointerup) natively via addEventListener with { passive: true } to prevent scroll janking.

CLS Guard (Skeleton UI): Before the heavy 8K .webp assets load, render a pure CSS/SVG Steampunk Skeleton. Use a carbon-fiber patterned background (#121010) with an opacity pulse animation to signify a dormant machine.

LCP Guard (Lazy Matrix): Map over the data. Render loading="eager" for the front 2 visible tiles. Apply loading="lazy" to the tiles resting on the back of the 3D drum.

3. Desktop & Mobile Parity Rules

Unified Pointer Events: Use PointerEvent API to catch both mouse clicks and mobile taps seamlessly.

Touch Action: Apply touch-action: pan-y; to the .mc-scene container. This allows users to scroll down the page vertically, but intercepts horizontal swipes to spin the 3D drum.

Fluid Radius: The CSS variable --drum-radius must use clamp() (e.g., clamp(200px, 40vw, 400px)) so the 3D cylinder resizes perfectly on mobile devices without clipping off-screen.

iOS Safari Hardening: Apply -webkit-transform-style: preserve-3d and -webkit-backface-visibility: hidden to .mc-drum and .mc-tile.

4. Visual Aesthetics & Asset Mounting

ASSET DIRECTIVE: Do NOT attempt to generate images. High-fidelity 8K assets are generated externally via  `GaborPortfolio/src/components/MissionControl/MissionControlAssetGenerator.md`. Your job is to strictly mount them.

Master Environment Background: The parent .mc-dashboard container must mount the bg-mission-control.webp image. Overlay this with a heavy CSS linear-gradient (e.g., rgba(18, 16, 16, 0.85) to 0.98) to preserve the moody atmosphere while keeping UI contrast high. Use background-attachment: fixed for parallax.

Materials Engine: Use SVG definitions <defs> to construct reusable linear gradients for Copper (#b87333 to #7a4b21), Gold (#d4af37), and a radial gradient for corner Rivets.

The Bezel: Each tile is overlaid with a pure SVG <rect> acting as a physical frame, preventing the need for massive transparent PNGs.

Tile Gradient Overlay: Inject a CSS linear-gradient fading to --color-bg-dark (#121010) at the bottom of the tile to guarantee high contrast for the glowing metric text.

Typography: Metrics must use --font-heading (Courier New) and feature a text-shadow glow mapping to the specific KPI's energy color (e.g., #4ade80 for bugs, #ff8c00 for heat).

Execution Steps for Antigravity:

Analyze the existing MissionControl React component in the codebase.

Refactor the static mapped list into the 3D Drum architecture described above.

Implement the IntersectionObserver and the requestAnimationFrame hooks.

Mount the local public/assets/ images to their respective tiles and the overarching dashboard background.

Inject the SVG <defs> and update the CSS Modules to include the 3D perspective (perspective: 2000px; on the parent).

Verify all CWV protections (Skeleton UI, Passive Listeners) are fully intact.

Agent Acknowledgment: Confirm you understand the CWV constraints, the Asset Directive, and the JS Hybrid architecture rationale before writing the code.