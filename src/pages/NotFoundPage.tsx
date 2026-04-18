import React, { useLayoutEffect, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Common/Logo';
import { ParallaxDebris } from '../components/Common/ParallaxDebris';
import { SeoHead } from '../components/Common/SeoHead';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentPath = window.location.pathname;

    // A11y & Background Isolation
    // Using useLayoutEffect to kill flicker BEFORE paint for client-side navigation
    useLayoutEffect(() => {
        // Remove global cockpit backdrop for this specific page
        document.documentElement.style.setProperty('--cockpit-bg-image', 'none');

        return () => {
            // Restore default background on exit
            document.documentElement.style.setProperty('--cockpit-bg-image', "url('/assets/hero-cockpit.webp')");
        };
    }, []);

    // A11y: Set focus for screen readers
    useEffect(() => {
        const heading = document.getElementById('not-found-code');
        if (heading) heading.focus();
    }, []);

    return (
        <div className={styles.notFoundContainer}>
            <SeoHead 
                title={`404: ${t('error_404.status')} | Gabor Seboek`}
                description={t('error_404.message')}
                canonicalUrl={`https://sebokgabor.com${currentPath}`}
                ogImage="https://sebokgabor.com/assets/og-image.webp"
                locale={i18n.language}
                noIndex={true}
            />

            <ParallaxDebris />
            
            <main className={styles.hudCard}>
                <div className={styles.logoArea}>
                    <Logo size="80px" simplified={true} />
                </div>

                <header>
                    <h1 id="not-found-code" tabIndex={-1} className={styles.errorCode}>
                        404
                    </h1>
                    <div className={styles.statusLabel}>{t('error_404.status')}</div>
                </header>

                <h2 className={styles.title}>
                    {t('error_404.title')}
                </h2>

                <p className={styles.description}>
                    {t('error_404.message')}
                </p>

                <nav className={styles.recoveryGrid} aria-label="Recovery navigation">
                    <Link to="/" className={`${styles.ctaLink} ${styles.primaryCta}`}>
                        {t('error_404.cta_home')}
                    </Link>
                    <Link to="/featured-projects" className={`${styles.ctaLink} ${styles.secondaryCta}`}>
                        {t('error_404.cta_projects')}
                    </Link>
                </nav>

                <footer className={styles.funnyTip}>
                    {t('error_404.funny_tip')}
                </footer>
            </main>
        </div>
    );
};
