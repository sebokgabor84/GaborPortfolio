import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
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

export const SocialDock: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(30, 28, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '1px solid var(--color-copper-dim)',
        marginTop: '2rem',
      }}
    >
      <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
      <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
      <SocialIcon href="https://facebook.com" icon={<FaFacebook />} />
      <SocialIcon href="https://tiktok.com" icon={<FaTiktok />} />
      <SocialIcon href="https://twitter.com" icon={<FaXTwitter />} />
    </div>
  );
};
