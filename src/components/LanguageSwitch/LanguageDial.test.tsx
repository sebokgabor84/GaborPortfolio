import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageDial } from './LanguageDial';
import { vi } from 'vitest';

// Describe the mock explicitly
const changeLanguageMock = vi.fn();

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            changeLanguage: changeLanguageMock,
            language: 'en-US',
        },
        t: (key: string) => key,
    }),
}));

describe('LanguageDial Component', () => {
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
