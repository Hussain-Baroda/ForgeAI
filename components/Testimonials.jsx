'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';

const TESTIMONIALS = [
  {
    quote:
      'ForgeAI built us a lead qualification agent in 11 days. It\'s now handling 40% of our inbound triage completely autonomously. I haven\'t touched a lead form since.',
    name:    'Arjun Mehta',
    role:    'CEO',
    company: 'Velocify',
    initials:'AM',
    color:   'bg-violet-500/20 text-violet-300',
    metric:  '40% inbound handled autonomously',
  },
  {
    quote:
      'Every other agency sent a proposal. Burhan and Hussain sent a working prototype by day five. We signed the next day. The system’s been running flawlessly for four months. ',
    name:    'Sarah Okonkwo',
    role:    'Head of Operations',
    company: 'NovaTech',
    initials:'SO',
    color:   'bg-green-500/20 text-green-300',
    metric:  'Prototype on day 5, live in week 2',
  },
  {
    quote:
      'Our team was drowning in repetitive emails.Thanks to ForgeAI, they deployed an inbox agent that now handles around 90% of replies. We gained back hours every single day.The time savings alone covered the investment in the first month.',
    name:    'David Osei',
    role:    'Founder',
    company: 'Meridian Labs',
    initials:'DO',
    color:   'bg-blue-500/20 text-blue-300',
    metric:  '3 hrs/day saved per team member',
  },
  
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-forge-amber" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, company, initials, color, metric, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col border border-forge-border rounded-2xl p-7 bg-forge-mid hover:border-white/[0.12] hover:bg-forge-mid/80 transition-all duration-300 cursor-default"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(245,166,35,0.04),transparent_65%)]" />

      <div className="relative z-10 flex flex-col h-full">
        <Stars />

        {/* Quote */}
        <blockquote className="text-[14px] text-white/60 leading-[1.75] mb-6 flex-1 font-light italic">
          "{quote}"
        </blockquote>

        {/* Metric pill */}
        <div className="mb-5">
          <span className="inline-block font-display text-[11px] font-bold text-forge-amber/80 bg-forge-amber/10 border border-forge-amber/20 rounded-full px-3 py-1 tracking-wide">
            ↗ {metric}
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-5 border-t border-forge-border">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-[12px] font-extrabold flex-shrink-0 ${color}`}>
            {initials}
          </div>
          <div>
            <p className="font-display text-[13px] font-bold text-white leading-tight">{name}</p>
            <p className="text-[11px] text-white/35 mt-0.5">{role} · {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">

        {/* Header */}
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> What clients say
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[44px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05]">
              Don't take our word for it.{' '}
              <span className="text-white/28">Take theirs.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex -space-x-2">
                {['AM','SO','DO'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-forge-dark bg-forge-mid flex items-center justify-center font-display text-[10px] font-bold text-white/50"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-white/35 leading-tight">
                3 clients.<br />All results verified.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Cards — 3 col desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
