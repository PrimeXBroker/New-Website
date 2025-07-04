export async function GET() {
  const baseUrl = "https://primexcapital.com";

  const sitemaps = [
    { url: `${baseUrl}/sitemap/en.xml`, changefreq: "daily", priority: "1" },
    { url: `${baseUrl}/sitemap/ar.xml`, changefreq: "daily", priority: "1" },
    { url: `${baseUrl}/sitemap/ku.xml`, changefreq: "weekly", priority: "1" },
    { url: `${baseUrl}/sitemap/ps.xml`, changefreq: "weekly", priority: "1" },
    { url: `${baseUrl}/sitemap/es.xml`, changefreq: "weekly", priority: "1" },
    {
      url: `${baseUrl}/sitemap/market-news-en.xml`,
      changefreq: "hourly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/market-news-ar.xml`,
      changefreq: "hourly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/technical-analysis-en.xml`,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/technical-analysis-ar.xml`,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/blogs-en.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/blogs-ar.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/starting-gateway-en.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/starting-gateway-ar.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/press-release-en.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/press-release-ar.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/learning-hub-en.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/sitemap/learning-hub-ar.xml`,
      changefreq: "monthly",
      priority: "0.8",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps
      .map(
        ({ url, changefreq, priority }) => `
      <sitemap>
        <loc>${url}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`
      )
      .join("")}
  </sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
