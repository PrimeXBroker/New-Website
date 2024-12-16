import SitemapTable from "@/components/SitemapTable";

export default function SitemapPage() {
  const sitemaps = [
    {
      url: "https://primexcapital.com/sitemap/en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/ar/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/fa/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/kur/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/tr/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/market-news-en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/market-news-ar/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/starting-gateway-en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/starting-gateway-ar/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/press-release-en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/press-release-ar/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/technical-analysis-en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/technical-analysis-ar/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/learning-hub-en/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/learning-hub-ar/sitemap.xml",
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
      <SitemapTable sitemaps={sitemaps} />
    </div>
  );
}
