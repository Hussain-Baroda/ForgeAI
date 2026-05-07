# ForgeAI — AI Agency Website (All Phases Complete)

**Stack:** Next.js 14 · Tailwind CSS · Framer Motion · Supabase · Vercel

---

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # fill in Supabase keys
npm run dev
# → http://localhost:3000
```

---

## Phase Tracker

| Phase | What was built | Status |
|-------|----------------|--------|
| 1 | Navbar · Hero (word-by-word headline, agent panel) · Marquee ticker | ✅ Done |
| 2 | Manifesto (strikethrough) · Services (6 cards) · Process (4 steps) | ✅ Done |
| 3 | Compare table · Stats (count-up) · Testimonials (6 cards) | ✅ Done |
| 4 | CTA · About · Contact form → Supabase API · Footer | ✅ Done |
| 5 | SEO metadata · OG image · Sitemap · Robots.txt · Security headers · Deploy | ✅ Done |

---

## Full File Map

```
forgeai/
│
├── .env.local.example             ← Copy to .env.local, add Supabase keys
├── .gitignore                     ← Keeps .env.local out of git
├── DEPLOY.md                      ← Step-by-step Vercel deploy guide
│
├── next.config.js                 ← Compression, security headers, image optimisation
│
├── app/
│   ├── layout.jsx                 ← Root layout: fonts + full SEO metadata + JSON-LD
│   ├── page.jsx                   ← Home: assembles all sections
│   ├── globals.css                ← Tailwind base + bg-grid + scrollbar
│   ├── opengraph-image.jsx        ← Auto-generates OG image at /opengraph-image
│   ├── sitemap.js                 ← Auto-generates /sitemap.xml
│   ├── robots.js                  ← Auto-generates /robots.txt
│   └── api/contact/route.js       ← POST /api/contact → saves lead to Supabase
│
├── lib/
│   └── supabase.js                ← Server-side Supabase client (service role key)
│
├── public/
│   └── site.webmanifest           ← PWA manifest (home screen icon on mobile)
│
└── components/
    ├── ui/
    │   ├── Reveal.jsx             ← Reusable scroll-triggered fade+slide wrapper
    │   └── useCountUp.js          ← Custom hook: animated 0→n counter
    │
    ├── Navbar.jsx                 ← Sticky, frosted glass on scroll, mobile menu
    ├── Hero.jsx                   ← Word-by-word headline, live agent panel, metrics
    ├── Marquee.jsx                ← Infinite horizontal ticker, pauses on hover
    ├── Manifesto.jsx              ← Scroll-triggered animated strikethrough lines
    ├── Services.jsx               ← 6-card grid with hover glow
    ├── Process.jsx                ← 4-step timeline with animated connector line
    ├── Compare.jsx                ← Them vs Us table, rows animate in on scroll
    ├── Stats.jsx                  ← 4 count-up stat cards
    ├── Testimonials.jsx           ← 6 client cards with metric pills + star ratings
    ├── CTA.jsx                    ← Mid-page conversion strip
    ├── About.jsx                  ← Team cards, values grid, founder note
    ├── ContactForm.jsx            ← Form with validation, loading state, success screen
    ├── Contact.jsx                ← Contact section: form + sidebar + trust pills
    └── Footer.jsx                 ← Links, status pill, copyright
```

---

## Customisation Quick Reference

| What to change | File | Variable/area |
|----------------|------|---------------|
| Agency name | All files | Find/replace `ForgeAI` |
| Domain | `app/layout.jsx` | `SITE_URL` on line 16 |
| Accent colour | `tailwind.config.js` | `forge.amber` |
| Twitter handle | `app/layout.jsx` | `creator: '@forgeai'` |
| Hero headline | `Hero.jsx` | Three `AnimatedLine` calls |
| Agent panel rows | `Hero.jsx` | `AGENTS` array |
| Marquee items | `Marquee.jsx` | `ITEMS` array |
| Services | `Services.jsx` | `SERVICES` array |
| Process steps | `Process.jsx` | `STEPS` array |
| Compare rows | `Compare.jsx` | `ROWS` array |
| Stats | `Stats.jsx` | `STATS` array |
| Testimonials | `Testimonials.jsx` | `TESTIMONIALS` array |
| Team members | `About.jsx` | `TEAM` array |
| Contact email | `Contact.jsx` | `href="mailto:..."` |
| Budget options | `ContactForm.jsx` | `BUDGET_OPTIONS` array |
| Footer links | `Footer.jsx` | `FOOTER_LINKS` object |

---

See **DEPLOY.md** for the full Vercel deploy walkthrough.
