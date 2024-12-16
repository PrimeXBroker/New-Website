export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/tr", lastModified: new Date() },
    { url: "https://primexcapital.com/tr/about", lastModified: new Date() },
    { url: "https://primexcapital.com/tr/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/tr/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/tr/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/tr/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/tr/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/tr/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/tr/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/tr/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/tr/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/tr/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/tr/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/regional-partner",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/tr/academy", lastModified: new Date() },
    {
      url: "https://primexcapital.com/tr/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/tr/social-trading",
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
