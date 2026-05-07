'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from 0 → target when the returned ref enters the viewport.
 *
 * @param {number} target      — Final number to count to
 * @param {number} duration    — Animation duration in ms (default 1800)
 * @param {number} startDelay  — Delay in ms before counting starts (default 0)
 *
 * @returns {{ count: number, ref: React.RefObject }}
 */
export function useCountUp(target, duration = 1800, startDelay = 0) {
  const [count,   setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Trigger when element scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Run the count animation
  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      const frameRate  = 1000 / 60;          // ~60fps
      const totalFrames = duration / frameRate;
      const increment  = target / totalFrames;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          // Ease-out: slow down near the end
          const progress = current / target;
          const eased = current + (target - current) * (1 - Math.pow(1 - progress, 2)) * 0.02;
          setCount(Math.round(eased));
        }
      }, frameRate);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [started, target, duration, startDelay]);

  return { count, ref };
}
