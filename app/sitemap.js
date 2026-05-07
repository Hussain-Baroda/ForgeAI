import { SITE_URL } from './layout';

/**
 * Next.js reads this file and serves the output at /sitemap.xml
 * Google reads that URL when you submit your site to Search Console.
 *
 * Add a new entry here every time you create a new page.
 */
export default function sitemap() {
  const now = new Date();

  return [
    /* Home page */
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },

    /* Anchor sections — treated as individual URLs by some crawlers */
    {
      url: `${SITE_URL}/#services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /*
      When you add new pages (e.g. /blog, /case-studies), add entries here:

      {
        url: `${SITE_URL}/blog`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
      },
    */
  ];
}
