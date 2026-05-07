'use client';

import { motion } from 'framer-motion';
import { useCountUp } from './ui/useCountUp';
import Reveal from './ui/Reveal';

const STATS = [
  { target: 14,  suffix: 'd', label: 'Median time to live',        sub: 'From signed contract to an agent running in your production stack.', delay: 0,   isZero: false },
  { target: 92,  suffix: '%', label: 'Retention after first build', sub: 'Of clients stay on in operate-mode after their initial engagement.',  delay: 150, isZero: false },
  { target: 200, suffix: '+', label: 'Hours saved per client / mo', sub: 'Average across all active automations and agents we run.',            delay: 300, isZero: false },
  { target: 0,   suffix: '',  label: 'Slide decks shipped',         sub: "We've never handed a client a strategy deck. Keeping the streak alive.", delay: 450, isZero: true  },
];

function StatCard({ target, suffix, label, sub, delay, isZero, index }) {
  const { count, ref } = useCountUp(target, 1800, delay);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'relative px-5 sm:px-8 py-8 sm:py-10 group cursor-default border-forge-border hover:bg-white/[0.02] transition-colors duration-300',
        index % 2 === 0 ? 'border-r border-forge-border' : '',
        index < 2 ? 'border-b lg:border-b-0 border-forge-border' : '',
        index === 1 ? 'lg:border-r border-forge-border' : '',
        index === 2 ? 'lg:border-r border-forge-border' : '',
      ].join(' ')}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(245,166,35,0.05),transparent_60%)]" />
      <div className="relative z-10">
        <div className="font-display text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-none tracking-tight mb-3 sm:mb-4">
          {isZero ? (
            <><span className="text-white">0</span><span className="text-forge-amber">.</span></>
          ) : (
            <><span className="text-white">{count}</span><span className="text-forge-amber">{suffix}</span></>
          )}
        </div>
        <p className="font-display text-[13px] font-bold text-white mb-2">{label}</p>
        <p className="text-[12px] text-white/30 leading-[1.65]">{sub}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 lg:py-32">
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> The receipts
          </p>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05]">
              Numbers that come from{' '}
              <span className="text-white/28">actual client work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-[13px] text-white/35 max-w-[260px] leading-relaxed lg:text-right flex-shrink-0">
              Not projections. Not market research. These are live across our current client base.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-forge-border rounded-2xl overflow-hidden">
            {STATS.map((stat, i) => <StatCard key={stat.label} {...stat} index={i} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}