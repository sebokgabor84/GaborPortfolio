# Agent Rules - GaborPortfolio

> **READ THIS FIRST** — This file tells you when to read other docs and what actions are mandatory.

## Context Routing (When to Read What)

| Trigger | Read This | Section |
|---------|-----------|---------|
| New feature request | `prompts/master_prompt.md` | Full |
| Styling/Aesthetic question | `prompts/master_prompt.md` | Section 0.C, 1.C |
| Debugging/MCP setup | `docs/DEBUGGING_GUIDE.md` | Full |
| Test failure | `docs/DEBUGGING_GUIDE.md` | Section 4-5 |
| Adding a new skill | `src/data/projects.ts` + `src/data/kpis.ts` | See pattern |
| i18n changes | `src/i18n/locales/*.json` | All 3 files |
| SEO changes | `index.html` | Head section |
| QA standards | `docs/COLLABORATION.md` | Full |

---

## Mandatory Actions (Always Do)

| Event | Required Action |
|-------|-----------------|
| **ANY code change** | `npm run lint` before commit (0 errors) |
| **ANY component change** | `npm test -- --run` before commit (14/14 pass) |
| **Before push** | `npm run test:e2e` (16/16 pass) |
| **Adding new skill/project** | Update all 3 locale files (EN, DE, HU) |
| **Adding new KPI** | Add icon import in `src/data/kpis.ts` |
| **Modifying SEO** | Verify JSON-LD in `index.html` |

---

## Self-Healing E2E Philosophy

1. **Fix CODE, not tests** — If E2E fails, the bug is in the app (unless test logic is provably wrong)
2. **Flexible assertions** — Use regex patterns (`/QA Specialist.*Brewer/`) not exact strings
3. **Facade pattern** — Videos load on click, never auto-play
4. **Accessibility** — All interactive elements must be semantic (`<button>`, not `<div onClick>`)

---

## Pluggable Architecture Rules

To add a new skill:
1. Add entry to `src/data/kpis.ts` with `enabled: true`
2. Add entry to `src/data/projects.ts` with `enabled: true`
3. Add translations to all 3 locale files
4. Generate thumbnail → `public/assets/thumb-{id}.png`
5. Run full test suite

To disable a skill:
1. Set `enabled: false` in the data file
2. No other changes needed

---

## Definition of Done

Before marking ANY task complete:
- [ ] `npm run lint` — 0 errors
- [ ] `npm test -- --run` — 14/14 pass
- [ ] `npm run test:e2e` — 16/16 pass
- [ ] Git commit with conventional message (`feat:`, `fix:`, `chore:`)
- [ ] `git push` to origin

---

## File Structure Reference

```
src/
  data/           ← Pluggable skills (READ for skill changes)
  i18n/locales/   ← EN, DE, HU translations
  components/     ← React components
public/assets/    ← All images, favicon
prompts/          ← Master blueprint (READ for new features)
docs/             ← Debugging, collaboration guides
.agent/           ← This rules file (READ FIRST)
```

---

*Last updated: 2026-01-15*
