import type { APIRoute } from 'astro';
import { upcomingEvents, popularEvents, pastEventCities } from '../data/events';

const BASE = 'https://www.idealsnetwork.com';
const today = new Date().toISOString().split('T')[0];

function url(loc: string, priority: string, changefreq: string) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const staticPages = [
    url(`${BASE}/`, '1.0', 'weekly'),
    url(`${BASE}/about-us`, '0.8', 'monthly'),
    url(`${BASE}/contact`, '0.7', 'monthly'),
  ];

  const eventPages = [
    ...upcomingEvents.map(e => url(e.url, '0.9', 'weekly')),
    ...popularEvents.map(e => url(e.url, '0.7', 'monthly')),
  ];

  const cityPages = pastEventCities.map(c => url(c.url, '0.6', 'monthly'));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...eventPages, ...cityPages].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
