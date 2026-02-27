import { type ProjectDTO, validateProjects } from './types';

const projectData: ProjectDTO[] = [
    // Tech Side
    {
        id: 'qa',
        titleKey: 'projects.qa.title',
        descKey: 'projects.qa.desc',
        tags: ['QA', 'Automation', 'Cypress', 'TypeScript'],
        thumbnailSrc: '/assets/thumb-qa.webp',
        enabled: true,
    },

    // Craftsmanship
    {
        id: 'brewing',
        titleKey: 'projects.brewing.title',
        descKey: 'projects.brewing.desc',
        tags: ['Engineering', 'IoT', 'Brewing'],
        thumbnailSrc: '/assets/thumb-brewing.webp',
        enabled: true,
    },
    {
        id: 'wedding',
        titleKey: 'projects.wedding.title',
        descKey: 'projects.wedding.desc',
        tags: ['Craftsmanship', 'Welding', 'Design'],
        thumbnailSrc: '/assets/thumb-wedding.webp',
        enabled: true,
    },
    {
        id: 'house',
        titleKey: 'projects.house.title',
        descKey: 'projects.house.desc',
        tags: ['Renovation', 'Project Management', 'Construction'],
        thumbnailSrc: '/assets/thumb-house.webp',
        enabled: true,
    },

    // NEW - Enabled projects
    {
        id: 'beekeeping',
        titleKey: 'projects.beekeeping.title',
        descKey: 'projects.beekeeping.desc',
        tags: ['Beekeeping', 'Sustainability', 'Nature'],
        thumbnailSrc: '/assets/thumb-beekeeping.webp',
        enabled: true,
    },
    {
        id: 'breadmaking',
        titleKey: 'projects.breadmaking.title',
        descKey: 'projects.breadmaking.desc',
        tags: ['Fermentation', 'Bread', 'Artisan'],
        thumbnailSrc: '/assets/thumb-bread.webp',
        enabled: true,
    },
];

export const projects = validateProjects(projectData);
