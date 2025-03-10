export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/fa", lastModified: new Date() },
    { url: "https://primexcapital.com/fa/about", lastModified: new Date() },
    { url: "https://primexcapital.com/fa/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/fa/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/fa/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/fa/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/fa/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/fa/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/fa/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/fa/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/fa/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/fa/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/fa/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/regional-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/ramadan-contest",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/follower-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/fa/provider-agreement",
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
