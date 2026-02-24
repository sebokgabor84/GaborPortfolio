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
import { DebugGuide } from './components/Guide/DebugGuide';
import { LanguageDial } from './components/LanguageSwitch/LanguageDial';
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
        padding: '8rem 1rem 6rem 1rem',
        background: `linear-gradient(to bottom, rgba(18, 16, 16, 0.8), var(--color-bg-dark)), url('/assets/hero-cockpit.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid var(--color-copper)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '4px', textShadow: '0 0 20px #000' }}>
          Gabor Seboek
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: 'var(--color-text-main)',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          textShadow: '0 2px 4px #000'
        }}>
          {/* Using the translation hook to show dynamic text */}
          {t('hero.role')}
        </p>

        <SocialDock />

        <div style={{ marginTop: '3rem' }}>
          <button style={{
            background: 'var(--color-copper)',
            color: '#000',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 0 15px rgba(184, 115, 51, 0.5)'
          }}>
            {t('hero.download_cv')}
          </button>
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

        <DebugGuide />
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
