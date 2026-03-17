import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRocket, FaChevronDown } from 'react-icons/fa';

export const AboutThisPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            id="about-this-page"
            aria-label={t('about.aria_label')}
            className="glass-panel"
            style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '2rem auto',
                padding: '4rem clamp(1rem, 5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '12px',
                borderBottom: '1px solid var(--color-copper-dim)',
            }}
        >
            <div style={{ maxWidth: '800px', width: '100%' }}>
            {/* Always Visible: Why This Page Exists (Now Collapsible) */}
            <details
                style={{
                    background: 'var(--color-bg-panel)',
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                }}
            >
                <summary
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
                        background: 'rgba(184, 115, 51, 0.06)',
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
                        {['stack_ai', 'stack_arch', 'stack_deploy', 'stack_testing', 'stack_a11y', 'stack_i18n'].map((key) => (
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

            {/* Collapsible: How This Page Builds Itself */}
            <details
                style={{
                    background: 'var(--color-bg-panel)',
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                }}
            >
                <summary
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
                        background: 'rgba(184, 115, 51, 0.06)',
                    }}
                >
                    {t('about.build_title')}
                    <FaChevronDown style={{ fontSize: '0.8rem', flexShrink: 0 }} />
                </summary>
                <div style={{
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.7',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}>
                    <p>{t('about.build_p1')}</p>
                    <p>{t('about.build_p2')}</p>
                </div>
            </details>

            {/* Collapsible: Playwright Self-Healing Setup */}
            <details
                style={{
                    background: 'var(--color-bg-panel)',
                    border: 'var(--border-metal)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-panel)',
                    overflow: 'hidden',
                }}
            >
                <summary
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
                        background: 'rgba(184, 115, 51, 0.06)',
                    }}
                >
                    {t('about.playwright_title')}
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
