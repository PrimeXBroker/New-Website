import SitemapTable from "@/components/SitemapTable";

export default function SitemapPage() {
  const sitemaps = [
    { url: "https://primexcapital.com/sitemap/en", lastModified: new Date() },
    { url: "https://primexcapital.com/sitemap/ar", lastModified: new Date() },
    { url: "https://primexcapital.com/sitemap/fa", lastModified: new Date() },
    { url: "https://primexcapital.com/sitemap/kur", lastModified: new Date() },
    { url: "https://primexcapital.com/sitemap/tr", lastModified: new Date() },
    {
      url: "https://primexcapital.com/sitemap/market-news-en",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/market-news-ar",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/starting-gateway-en",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/starting-gateway-ar",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/press-release-en",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/press-release-ar",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/technical-analysis-en",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/technical-analysis-ar",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/learning-hub-en",
      lastModified: new Date(),
    },
    {
      url: "https://primexcapital.com/sitemap/learning-hub-ar",
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
