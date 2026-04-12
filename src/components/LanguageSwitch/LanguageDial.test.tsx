import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageDial } from './LanguageDial';
import { vi } from 'vitest';
import { useTranslation } from 'react-i18next';

// Describe the mock explicitly
const changeLanguageMock = vi.fn();

vi.mock('react-i18next', () => ({
    useTranslation: vi.fn(() => ({
        i18n: {
            changeLanguage: changeLanguageMock,
            language: 'en-US',
        },
        t: (key: string) => key,
    })),
}));

describe('LanguageDial Component', () => {
    it('does not crash when i18n.language is undefined', () => {
        vi.mocked(useTranslation).mockReturnValueOnce({
            i18n: {
                changeLanguage: vi.fn(),
                language: undefined as unknown as string,
                languages: ['en', 'de', 'hu'],
                t: (key: string) => key,
                exists: () => true,
                on: vi.fn(),
                off: vi.fn(),
                store: {},
                modules: {},
                services: {},
                dir: () => 'ltr',
                init: vi.fn(),
                loadResources: vi.fn(),
                use: vi.fn(),
                isInitialized: true,
                options: {},
                format: (v: string) => v,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any,
            t: (key: string) => key,
            ready: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
        
        render(<LanguageDial />);
        expect(screen.getByText('EN')).toBeInTheDocument();
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders all language buttons', () => {
        render(<LanguageDial />);
        expect(screen.getByText('EN')).toBeInTheDocument();
        expect(screen.getByText('DE')).toBeInTheDocument();
        expect(screen.getByText('HU')).toBeInTheDocument();
    });

    it('highlights the active language (EN)', () => {
        render(<LanguageDial />);
        const enButton = screen.getByText('EN');
        // We check for the CSS variable which might be computed to the actual color in JSDOM, 
        // but verifying the inline style is safer for unit tests.
        expect(enButton).toHaveStyle('background: var(--color-copper)');
    });

    it('calls changeLanguage on click', () => {
        render(<LanguageDial />);
        const deButton = screen.getByText('DE');

        fireEvent.click(deButton);
        expect(changeLanguageMock).toHaveBeenCalledWith('de');
    });
});
