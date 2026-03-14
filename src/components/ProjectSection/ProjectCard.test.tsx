import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import { ProjectCard } from './ProjectCard';
import userEvent from '@testing-library/user-event';

describe('ProjectCard Component', () => {
    const mockProps = {
        title: 'Awesome Project',
        description: 'This is a description of the awesome project.',
        videoId: '12345',
        tags: ['React', 'Vite'],
        thumbnailSrc: '/test-thumb.webp'
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

    it('renders video iframe with correct src', async () => {
        const user = userEvent.setup();
        render(<ProjectCard {...mockProps} />);

        // Verify button exists first
        const playButton = screen.getByLabelText(`Play video: ${mockProps.title}`);
        expect(playButton).toBeInTheDocument();

        // Click to load iframe
        await user.click(playButton);

        const iframe = screen.getByTitle('Awesome Project');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', expect.stringContaining('https://www.youtube.com/embed/12345'));
    });
    it('shows fallback overlay for 5 seconds when videoId is missing', async () => {
        vi.useFakeTimers();
        render(<ProjectCard {...mockProps} videoId={undefined} />);

        const playButton = screen.getByLabelText(`${mockProps.title} - Video Coming Soon`);
        act(() => {
            fireEvent.click(playButton);
        });

        // Should show "coming soon" message (as key in test env)
        expect(screen.getByText(/video_coming_soon/i)).toBeInTheDocument();

        // Fast-forward time
        act(() => {
            vi.advanceTimersByTime(5000);
        });

        // After 5s, the message should be gone (back to play button)
        expect(screen.queryByText(/video_coming_soon/i)).not.toBeInTheDocument();
        vi.useRealTimers();
    });
});
