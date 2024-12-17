import axios from "axios";

async function fetchArabicPressRelease() {
  const categoryId = "665448dcf5b226a0bd9b574e";
  try {
    const response = await axios.get(
      `https://primexbroker.com/api/fetch/press-release-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/ar/market-news-detail/${item.slug}`,
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
  const pressReleaseArUrls = await fetchArabicPressRelease();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pressReleaseArUrls
      .map(
        ({ url, lastModified }) => `
      <url>
        <loc>${url}</loc>
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
