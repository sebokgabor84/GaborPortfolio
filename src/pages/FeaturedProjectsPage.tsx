import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectSection/ProjectCard';
import { BackButton } from '../components/Common/BackButton';
import { projects } from '../data/projects';

export const FeaturedProjectsPage: React.FC = () => {
    const { t } = useTranslation();
    const enabledProjects = projects.filter(p => p.enabled);

    React.useEffect(() => {
        // Switch to Mission Control background for this page
        document.documentElement.style.setProperty('--cockpit-bg-image', "url('/assets/bg-mission-control.webp')");
        
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }

        return () => {
            // Reset to default Hero background on unmount
            document.documentElement.style.setProperty('--cockpit-bg-image', "url('/assets/hero-cockpit.webp')");
        };
    }, []);

    return (
        <>
        <BackButton />
        <main 
            className="glass-panel-subtle"
            style={{ 
                padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 5vw, 2.5rem)', 
                minHeight: '100vh',
                margin: '2rem auto',
                maxWidth: '1200px',
                borderRadius: '12px'
            }}
        >
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                    id={project.id}
                    title={t(project.titleKey)}
                    description={t(project.descKey)}
                    videoId={project.videoId}
                    tags={project.tags}
                    thumbnailSrc={project.thumbnailSrc}
                />
            ))}
            </div>
        </main>
        </>
    );
};
