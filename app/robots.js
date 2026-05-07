import { SITE_URL } from './layout';

/**
 * Next.js serves this at /robots.txt automatically.
 *
 * Rules:
 * - Allow all crawlers on all pages
 * - Block the API routes from being indexed (no useful content there)
 * - Point crawlers to the sitemap
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],   // API routes shouldn't be indexed
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
