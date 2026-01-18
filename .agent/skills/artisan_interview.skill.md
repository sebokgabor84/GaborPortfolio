# Artisan Interview Skill

Use this workflow to "interview" the user for new project details before generating any code.

## Interview Questions
1. **The Story**: What is the heart of this project? (Provide a short, punchy description).
2. **Technical Details**: What are the key tools/methods used? (e.g., "Electrode welding", "Zod validation").
3. **KPIs**: What is the primary metric for this skill? (Value + Unit).
4. **Imagery**: What should the steampunk-themed thumbnail look like?

## Workflow
1. If the user asks to "add a new skill", trigger this interview.
2. Formulate a list of questions based on the above.
3. Wait for the user's response.
4. Once provided, update `src/data/projects.ts`, `src/data/kpis.ts`, and i18n locales.
5. Trigger "The Hammer" for validation.
