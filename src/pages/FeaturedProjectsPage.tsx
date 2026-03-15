import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectSection/ProjectCard';
import { BackButton } from '../components/Common/BackButton';
import { projects } from '../data/projects';

export const FeaturedProjectsPage: React.FC = () => {
    const { t } = useTranslation();
    const enabledProjects = projects.filter(p => p.enabled);

    React.useEffect(() => {
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
    }, []);

    return (
        <main style={{ 
            padding: '4rem 1rem', 
            minHeight: '100vh',
            background: `var(--bg-gradient-standard)`
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <BackButton />
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
    );
};
