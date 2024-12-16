export async function GET() {
  const urls = [
    { url: "https://primexcapital.com/kur", lastModified: new Date() },
    { url: "https://primexcapital.com/kur/about", lastModified: new Date() },
    { url: "https://primexcapital.com/kur/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/kur/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kur/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kur/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/kur/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kur/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kur/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/kur/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kur/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kur/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kur/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/regional-partner",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kur/academy", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kur/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kur/social-trading",
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
