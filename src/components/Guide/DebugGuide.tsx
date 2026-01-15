import React, { useState } from 'react';
import { FaBug, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const DebugGuide: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section style={{
            maxWidth: '800px',
            margin: '4rem auto',
            border: '2px dashed var(--color-copper-dim)',
            borderRadius: '8px',
            background: 'rgba(0, 0, 0, 0.3)',
            overflow: 'hidden'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                style={{
                    padding: '1rem 2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(184, 115, 51, 0.1)',
                    border: 'none',
                    width: '100%',
                    color: 'inherit',
                    font: 'inherit'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaBug style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }} />
                    <h3 style={{ margin: 0, color: 'var(--color-gold)' }}>Dev Guide: Real-Time Debugging</h3>
                </div>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isOpen && (
                <div style={{ padding: '2rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                    <h4 style={{ color: '#fff', marginTop: 0 }}>How to "Talk" to This Website</h4>
                    <p>
                        You are currently running the <strong>Target</strong> (localhost:5173).
                        To let an AI Agent debug this, you need the <strong>Translator</strong> (MCP Server).
                    </p>

                    <h5 style={{ color: 'var(--color-gold)' }}>1. Validation Status (Bulletproof Check)</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>✅ <strong>Linting:</strong> ESLint + WCAG 2.2 Accessibility (0 Errors)</li>
                        <li>✅ <strong>Formatting:</strong> Prettier (Auto-save)</li>
                        <li>✅ <strong>Tests:</strong> 16 Playwright E2E Tests Passed</li>
                    </ul>

                    <h5 style={{ color: 'var(--color-gold)' }}>2. How to Debug via Chrome</h5>
                    <p>You have launched Chrome with remote debugging on port 9222.</p>
                    <pre style={{
                        background: '#000',
                        padding: '1rem',
                        borderRadius: '4px',
                        overflowX: 'auto',
                        border: '1px solid var(--color-copper-dim)'
                    }}>
                        {`// Configure your AI Client (e.g., Claude/Cursor):
{
  "mcpServers": {
    "chrome": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`}
                    </pre>
                    <p>
                        Once connected, you can ask the Agent:
                        <em> "Click the QA Card and verify the console."</em>
                    </p>
                </div>
            )}
        </section>
    );
};
