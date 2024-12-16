export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/ar", lastModified: new Date() },
    { url: "https://primexcapital.com/ar/about", lastModified: new Date() },
    { url: "https://primexcapital.com/ar/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/ar/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ar/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ar/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/ar/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ar/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ar/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/ar/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ar/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ar/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ar/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/regional-partner",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/ar/academy", lastModified: new Date() },
    {
      url: "https://primexcapital.com/ar/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e",
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
