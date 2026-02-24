// -----------------------------------------------------------------------------
// 🧱 The "Grand Orchestrator" Component
// -----------------------------------------------------------------------------
// This file (as mentioned in main.tsx) is the top-level container for your specific UI.
// While main.tsx sets up the 'React Environment' (providers, CSS), App.tsx defines
// what the user actually SEES on the screen.
// -----------------------------------------------------------------------------

import { Cockpit } from './components/Cockpit/Cockpit';
import { ProjectCard } from './components/ProjectSection/ProjectCard';
import { SocialDock } from './components/Social/SocialDock';
import { AboutThisPage } from './components/Guide/AboutThisPage';
import { LanguageDial } from './components/LanguageSwitch/LanguageDial';
import { Hint } from './components/Common/Hint';
import { useTranslation } from 'react-i18next';
// 📦 Data Separation: We import raw project data from a separate file.
// This keeps the UI logic clean and lets us add new projects just by editing a JSON-like list.
import { projects } from './data/projects';

function App() {
  // 🪝 Component Hooks:
  // useTranslation is a "Hook" that lets us switch text between English/German/Hungarian.
  // It returns a function 't' that we wrap around text strings: t('hello') -> "Szia"
  const { t } = useTranslation();

  // 🔍 Data Logic:
  // Before rendering, we filter the list of projects to show only the ones marked 'enabled: true'.
  const enabledProjects = projects.filter((p) => p.enabled);

  // 🖼️ The Render Return:
  // Everything inside this 'return (...)' statement is JSX (JavaScript XML).
  // It looks like HTML, but it's actually JavaScript functions creating elements.
  return (
    <div style={{ paddingBottom: '5rem' }}>
      <LanguageDial />

      {/* Hero Section */}
      <header style={{
        textAlign: 'center',
        padding: 'clamp(4rem, 15vh, 8rem) 1rem clamp(3rem, 10vh, 6rem) 1rem',
        background: `linear-gradient(to bottom, rgba(18, 16, 16, 0.8), var(--color-bg-dark)), url('/assets/hero-cockpit.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid var(--color-copper)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1
          key={t('hero.name')}
          style={{
            fontSize: 'clamp(2.2rem, 10vw, 3.5rem)',
            marginBottom: '1rem',
            letterSpacing: 'clamp(2px, 1vw, 4px)',
            textShadow: '0 0 20px #000',
            lineHeight: '1.2',
            animation: 'nameFadeIn 0.5s ease-out',
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
          {/* Using the translation hook to show dynamic text */}
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
          alignItems: 'center'
        }}>
          {/* Using a helper to avoid duplication of styles or using a class if it was available */}
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
              maxWidth: '320px',
              minHeight: '3.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {t('hero.download_cv')}
            </button>
          </Hint>

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
              maxWidth: '320px',
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
              maxWidth: '320px',
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
      </header>

      {/* The Cockpit */}
      <Cockpit />

      {/* Projects Section - Data Driven */}
      {/* 
        This is a 'data-driven' section. Instead of hardcoding 10 cards,
        we 'map' over our filtered data array. For every project in the array,
        React will automatically create one <ProjectCard /> component.
      */}
      <main id="main-content" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: 'var(--color-text-main)'
        }}>
          {t('projects.section_title')}
        </h2>

        {enabledProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(project.titleKey)}
            description={t(project.descKey)}
            videoId={project.videoId}
            tags={project.tags}
            thumbnailSrc={project.thumbnailSrc}
          />
        ))}

        <AboutThisPage />
      </main>

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
        <p>&copy; {new Date().getFullYear()} Gabor Seboek. {t('footer.rights')}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t('footer.tagline')}</p>
      </footer>
    </div>
  );
}

export default App;
