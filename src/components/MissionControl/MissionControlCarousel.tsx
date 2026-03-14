import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { kpis } from '../../data/kpis';

// Master Background Image Placeholder
const MASTER_BG_IMAGE = '/assets/bg-mission-control.webp';

const colorMap = {
    success: '#4ade80',
    gold: '#d4af37',
    copper: '#ff8c00',
};

const imageMap: Record<string, string> = {
    bugs: '/assets/thumb-bugs-squashed.webp',
    uptime: '/assets/thumb-uptime.webp',
    liters: '/assets/thumb-liters-fermented.webp',
    decor: '/assets/thumb-decor-created.webp',
    renovation: '/assets/thumb-renovation.webp',
    honey: '/assets/thumb-honey-harvested.webp',
    welds: '/assets/thumb-electrode-welds.webp',
    loaves: '/assets/thumb-loaves-baked.webp',
    family: '/assets/thumb-family-members.webp',
};

/**
 * GLOBAL SVG DEFS (Materials Engine)
 */
const SVGDefs: React.FC = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
            <linearGradient id="mcCopperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d98c4a" />
                <stop offset="50%" stopColor="#b87333" />
                <stop offset="100%" stopColor="#7a4b21" />
            </linearGradient>
            <linearGradient id="mcGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a38221" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#f5e196" />
            </linearGradient>
            <radialGradient id="mcRivetGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8a8781" />
                <stop offset="80%" stopColor="#3d3c39" />
                <stop offset="100%" stopColor="#1a1918" />
            </radialGradient>
            <pattern id="mcCarbonFiberPattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="#121010" />
                <path d="M0 8L8 0M-2 2L2 -2M6 10L10 6" stroke="#1c1919" strokeWidth="2" />
                <path d="M0 0L8 8M-2 6L2 10M6 -2L10 2" stroke="#0a0909" strokeWidth="2" />
            </pattern>
        </defs>
    </svg>
);

interface MissionControlTileProps {
    title: string;
    metric: string | number;
    bgImage: string;
    glowColor: string;
    index: number;
    isLazy: boolean;
    onClick: () => void;
}

/**
 * TILE COMPONENT
 */
const MissionControlTile = React.forwardRef<HTMLDivElement, MissionControlTileProps>(({ 
    title, metric, bgImage, glowColor, isLazy, onClick 
}, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Initial render style - will be taken over by JS animation loop immediately
    return (
        <div
            ref={ref}
            className="mc-tile"
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
            style={{
                '--js-tx': `0px`,
                '--js-tz': `-500px`,
                '--js-ry': `0deg`,
                '--js-scale': 0.8,
                transform: `translateX(var(--js-tx)) translateZ(var(--js-tz)) rotateY(var(--js-ry)) scale(var(--js-scale))`,
                pointerEvents: 'none',
                opacity: 0
            } as React.CSSProperties}
        >
            {/* 1. Steampunk Skeleton Fallback */}
            <div className={`mc-skeleton ${imageLoaded ? 'mc-hidden' : ''}`}>
                <div className="mc-skeleton-pulse" />
            </div>

            {/* 2. The Image Layer */}
            <img
                src={bgImage}
                alt={`Background for ${title}`}
                loading={isLazy ? 'lazy' : 'eager'}
                onLoad={() => setImageLoaded(true)}
                className={`mc-image-layer ${imageLoaded ? 'mc-loaded' : ''}`}
            />

            {/* 3. The Dark Gradient Overlay */}
            <div className="mc-gradient-overlay" />

            {/* 4. The SVG Bezel */}
            <svg className="mc-chassis mc-bezel" width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="none">
                <rect x="2" y="2" width="296" height="396" rx="12" fill="none" stroke="url(#mcCopperGradient)" strokeWidth="4" />
                <rect x="10" y="10" width="280" height="380" rx="6" fill="none" stroke="url(#mcGoldGradient)" strokeWidth="1.5" opacity="0.8" />

                {/* Rivets */}
                <circle cx="20" cy="20" r="4" fill="url(#mcRivetGradient)" stroke="url(#mcGoldGradient)" strokeWidth="0.5" />
                <circle cx="280" cy="20" r="4" fill="url(#mcRivetGradient)" stroke="url(#mcGoldGradient)" strokeWidth="0.5" />
                <circle cx="20" cy="380" r="4" fill="url(#mcRivetGradient)" stroke="url(#mcGoldGradient)" strokeWidth="0.5" />
                <circle cx="280" cy="380" r="4" fill="url(#mcRivetGradient)" stroke="url(#mcGoldGradient)" strokeWidth="0.5" />
            </svg>

            {/* 5. The Content Overlay */}
            <div className="mc-content mc-content-ref">
                <div className="mc-spacer"></div>
                <div className="mc-text-group">
                    <div
                        className="mc-metric"
                        style={{
                            color: glowColor,
                            textShadow: `0 0 10px ${glowColor}80, 0 0 20px ${glowColor}40, 0 2px 4px #000`
                        }}
                    >
                        {metric}
                    </div>
                    <h3 className="mc-title">{title}</h3>
                </div>
            </div>
        </div>
    );
});
MissionControlTile.displayName = 'MissionControlTile';

/**
 * MAIN APP COMPONENT
 */
export const MissionControlCarousel: React.FC = () => {
    const { t } = useTranslation();
    
    // Convert React State into Refs to completely eliminate 60fps re-renders
    const isHoveredRef = useRef(false);

    // Filter out dynamic KPIs like Live Visitors since we only generated 9 static images
    const activeKpis = kpis.filter(k => k.enabled && !k.isDynamic);
    const N = activeKpis.length;

    // Animation & Drag state references
    const sceneRef = useRef<HTMLElement>(null);
    const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
    const activeIndexRef = useRef(0);
    const targetIndexRef = useRef(0);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const dragDistanceRef = useRef(0);
    const lastInteractionTime = useRef<number>(0);

    // IntersectionObserver Killswitch flag
    const isVisibleRef = useRef(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            isVisibleRef.current = entry.isIntersecting;
        }, { threshold: 0.1 });

        if (sceneRef.current) observer.observe(sceneRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const handlePointerDown = (e: PointerEvent) => {
            isDraggingRef.current = true;
            startXRef.current = e.clientX;
            dragDistanceRef.current = 0;
            lastInteractionTime.current = Date.now();
            targetIndexRef.current = activeIndexRef.current; // abort any running snap instantly
            scene.setPointerCapture(e.pointerId);
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (!isDraggingRef.current) return;
            const deltaX = e.clientX - startXRef.current;
            dragDistanceRef.current += Math.abs(deltaX);
            
            // Convert pixel drag to index float drag directly. 
            // Negative deltaX (dragging left) should increase index (spin right to left)
            targetIndexRef.current -= deltaX * 0.01; 
            
            startXRef.current = e.clientX;
            lastInteractionTime.current = Date.now();
        };

        const handlePointerUp = (e: PointerEvent) => {
            isDraggingRef.current = false;
            try {
                scene.releasePointerCapture(e.pointerId);
            } catch { 
                // Ignore DOM exception if pointer capture is lost
            }

            // Snap to nearest integer index
            targetIndexRef.current = Math.round(targetIndexRef.current);
            lastInteractionTime.current = Date.now();
        };

        // Use standard EventListener type assertion to satisfy strict DOM definitions
        scene.addEventListener('pointerdown', handlePointerDown as EventListener, { passive: true });
        scene.addEventListener('pointermove', handlePointerMove as EventListener, { passive: true });
        scene.addEventListener('pointerup', handlePointerUp as EventListener, { passive: true });
        scene.addEventListener('pointercancel', handlePointerUp as EventListener, { passive: true });

        return () => {
            scene.removeEventListener('pointerdown', handlePointerDown as EventListener);
            scene.removeEventListener('pointermove', handlePointerMove as EventListener);
            scene.removeEventListener('pointerup', handlePointerUp as EventListener);
            scene.removeEventListener('pointercancel', handlePointerUp as EventListener);
        };
    }, []);

    useEffect(() => {
        let animationId: number;

        const animate = () => {
            // Auto-advance logic: Smooth continuous scrolling
            if (isVisibleRef.current) {
                if (!isDraggingRef.current && !isHoveredRef.current) {
                    targetIndexRef.current += 0.004; // Smooth 60fps continuous spin
                }

                // Smooth LERP towards target index
                const lerpFactor = isDraggingRef.current ? 0.3 : 0.04; // Slower, smoother elastic snap
                const diff = targetIndexRef.current - activeIndexRef.current;
                
                if (Math.abs(diff) > 0.0001) {
                    activeIndexRef.current += diff * lerpFactor;
                }
                
                // Direct DOM Mutation for 60fps Coverflow Math (Eliminates React Render Lag)
                const currentActive = activeIndexRef.current;
                
                for (let i = 0; i < N; i++) {
                    const tile = tileRefs.current[i];
                    if (!tile) continue;
                    
                    let cDiff = i - (currentActive % N);
                    if (cDiff < 0) cDiff += N; // Always positive module
                    
                    // Calculate shortest path
                    const halfN = N / 2;
                    if (cDiff > halfN) cDiff -= N;
                    if (cDiff < -halfN) cDiff += N;

                    const absDiff = Math.abs(cDiff);

                    // Continuous Math for Coverflow layout
                    const isCenter = absDiff < 1;
                    const rotateY = -45 * Math.max(-1, Math.min(1, cDiff)); // clamp to -45 / 45
                    const scale = 1 - Math.min(absDiff, 1) * 0.15; // Center 1.0, sides 0.85
                    
                    const baseSpacing = 120; // px
                    const centerOffset = 60; // extra px pushing sides away from center
                    const smoothSign = Math.max(-1, Math.min(1, cDiff));
                    const translateX = cDiff * baseSpacing + smoothSign * Math.min(absDiff, 1) * centerOffset;
                    
                    const translateZ = absDiff * -150 + (isCenter ? 50 : 0);
                    const zIndex = Math.round(100 - absDiff * 10);
                    const opacity = Math.max(0, 1 - (absDiff - 2.5) * 0.5); // Fades out items further than index +/- 2

                    tile.style.setProperty('--js-tx', `${translateX}px`);
                    tile.style.setProperty('--js-tz', `${translateZ}px`);
                    tile.style.setProperty('--js-ry', `${rotateY}deg`);
                    tile.style.setProperty('--js-scale', `${scale}`);
                    tile.style.zIndex = `${zIndex}`;
                    tile.style.opacity = `${opacity}`;
                    tile.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
                    
                    // Toggle active class directly
                    if (absDiff < 0.1) {
                        tile.classList.add('mc-active');
                        tile.querySelector('.mc-content-ref')?.classList.add('mc-content-active');
                    } else {
                        tile.classList.remove('mc-active');
                        tile.querySelector('.mc-content-ref')?.classList.remove('mc-content-active');
                    }
                }
            }
            
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, [N]);

    const handleTileClick = useCallback((index: number) => {
        if (dragDistanceRef.current > 5) return;

        // Find shortest path in array space
        const currentActive = targetIndexRef.current;
        const normalizedCurrent = ((currentActive % N) + N) % N;
        const targetAngle = index;
        
        // Shortest path diff in N modular space
        let diff = targetAngle - normalizedCurrent;
        if (diff > N / 2) diff -= N;
        if (diff < -N / 2) diff += N;
        
        targetIndexRef.current = currentActive + diff;
        // eslint-disable-next-line react-hooks/purity
        lastInteractionTime.current = Date.now();
    }, [N]);

    return (
        <div
            className="mc-dashboard"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(18, 16, 16, 0.85), rgba(18, 16, 16, 0.98)), url('${MASTER_BG_IMAGE}')`
            }}
        >
            <SVGDefs />

            <header className="mc-header">
                <h2 className="mc-heading">{t('cockpit.title')} 3D</h2>
                <div className="mc-divider"></div>
            </header>

            {/* 3D Scene Viewer */}
            <section
                className="mc-scene"
                ref={sceneRef}
                onMouseEnter={() => { isHoveredRef.current = true; }}
                onMouseLeave={() => {
                    isHoveredRef.current = false;
                    isDraggingRef.current = false;
                }}
            >
                {activeKpis.map((kpi, index) => {
                    const isLazy = index > 1 && index < activeKpis.length - 1;
                    const metricText = kpi.unit ? `${kpi.value}${kpi.unit}` : kpi.value;

                    return (
                        <MissionControlTile
                            key={`${kpi.id}-${index}`}
                            ref={el => { tileRefs.current[index] = el; }}
                            title={t(kpi.labelKey)}
                            metric={metricText}
                            bgImage={imageMap[kpi.id] || '/assets/thumb-uptime.webp'}
                            glowColor={colorMap[kpi.color]}
                            index={index}
                            isLazy={isLazy}
                            onClick={() => handleTileClick(index)}
                        />
                    );
                })}
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .mc-dashboard {
          width: 100%;
          padding: clamp(2rem, 5vw, 4rem) 0;
          box-sizing: border-box;
          perspective: 2000px;
          background-size: cover;
          background-position: center;
          /* Default to scroll to fix iOS Safari missing background bug */
          background-attachment: scroll;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          margin-top: 4rem; /* separation from Cockpit */
        }

        .mc-header {
          text-align: center;
          margin-bottom: 0;
          position: relative;
          z-index: 10;
        }

        .mc-heading {
          font-family: var(--font-heading);
          color: var(--color-gold);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          letter-spacing: 0.15em;
          margin: 0;
          text-transform: uppercase;
        }

        .mc-divider {
          height: 2px;
          width: clamp(200px, 50vw, 400px);
          background: linear-gradient(90deg, transparent, var(--color-copper), transparent);
          margin: 1rem auto;
        }

        /* 3D Scene setup */
        .mc-scene {
          position: relative;
          width: 100%;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          overflow: hidden;
          touch-action: pan-y;
          height: clamp(400px, 60vw, 600px);
        }

        .mc-scene:active {
          cursor: grabbing;
        }

        /* The Tile Container */
        .mc-tile {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 380px;
          margin-top: -190px;
          margin-left: -140px;
          /* Unified smooth transition for entire tile */
          transition: filter 0.3s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.9)) brightness(0.6);
          border-radius: 12px;
          overflow: visible; /* to allow glow */
          user-select: none;
          -webkit-user-drag: none; 
          cursor: pointer;
          transform-style: preserve-3d;
          /* Coverflow reflection */
          -webkit-box-reflect: below 5px linear-gradient(transparent 70%, rgba(255,255,255,0.3));
        }

        .mc-tile.mc-active {
            filter: drop-shadow(0 30px 60px rgba(0,0,0,0.95)) brightness(1);
            z-index: 100 !important;
        }

        /* Unified Hover: Applies to BOTH active and inactive tiles seamlessly */
        .mc-tile:hover {
            filter: drop-shadow(0 0 25px var(--glow-primary)) brightness(1.2);
            /* We compose hover over the JS transforms */
            transform: translateX(var(--js-tx)) translateZ(calc(var(--js-tz) + 40px)) rotateY(var(--js-ry)) scale(calc(var(--js-scale) * 1.05)) !important;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .mc-tile {
             width: 220px;
             height: 300px;
             margin-top: -150px;
             margin-left: -110px;
          }
          .mc-scene {
             perspective: 800px;
             height: 450px;
          }
        }
        
        @media (min-width: 1024px) {
          .mc-dashboard {
             background-attachment: fixed; /* Restore parallax only on safe desktop devices */
          }
        }

        /* --- SKELETON UI --- */
        .mc-skeleton {
          position: absolute;
          inset: 0;
          background: url(#mcCarbonFiberPattern);
          z-index: 0;
          transition: opacity 0.5s ease;
        }
        .mc-skeleton-pulse {
          position: absolute;
          inset: 0;
          background: rgba(184, 115, 51, 0.1);
          animation: skeleton-pulse 2s infinite ease-in-out;
        }
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .mc-hidden {
          opacity: 0;
          pointer-events: none;
        }

        /* Image Layer */
        .mc-image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
          -webkit-user-drag: none; 
          border-radius: 12px;
        }

        .mc-loaded {
          opacity: 1;
        }

        /* Note: Image zooming on hover has been removed. 
           The entire .mc-tile container zooms uniformly instead. */

        /* Gradient Overlay */
        .mc-gradient-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            to bottom, 
            transparent 30%, 
            rgba(18, 16, 16, 0.7) 60%, 
            var(--color-bg-dark) 100%
          );
          pointer-events: none;
        }

        /* SVG Bezel Overlay */
        .mc-chassis {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          pointer-events: none;
        }

        /* Content */
        .mc-content {
          position: relative;
          z-index: 4;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 15% 10%;
          box-sizing: border-box;
          text-align: center;
          pointer-events: none;
        }

        .mc-spacer {
          flex-grow: 1;
        }

        .mc-text-group {
          width: 100%;
          padding-bottom: 5%;
        }

        .mc-metric {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: bold;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .mc-title {
          font-family: var(--font-body);
          color: var(--color-text-main);
          font-size: clamp(0.7rem, 1.5vw, 1rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.9;
          word-break: break-word;
          overflow-wrap: anywhere;
        }
      `}} />
        </div>
    );
};
