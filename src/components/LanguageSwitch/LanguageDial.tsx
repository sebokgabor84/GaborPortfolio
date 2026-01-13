import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageDial: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const activeLang = i18n.language.split('-')[0]; // Handle 'en-US' etc.

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' },
        { code: 'hu', label: 'HU' },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.8)',
            padding: '0.5rem',
            borderRadius: '8px',
            border: '1px solid var(--color-copper)',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            display: 'flex',
            gap: '0.5rem'
        }}>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    aria-label={`Switch language to ${lang.label}`}
                    aria-pressed={activeLang === lang.code}
                    style={{
                        background: activeLang === lang.code ? 'var(--color-copper)' : 'var(--color-bg-panel)',
                        color: activeLang === lang.code ? '#000' : 'var(--color-text-dim)',
                        border: '2px solid var(--color-copper-dim)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-heading)',
                        transition: 'all 0.2s ease',
                        boxShadow: activeLang === lang.code ? '0 0 10px var(--color-copper)' : 'none'
                    }}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};
