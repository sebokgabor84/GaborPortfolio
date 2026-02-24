import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollUp}
            aria-label="Scroll to top"
            style={{
                position: 'fixed',
                bottom: 'clamp(1rem, 4vw, 2rem)',
                right: 'clamp(1rem, 4vw, 2rem)',
                zIndex: 1000,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '2px solid var(--color-copper)',
                background: 'var(--color-bg-dark)',
                color: 'var(--color-copper)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(184, 115, 51, 0.3)',
                transition: 'all 0.3s ease',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-copper)';
                e.currentTarget.style.color = 'var(--color-copper)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(184, 115, 51, 0.3)';
            }}
        >
            <FaChevronUp style={{ fontSize: '1.1rem' }} />
        </button>
    );
};
