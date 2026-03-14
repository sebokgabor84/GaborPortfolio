import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export const BackButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/#mission-control')}
            aria-label="Back to Mission Control"
            style={{
                position: 'fixed',
                top: window.innerWidth < 768 ? 'calc(0.5rem + 6.3px)' : 'calc(1rem + 7.4px)',
                left: window.innerWidth < 768 ? 'calc(0.5rem + 6.3px)' : 'calc(1rem + 7.4px)',
                zIndex: 2000,
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
                backdropFilter: 'blur(10px)',
                transform: window.innerWidth < 768 ? 'scale(0.85)' : 'none',
                transformOrigin: 'top left'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.transform = (window.innerWidth < 768 ? 'scale(0.85) ' : '') + 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-copper)';
                e.currentTarget.style.color = 'var(--color-copper)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(184, 115, 51, 0.3)';
                e.currentTarget.style.transform = window.innerWidth < 768 ? 'scale(0.85)' : 'none';
            }}
        >
            <FaChevronLeft style={{ fontSize: '1.2rem' }} />
        </button>
    );
};
