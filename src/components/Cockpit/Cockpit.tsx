import React, { useState, useEffect } from 'react';
import { Gauge } from './Gauge';
import { useTranslation } from 'react-i18next';
import { kpis } from '../../data/kpis';

export const Cockpit: React.FC = () => {
  const [visitors, setVisitors] = useState(1);
  const { t } = useTranslation();

  // Mock live visitor increment
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const enabledKpis = kpis.filter((k) => k.enabled);

  return (
    <section
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
        <span style={{ borderBottom: '2px solid var(--color-copper)', paddingBottom: '0.5rem' }}>
          {t('cockpit.title')}
        </span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {enabledKpis.map((kpi) => (
          <Gauge
            key={kpi.id}
            label={t(kpi.labelKey)}
            value={kpi.isDynamic ? visitors : kpi.value}
            unit={kpi.unit}
            icon={<kpi.icon />}
            color={kpi.color}
          />
        ))}
      </div>
    </section>
  );
};
