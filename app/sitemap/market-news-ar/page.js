import SitemapTable from "@/components/SitemapTable";
import axios from "axios";

async function fetchArabicMarketNews() {
  const categoryId = "664de39c3f02939fcd48a1d0";
  try {
    const response = await axios.get(
      `https://primexbroker.com/api/fetch/market-news-ar-slugs/${categoryId}`
    );
    const data = response.data;
    const links = data.map((item) => ({
      url: `https://primexcapital.com/ar/market-news/${item.slug}`,
      priority: 0.8,
      changeFrequency: "daily",
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links.map((link) => ({
      ...link,
      url: link.url
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
    }));
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

export default async function MarketNewsArPage() {
  const urls = await fetchArabicMarketNews();

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
