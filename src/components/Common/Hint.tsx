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


    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);


    return (
        <span
            className={styles.hintContainer}
            onMouseEnter={showHint}
            onMouseLeave={hideHint}
            onFocus={showHint} // Bubble up focus from interactive children
            onBlur={hideHint}
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
