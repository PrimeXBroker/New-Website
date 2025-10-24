import axios from "axios";

async function fetchEnglishBlogs() {
  try {
    const response = await axios.get(
      `https://primexbroker.com/api/fetch/all-blogs-en-slugs`
    );
    const data = response.data;
    const links = data.map((item) => ({
      url: `https://primexcapital.com/en/blogs/${item.slug}`,
      priority: 0.8,
      changefreq: "daily",
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

export async function GET() {
  const technicalAnalysisEnUrls = await fetchEnglishBlogs();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${technicalAnalysisEnUrls
      .map(
        ({ url, priority, changefreq, lastModified }) => `
      <url>
        <loc>${url}</loc>
         <priority>${priority}</priority>
          <changefreq>${changefreq}</changefreq>
        <lastmod>${lastModified.toISOString()}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
