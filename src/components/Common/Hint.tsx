import React, { useState, useEffect, useRef } from 'react';
import styles from './Hint.module.css';

interface HintProps {
    children: React.ReactNode;
    message: string;
}

export const Hint: React.FC<HintProps> = ({ children, message }) => {
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showHint = () => {
        setIsVisible(true);
        // On mobile, automatically hide after a delay
        if (window.innerWidth < 768) {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIsVisible(false), 3000);
        }
    };

    const hideHint = () => {
        if (window.innerWidth >= 768) {
            setIsVisible(false);
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        // Prevent navigation for placeholder links
        e.preventDefault();
        showHint();

        // Pulse effect on click
        const target = e.currentTarget as HTMLElement;
        target.classList.add(styles.hintPulse);
        setTimeout(() => target.classList.remove(styles.hintPulse), 400);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showHint();
            const target = e.currentTarget as HTMLElement;
            target.classList.add(styles.hintPulse);
            setTimeout(() => target.classList.remove(styles.hintPulse), 400);
        }
    };

    return (
        <span
            className={styles.hintContainer}
            onMouseEnter={showHint}
            onMouseLeave={hideHint}
            onFocus={showHint}
            onBlur={hideHint}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
        >
            {children}
            {isVisible && (
                <span
                    className={styles.hintBubble}
                    role="tooltip"
                    aria-live="polite"
                >
                    <span className={styles.hintArrow} />
                    {message}
                </span>
            )}
        </span>
    );
};
