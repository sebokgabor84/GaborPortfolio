import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  videoId: string; // YouTube ID for now
  tags: string[];
  thumbnailSrc?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, videoId, tags, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  return (
    <div style={{
      background: 'var(--color-bg-panel)',
      border: '1px solid var(--color-copper-dim)',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-panel)',
      maxWidth: '800px',
      margin: '0 auto 3rem auto'
    }}>
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
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${title}`}
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
                alt=""
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
              boxShadow: '0 0 20px var(--color-gold)'
            }}>
              <FaPlay style={{ fontSize: '2rem', color: 'var(--color-gold)', marginLeft: '6px' }} />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              background: 'rgba(0,0,0,0.8)',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-digital)'
            }}>
              {t('projects.click_hint')}
            </div>
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
          color: 'var(--color-text-dim)',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(184, 115, 51, 0.1)',
              color: 'var(--color-gold)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              border: '1px solid var(--color-copper-dim)',
              fontFamily: 'var(--font-digital)'
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
