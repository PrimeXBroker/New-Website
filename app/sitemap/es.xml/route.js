export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/es", lastModified: new Date() },
    { url: "https://primexcapital.com/es/app", lastModified: new Date() },
    {
      url: "https://primexcapital.com/es/platform/mt5-platform",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/es/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/es/metals", lastModified: new Date() },
    { url: "https://primexcapital.com/es/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/es/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/es/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/es/crypto", lastModified: new Date() },
    {
      url: "https://primexcapital.com/es/account-types",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/primex-spreads",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/local-depositor",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/bonus",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/regional-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/primex-spreads",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/why-choose-us",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/es/about", lastModified: new Date() },
    { url: "https://primexcapital.com/es/contact", lastModified: new Date() },
    { url: "https://primexcapital.com/es/awards", lastModified: new Date() },
    {
      url: "https://primexcapital.com/es/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/es/terms", lastModified: new Date() },

    {
      url: "https://primexcapital.com/es/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/follower-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/provider-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/es/blogs",
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
