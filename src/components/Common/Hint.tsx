import React, { useState, useEffect, useRef } from 'react';

interface HintProps {
    children: React.ReactNode;
    message: string;
}

export const Hint: React.FC<HintProps> = ({ children, message }) => {
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

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
        target.classList.add('hint-pulse');
        setTimeout(() => target.classList.remove('hint-pulse'), 400);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <div
            className="hint-container"
            onMouseEnter={showHint}
            onMouseLeave={hideHint}
            onFocus={showHint}
            onBlur={hideHint}
            onClick={handleClick}
            style={{ position: 'relative', display: 'inline-flex' }}
        >
            {children}
            {isVisible && (
                <div
                    className="hint-bubble"
                    role="tooltip"
                    aria-live="polite"
                >
                    <div className="hint-arrow" />
                    {message}
                </div>
            )}
        </div>
    );
};
