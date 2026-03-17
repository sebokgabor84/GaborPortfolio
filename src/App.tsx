import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FeaturedProjectsPage } from './pages/FeaturedProjectsPage';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { LanguageDial } from './components/LanguageSwitch/LanguageDial';

const App: React.FC = () => {
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
        <p>&copy; {new Date().getFullYear()} Gabor Seboek. Professional Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
