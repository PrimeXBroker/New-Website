import SitemapTable from "@/components/SitemapTable";

export default function KurSitemapPage() {
  const urls = [
    { url: "https://primexcapital.com/kd", lastModified: new Date() },
    { url: "https://primexcapital.com/kd/about", lastModified: new Date() },
    { url: "https://primexcapital.com/kd/careers", lastModified: new Date() },
    { url: "https://primexcapital.com/kd/contact", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kd/account-types",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kd/forex", lastModified: new Date() },
    { url: "https://primexcapital.com/kd/metals", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kd/commodities",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kd/stocks", lastModified: new Date() },
    { url: "https://primexcapital.com/kd/indices", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kd/platform/mt5-platform",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/ib-program",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/client-agreement",
      lastModified: new Date(),
    },
    { url: "https://primexcapital.com/kd/terms", lastModified: new Date() },
    {
      url: "https://primexcapital.com/kd/policy-statement",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/risk-disclosure",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/complaints-management",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/cookie-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/policy-of-aml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/liquidity-providing",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/grey-label-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/regional-partner",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/why-choose-us",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/social-trading",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/economic-calender",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/technical-analysis",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/market-news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/webinars",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/kd/blogs",
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
