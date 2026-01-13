import React from 'react';

interface GaugeProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  color?: 'gold' | 'copper' | 'success' | 'danger';
}

export const Gauge: React.FC<GaugeProps> = ({ label, value, unit, icon, color = 'gold' }) => {
  const textColor = {
    gold: 'var(--color-gold)',
    copper: 'var(--color-copper)',
    success: 'var(--color-success)',
    danger: 'var(--color-danger)',
  }[color];

  return (
    <div
      style={{
        background: 'var(--color-bg-panel)',
        border: 'var(--border-metal)',
        borderRadius: '8px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-panel)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: '150px',
      }}
    >
      {/* Decorative screws */}
      <div
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#444',
          boxShadow: 'inset 1px 1px 2px #000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#444',
          boxShadow: 'inset 1px 1px 2px #000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 5,
          left: 5,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#444',
          boxShadow: 'inset 1px 1px 2px #000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 5,
          right: 5,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#444',
          boxShadow: 'inset 1px 1px 2px #000',
        }}
      />

      <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-copper)' }}>
        {icon}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-digital)',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: textColor,
          textShadow: `0 0 10px ${textColor}`,
        }}
      >
        {value}
        {unit && <span style={{ fontSize: '1rem', marginLeft: '4px', opacity: 0.7 }}>{unit}</span>}
      </div>

      <div
        style={{
          marginTop: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '0.8rem',
          color: 'var(--color-text-dim)',
        }}
      >
        {label}
      </div>
    </div>
  );
};
