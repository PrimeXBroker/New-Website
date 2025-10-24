import SitemapTable from "@/components/SitemapTable";

export default function KuSitemapPage() {
  const urls = [
    {
      url: "https://primexcapital.com/ku",
      lastModified: new Date(),
      priority: 1,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/app",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/platform/mt5-platform",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/forex",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/metals",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/indices",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/commodities",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/stocks",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/crypto",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/account-types",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/local-depositor",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/social-trading",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/ib-program",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/regional-partner",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/why-choose-us",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/about",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/contact",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/awards",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/client-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/terms",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },

    {
      url: "https://primexcapital.com/ku/policy-statement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/risk-disclosure",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/complaints-management",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/cookie-policy",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/policy-of-aml",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/follower-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/provider-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/technical-analysis",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/market-news",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/webinars",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/economic-calender",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/blogs",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/trade-gold",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ku/ecn-broker",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
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
