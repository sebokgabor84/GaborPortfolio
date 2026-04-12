import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
    id?: string;
    title: string;
    description: string;
    videoId?: string;
    tags: string[];
    thumbnailSrc: string;
    altKey?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
    id, title, description, videoId, tags, thumbnailSrc, altKey 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showFallback) {
      timer = setTimeout(() => {
        setShowFallback(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showFallback]);

  const handlePlayClick = () => {
    if (videoId) {
      setIsPlaying(true);
    } else {
      setShowFallback(true);
    }
  };

  return (
    <section
      id={id}
      aria-label={t('projects.card_aria', { title })}
      className="project-card glass-panel"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem auto',
        position: 'relative'
      }}
    >
      {/* Video Container (Responsive 16:9) */}
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', /* 16:9 */
        height: 0,
        background: '#000',
        borderBottom: '2px solid var(--color-copper)'
      }}>

        {!isPlaying ? (
          <button
            onClick={handlePlayClick}
            aria-label={videoId ? `Play video: ${title}` : `${title} - Video Coming Soon`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              padding: 0,
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            {thumbnailSrc && (
              <img
                src={thumbnailSrc}
                srcSet={`${thumbnailSrc} 1x, ${thumbnailSrc.replace('.webp', '@2x.webp')} 2x`}
                alt={altKey ? t(altKey) : t('projects.thumbnail_alt', { title })}
                width={400}
                height={225}
                loading="lazy"
                decoding="async"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.8
                }}
              />
            )}

            {!showFallback ? (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--color-gold)',
                boxShadow: '0 0 20px var(--color-gold)',
                transition: 'transform 0.3s ease'
              }}>
                <FaPlay style={{ fontSize: '2rem', color: 'var(--color-gold)', marginLeft: '6px' }} aria-hidden="true" />
              </div>
            ) : (
              <div
                className="fallback-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(18, 16, 16, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  backdropFilter: 'blur(4px)',
                  animation: 'fade-in-out 4s forwards',
                  borderRadius: '12px'
                }}
              >
                <span style={{
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  textTransform: 'uppercase'
                }}>
                  {t('projects.video_coming_soon_short') || 'COMING SOON'}
                </span>
              </div>
            )}

            {!showFallback && (
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.8)',
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                color: '#fff',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-digital)',
                zIndex: 11,
                border: '1px solid var(--color-copper-dim)'
              }}>
                {t('projects.click_hint')}
              </div>
            )}
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{title}</h3>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: 'var(--color-text-main)',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(30, 28, 26, 0.9)',
              color: 'var(--color-gold)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              border: '1px solid var(--color-copper)',
              fontFamily: 'var(--font-digital)',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)'
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-out {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}} />
    </section>
  );
};
