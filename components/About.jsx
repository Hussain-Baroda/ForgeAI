'use client';

import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const VALUES = [
  {
    icon: '🔧',
    title: 'Builders, not strategists',
    desc: 'We\'re operators first. Every person on your project ships code. Nobody here writes decks for a living.',
  },
  {
    icon: '🎯',
    title: 'One problem at a time',
    desc: 'We don\'t sell six-month retainers upfront. We solve your most expensive manual process first, prove it, then go again.',
  },
  {
    icon: '🔍',
    title: 'Honest about AI limits',
    desc: 'We\'ll tell you when automation isn\'t the right call. Bad agents cost more than no agents. We\'d rather lose the project.',
  },
  {
    icon: '🔄',
    title: 'We stay on',
    desc: 'Agents drift. Models change. We run ongoing evals and fix regressions before you notice them. That\'s the operate model.',
  },
];

const TEAM = [
  {
    initials: 'HSB',
    name:     'Hussain Barodawala',
    role:     'Founder & FullStack Engineer',
    bio:      'Full-stack developer focused on AI automation, scalable products, and clean user experiences.',
    color:    'bg-amber-500/15 text-amber-300',
  },
  {
    initials: 'BAC',
    name:     'Burhan Contractor',
    role:     'Co-founder & AI Engineer',
    bio:      'Focused on AI automation, agent orchestration, and production-ready ML systems that solve real problems.',
    color:    'bg-violet-500/15 text-violet-300',
  },
  
];

function ValueCard({ icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-5 p-6 rounded-2xl border border-forge-border hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 cursor-default"
    >
      <div className="w-10 h-10 rounded-xl bg-forge-amber/10 flex items-center justify-center text-lg flex-shrink-0 mt-0.5 group-hover:bg-forge-amber/15 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-[14px] font-bold text-white mb-2">{title}</h3>
        <p className="text-[13px] text-white/40 leading-[1.7]">{desc}</p>
      </div>
    </motion.div>
  );
}

function TeamCard({ initials, name, role, bio, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col border border-forge-border rounded-2xl p-6 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 cursor-default"
    >
      {/* Avatar */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-[15px] font-extrabold mb-4 ${color}`}>
        {initials}
      </div>
      <p className="font-display text-[15px] font-bold text-white mb-1">{name}</p>
      <p className="text-[11px] text-forge-amber/70 font-display font-semibold tracking-wide mb-3">{role}</p>
      <p className="text-[13px] text-white/40 leading-[1.7]">{bio}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">

        {/* ── Section label ── */}
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> About ForgeAI
          </p>
        </Reveal>

        {/* ── Two-column intro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[44px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05]">
              Small team.{' '}
              <span className="text-forge-amber">Deep focus.</span>{' '}
              <span className="text-white/28">No fluff.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="flex flex-col justify-center gap-5">
              <p className="text-[15px] text-white/45 leading-[1.8] font-light">
                ForgeAI was built out of frustration. We watched businesses pay agencies 
                six figures for strategy docs, roadmaps, and "AI readiness assessments" 
                — and walk away with nothing running in production.
              </p>
              <p className="text-[15px] text-white/45 leading-[1.8] font-light">
                We run a different model: small senior team, real scope, working agent 
                in two weeks. Every engagement starts with the most expensive manual 
                process in your business — and ends with it automated.
              </p>
              {/* Founder signature */}
              <div className="flex items-center gap-3 pt-2 border-t border-forge-border mt-2">
                <div className="w-9 h-9 rounded-full bg-forge-amber/15 border border-forge-amber/25 flex items-center justify-center font-display text-[12px] font-extrabold text-forge-amber">
                  HSB
                </div>
                <div>
                  <p className="font-display text-[12px] font-bold text-white">Hussain Barodawala</p>
                  <p className="text-[11px] text-white/30">Founder, ForgeAI</p>
                </div>

                {/* Founder signature */}
                <div className="w-9 h-9 rounded-full bg-forge-amber/15 border border-forge-amber/25 flex items-center justify-center font-display text-[12px] font-extrabold text-forge-amber">
                  BAC
                </div>
                <div>
                  <p className="font-display text-[12px] font-bold text-white">Burhan Contractor</p>
                  <p className="text-[11px] text-white/30">Co-founder, ForgeAI</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Values grid ── */}
        <Reveal>
          <p className="font-display text-[11px] font-bold text-white/25 tracking-[0.12em] uppercase mb-6">
            How we operate
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} {...v} index={i} />
          ))}
        </div>

        {/* ── Team ── */}
        <Reveal>
          <p className="font-display text-[11px] font-bold text-white/25 tracking-[0.12em] uppercase mb-6">
            The team
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} {...member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
