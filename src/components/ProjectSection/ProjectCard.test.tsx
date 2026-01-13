import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard Component', () => {
    const mockProps = {
        title: 'Awesome Project',
        description: 'This is a description of the awesome project.',
        videoId: '12345',
        tags: ['React', 'Vite']
    };

    it('renders project title and description', () => {
        render(<ProjectCard {...mockProps} />);

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Awesome Project');
        expect(screen.getByText('This is a description of the awesome project.')).toBeInTheDocument();
    });

    it('renders all tags', () => {
        render(<ProjectCard {...mockProps} />);

        expect(screen.getByText('#React')).toBeInTheDocument();
        expect(screen.getByText('#Vite')).toBeInTheDocument();
    });

    it('renders video iframe with correct src', () => {
        render(<ProjectCard {...mockProps} />);

        const iframe = screen.getByTitle('Awesome Project');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/12345');
    });
});
