import { allProducts } from '../data/products-index';
import { categories } from '../data/categories';

const siteUrl = 'https://mrexporter.ir';

export async function GET() {
  const urls = [
    { loc: siteUrl, priority: '1.0', changefreq: 'weekly' },
    { loc: `${siteUrl}/products`, priority: '0.9', changefreq: 'weekly' },
    ...categories.map((c) => ({
      loc: `${siteUrl}/categories/${c.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    ...allProducts.map((p) => ({
      loc: `${siteUrl}/products/${p.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
