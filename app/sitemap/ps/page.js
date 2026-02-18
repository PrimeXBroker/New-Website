import SitemapTable from "@/components/SitemapTable";

export default function PsSitemapPage() {
  const urls = [
    {
      url: "https://primexcapital.com/ps",
      lastModified: new Date(),
      priority: 1,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/app",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/platform/mt5-platform",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/forex",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/metals",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/indices",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/commodities",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/stocks",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/crypto",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/account-types",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/local-depositor",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/social-trading",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/ib-program",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/regional-partner",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/primex-spreads",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/why-choose-us",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/about",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/contact",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/awards",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/client-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/terms",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },

    {
      url: "https://primexcapital.com/ps/policy-statement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/risk-disclosure",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/complaints-management",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/cookie-policy",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/policy-of-aml",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/follower-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/provider-agreement",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/technical-analysis",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/market-news",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/webinars",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/economic-calender",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/blogs",
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/ramadan-contest",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/ecn-broker",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/hammurabi-account",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/regulation-and-compliance",
      lastModified: new Date(),
      priority: 0.8,
      changefreq: "daily",
    },
    {
      url: "https://primexcapital.com/ps/investment-fund",
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
