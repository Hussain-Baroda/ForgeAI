'use client';

import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const STEPS = [
  {
    num: '01',
    name: 'Diagnose',
    time: 'Week 1',
    desc: 'One week with your team. We find the workflows that actually move money — not the ones that demo well in a slide deck.',
    items: ['Discovery calls', 'Process mapping', 'ROI prioritisation'],
  },
  {
    num: '02',
    name: 'Build',
    time: 'Weeks 2–3',
    desc: 'Small senior team ships a working agent into your stack. You watch it work in production, not a sandbox.',
    items: ['Agent architecture', 'Integration build', 'Testing in prod'],
  },
  {
    num: '03',
    name: 'Deploy',
    time: 'Week 3',
    desc: 'Live in your real stack with full handoff docs, a Loom walkthrough, and zero surprises at the end.',
    items: ['Production deploy', 'Team walkthrough', 'Handoff docs'],
  },
  {
    num: '04',
    name: 'Operate',
    time: 'Ongoing',
    desc: 'We run evals, monitor regressions, and iterate. Agents are software — they need a mechanic on retainer.',
    items: ['Evals & monitoring', 'Iteration sprints', 'Monthly reporting'],
  },
];

function StepCard({ num, name, time, desc, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      {/* Step number circle */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-14 h-14 rounded-full border border-forge-amber/30 bg-forge-dark flex items-center justify-center z-10">
          <span className="font-display text-[13px] font-extrabold text-forge-amber">{num}</span>
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full border border-forge-amber/20"
            animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.5 }}
          />
        </div>
      </div>

      {/* Card body */}
      <div className="group flex-1 border border-forge-border rounded-xl p-6 hover:border-forge-amber/25 hover:bg-white/[0.02] transition-all duration-300 cursor-default">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-[16px] font-extrabold text-white">{name}</h3>
          <span className="font-display text-[10px] font-bold text-forge-amber/60 bg-forge-amber/8 px-2.5 py-1 rounded-full tracking-wider">
            {time}
          </span>
        </div>
        <p className="text-[13px] text-white/40 leading-[1.7] mb-5">{desc}</p>
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[12px] text-white/50">
              <span className="w-1 h-1 rounded-full bg-forge-amber/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        {/* Header */}
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> How we work
          </p>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[44px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05]">
              From kickoff to live agent{' '}
              <span className="text-white/28">in two weeks.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-[14px] text-white/35 max-w-xs leading-relaxed lg:text-right">
              We don't do six-week discoveries. You have a working agent in
              production before the competition finishes their deck.
            </p>
          </Reveal>
        </div>

        {/* Steps — relative container for the connecting line */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <Reveal>
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px">
              <motion.div
                className="h-full bg-gradient-to-r from-forge-amber via-forge-amber/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} {...step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border border-forge-border rounded-xl px-8 py-6 bg-white/[0.02]">
            <div>
              <p className="font-display font-bold text-white text-[15px] mb-1">
                Ready to skip the discovery phase?
              </p>
              <p className="text-[13px] text-white/35">
                Tell us what to automate. We'll send a plan back the same day.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-forge-amber text-forge-dark px-6 py-3 rounded-lg text-sm font-extrabold font-display hover:bg-amber-300 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[0_8px_30px_rgba(245,166,35,0.25)]"
            >
              Start a Project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
