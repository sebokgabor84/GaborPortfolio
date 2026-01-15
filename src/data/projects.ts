export interface ProjectDefinition {
    id: string;
    titleKey: string; // i18n key
    descKey: string; // i18n key
    videoId: string;
    tags: string[];
    thumbnailSrc: string;
    enabled: boolean;
}

export const projects: ProjectDefinition[] = [
    // Tech Side
    {
        id: 'qa',
        titleKey: 'projects.qa.title',
        descKey: 'projects.qa.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['QA', 'Automation', 'Cypress', 'TypeScript'],
        thumbnailSrc: '/assets/thumb-qa.png',
        enabled: true,
    },

    // Craftsmanship
    {
        id: 'brewing',
        titleKey: 'projects.brewing.title',
        descKey: 'projects.brewing.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['Engineering', 'IoT', 'Brewing'],
        thumbnailSrc: '/assets/thumb-brewing.png',
        enabled: true,
    },
    {
        id: 'wedding',
        titleKey: 'projects.wedding.title',
        descKey: 'projects.wedding.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['Craftsmanship', 'Welding', 'Design'],
        thumbnailSrc: '/assets/thumb-wedding.png',
        enabled: true,
    },
    {
        id: 'house',
        titleKey: 'projects.house.title',
        descKey: 'projects.house.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['Renovation', 'Project Management', 'Construction'],
        thumbnailSrc: '/assets/thumb-house.png',
        enabled: true,
    },

    // NEW - Enabled projects
    {
        id: 'beekeeping',
        titleKey: 'projects.beekeeping.title',
        descKey: 'projects.beekeeping.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['Beekeeping', 'Sustainability', 'Nature'],
        thumbnailSrc: '/assets/thumb-beekeeping.png',
        enabled: true,
    },
    {
        id: 'breadmaking',
        titleKey: 'projects.breadmaking.title',
        descKey: 'projects.breadmaking.desc',
        videoId: 'dQw4w9WgXcQ',
        tags: ['Fermentation', 'Bread', 'Artisan'],
        thumbnailSrc: '/assets/thumb-bread.png',
        enabled: true,
    },
];
