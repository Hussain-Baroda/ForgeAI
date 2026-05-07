'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from './ui/Reveal';

export default function CTA() {
  return (
    <section className="relative z-10 border-t border-forge-border overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(245,166,35,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 lg:py-36 text-center">

        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-6 flex items-center justify-center gap-2">
            <span>§</span> One more thing
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-[48px] lg:text-[64px] font-extrabold tracking-[-1.5px] leading-[1.02] mb-6">
            You've seen the pitch.{' '}
            <br className="hidden sm:block" />
            <span className="text-forge-amber">Now ship the agent.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-[17px] text-white/40 max-w-lg mx-auto leading-relaxed font-light mb-12">
            Tell us what you're trying to automate. We'll send back a
            one-page plan and a quote — no discovery cycle required.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-forge-amber text-forge-dark px-8 py-4 rounded-xl text-[15px] font-extrabold font-display tracking-wide hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(245,166,35,0.3)] transition-all duration-200"
            >
              Start a Project <span className="text-lg">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 text-white/50 border border-white/[0.12] px-7 py-4 rounded-xl text-[15px] hover:text-white hover:border-white/25 transition-all duration-200"
            >
              Just ask a question ↗
            </Link>
          </div>
        </Reveal>

        {/* Trust row */}
        <Reveal delay={0.28}>
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-forge-border">
            {[
              '⚡ Working agent in 2 weeks',
              '🔒 NDA on day one',
              '↩ Cancel any time',
              '🧑‍💻 Senior operators only',
            ].map((item) => (
              <span key={item} className="text-[12px] text-white/25 font-display font-medium">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
