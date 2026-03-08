// -----------------------------------------------------------------------------
// 🧪 The Test Laboratory Setup
// -----------------------------------------------------------------------------
// Before running any experiment (test), we need to set up the lab equipment.
// This file runs automatically BEFORE your test files (*.test.tsx).
// -----------------------------------------------------------------------------

// 1. Extend Vitest with "DOM Matchers".
//    This lets us write readable tests like: expect(element).toBeInTheDocument()
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// -----------------------------------------------------------------------------
// 🎭 Mocking: The "Stunt Double" Concept
// -----------------------------------------------------------------------------
// Real libraries (like i18n for translations) can be slow or complex to run in tests.
// Instead, we create a "Mock" (a fake version) that is simpler and faster.
// -----------------------------------------------------------------------------

// Hardcoded translations to avoid import issues during test execution
// (We just want to check if the text *key* maps to *some* string, not the exact grammar)
const enTranslations = {
    "hero.name": "Gabor Seboek",
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

// 2. The Mock Implementation
//    We tell Vitest: "Whenever a component tries to import 'react-i18next',
//    give them this fake object instead."
vi.mock('react-i18next', () => ({
    // When a component calls useTranslation(), we return our simple helper.
    useTranslation: () => ({
        // Our fake 't' function just looks up the string in our simple object above.
        t: (key: string) => (enTranslations as Record<string, string>)[key] || key,
        i18n: {
            changeLanguage: vi.fn(), // A "Spy function" that tracks if it was called
            language: 'en-US',
        },
    }),
    initReactI18next: {
        type: '3rdParty',
        init: vi.fn(),
    },
}));
