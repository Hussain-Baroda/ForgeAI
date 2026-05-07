/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ── Performance ────────────────────────────────────────────── */
  compress: true,                 // gzip all responses
  poweredByHeader: false,         // removes X-Powered-By: Next.js header

  /* ── Images ─────────────────────────────────────────────────── */
  images: {
    formats: ['image/avif', 'image/webp'],   // serve modern formats automatically
    remotePatterns: [
      /*
        Add domains here if you load images from external URLs.
        Example — Supabase storage:
        { protocol: 'https', hostname: '*.supabase.co' },
      */
    ],
  },

  /* ── Security headers ───────────────────────────────────────── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevents clickjacking
          { key: 'X-Frame-Options',           value: 'DENY' },
          // Prevents MIME-type sniffing
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          // Controls referrer info sent with requests
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          // Allows camera/mic only from same origin (no third-party access)
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
          // Tells browsers to always use HTTPS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  /* ── Redirects ──────────────────────────────────────────────── */
  async redirects() {
    return [
      /*
        Example: redirect old URLs if you ever change them
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true,      // 308 redirect (keeps SEO juice)
        },
      */
    ];
  },
};

module.exports = nextConfig;
