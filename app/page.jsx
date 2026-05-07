import Navbar       from '../components/Navbar';
import Hero         from '../components/Hero';
import Marquee      from '../components/Marquee';
import Manifesto    from '../components/Manifesto';
import Services     from '../components/Services';
import Process      from '../components/Process';
import Compare      from '../components/Compare';
import Stats        from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA          from '../components/CTA';
import About        from '../components/About';
import Contact      from '../components/Contact';
import Footer       from '../components/Footer';

/**
 * Page-level metadata overrides the root layout defaults.
 * For the home page we keep title = default so no " | ForgeAI" suffix appears.
 */
export const metadata = {
  alternates: {
    canonical: '/',
  },
  // Title deliberately omitted — inherits "ForgeAI — AI Automation Agency" from layout
};

export default function Home() {
  return (
    <main className="bg-forge-dark min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── PHASE 1 ── */}
      <Hero />
      <Marquee />

      {/* ── PHASE 2 ── */}
      <Manifesto />
      <Services />
      <Process />

      {/* ── PHASE 3 ── */}
      <Compare />
      <Stats />
      <Testimonials />

      {/* ── PHASE 4 ── */}
      <CTA />
      <About />
      <Contact />

      <Footer />

      {/* Phase 5: SEO · OG images · sitemap · Vercel deploy */}
    </main>
  );
}
