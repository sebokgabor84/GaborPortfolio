# The Hammer (The Executioner) 🔨

The master validation sequence to ensure GaborPortfolio remains "Bulletproof" and "Agent-Aware".

## Execution Phases

### Phase 1: DTO Parse 📐
Validate project, KPI, and SEO metadata against the Zod schemas in `src/data/types.ts`.
- **Maker Contract**: `ProjectDTOSchema`
- **SEO Contract**: `SEOMetadataSchema`
- Command: `// Manual check or integration test trigger`

### Phase 2: Integrity 🛡️
Run the `asset_validator.skill` to check physical image existence and i18n synchronization.
- Command: `ls public/assets/thumb-*.webp` and `grep` locale files.

### Phase 3: Static Analysis 🔍
Identify and fix linting/formatting issues.
- Command: `npm run lint` followed by `npm run lint --fix` if needed.

### Phase 4: Dynamic Testing 🧪
Verify logic and visual regression.
- Command: `npm test -- --run`
- Command: `npm run test:e2e`

## Exit Strategy
- **Pass**: All phases green. Provide a "Bugs Squashed" report (Target: 1337).
- **Fail**: Stop immediately. Fix the code, not the test, unless the test logic is provably incorrect.
