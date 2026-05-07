'use client';

import Reveal      from './ui/Reveal';
import ContactForm from './ContactForm';

const WHAT_HAPPENS = [
  { icon: '📋', step: '01', title: 'We read your brief', desc: 'Same day. One of our senior operators reviews what you sent.' },
  { icon: '📄', step: '02', title: 'You get a one-page plan', desc: 'Within 24 hours — scope, agent architecture, rough timeline, price range.' },
  { icon: '🎥', step: '03', title: 'Optional 20-min call', desc: 'If the plan looks right, we do a short call to finalise details. No pitch. No deck.' },
  { icon: '🚀', step: '04', title: 'We start building', desc: 'Contract signed, first sprint kicks off. Working agent in two weeks.' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-forge-border">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">

        {/* Header */}
        <Reveal>
          <p className="text-forge-amber text-[11px] font-bold font-display tracking-[0.14em] uppercase mb-5 flex items-center gap-2">
            <span>§</span> Start a project
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-[44px] lg:text-[52px] font-extrabold tracking-[-1px] leading-[1.05] mb-16">
            Tell us what to automate.{' '}
            <span className="text-white/28">We'll send the plan.</span>
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">

          {/* LEFT — the form */}
          <Reveal delay={0.1}>
            <div className="bg-forge-mid border border-forge-border rounded-2xl p-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* RIGHT — what happens next + contact details */}
          <div className="flex flex-col gap-8">

            {/* What happens next */}
            <Reveal delay={0.15}>
              <div>
                <p className="font-display text-[11px] font-bold text-white/30 tracking-[0.12em] uppercase mb-5">
                  What happens next
                </p>
                <div className="flex flex-col gap-0">
                  {WHAT_HAPPENS.map(({ icon, step, title, desc }, i) => (
                    <div
                      key={step}
                      className="flex gap-4 py-5 border-b border-forge-border last:border-0"
                    >
                      {/* Step number */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-forge-amber/25 bg-forge-amber/8 flex items-center justify-center font-display text-[11px] font-bold text-forge-amber">
                        {step}
                      </div>
                      <div>
                        <p className="font-display text-[13px] font-bold text-white mb-1">{title}</p>
                        <p className="text-[12px] text-white/35 leading-[1.65]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Direct contact */}
            <Reveal delay={0.2}>
              <div className="border border-forge-border rounded-xl p-6 bg-white/[0.02]">
                <p className="font-display text-[11px] font-bold text-white/30 tracking-[0.12em] uppercase mb-4">
                  Prefer to just email?
                </p>
                <a
                  href="mailto:hello@forgeai.com"
                  className="group flex items-center gap-3 text-white hover:text-forge-amber transition-colors duration-200"
                >
                  <span className="w-9 h-9 rounded-lg bg-forge-amber/10 border border-forge-amber/20 flex items-center justify-center text-forge-amber text-sm flex-shrink-0">
                    ✉
                  </span>
                  <div>
                    <p className="font-display text-[13px] font-bold">hello@forgeai.com</p>
                    <p className="text-[11px] text-white/30 mt-0.5">We reply within one business day</p>
                  </div>
                </a>
              </div>
            </Reveal>

            {/* Trust pills */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2">
                {[
                  '🔒 NDA on day one',
                  '⚡ 2-week delivery',
                  '↩ Cancel any time',
                  '🧑‍💻 Senior operators',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[11px] text-white/30 font-display font-medium bg-white/[0.03] border border-forge-border rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
