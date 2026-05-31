import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRocket, FaChevronDown, FaUserCog, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import styles from './AboutThisPage.module.css';

export const AboutThisPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            id="about-this-page"
            aria-label={t('about.aria_label')}
            className={`${styles.aboutSection} glass-panel`}
        >
            <div style={{ maxWidth: '800px', width: '100%' }}>
            {/* Always Visible: Why This Page Exists (Now Collapsible) */}
            <details
                className={styles.aboutDetails}
                style={{
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                }}
            >
                <summary
                    className={styles.aboutSummary}
                    style={{
                        padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaRocket style={{ color: 'var(--color-gold)', fontSize: '1.4rem', flexShrink: 0 }} />
                        <h3 style={{ margin: 0, fontSize: 'inherit', color: 'inherit' }}>
                            {t('about.title')}
                        </h3>
                    </div>
                    <FaChevronDown style={{ fontSize: '1rem', flexShrink: 0 }} />
                </summary>

                <div style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', paddingTop: '0' }}>
                    <p style={{
                        color: 'var(--color-text-main)',
                        lineHeight: '1.7',
                        fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                        marginBottom: '1.5rem',
                        marginTop: '1.5rem'
                    }}>
                        {t('about.intro')}
                    </p>

                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 2rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                    }}>
                        {['stack_arch', 'stack_deploy', 'stack_testing', 'stack_a11y', 'stack_i18n'].map((key) => (
                            <li key={key} style={{
                                color: 'var(--color-text-dim)',
                                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                                lineHeight: '1.5',
                            }}>
                                {t(`about.${key}`)}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Callout */}
                    <div style={{
                        background: 'rgba(184, 115, 51, 0.08)',
                        border: '1px solid var(--color-gold)',
                        borderRadius: '6px',
                        padding: 'clamp(1rem, 4vw, 1.5rem)',
                        textAlign: 'center',
                    }}>
                        <p style={{
                            color: 'var(--color-gold)',
                            fontFamily: 'var(--font-digital)',
                            fontSize: 'clamp(0.85rem, 3vw, 1rem)',
                            lineHeight: '1.6',
                            margin: 0,
                        }}>
                            {t('about.cta_text')}
                        </p>
                        <a
                            href="mailto:sebok.gabor123@gmail.com"
                            style={{
                                display: 'inline-block',
                                marginTop: '0.8rem',
                                color: 'var(--color-copper)',
                                fontFamily: 'var(--font-digital)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                borderBottom: '1px solid var(--color-copper-dim)',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-gold)';
                                e.currentTarget.style.borderColor = 'var(--color-gold)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-copper)';
                                e.currentTarget.style.borderColor = 'var(--color-copper-dim)';
                            }}
                        >
                            sebok.gabor123@gmail.com
                        </a>
                    </div>
                </div>
            </details>

            {/* Collapsible: About Me */}
            <details
                className={styles.aboutDetails}
                style={{
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                }}
            >
                <summary
                    className={styles.aboutSummary}
                    style={{
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaUserCog style={{ color: 'var(--color-gold)', fontSize: '1.4rem', flexShrink: 0 }} />
                        <h3 style={{ margin: 0, fontSize: 'inherit', color: 'inherit' }}>
                            {t('about.aboutme_title')}
                        </h3>
                    </div>
                    <FaChevronDown style={{ fontSize: '0.8rem', flexShrink: 0 }} />
                </summary>
                <div style={{
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.7',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}>
                    <h4 style={{ color: 'var(--color-copper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                        {t('about.aboutme_leader_title')}
                    </h4>
                    <p style={{ marginBottom: '1.5rem' }}>{t('about.aboutme_leader_p')}</p>

                    <h4 style={{ color: 'var(--color-copper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                        {t('about.aboutme_artisan_title')}
                    </h4>
                    <p style={{ marginBottom: '1.5rem' }}>{t('about.aboutme_artisan_p')}</p>

                    <h4 style={{ color: 'var(--color-copper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                        {t('about.aboutme_father_title')}
                    </h4>
                    <p>{t('about.aboutme_father_p')}</p>
                </div>
            </details>

            {/* Collapsible: How I Work (Combined) */}
            <details
                className={styles.aboutDetails}
                style={{
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                }}
            >
                <summary
                    className={styles.aboutSummary}
                    style={{
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaLaptopCode style={{ color: 'var(--color-gold)', fontSize: '1.4rem', flexShrink: 0 }} />
                        <h3 style={{ margin: 0, fontSize: 'inherit', color: 'inherit' }}>
                            {t('about.how_i_work_title')}
                        </h3>
                    </div>
                    <FaChevronDown style={{ fontSize: '0.8rem', flexShrink: 0 }} />
                </summary>
                <div style={{
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.7',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}>
                    <p style={{ color: 'var(--color-copper)', marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '1.05em' }}>
                        {t('about.how_i_work_header')}
                    </p>
                    
                    <p style={{ marginBottom: '1rem' }}>
                        {t('about.how_i_work_intro')}
                    </p>
                    <ul style={{ paddingLeft: '0', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none' }}>
                        <li>{t('about.how_i_work_claude')}</li>
                    </ul>

                    <ul style={{ paddingLeft: '0', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none' }}>
                        <li>{t('about.atlas_problem')}</li>
                        <li>{t('about.atlas_pattern')}</li>
                    </ul>

                    {/* Steampunk Diagram with HTML Overlay */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: '1px solid var(--color-copper-dim)',
                        marginBottom: '1.5rem',
                        backgroundColor: '#121010'
                    }}>
                        <img 
                            src="/assets/thumb-atlas-workflow.webp" 
                            alt="Steampunk QA Assistant Architecture" 
                            style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }} 
                        />
                        {/* CSS/HTML Overlay Labels representing the Nodes */}
                        <div style={{ position: 'absolute', top: '15%', left: '8%', width: '25%', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-gold)', fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)', textShadow: '0 2px 4px #000', margin: 0, fontWeight: 'bold' }}>Jira / Confluence / Meetings</p>
                        </div>
                        <div style={{ position: 'absolute', top: '45%', left: '35%', width: '30%', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-gold)', fontSize: 'clamp(0.7rem, 2vw, 1.1rem)', textShadow: '0 2px 4px #000', margin: 0, fontWeight: 'bold' }}>Claude QA Assistant<br/><span style={{fontSize: '0.8em', color: 'var(--color-copper)'}}>(Requirement Builder, Meeting Sync, Manage Test Case)</span></p>
                        </div>
                        <div style={{ position: 'absolute', top: '55%', right: '5%', width: '25%', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-gold)', fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)', textShadow: '0 2px 4px #000', margin: 0, fontWeight: 'bold' }}>Git Source of Truth<br/><span style={{fontSize: '0.8em', color: 'var(--color-copper)'}}>(Schema Validation)</span></p>
                        </div>
                    </div>

                    <p style={{ listStyle: 'none' }}>{t('about.atlas_outcome')}</p>
                </div>
            </details>

            {/* Collapsible: Playwright Self-Healing Setup */}
            <details
                className={styles.aboutDetails}
                style={{
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    overflow: 'hidden',
                }}
            >
                <summary
                    className={styles.aboutSummary}
                    style={{
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <FaShieldAlt style={{ color: 'var(--color-gold)', fontSize: '1.4rem', flexShrink: 0 }} />
                        <h3 style={{ margin: 0, fontSize: 'inherit', color: 'inherit' }}>
                            {t('about.playwright_title')}
                        </h3>
                    </div>
                    <FaChevronDown style={{ fontSize: '0.8rem', flexShrink: 0 }} />
                </summary>
                <div style={{
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.7',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}>
                    <p>{t('about.playwright_p1')}</p>
                    <pre style={{
                        background: '#000',
                        padding: '1rem',
                        borderRadius: '4px',
                        overflowX: 'auto',
                        border: '1px solid var(--color-copper-dim)',
                        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                        lineHeight: '1.5',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                    }}>
                        {`# Install & run
npx playwright install --with-deps
npm run test:e2e

# Key patterns used:
# ✅ data-testid selectors (no brittle CSS)
# ✅ Auto-waiting (no sleep hacks)
# ✅ Retry logic (flake-resistant)
# ✅ Multi-browser (Chromium, Firefox, WebKit)`}
                    </pre>
                    <p>{t('about.playwright_p2')}</p>
                </div>
            </details>
            </div>
        </section>
    );
};
