'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services',  href: '#services'  },
  { label: 'Process',   href: '#process'   },
  { label: 'Work',      href: '#work'      },
  { label: 'About',     href: '#about'     },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forge-dark/90 backdrop-blur-xl border-b border-white/[0.07] py-4'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-display text-white font-extrabold text-[18px] tracking-tight">
            FORGE<span className="text-forge-amber">AI</span>
          </Link>

          {/* Center tag (desktop) */}
          <span className="hidden lg:block text-[11px] text-white/20 font-display tracking-widest uppercase">
            ◍ AI Agency · 2026
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-forge-amber text-forge-dark px-5 py-2.5 rounded-lg text-[13px] font-extrabold font-display tracking-wide hover:bg-amber-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,166,35,0.3)]"
          >
            Start a Project <span className="text-base">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[61px] inset-x-0 z-40 bg-forge-dark/95 backdrop-blur-xl border-b border-white/[0.07] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/60 hover:text-white text-sm py-1 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-forge-amber text-forge-dark px-5 py-3 rounded-lg text-sm font-extrabold font-display text-center"
              >
                Start a Project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
