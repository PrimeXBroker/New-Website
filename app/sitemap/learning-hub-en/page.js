import SitemapTable from "@/components/SitemapTable";

async function fetchEnglishLearningHub() {
  const categoryId = "6641f0097c9be5623e10929e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/learning-hub-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/en/details/primex-learning-hub-/${item.slug}`,
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

export default async function LearningHubEnPage() {
  const urls = await fetchEnglishLearningHub();

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
