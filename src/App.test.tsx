import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Integration', () => {
    it('renders the Hero section with key text', () => {
        render(<App />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Gabor Seboek');
        expect(screen.getByText(/QA Specialist/i)).toBeInTheDocument();
    });

    it('renders the "Mission Control" Cockpit', () => {
        render(<App />);

        expect(screen.getByText('Mission Control Status')).toBeInTheDocument();
        // Check for at least one default gauge
        expect(screen.getByText('Bugs Squashed')).toBeInTheDocument();
    });

    it('renders the Featured Projects section', () => {
        render(<App />);

        expect(screen.getByRole('heading', { level: 2, name: /Featured Projects/i })).toBeInTheDocument();
    });
});
