export async function GET() {
  const baseUrl = "https://primexcapital.com";

  const sitemaps = [
    `${baseUrl}/sitemap/en/sitemap.xml`,
    `${baseUrl}/sitemap/ar/sitemap.xml`,
    `${baseUrl}/sitemap/fa/sitemap.xml`,
    `${baseUrl}/sitemap/kur/sitemap.xml`,
    `${baseUrl}/sitemap/tr/sitemap.xml`,
    `${baseUrl}/sitemap/market-news-en/sitemap-market-news-en.xml`,
    `${baseUrl}/sitemap/market-news-ar/sitemap-market-news-ar.xml`,
    `${baseUrl}/sitemap/starting-gateway-en/sitemap-starting-gateway-en.xml`,
    `${baseUrl}/sitemap/starting-gateway-ar/sitemap-starting-gateway-ar.xml`,
    `${baseUrl}/sitemap/press-release-en/sitemap-press-release-en.xml`,
    `${baseUrl}/sitemap/press-release-ar/sitemap-press-release-ar.xml`,
    `${baseUrl}/sitemap/technical-analysis-en/sitemap-technical-analysis-en.xml`,
    `${baseUrl}/sitemap/technical-analysis-ar/sitemap-technical-analysis-ar.xml`,
    `${baseUrl}/sitemap/learning-hub-en/sitemap-learning-hub-en.xml`,
    `${baseUrl}/sitemap/learning-hub-ar/sitemap-learning-hub-ar.xml`,
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
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
