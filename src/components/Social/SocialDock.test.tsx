import { render, screen } from '@testing-library/react';
import { SocialDock } from './SocialDock';

describe('SocialDock Component', () => {
    it('renders all 7 social icons', () => {
        render(<SocialDock />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(7);
    });

    it('has correct links and security attributes', () => {
        render(<SocialDock />);

        const github = screen.getAllByRole('link')[0];
        expect(github).toHaveAttribute('href', 'https://github.com/sebokgabor84/GaborPortfolio');
        expect(github).toHaveAttribute('target', '_blank');
        expect(github).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
