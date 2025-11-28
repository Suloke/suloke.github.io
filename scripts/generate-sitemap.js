const fs = require("fs");
const path = require("path");

const generateSitemap = async () => {
  const siteUrl = process.env.SITE_URL || "https://suloke.com";

  // Supported languages
  const locales = ["en", "zh", "ar"];

  // Static routes for your site (excluding private _backend)
  const staticRoutes = [
    "/",
    "/web",
    "/mobile",
    "/ai",
    "/contact",
    "/privacy-policy",
    "/ahmed",
    "/sowrov",
  ];

  // Generate localized URLs
  const localizedUrls = [];

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      localizedUrls.push({
        url: `${siteUrl}/${locale}${route}`,
        priority:
          route === "/"
            ? "1.0"
            : route.includes("/ahmed") || route.includes("/sowrov")
            ? "0.6"
            : "0.8",
      });
    });
  });

  // Generate the XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${localizedUrls
    .map((item) => {
      return `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${item.priority}</priority>
    </url>
  `;
    })
    .join("")}
</urlset>
  `;

  return sitemap;
};

// Write the sitemap to the `public/` directory
const saveSitemap = async () => {
  try {
    const sitemap = await generateSitemap();

    // Output path for the static sitemap file
    const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
    fs.writeFileSync(outputPath, sitemap, "utf8");

    console.log("Sitemap generated successfully at:", outputPath);
    console.log("Generated localized URLs for languages: en, zh, ar");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

// Run the script
saveSitemap();
