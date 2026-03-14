import React, { useState, useEffect, useRef } from 'react';
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
    activeIndex: number;
    totalItems: number;
    isLazy: boolean;
    onClick: () => void;
}

/**
 * TILE COMPONENT
 */
const MissionControlTile: React.FC<MissionControlTileProps> = ({ 
    title, metric, bgImage, glowColor, index, activeIndex, totalItems, isLazy, onClick 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Coverflow Math Engine
    let diff = index - (activeIndex % totalItems);
    if (diff < 0) diff += totalItems; // Always positive module
    
    // Calculate shortest path
    const halfN = totalItems / 2;
    if (diff > halfN) diff -= totalItems;
    if (diff < -halfN) diff += totalItems;

    const absDiff = Math.abs(diff);

    // Continuous Math for Coverflow layout
    const isCenter = absDiff < 1;
    const rotateY = -45 * Math.max(-1, Math.min(1, diff)); // clamp to -45 / 45
    const scale = 1 - Math.min(absDiff, 1) * 0.15; // Center 1.0, sides 0.85
    
    const baseSpacing = 100; // px
    const centerOffset = 50; // extra px pushing sides away from center
    const smoothSign = Math.max(-1, Math.min(1, diff));
    const translateX = diff * baseSpacing + smoothSign * Math.min(absDiff, 1) * centerOffset;
    
    const translateZ = absDiff * -150 + (isCenter ? 50 : 0);
    const zIndex = Math.round(100 - absDiff * 10);
    const opacity = Math.max(0, 1 - (absDiff - 2.5) * 0.5); // Fades out items further than index +/- 2

    return (
        <div
            className={`mc-tile ${absDiff < 0.1 ? 'mc-active' : ''}`}
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
                transform: `translateX(calc(${translateX}px - 50%)) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                pointerEvents: opacity < 0.1 ? 'none' : 'auto',
            }}
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
            <div className={`mc-content ${absDiff < 0.1 ? 'mc-content-active' : ''}`}>
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
};

/**
 * MAIN APP COMPONENT
 */
export const MissionControlCarousel: React.FC = () => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    
    // We update this piece of state tightly to trigger React re-renders for the list layout. 
    // This allows activeIndex LERP to cascade math directly via React rendering continuously during drags.
    // However, calling setState inside requestAnimationFrame is very heavy.
    // Instead we drive the math by updating a ref and forceUpdate.
    const [renderTick, setRenderTick] = useState(0);

    // Filter out dynamic KPIs like Live Visitors since we only generated 9 static images
    const activeKpis = kpis.filter(k => k.enabled && !k.isDynamic);
    const N = activeKpis.length;

    // Animation & Drag state references
    const sceneRef = useRef<HTMLElement>(null);
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
            if (isVisibleRef.current) {
                const now = Date.now();

                // Auto-advance logic
                if (!isDraggingRef.current && !isHovered) {
                    if (now - lastInteractionTime.current > 3000) {
                        targetIndexRef.current += 1; // move to next card
                        lastInteractionTime.current = now;
                    }
                } else if (isHovered && !isDraggingRef.current) {
                    lastInteractionTime.current = now;
                }

                // Smooth LERP towards target index
                const lerpFactor = isDraggingRef.current ? 0.3 : 0.08;
                const diff = targetIndexRef.current - activeIndexRef.current;
                
                if (Math.abs(diff) > 0.001) {
                    activeIndexRef.current += diff * lerpFactor;
                    setRenderTick(prev => (prev + 1) % 10000); // trigger light re-render to execute math
                }
            }
            
            // Just reading renderTick to satisfy eslint unused var
            if (renderTick < 0) console.log(renderTick);
            
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHovered]);

    const handleTileClick = (index: number) => {
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
        lastInteractionTime.current = Date.now();
    };

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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    isDraggingRef.current = false;
                }}
            >
                {activeKpis.map((kpi, index) => {
                    const isLazy = index > 1 && index < activeKpis.length - 1;
                    const metricText = kpi.unit ? `${kpi.value}${kpi.unit}` : kpi.value;

                    return (
                        <MissionControlTile
                            key={`${kpi.id}-${index}`}
                            title={t(kpi.labelKey)}
                            metric={metricText}
                            bgImage={imageMap[kpi.id] || '/assets/thumb-uptime.webp'}
                            glowColor={colorMap[kpi.color]}
                            index={index}
                            activeIndex={activeIndexRef.current}
                            totalItems={activeKpis.length}
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
          background-attachment: fixed;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          margin-top: 4rem; /* separation from Cockpit */
        }

        .mc-header {
          text-align: center;
          margin-bottom: clamp(3rem, 10vw, 6rem);
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
          width: 100%;
          height: clamp(350px, 50vw, 500px);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          cursor: grab;
          contain: layout paint;
          touch-action: pan-y; 
        }
        
        .mc-scene:active {
          cursor: grabbing;
        }        .mc-scene {
          position: relative;
          width: 100%;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          overflow: hidden;
          touch-action: pan-y;
        }

        /* The Tile Container */
        .mc-tile {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: filter 0.4s ease;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.8)) brightness(0.8);
          border-radius: 12px;
          overflow: hidden;
          user-select: none;
          -webkit-user-drag: none; 
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          cursor: pointer;
        }

        .mc-tile:hover {
          filter: drop-shadow(0 0px 40px rgba(184, 115, 51, 0.4)) brightness(1.2);
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
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s ease;
          -webkit-user-drag: none; 
        }

        .mc-loaded {
          opacity: 1;
        }

        .mc-tile:hover .mc-image-layer.mc-loaded {
          transform: scale(1.08);
        }

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
