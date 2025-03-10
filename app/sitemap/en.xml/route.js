export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/en", lastModified: new Date() },
    { url: "https://primexcapital.com/en/about", lastModified: new Date() },
    { url: "https://primexcapital.com/en/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/en/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/en/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/en/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/en/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/en/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/en/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/en/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/en/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/en/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/en/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/regional-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/ramadan-contest",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/follower-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/provider-agreement",
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
