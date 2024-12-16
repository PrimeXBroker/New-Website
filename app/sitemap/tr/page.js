import SitemapTable from "@/components/SitemapTable";

export default function TrSitemapPage() {
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
