import { type SEOMetadata, SEOMetadataSchema } from './types';

/**
 * Site Metadata (Global Context)
 * Validated by SEO Expert DTO
 */
const metadata: SEOMetadata = {
    title: "Gabor Seboek | QA Specialist, Master Brewer & Craftsman",
    description: "Senior QA Specialist with expertise in eCommerce automation. Also a passionate craftsman: Master Brewer, Beekeeper, Welder, and Artisan Bread Maker.",
    keywords: ["QA Specialist", "Test Automation", "Playwright", "Cypress", "TypeScript", "Master Brewer", "Beekeeping"],
    ogImage: "https://gaborseboek.com/assets/hero-cockpit.webp",
    canonical: "https://gaborseboek.com/",
};

export const siteMetadata = SEOMetadataSchema.parse(metadata);
