import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hint } from './Hint';

describe('Hint Component', () => {
    it('renders children correctly', () => {
        render(
            <Hint message="Coming Soon">
                <button>Test Button</button>
            </Hint>
        );
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('shows hint bubble on mouse enter and hides on mouse leave (desktop simulation)', () => {
        // Mock desktop width
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
        window.dispatchEvent(new Event('resize'));

        render(
            <Hint message="Coming Soon">
                <button>Test Button</button>
            </Hint>
        );

        const container = screen.getByText('Test Button').parentElement!;

        fireEvent.mouseEnter(container);
        expect(screen.getByText('Coming Soon')).toBeInTheDocument();

        fireEvent.mouseLeave(container);
        expect(screen.queryByText('Coming Soon')).not.toBeInTheDocument();
    });

    it('shows hint bubble on focus and hides on blur', () => {
        render(
            <Hint message="Coming Soon">
                <button>Test Button</button>
            </Hint>
        );

        const button = screen.getByText('Test Button');

        fireEvent.focus(button);
        expect(screen.getByText('Coming Soon')).toBeInTheDocument();

        fireEvent.blur(button);
        expect(screen.queryByText('Coming Soon')).not.toBeInTheDocument();
    });

    it('hides hint after delay on mobile (mobile simulation)', async () => {
        vi.useFakeTimers();
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 390 });
        window.dispatchEvent(new Event('resize'));

        render(
            <Hint message="Coming Soon">
                <button>Test Button</button>
            </Hint>
        );

        const button = screen.getByText('Test Button');
        fireEvent.focus(button);

        expect(screen.getByText('Coming Soon')).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        expect(screen.queryByText('Coming Soon')).not.toBeInTheDocument();

        vi.useRealTimers();
    });
});
