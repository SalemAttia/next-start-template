const fs = require('fs');
const globby = require('globby');
const moment = require('moment');

require('dotenv').config();

function addPage(page) {
  const path = page.replace('src/pages', '').replace('.tsx', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
    <lastmod>${ moment().format('YYYY-MM-DDTHH:MM:SSZ') }</lastmod>
    <priority>0.8</priority>
  </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/api/**.ts',
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap-pages.xml', sitemap)
}

generateSitemap()