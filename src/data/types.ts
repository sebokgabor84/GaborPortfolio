import { z } from 'zod';

/**
 * ProjectDTOSchema (The Contract) 📐
 * Enforces "Maker" creativity never breaks "QA" stability.
 */
export const ProjectDTOSchema = z.object({
    id: z.string().regex(/^[a-z0-9-]+$/, {
        message: "ID must be strict kebab-case (lowercase letters, numbers, and hyphens only).",
    }),
    titleKey: z.string().startsWith('projects.'),
    descKey: z.string().startsWith('projects.'),
    videoId: z.string().optional(),
    tags: z.array(z.string()).min(1),
    thumbnailSrc: z.string().regex(/^\/assets\/thumb-[a-z0-9-]+\.webp$/, {
        message: "assetPath must resolve to /assets/thumb-{id}.webp",
    }),
    altKey: z.string().startsWith('projects.').optional(),
    enabled: z.boolean(),
});

export type ProjectDTO = z.infer<typeof ProjectDTOSchema>;

/**
 * SEOMetadataSchema (The SEO Expert Contract) 🔍
 * Enforces technical SEO standards for page-level metadata.
 */
export const SEOMetadataSchema = z.object({
    title: z.string().max(60, "Title should be under 60 characters for SEO"),
    description: z.string().min(50).max(160, "Description should be between 50-160 characters"),
    keywords: z.array(z.string()).min(5),
    ogImage: z.string().url().or(z.string().regex(/^\/assets\/.*\.webp$/)),
    canonical: z.string().url(),
});

export type SEOMetadata = z.infer<typeof SEOMetadataSchema>;

/**
 * Validates an array of project definitions against the schema.
 */
export const validateProjects = (data: unknown): ProjectDTO[] => {
    return z.array(ProjectDTOSchema).parse(data);
};

export const PageSeoPropsSchema = z.object({
  title: z.string().max(60, "Title must be ≤ 60 chars"),
  description: z.string().max(155, "Description must be ≤ 155 chars"),
  canonicalUrl: z.string().url("Must be a valid URL"),
  ogImage: z.string().url("Must be a valid absolute URL"),
  locale: z.string(),
  jsonLd: z.any().optional(),
});

export type PageSeoProps = z.infer<typeof PageSeoPropsSchema>;

/**
 * KpiDefinitionSchema (The Metrics Contract) 📊
 * Enforces technical consistency for all portfolio metrics.
 */
export const KpiDefinitionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  labelKey: z.string().startsWith('cockpit.'),
  value: z.number(),
  unit: z.string().optional(),
  icon: z.any(), // IconType cannot be easily Zod-validated as it's a function component
  color: z.enum(['success', 'gold', 'copper']),
  enabled: z.boolean(),
  isDynamic: z.boolean().optional(),
  projectId: z.string().optional(),
});

export type KpiDefinition = z.infer<typeof KpiDefinitionSchema>;

/**
 * Validates an array of KPI definitions against the schema.
 */
export const validateKpis = (data: unknown): KpiDefinition[] => {
  return z.array(KpiDefinitionSchema).parse(data);
};

