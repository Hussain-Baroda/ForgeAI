'use client';

import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const ROWS = [
  { them: 'Six-week discovery before a single line of code',            us: 'First production workflow deployed within 14 days.'             },
  { them: 'A 60-slide deck the partner reads aloud to you',             us: "A short Loom, a live demo, a one-page doc — that's it"    },
  { them: 'Immature team trained on your dime mid-project',               us: 'Skilled engineers only — we build what we design'           },
  { them: 'Bills you for prompts, meetings, and PowerPoints',           us: 'Bills you for outcomes that show up in your dashboard'     },
  { them: 'Hands you a roadmap and disappears post-launch',             us: "Stays on as the agent's mechanic — evals, monitoring, fixes"},
  { them: 'One-size-fits-all LLM wrapper dressed up as "AI strategy"', us: 'Custom architecture scoped to your exact workflow'         },
];

function CompareRow({ them, us, index }) {
  return (
    <div className="grid grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-start gap-2 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 border-b border-forge-border hover:bg-white/[0.015] transition-colors"
      >
        <span className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/[0.06] flex items-center justify-center text-[9px] sm:text-[11px] text-white/30 font-bold">✕</span>
        <p className="text-[11px] sm:text-[13px] text-white/35 leading-[1.6]">{them}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.09 + 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-start gap-2 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 border-b border-forge-amber/10 bg-forge-amber/[0.025] hover:bg-forge-amber/[0.04] transition-colors"
      >
        <span className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/15 flex items-center justify-center text-[9px] sm:text-[11px] text-green-400 font-bold">✓</span>
        <p className="text-[11px] sm:text-[13px] text-white/65 leading-[1.6]">{us}</p>
      </motion.div>
    </div>
  );
}

export default function Compare() {
  return (
    <section id="work" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 lg:py-32">
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> Why us
          </p>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05]">
              Most AI agencies sell paper.{' '}
              <span className="text-forge-amber">We ship</span>{' '}
              <span className="text-white/28">software.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-[12px] sm:text-[13px] text-white/35 max-w-[260px] leading-relaxed lg:text-right flex-shrink-0">
              Here's what separates a real build shop from a strategy consultancy with an AI logo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-forge-border">
            <div className="grid grid-cols-2 gap-px bg-forge-border">
              <div className="bg-forge-dark px-3 sm:px-6 py-4 flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline font-display text-[10px] font-bold text-white/25 tracking-[0.1em] uppercase px-2 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] whitespace-nowrap flex-shrink-0">
                  ✕ Avoid
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[12px] sm:text-[13px] font-bold text-white/55 truncate">The Standard Agency</p>
                  <p className="text-[10px] sm:text-[11px] text-white/25 mt-0.5 hidden sm:block">What you usually get</p>
                </div>
              </div>
              <div className="bg-forge-amber/[0.04] border-l border-forge-amber/15 px-3 sm:px-6 py-4 flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline font-display text-[10px] font-bold text-forge-amber tracking-[0.1em] uppercase px-2 py-1 rounded-full bg-forge-amber/10 border border-forge-amber/20 whitespace-nowrap flex-shrink-0">
                  ● ForgeAI
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[12px] sm:text-[13px] font-bold text-white truncate">The ForgeAI Model</p>
                  <p className="text-[10px] sm:text-[11px] text-white/35 mt-0.5 hidden sm:block">How we actually run</p>
                </div>
              </div>
            </div>
            <div className="bg-forge-dark">
              {ROWS.map((row, i) => <CompareRow key={i} {...row} index={i} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}