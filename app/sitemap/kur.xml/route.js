export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/ku", lastModified: new Date() },
    { url: "https://primexcapital.com/ku/about", lastModified: new Date() },
    { url: "https://primexcapital.com/ku/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/ku/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ku/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ku/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/ku/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ku/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ku/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/ku/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ku/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ku/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ku/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/regional-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/ramadan-contest",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/follower-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ku/provider-agreement",
      lastModified: new Date(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ url, lastModified }) => `
        <url>
          <loc>${url}</loc>
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
