import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomePage } from './pages/HomePage';
import { FeaturedProjectsPage } from './pages/FeaturedProjectsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { LanguageDial } from './components/LanguageSwitch/LanguageDial';

const App: React.FC = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const dimFactor = Math.min(scrollY / 1000, 0.4); // Max 40% additional dimming
      document.documentElement.style.setProperty('--cockpit-dim-factor', `${dimFactor}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <div className="global-texture-overlay" aria-hidden="true" />
      <LanguageDial />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/featured-projects" element={<FeaturedProjectsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '3rem',
          borderTop: '1px solid var(--color-copper-dim)',
          color: 'var(--color-text-dim)',
          marginTop: '4rem',
        }}
      >
        <p style={{ marginBottom: '0.5rem', fontStyle: 'italic', fontSize: '0.9em' }}>{t('footer.changelog')}</p>
        <p>&copy; {new Date().getFullYear()} Gabor Seboek. {t('footer.rights')} {t('footer.tagline')}</p>
      </footer>
    </div>
  );
};

export default App;
