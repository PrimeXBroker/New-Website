import SitemapTable from "@/components/SitemapTable";

export default function FaSitemapPage() {
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
