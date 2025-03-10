import SitemapTable from "@/components/SitemapTable";

export default function ArSitemapPage() {
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
    {
      url: "https://primexcapital.com/ar/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/ramadan-contest",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/follower-agreement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/ar/provider-agreement",
      lastModified: new Date(),
    },
  ];

  return (
    <div style={{ margin: "20px auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "5px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "28px",
        }}
      >
        XML Sitemap
      </h1>
      <SitemapTable sitemaps={urls} />
    </div>
  );
}
