export async function GET() {
  const baseUrl = "https://primexcapital.com";

  const sitemaps = [
    `${baseUrl}/sitemap/en.xml`,
    `${baseUrl}/sitemap/ar.xml`,
    `${baseUrl}/sitemap/ku.xml`,
    `${baseUrl}/sitemap/ps.xml`,
    `${baseUrl}/sitemap/es.xml`,
    `${baseUrl}/sitemap/market-news-en.xml`,
    `${baseUrl}/sitemap/market-news-ar.xml`,
    `${baseUrl}/sitemap/technical-analysis-en.xml`,
    `${baseUrl}/sitemap/technical-analysis-ar.xml`,
    `${baseUrl}/sitemap/blogs-en.xml`,
    `${baseUrl}/sitemap/blogs-ar.xml`,
    `${baseUrl}/sitemap/starting-gateway-en.xml`,
    `${baseUrl}/sitemap/starting-gateway-ar.xml`,
    `${baseUrl}/sitemap/press-release-en.xml`,
    `${baseUrl}/sitemap/press-release-ar.xml`,
    `${baseUrl}/sitemap/learning-hub-en.xml`,
    `${baseUrl}/sitemap/learning-hub-ar.xml`,
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
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
