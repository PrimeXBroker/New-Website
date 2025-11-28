export async function GET() {
  const urls = [
    {
      url: "https://primexcapital.com/ps",
      lastModified: new Date(),
      priority: 1,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/app",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/platform/mt5-platform",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/forex",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/metals",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/indices",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/commodities",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/stocks",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/crypto",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/account-types",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/local-depositor",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/social-trading",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/ib-program",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/regional-partner",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/why-choose-us",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/about",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/contact",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/awards",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/client-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/terms",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },

    {
      url: "https://primexcapital.com/ps/policy-statement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/risk-disclosure",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/complaints-management",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/cookie-policy",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/policy-of-aml",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/follower-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/provider-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/technical-analysis",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/market-news",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/webinars",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/economic-calender",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/blogs",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/trade-gold",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/ecn-broker",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/hammurabi-account",
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
