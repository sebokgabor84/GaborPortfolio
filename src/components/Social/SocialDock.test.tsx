import { render, screen } from '@testing-library/react';
import { SocialDock } from './SocialDock';

describe('SocialDock Component', () => {
    it('renders all 5 social icons', () => {
        render(<SocialDock />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(5);
    });

    it('has correct links and security attributes', () => {
        render(<SocialDock />);

        const linkedIn = screen.getAllByRole('link')[0];
        expect(linkedIn).toHaveAttribute('href', 'https://linkedin.com');
        expect(linkedIn).toHaveAttribute('target', '_blank');
        expect(linkedIn).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
