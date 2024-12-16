export async function GET() {
  const baseUrl = "https://primexcapital.com";

  const sitemaps = [
    `${baseUrl}/sitemap/en/sitemap.xml`,
    `${baseUrl}/sitemap/ar/sitemap.xml`,
    `${baseUrl}/sitemap/fa/sitemap.xml`,
    `${baseUrl}/sitemap/kur/sitemap.xml`,
    `${baseUrl}/sitemap/tr/sitemap.xml`,
    `${baseUrl}/sitemap/market-news-en/sitemap.xml`,
    `${baseUrl}/sitemap/market-news-ar/sitemap.xml`,
    `${baseUrl}/sitemap/starting-gateway-en/sitemap.xml`,
    `${baseUrl}/sitemap/starting-gateway-ar/sitemap.xml`,
    `${baseUrl}/sitemap/press-release-en/sitemap.xml`,
    `${baseUrl}/sitemap/press-release-ar/sitemap.xml`,
    `${baseUrl}/sitemap/technical-analysis-en/sitemap.xml`,
    `${baseUrl}/sitemap/technical-analysis-ar/sitemap.xml`,
    `${baseUrl}/sitemap/learning-hub-en/sitemap.xml`,
    `${baseUrl}/sitemap/learning-hub-ar/sitemap.xml`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps
      .map(
        (url) => `
      <sitemap>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`
      )
      .join("")}
  </sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
