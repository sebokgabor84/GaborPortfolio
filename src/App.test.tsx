import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Integration', () => {
    it('renders the Hero section with key text on home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Gabor Seboek');
        expect(screen.getByText(/QA Specialist/i)).toBeInTheDocument();
    });

    it('renders the "Mission Control" Cockpit and Carousel on home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getAllByText(/Mission Control Status/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText('Bugs Squashed').length).toBeGreaterThan(0);
    });

    it('renders the Featured Projects section on its own route', () => {
        render(
            <MemoryRouter initialEntries={['/featured-projects']}>
                <App />
            </MemoryRouter>
        );

        // section_title in en.json is "Featured Projects"
        expect(screen.getByRole('heading', { level: 2, name: /Featured Projects/i })).toBeInTheDocument();
    });
});
