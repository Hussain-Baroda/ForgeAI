import Link from 'next/link';

const FOOTER_LINKS = {
  'Services':   ['AI Agents', 'Lead Qualification', 'Voice Agents', 'RAG Systems', 'Ops Automation'],
  'Company':    ['About', 'Process', 'Work', 'Blog'],
  'Connect':    ['barodawalahusain@gmail.com', 'LinkedIn', 'Twitter / X'],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-forge-border bg-forge-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* Brand col */}
          <div>
            <Link href="/" className="font-display text-white font-extrabold text-[20px] tracking-tight block mb-4">
              FORGE<span className="text-forge-amber">AI</span>
            </Link>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-[240px]">
              We build AI agents and automations for teams done doing everything manually.
            </p>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 mt-5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] text-green-400 font-display font-bold tracking-wide">
                Taking new projects
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-display text-[11px] font-bold text-white/30 tracking-[0.12em] uppercase mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-forge-border">
          <p className="text-[12px] text-white/20">
            © 2026 ForgeAI. Agents that work.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
