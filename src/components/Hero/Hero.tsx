import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialDock } from '../Social/SocialDock';
import { Hint } from '../Common/Hint';

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header 
      className="glass-panel"
      style={{
        textAlign: 'center',
        padding: 'clamp(0.5rem, 2vh, 1rem) clamp(1rem, 5vw, 2.5rem) clamp(2rem, 8vh, 4rem) clamp(1rem, 5vw, 2.5rem)',
        borderBottom: '2px solid var(--color-copper)',
        position: 'relative',
        overflow: 'hidden',
        margin: '2rem auto',
        maxWidth: '1200px',
        borderRadius: '12px'
      }}
    >
      <div key={i18n.language} style={{ animation: 'langFade 0.4s ease' }}>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 10vw, 3.5rem)',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 0 20px #000',
            lineHeight: '1.2',
          }}
        >
          {t('hero.name')}
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
          color: 'var(--color-text-main)',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          padding: '0 1rem',
          textShadow: '0 2px 4px #000',
          lineHeight: '1.4'
        }}>
          {t('hero.role')}
        </p>

        <SocialDock />

        <div style={{
          marginTop: '3rem',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: window.innerWidth < 600 ? 'column' : 'row',
          alignItems: 'center',
          padding: '0 1.5rem',
          width: '100%',
        }}>
          <div style={{ width: '100%' }}>
            <Hint message={t('common.coming_soon')}>
              <button style={{
                background: 'var(--color-copper)',
                color: '#000',
                border: 'none',
                padding: '1.2rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 0 15px rgba(184, 115, 51, 0.5)',
                width: '100%',
                minHeight: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {t('hero.download_cv')}
              </button>
            </Hint>
          </div>

          <a
            href="https://github.com/sebokgabor84/GaborPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              color: 'var(--color-copper)',
              border: '2px solid var(--color-copper)',
              padding: '1.2rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 10px rgba(184, 115, 51, 0.2)',
              width: '100%',
              maxWidth: window.innerWidth < 600 ? 'none' : '320px',
              minHeight: '3.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(184, 115, 51, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(184, 115, 51, 0.4)';
              e.currentTarget.style.color = 'var(--color-gold)';
              e.currentTarget.style.borderColor = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(184, 115, 51, 0.2)';
              e.currentTarget.style.color = 'var(--color-copper)';
              e.currentTarget.style.borderColor = 'var(--color-copper)';
            }}
          >
            {t('hero.view_code')}
          </a>

          <a
            href="#about-this-page"
            style={{
              background: 'transparent',
              color: 'var(--color-copper)',
              border: '2px solid var(--color-copper)',
              padding: '1.2rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 10px rgba(184, 115, 51, 0.2)',
              width: '100%',
              maxWidth: window.innerWidth < 600 ? 'none' : '320px',
              minHeight: '3.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(184, 115, 51, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(184, 115, 51, 0.4)';
              e.currentTarget.style.color = 'var(--color-gold)';
              e.currentTarget.style.borderColor = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(184, 115, 51, 0.2)';
              e.currentTarget.style.color = 'var(--color-copper)';
              e.currentTarget.style.borderColor = 'var(--color-copper)';
            }}
          >
            {t('hero.learn_more')} ↓
          </a>
        </div>
      </div>
    </header>
  );
};
