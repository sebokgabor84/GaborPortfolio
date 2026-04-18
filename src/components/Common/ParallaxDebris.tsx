import React, { useEffect, useRef } from 'react';

/**
 * ParallaxDebris Component - Performance Optimized (95+ Target)
 * Renders multiple layers of floating mechanical parts.
 * Uses a single SVG sprite strategy and transform3d for zero-layout-shift performance.
 */
export const ParallaxDebris: React.FC = () => {
    const elementsRef = useRef<{ el: HTMLElement; factor: number }[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            elementsRef.current.forEach((item) => {
                const moveX = (clientX - centerX) * item.factor;
                const moveY = (clientY - centerY) * item.factor;
                item.el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${moveX * 0.02}deg)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const setRef = (el: HTMLDivElement | null, factor: number) => {
        if (el && !elementsRef.current.find(item => item.el === el)) {
            elementsRef.current.push({ el, factor });
        }
    };

    return (
        <div 
            style={{ 
                position: 'absolute', 
                inset: 0, 
                overflow: 'hidden', 
                pointerEvents: 'none', 
                zIndex: 1,
                willChange: 'transform' // Promote to GPU
            }}
        >
            {/* SVG Sprite Definition (hidden) */}
            <svg style={{ display: 'none' }}>
                <symbol id="icon-gear" viewBox="0 0 100 100">
                    <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 34c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" />
                    <path d="M94.5 44h-8.2c-.6-3.2-1.7-6.2-3.3-9l5.8-5.8c1.2-1.2 1.2-3.1 0-4.2l-4.2-4.2c-1.2-1.2-3.1-1.2-4.2 0l-5.8 5.8c-2.8-1.6-5.8-2.7-9-3.3V5.5c0-1.7-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3v8.2c-3.2.6-6.2 1.7-9 3.3L28.7 12.2c-1.2-1.2-3.1-1.2-4.2 0l-4.2 4.2c-1.2 1.2-1.2 3.1 0 4.2l5.8 5.8c-1.6 2.8-2.7 5.8-3.3 9H14.5c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h8.2c.6 3.2 1.7 6.2 3.3 9l-5.8 5.8c-1.2 1.2-1.2 3.1 0 4.2l4.2 4.2c1.2 1.2 3.1 1.2 4.2 0l5.8-5.8c2.8 1.6 5.8 2.7 9 3.3v8.2c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-8.2c3.2-.6 6.2-1.7 9-3.3l5.8 5.8c1.2 1.2 3.1 1.2 4.2 0l4.2-4.2c1.2-1.2 1.2-3.1 0-4.2l-5.8-5.8c1.6-2.8 2.7-5.8 3.3-9h8.2c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z" />
                </symbol>
            </svg>

            {/* Optimized Layer 1 */}
            <div ref={(el) => setRef(el, 0.01)} style={{ position: 'absolute', top: '15%', left: '10%' }}>
                <svg width="40" height="40" fill="var(--color-copper-dim)" opacity="0.2"><use href="#icon-gear" /></svg>
            </div>

            {/* Optimized Layer 2 */}
            <div ref={(el) => setRef(el, 0.03)} style={{ position: 'absolute', top: '40%', left: '5%' }}>
                <svg width="80" height="80" fill="var(--color-copper)" opacity="0.3"><use href="#icon-gear" /></svg>
            </div>

            {/* Optimized Layer 3 - Large Fast */}
            <div ref={(el) => setRef(el, 0.06)} style={{ position: 'absolute', top: '10%', right: '20%' }}>
                <svg width="120" height="120" fill="var(--color-copper)" opacity="0.4"><use href="#icon-gear" /></svg>
            </div>
        </div>
    );
};
