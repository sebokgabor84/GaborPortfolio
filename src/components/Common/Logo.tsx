import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: string;
  className?: string;
  simplified?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = '60px', className = '', simplified = false }) => {
  const filterGrit = simplified ? '' : 'url(#logo-grit)';
  const filterGlow = simplified ? '' : 'url(#logo-glow)';

  return (
    <Link 
      to="/" 
      className={className}
      style={{ 
        display: 'inline-block', 
        width: size, 
        height: size,
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        filter: simplified ? 'none' : 'drop-shadow(0 0 10px rgba(184, 115, 51, 0.3))'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
        e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(184, 115, 51, 0.6))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(184, 115, 51, 0.3))';
      }}
      aria-label="Return to Home"
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="logo-grit">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" in="noise" result="coloredNoise" />
            <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" />
          </filter>
          <filter id="logo-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="logo-frame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#d9905e', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#b87333', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#8b4513', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#b87333', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5d2e0a', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="logo-s" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fff2cc', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#b8860b', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <polygon points="50,2 94,27 94,73 50,98 6,73 6,27" fill="url(#logo-frame)" filter={filterGrit} />
        <polygon points="50,8 88,30 88,70 50,92 12,70 12,30" fill="#1b110b" />
        <path d="M 59 26 L 74 34.5 L 74 37 L 37 37 L 37 44.5 L 74 44.5 L 74 65.5 L 59 74 L 41 74 L 26 65.5 L 26 63 L 63 63 L 63 55.5 L 26 55.5 L 26 34.5 L 41 26 Z" fill="url(#logo-s)" filter={filterGlow} />
      </svg>
    </Link>
  );
};
