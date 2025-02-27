import SitemapTable from "@/components/SitemapTable";

async function fetchArabicStartingGateway() {
  const categoryId = "66532f4e79afa70a9ae6303e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/starting-gateway-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/ar/starting-gateway/${item.slug}`,
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

export default async function StartingGatewayArPage() {
  const urls = await fetchArabicStartingGateway();

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
