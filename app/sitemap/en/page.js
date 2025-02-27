import SitemapTable from "@/components/SitemapTable";

export default function EnSitemapPage() {
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
      url: "https://primexcapital.com/en/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/expert-analysis/primex-learning-hub-/6641f0097c9be5623e10929e",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/expert-analysis/technical-analysis/6641f01d7c9be5623e1092a4",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/market-news/all/news",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/en/starting-gateway/starting-gateway-en/starting-gateway-ar",
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
