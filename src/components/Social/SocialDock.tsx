import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaXTwitter, FaGithub } from 'react-icons/fa6';
import { Hint } from '../Common/Hint';
import { useTranslation } from 'react-i18next';

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; comingSoon?: boolean; comingSoonMessage?: string }> = ({ href, icon, comingSoon, comingSoonMessage }) => {
  const content = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--color-copper)',
        fontSize: '2rem',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        border: '2px solid transparent',
        borderRadius: '50%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-gold)';
        e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)';
        e.currentTarget.style.borderColor = 'var(--color-copper)';
        e.currentTarget.style.background = 'rgba(184, 115, 51, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--color-copper)';
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {icon}
    </a>
  );

  if (comingSoon && comingSoonMessage) {
    return <Hint message={comingSoonMessage}>{content}</Hint>;
  }

  return content;
};

export const SocialDock: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        gap: 'clamp(0.5rem, 3vw, 1.5rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(30, 28, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '1px solid var(--color-copper-dim)',
        marginTop: '2rem',
        maxWidth: '100%',
      }}
    >
      <SocialIcon href="https://github.com/sebokgabor84/GaborPortfolio" icon={<FaGithub />} />
      <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} comingSoon comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href="https://instagram.com" icon={<FaInstagram />} comingSoon comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href="https://facebook.com" icon={<FaFacebook />} comingSoon comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href="https://tiktok.com" icon={<FaTiktok />} comingSoon comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href="https://twitter.com" icon={<FaXTwitter />} comingSoon comingSoonMessage={t('common.coming_soon')} />
    </div>
  );
};
