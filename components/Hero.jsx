'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/* ── Word-by-word animated headline line ── */
function AnimatedLine({ words, color = 'text-white', baseDelay = 0 }) {
  return (
    <span className="block overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${color} mr-[0.22em]`}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%',   opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: baseDelay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Single agent row in the panel ── */
const AGENTS = [
  { icon: '📥', color: 'rgba(245,166,35,0.12)', iconColor: '#F5A623', name: 'Inbox Triage',   desc: 'Sorts · drafts · routes',       status: 'running' },
  { icon: '🎯', color: 'rgba(74,222,128,0.1)',  iconColor: '#4ade80', name: 'Lead Qualifier', desc: 'Scores · books calls',          status: 'running' },
  { icon: '📝', color: 'rgba(255,255,255,0.05)',iconColor: 'rgba(255,255,255,0.3)', name: 'Doc Drafter', desc: 'Briefs · proposals · SOWs', status: 'idle' },
  { icon: '🎙️', color: 'rgba(129,140,248,0.1)', iconColor: '#818cf8', name: 'Meeting Recap',  desc: 'Transcribes · extracts actions', status: 'running' },
  { icon: '📚', color: 'rgba(245,166,35,0.08)', iconColor: '#F5A623', name: 'RAG Assistant',  desc: 'Indexes · answers · cites',      status: 'queued'  },
  { icon: '🔍', color: 'rgba(248,113,113,0.1)', iconColor: '#f87171', name: 'Ops Watchdog',   desc: 'Monitors · alerts · retries',   status: 'running' },
];

const STATUS_STYLES = {
  running: 'bg-green-500/10 text-green-400',
  idle:    'bg-white/5 text-white/30',
  queued:  'bg-amber-400/10 text-amber-400',
};
const STATUS_LABELS = { running: '● running', idle: '○ idle', queued: '◎ queued' };

function AgentPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="bg-forge-mid border border-forge-border rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
    >
      {/* Panel header */}
      <div className="px-4 py-3 border-b border-forge-border flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-display text-[10px] font-bold text-white/35 tracking-widest uppercase">
          Live Agents · 4 Active
        </span>
      </div>

      {/* Agent rows */}
      <div className="p-2">
        {AGENTS.map(({ icon, color, iconColor, name, desc, status }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + i * 0.07, duration: 0.45, ease: 'easeOut' }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] flex-shrink-0"
              style={{ background: color }}
            >
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-[12px] font-bold text-white">{name}</div>
              <div className="text-[11px] text-white/35 mt-0.5">{desc}</div>
            </div>
            <span className={`text-[10px] font-bold font-display px-2 py-1 rounded-full flex-shrink-0 ${STATUS_STYLES[status]}`}>
              {STATUS_LABELS[status]}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Panel footer */}
      <div className="px-4 py-3 border-t border-forge-border flex items-center justify-between">
        <span className="text-[11px] text-white/20">Updated just now</span>
        <span className="text-[11px] font-display font-bold text-forge-amber">4 / 6 running</span>
      </div>
    </motion.div>
  );
}

/* ── Metric bar ── */
const METRICS = [
  { value: '200+', label: 'Hours saved / client / month' },
  { value: '65%',  label: 'Avg cost reduction' },
  { value: '3x',   label: 'Faster lead response' },
  { value: '47',   label: 'AI systems live' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-0 overflow-hidden">
      {/* BG grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-100" />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-56 -right-32 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.07)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.05)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-16 items-center">

          {/* LEFT — copy */}
          <div>
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-forge-amber/10 border border-forge-amber/25 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-forge-amber animate-blink" />
              <span className="text-forge-amber text-[11px] font-medium tracking-[0.12em] uppercase">
                AI Automation Agency
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-[58px] xl:text-[68px] font-extrabold leading-[1.02] tracking-[-1.5px] mb-6">
              <AnimatedLine words={['We', 'build', 'AI', 'systems']} baseDelay={0.35} />
              <AnimatedLine words={['that', 'work', 'for', 'you']} color="text-forge-amber" baseDelay={0.62} />
              <AnimatedLine words={['around', 'the', 'clock.']} color="text-white/28" baseDelay={0.9} />
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
              className="text-[17px] text-white/45 max-w-[490px] leading-[1.75] mb-10 font-light"
            >
              We design, build and maintain custom AI agents and automations for
              teams that are done doing everything manually.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-forge-amber text-forge-dark px-7 py-3.5 rounded-lg text-sm font-extrabold font-display tracking-wide hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(245,166,35,0.25)] transition-all duration-200"
              >
                Start a Project <span className="text-base">→</span>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-white/55 border border-white/10 px-6 py-3.5 rounded-lg text-sm hover:text-white hover:border-white/25 transition-all duration-200"
              >
                See Our Work <span>↗</span>
              </Link>
            </motion.div>

            {/* Metrics bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="grid grid-cols-4 border border-forge-border rounded-xl overflow-hidden bg-white/[0.02]"
            >
              {METRICS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`px-5 py-5 ${i < METRICS.length - 1 ? 'border-r border-forge-border' : ''}`}
                >
                  <div className="font-display text-2xl xl:text-3xl font-extrabold text-white mb-1 tracking-tight">
                    <span className="text-forge-amber">{value.replace(/[0-9]+/, '')}</span>
                    {value.replace(/[^0-9]/g, '') && (
                      <>{value.replace(/[^0-9]/g, '')}</>
                    )}
                    {/* simpler: just render value with amber on non-digit suffix */}
                  </div>
                  <div className="text-[11px] text-white/30 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — agent panel */}
          <div className="hidden lg:block">
            <AgentPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
