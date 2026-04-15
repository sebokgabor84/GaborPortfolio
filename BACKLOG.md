# GaborPortfolio — Backlog

> **Agent protocol**: Read `AGENT.md § Backlog Protocol` before touching this file.
> Schema: `- [STATUS] **[CATEGORY]** Description — \`reference\` _(added: YYYY-MM-DD)_`
>
> | Status | Meaning |
> |---|---|
> | `[ ]` | Open |
> | `[/]` | In progress — note active branch |
> | `[x]` | Done — archive after next merge to main |
> | `[?]` | Needs a decision before work starts |
> | `[~]` | Deferred / won't do now |

---

## Refactor

- `[ ]` **[REFACTOR]** Docs folder still holds documents that belong under `.agent/` — audit and move them _(added: 2026-04-15)_
- `[ ]` **[REFACTOR]** ZOD approach (schema-first data integrity) is missing from `README.md` — document it _(added: 2026-04-15)_
- `[ ]` **[REFACTOR]** Split `index.css` into CSS Modules per component _(added: 2026-04-15)_
- `[ ]` **[REFACTOR]** Add `kpis.ts` types into `src/data/types.ts` to consolidate Zod schemas _(added: 2026-04-15)_

---

## Features

- `[ ]` **[FEATURE]** Master prompt → evolve into a sellable framework: any human can spin up their own portfolio in minutes using this as a base _(added: 2026-04-15)_
- `[ ]` **[FEATURE]** Add `published` status to projects (alongside `enabled`) — unpublished projects rendered in greyscale to signal WIP _(added: 2026-04-15)_

---

## Content

- `[ ]` **[CONTENT]** Brewing company: rename "Aether & Brass Brewing" to "gabor.seboek Brewing Company" in the generated image — `public/assets/thumb-brewing.webp` _(added: 2026-04-15)_
- `[ ]` **[CONTENT]** Beekeeper: replace the face in the image with Gábor's — `public/assets/thumb-beekeeping.webp` _(added: 2026-04-15)_
- `[ ]` **[CONTENT]** Add proper stories to all projects — current stories are placeholders _(added: 2026-04-15)_
- `[ ]` **[CONTENT]** Add QA profession story sourced from its skill rule into `src/data/` _(added: 2026-04-15)_

---

## Agent

- `[ ]` **[AGENT]** Create per-project rules file so each project can be rebuilt from its rule alone (structure mirrors `src/data/projects.ts` with Zod validation) _(added: 2026-04-15)_

---

## QA

- `[ ]` **[QA]** Apply remaining Lighthouse optimisation recommendations from audit JSON (`docs/lighthouse-audit.json`) _(added: 2026-04-15)_

---

## Questions

- `[?]` **[QUESTION]** Should `/public/assets/` be split into subfolders (e.g. `thumbs/`, `icons/`, `bg/`)? Could improve organisation but adds path-reference complexity. _(added: 2026-04-15)_
- `[?]` **[QUESTION]** Is `src/components/ProjectSection/ProjectCard.tsx` actually consuming `src/data/types.ts`? Verify and fix if not. _(added: 2026-04-15)_
- `[?]` **[QUESTION]** `src/components/Guide/` vs `docs/DEBUGGING_GUIDE.md` — is the component generated from the MD, or are they duplicates? If duplicates, consolidate. _(added: 2026-04-15)_

---

## External

> Items outside the codebase. Tracked here for single-source visibility; not driven by the Agent.

- `[ ]` **[EXTERNAL]** Create social media accounts for gabor.seboek: Facebook, TikTok, YouTube, Instagram, X _(added: 2026-04-15)_
- `[ ]` **[EXTERNAL]** Shape CV together with AI _(added: 2026-04-15)_

---

## Archive

> Items completed and merged. Kept for project history.

- `[x]` **[FEATURE]** Add GitHub link to the app with README render capability _(done: ~2026-02-24)_
- `[x]` **[AGENT]** Rewrite Agent Rules into current `AGENT.md` skill-routing structure _(done: ~2026-03-08)_
- `[x]` **[AGENT]** Create designer skill → `design-system-expert` _(done: ~2026-03-07)_
- `[x]` **[AGENT]** Remove stale `docs/architecture/` folder, add current-state diagram to `AGENT.md` _(done: 2026-04-15)_
- `[x]` **[EXTERNAL]** Discuss portfolio-as-business-model and scalability with AI _(done: ~2026-04-03)_
- `[x]` **[EXTERNAL]** Research Antigravity prompt cost vs. investment return _(done: ~2026-04-03)_
- `[x]` **[QA]** Add `test-results/` to `.gitignore` _(done: ~2026-03-10)_
- `[x]` **[QA]** Create ESLint rule for unified file/folder naming conventions _(done: ~2026-01-21)_
- `[x]` **[AGENT]** Junior-dev explanation of `dist/`, `src/`, `App.tsx`, `index.css`, `main.tsx`, `setupTests.ts` _(done: ~2026-03-10)_
