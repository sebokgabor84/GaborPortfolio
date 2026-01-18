# Asset Validator Skill

Logic to verify the physical existence of image assets and i18n keys on disk.

## Verification Checklist

### 1. Image Integrity
- Check if `/public/assets/thumb-{id}.webp` exists for every enabled project in `src/data/projects.ts`.
- Check if `/public/assets/hero-cockpit.webp` and `favicon.webp` exist.

### 2. i18n Sync
- For every `titleKey` and `descKey` in `src/data/projects.ts`:
    - Verify it exists in `/src/i18n/locales/en.json`.
    - Verify it exists in `/src/i18n/locales/de.json`.
    - Verify it exists in `/src/i18n/locales/hu.json`.
- For every `labelKey` in `src/data/kpis.ts`:
    - Verify it exists in all three locale files.

### 3. Usage
- This skill is triggered as Phase 2 of "The Hammer".
- If any asset/key is missing, return a detailed error report and stop the validation sequence.
