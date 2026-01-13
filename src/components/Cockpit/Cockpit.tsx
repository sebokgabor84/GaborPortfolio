import React, { useState, useEffect } from 'react';
import { Gauge } from './Gauge';
import { FaBug, FaBeer, FaHammer, FaHome, FaUsers, FaEye } from 'react-icons/fa';

export const Cockpit: React.FC = () => {
  const [visitors, setVisitors] = useState(1);

  // Mock live visitor increment
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          Mission Control Status
        </span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        <Gauge label="Bugs Squashed" value={1337} icon={<FaBug />} color="success" />
        <Gauge label="Uptime" value={99.9} unit="%" icon={<FaEye />} color="gold" />
        <Gauge label="Liters Fermented" value={450} unit="L" icon={<FaBeer />} color="copper" />
        <Gauge label="Decor Created" value={42} icon={<FaHammer />} color="gold" />
        <Gauge label="Renovation" value={85} unit="%" icon={<FaHome />} color="copper" />
        <Gauge label="Live Visitors" value={visitors} icon={<FaUsers />} color="success" />
      </div>
    </section>
  );
};
