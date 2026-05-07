'use client';

import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const SERVICES = [
  {
    num: '01',
    icon: '📥',
    name: 'AI Inbox Agents',
    desc: 'Triages emails, drafts replies, routes to the right person — works 24/7 without a VA.',
    accent: 'rgba(245,166,35,0.12)',
  },
  {
    num: '02',
    icon: '🎯',
    name: 'Lead Qualification',
    desc: 'Scores inbound leads, books calls, and updates your CRM. Zero manual entry, ever.',
    accent: 'rgba(74,222,128,0.08)',
  },
  {
    num: '03',
    icon: '🔗',
    name: 'CRM Integrations',
    desc: 'Connects your tools — HubSpot, Salesforce, Notion, Airtable — with intelligent data flow.',
    accent: 'rgba(99,102,241,0.1)',
  },
  {
    num: '04',
    icon: '🎙️',
    name: 'Voice Agents',
    desc: 'Inbound and outbound AI voice that qualifies, books, and follows up — on the phone.',
    accent: 'rgba(245,166,35,0.08)',
  },
  {
    num: '05',
    icon: '📚',
    name: 'RAG Knowledge Systems',
    desc: 'Index your docs, SOPs, and data — give your team an AI that actually knows your business.',
    accent: 'rgba(0,194,255,0.07)',
  },
  {
    num: '06',
    icon: '⚙️',
    name: 'Ops Automation',
    desc: 'End-to-end workflow automation. If it\'s repetitive and manual, we can automate it.',
    accent: 'rgba(248,113,113,0.08)',
  },
];

function ServiceCard({ num, icon, name, desc, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
      className="relative group p-8 bg-forge-dark transition-colors duration-300 cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 70%)` }}
      />

      <div className="relative z-10">
        <span className="font-display text-[11px] font-bold text-white/18 tracking-[0.1em] uppercase block mb-5">
          {num}
        </span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
          style={{ background: accent }}
        >
          {icon}
        </div>
        <h3 className="font-display text-[15px] font-bold text-white mb-3">{name}</h3>
        <p className="text-[13px] text-white/40 leading-[1.7]">{desc}</p>
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-forge-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        {/* Header */}
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> What we build
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-[44px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05] mb-16">
            Six types of agents.{' '}
            <span className="text-white/28">Infinite combinations.</span>
          </h2>
        </Reveal>

        {/* Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        {/* Separator lines via background trick */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-forge-border rounded-2xl overflow-hidden divide-y divide-forge-border md:divide-y-0">
          {/* Create visual grid lines */}
          <div className="contents">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className={`
                  border-forge-border
                  ${i % 3 !== 2 ? 'lg:border-r' : ''}
                  ${i % 2 !== 1 ? 'md:border-r lg:border-r-0' : 'md:border-r-0'}
                  ${i < 3 ? 'lg:border-b' : ''}
                  ${i < 4 ? 'md:border-b' : ''}
                  border-b last:border-b-0 md:last:border-b-0 lg:last:border-b-0
                `}
              >
                <ServiceCard {...svc} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
