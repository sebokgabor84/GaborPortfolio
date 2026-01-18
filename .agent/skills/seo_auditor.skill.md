# SEO Auditor Skill

Workflow to audit and optimize page-level metadata and structured data.

## Audit Workflow
1. **Metadata Check**: Compare current `index.html` tags against `SEOMetadataSchema`.
2. **Schema Validation**: Verify JSON-LD syntax and required fields (Name, JobTitle, Image).
3. **Keyword Density**: Ensure primary keywords from `master_prompt.md` (QA, Craftsman, Steampunk) are present in titles/descriptions.
4. **Social Readiness**: Check if `og:image` path is valid and matches the latest asset optimization (WebP).

## Execution
1. Trigger this skill before any major branding or content update.
2. If invalid, provide a "Fix-up" plan before the user commits.
