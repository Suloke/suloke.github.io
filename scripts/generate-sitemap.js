const fs = require('fs');
const path = require('path');

const generateSitemap = async () => {
  const siteUrl = process.env.SITE_URL || 'https://suloke.com';

  // Static routes for your site
  const staticRoutes = [
    '/',
    '/web',
    '/backend',
    '/mobile',
    '/contact',
    '/privacy-policy',
  ];

  // Generate the XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map((route) => {
      return `
    <url>
      <loc>${siteUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
  `;

  return sitemap;
};

// Write the sitemap to the `public/` directory
const saveSitemap = async () => {
  try {
    const sitemap = await generateSitemap();

    // Output path for the static sitemap file
    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap, 'utf8');

    console.log('Sitemap generated successfully at:', outputPath);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
saveSitemap();
