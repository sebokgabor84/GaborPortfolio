import { Cockpit } from './components/Cockpit/Cockpit';
import { ProjectCard } from './components/ProjectSection/ProjectCard';
import { SocialDock } from './components/Social/SocialDock';
import { DebugGuide } from './components/Guide/DebugGuide';

function App() {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <header style={{
        textAlign: 'center',
        padding: '8rem 1rem 6rem 1rem',
        background: `linear-gradient(to bottom, rgba(18, 16, 16, 0.8), var(--color-bg-dark)), url('/assets/hero-cockpit.png')`,
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
          QA Specialist | Master Brewer | Craftsman
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
            Download CV
          </button>
        </div>
      </header>

      {/* The Cockpit */}
      <Cockpit />

      {/* Projects Section */}
      <main style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: 'var(--color-text-main)'
        }}>
          Featured Projects
        </h2>

        <ProjectCard
          title="QA Automation Framework"
          description="A robust end-to-end testing suite built for high-traffic eCommerce platforms. Reduced regression testing time by 60% and caught critical payment gateway bugs before production."
          videoId="dQw4w9WgXcQ"
          tags={['QA', 'Automation', 'Cypress', 'TypeScript']}
          thumbnailSrc="/assets/thumb-qa.png"
        />

        <ProjectCard
          title="SYI Professional Brewing Kit"
          description="Designed and built a custom semi-automated brewing system. Features temperature control, magnetic drive pumps, and a capacity of 50L per batch."
          videoId="dQw4w9WgXcQ"
          tags={['Engineering', 'IoT', 'Brewing']}
          thumbnailSrc="/assets/thumb-brewing.png"
        />

        <ProjectCard
          title="Wedding Gates & Decor"
          description="Handcrafted hexagonal wedding arches and rustic decor. Welding, woodworking, and structural design for client events."
          videoId="dQw4w9WgXcQ"
          tags={['Craftsmanship', 'Welding', 'Design']}
          thumbnailSrc="/assets/thumb-wedding.png"
        />

        <ProjectCard
          title="The House Rebuild"
          description="Complete renovation of a 1970s Austrian Hunter-style home. Installed floor heating, modernized insulation, and preserved the classic aesthetic."
          videoId="dQw4w9WgXcQ"
          tags={['Renovation', 'Project Management', 'Construction']}
          thumbnailSrc="/assets/thumb-house.png"
        />

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
        <p>&copy; {new Date().getFullYear()} Gabor Seboek. Built with React & Vite.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Engineered to last.</p>
      </footer>
    </div>
  );
}

export default App;
