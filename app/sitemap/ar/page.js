import SitemapTable from "@/components/SitemapTable";

export default function ArSitemapPage() {
  const urls = [
    {
      url: "https://primexcapital.com/ar",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/app",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/platform/mt5-platform",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/forex",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/metals",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/indices",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/commodities",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/stocks",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/crypto",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/account-types",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/local-depositor",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/social-trading",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/ib-program",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/regional-partner",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/why-choose-us",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/about",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/contact",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/awards",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/client-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/terms",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },

    {
      url: "https://primexcapital.com/ar/policy-statement",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/risk-disclosure",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/complaints-management",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/cookie-policy",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/policy-of-aml",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/follower-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/provider-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/technical-analysis",
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/market-news",
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/webinars",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/economic-calender",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/blogs",
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/trade-gold",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
    },
    {
      url: "https://primexcapital.com/ar/ecn-broker",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "Daily",
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
