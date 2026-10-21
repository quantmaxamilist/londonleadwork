import { services, areas, SITE } from '../data/site';
export function GET() {
  const paths = ['/', '/lead-work', '/our-work', '/areas', '/contact', '/privacy-policy', ...services.map((s) => `/lead-work/${s.slug}`), ...areas.map((a) => `/areas/${a.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
