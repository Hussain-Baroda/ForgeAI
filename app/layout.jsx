import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

/* ─── Fonts ─────────────────────────────────────────────────── */
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500'],
  display: 'swap',
});

/* ─── Site-wide constants (change these to your real values) ── */
export const SITE_URL  = 'https://forgeai.com';          // ← your domain
export const SITE_NAME = 'ForgeAI';
export const SITE_TAGLINE = 'AI Automation Agency';

/* ─── Default metadata (every page inherits this) ──────────── */
export const metadata = {
  /* Basic */
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,   // child pages: "Services | ForgeAI"
  },
  description:
    'We design, build and maintain custom AI agents and automations for teams that are done doing everything manually. Working software in your stack — not a roadmap.',
  keywords: [
    'AI automation agency',
    'AI agents',
    'workflow automation',
    'lead qualification AI',
    'custom AI build',
    'RAG system',
    'voice agent',
    'CRM automation',
    'AI consulting',
  ],
  authors: [{ name: 'ForgeAI', url: SITE_URL }],
  creator: 'ForgeAI',

  /* Canonical */
  alternates: { canonical: '/' },

  /* Open Graph — controls how link looks when shared on WhatsApp, LinkedIn, Slack */
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Custom AI agents that handle your inbox, qualify leads, automate ops, and work 24/7. Working software — not a roadmap.',
    images: [
      {
        url: '/og-image.png',         // generated below in app/opengraph-image.jsx
        width: 1200,
        height: 630,
        alt: 'ForgeAI — AI Automation Agency',
      },
    ],
    locale: 'en_US',
  },

  /* Twitter / X card */
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'AI agents for teams done doing everything manually. Working software in 2 weeks.',
    images: ['/og-image.png'],
    creator: '@forgeai',             // ← replace with your handle
  },

  /* Favicon / icons  (put files in /public) */
  icons: {
    icon: [
      { url: '/favicon.ico',            sizes: 'any' },
      { url: '/icon.svg',               type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',

  /* Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─── JSON-LD structured data (helps Google understand the page) */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'AI automation agency that builds custom AI agents, workflow automations, and AI-powered systems for growing businesses.',
  areaServed: 'Worldwide',
  priceRange: '$$',
  serviceType: [
    'AI Agents',
    'Workflow Automation',
    'Lead Qualification',
    'Voice Agents',
    'RAG Systems',
    'CRM Integration',
  ],
  sameAs: [
    'https://twitter.com/forgeai',
    'https://linkedin.com/company/forgeai',
  ],
};

/* ─── Root layout ───────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to Google Fonts CDN for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-forge-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
