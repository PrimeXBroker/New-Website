import SitemapTable from "@/components/SitemapTable";

async function fetchEnglishBlogs() {
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/all-blogs-en-slugs`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/en/blogs/${item.slug}`,
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

export default async function BlogsEnPage() {
  const urls = await fetchEnglishBlogs();

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
