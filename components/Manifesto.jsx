'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const STRIKE_LINES = [
  'We hate wasted hours.',
  'manual follow-ups.',
  'missed leads.',
  'repetitive busywork.',
];

const PRINCIPLES = [
  'Working agent in your stack — not a roadmap in a Google Doc',
  'Senior builders only. The people who design it also ship it.',
  'Bills you for outcomes that show up in your dashboard',
  "Stays on as your agent's mechanic — evals, monitoring, iteration",
];

function StrikeLine({ text, delay }) {
  const ref = useRef(null);
  const [hit, setHit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHit(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="relative block text-white/22 font-display font-extrabold leading-[1.15]"
      style={{ hyphens: 'none', wordBreak: 'keep-all' }}
    >
      {text}
      <motion.span
        className="absolute left-0 top-[58%] h-[3px] bg-forge-amber rounded-full block"
        initial={{ width: '0%' }}
        animate={hit ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 0.45, delay: delay / 1000 + 0.1, ease: 'easeInOut' }}
      />
    </span>
  );
}

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 lg:py-32">
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-6 flex items-center gap-2">
            <span>§</span> A short manifesto
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.15] tracking-[-1px] mb-8 flex flex-col gap-2">
            {STRIKE_LINES.map((line, i) => (
              <StrikeLine key={line} text={line} delay={i * 380} />
            ))}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal delay={0.15}>
            <p className="text-[15px] sm:text-[17px] text-white/40 leading-[1.8] font-light">
              Most businesses are drowning in tasks that a well-built AI agent could
              handle in seconds. We build the systems that make that happen — no fluff,
              no slide decks, just working software in your stack.
            </p>
          </Reveal>
          <div className="flex flex-col divide-y divide-forge-border">
            {PRINCIPLES.map((text, i) => (
              <Reveal key={text} delay={0.18 + i * 0.1}>
                <div className="flex items-center gap-4 py-5">
                  <span className="w-0.5 h-5 bg-forge-amber rounded-full flex-shrink-0" />
                  <p className="font-display text-[13px] sm:text-[14px] font-semibold text-white/80 leading-snug">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}