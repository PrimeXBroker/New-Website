export async function GET() {
  const urls = [
    {
      url: "https://primexcapital.com/en",
      lastModified: new Date(),
      priority: 1,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/app",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/platform/mt5-platform",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/forex",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/metals",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/indices",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/commodities",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/stocks",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/crypto",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/account-types",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/local-depositor",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/social-trading",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/ib-program",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/regional-partner",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/why-choose-us",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/about",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/contact",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/awards",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/client-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/terms",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },

    {
      url: "https://primexcapital.com/en/policy-statement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/risk-disclosure",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/complaints-management",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/cookie-policy",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/policy-of-aml",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/follower-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/provider-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/technical-analysis",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/market-news",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/webinars",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/economic-calender",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/blogs",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/trade-gold",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/en/ecn-broker",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ url, priority, changefreq, lastModified }) => `
        <url>
          <loc>${url}</loc>
          <priority>${priority}</priority>
          <changefreq>${changefreq}</changefreq>
          <lastmod>${lastModified.toISOString()}</lastmod>
        </url>`
        )
        .join("")}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
