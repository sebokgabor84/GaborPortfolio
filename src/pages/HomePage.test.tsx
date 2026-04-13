import { render } from '@testing-library/react';
import { HomePage } from './HomePage';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SeoHead } from '../components/Common/SeoHead';

// We mock SeoHead because we want to test HomePage's integration, 
// not the SeoHead logic itself (which has its own unit tests).
vi.mock('../components/Common/SeoHead', () => ({
    SeoHead: vi.fn(({ title, description }) => {
        // We set these on document for easy assertion in unit tests
        document.title = title;
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
        return null;
    })
}));

describe('HomePage SEO Integration', () => {
    beforeEach(() => {
        document.head.innerHTML = '';
        vi.clearAllMocks();
    });

    it('passes localized SEO keys to SeoHead (Language Agnostic Check)', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        // In our test environment (setupTests.ts), t('key') returns the key string if missing.
        // We expect the HomePage to pass the dynamic translation result to SeoHead.
        // If it was hardcoded English, it wouldn't match the 'seo.' prefix mapping.
        
        expect(document.title).toMatch(/seo\.home_title/);
        
        const descriptionMeta = document.head.querySelector('meta[name="description"]');
        expect(descriptionMeta?.getAttribute('content')).toMatch(/seo\.home_desc/);
    });

    it('includes schema.org Person data with localized description', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );

        // Verify that the JSON-LD passed to SeoHead contains the translated description key
        const callArgs = vi.mocked(SeoHead).mock.calls[0][0];
        expect(callArgs.jsonLd.description).toMatch(/seo\.schema_person_desc/);
    });
});
