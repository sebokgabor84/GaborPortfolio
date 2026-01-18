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
    videoId: z.string().min(1),
    tags: z.array(z.string()).min(1),
    thumbnailSrc: z.string().regex(/^\/assets\/thumb-[a-z0-9-]+\.webp$/, {
        message: "assetPath must resolve to /assets/thumb-{id}.webp",
    }),
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
