import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FeaturedProjectsPage } from './pages/FeaturedProjectsPage';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { LanguageDial } from './components/LanguageSwitch/LanguageDial';

const App: React.FC = () => {
  return (
    <div style={{ background: 'var(--color-bg-dark)', minHeight: '100vh' }}>
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
