import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaXTwitter, FaGithub, FaXing } from 'react-icons/fa6';
import { Hint } from '../Common/Hint';
import { useTranslation } from 'react-i18next';

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string; comingSoon?: boolean; comingSoonMessage?: string }> = ({ href, icon, label, comingSoon, comingSoonMessage }) => {
  const content = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
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
    <nav
      aria-label={t('common.social_links') || 'Social Links'}
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
      <SocialIcon href="https://github.com/sebokgabor84/GaborPortfolio" icon={<FaGithub />} label="GitHub Repository" />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_LINKEDIN || "https://linkedin.com"} icon={<FaLinkedin />} label="LinkedIn" comingSoon={!import.meta.env.VITE_SOCIAL_LINKEDIN} comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_XING || "https://xing.com"} icon={<FaXing />} label="Xing" comingSoon={!import.meta.env.VITE_SOCIAL_XING} comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com"} icon={<FaInstagram />} label="Instagram" comingSoon={!import.meta.env.VITE_SOCIAL_INSTAGRAM} comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_FACEBOOK || "https://facebook.com"} icon={<FaFacebook />} label="Facebook" comingSoon={!import.meta.env.VITE_SOCIAL_FACEBOOK} comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_TIKTOK || "https://tiktok.com"} icon={<FaTiktok />} label="TikTok" comingSoon={!import.meta.env.VITE_SOCIAL_TIKTOK} comingSoonMessage={t('common.coming_soon')} />
      <SocialIcon href={import.meta.env.VITE_SOCIAL_TWITTER || "https://twitter.com"} icon={<FaXTwitter />} label="X (Twitter)" comingSoon={!import.meta.env.VITE_SOCIAL_TWITTER} comingSoonMessage={t('common.coming_soon')} />
    </nav>
  );
};
