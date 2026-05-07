'use client';

import { motion } from 'framer-motion';

const ITEMS = [
  'AI Agents',
  'Workflow Automation',
  'Lead Qualification',
  'Voice Agents',
  'CRM Integration',
  'Data Pipelines',
  'RAG Systems',
  'Custom LLM Builds',
  'Inbox Automation',
  'Ops Intelligence',
];

// Double the array so the seamless loop works perfectly
const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="relative mt-14 overflow-hidden border-y border-forge-border py-3.5"
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-forge-dark to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-forge-dark to-transparent" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {DOUBLED.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-white/25 hover:text-forge-amber transition-colors duration-200 whitespace-nowrap px-6 cursor-default">
              {item}
            </span>
            <span className="text-forge-amber/40 text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
