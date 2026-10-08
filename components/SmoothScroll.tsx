'use client';

import React, { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: any = null;
    let animationFrameId: number;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis');
        lenisInstance = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        const raf = (time: number) => {
          lenisInstance?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);
      } catch (err) {
        console.error('Lenis initialization error:', err);
      }
    };

    initLenis();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
