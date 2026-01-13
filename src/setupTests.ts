import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Hardcoded translations to avoid import issues during test execution
const enTranslations = {
    "hero.role": "QA Specialist | Master Brewer | Craftsman",
    "hero.download_cv": "Download CV",
    "cockpit.title": "Mission Control Status",
    "cockpit.kpi_bugs": "Bugs Squashed",
    "cockpit.kpi_uptime": "Uptime",
    "cockpit.kpi_liters": "Liters Fermented",
    "cockpit.kpi_decor": "Decor Created",
    "cockpit.kpi_renovation": "Renovation",
    "cockpit.kpi_visitors": "Live Visitors",
    "projects.section_title": "Featured Projects",
    "projects.click_hint": "CLICK TO INITIALIZE",
    "projects.qa.title": "QA Automation Framework",
    "projects.qa.desc": "A robust end-to-end testing suite...",
    "projects.brewing.title": "SYI Professional Brewing Kit",
    "projects.brewing.desc": "Designed and built a custom...",
    "projects.wedding.title": "Wedding Gates & Decor",
    "projects.wedding.desc": "Handcrafted hexagonal wedding arches...",
    "projects.house.title": "The House Rebuild",
    "projects.house.desc": "Complete renovation of a..."
};

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => (enTranslations as any)[key] || key,
        i18n: {
            changeLanguage: vi.fn(),
            language: 'en-US',
        },
    }),
    initReactI18next: {
        type: '3rdParty',
        init: vi.fn(),
    },
}));
