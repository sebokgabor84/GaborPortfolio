import { render } from '@testing-library/react';
import { FeaturedProjectsPage } from './FeaturedProjectsPage';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SeoHead } from '../components/Common/SeoHead';

// Mock SeoHead to catch props
vi.mock('../components/Common/SeoHead', () => ({
    SeoHead: vi.fn(({ title, description }) => {
        document.title = title;
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
        return null;
    })
}));

describe('FeaturedProjectsPage SEO Integration', () => {
    beforeEach(() => {
        document.head.innerHTML = '';
        vi.clearAllMocks();
    });

    it('passes localized SEO keys to SeoHead (Language Agnostic Check)', () => {
        render(
            <MemoryRouter>
                <FeaturedProjectsPage />
            </MemoryRouter>
        );

        // Verification of title and description via i18n keys
        expect(document.title).toMatch(/seo\.projects_title/);
        
        const descriptionMeta = document.head.querySelector('meta[name="description"]');
        expect(descriptionMeta?.getAttribute('content')).toMatch(/seo\.projects_desc/);
    });

    it('includes schema.org CollectionPage data with localized description', () => {
        render(
            <MemoryRouter>
                <FeaturedProjectsPage />
            </MemoryRouter>
        );

        const callArgs = vi.mocked(SeoHead).mock.calls[0][0];
        expect(callArgs.jsonLd['@type']).toBe('CollectionPage');
        expect(callArgs.jsonLd.description).toMatch(/seo\.schema_collection_desc/);
    });
});
