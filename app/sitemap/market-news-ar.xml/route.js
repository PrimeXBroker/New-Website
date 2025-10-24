import axios from "axios";

async function fetchArabicMarketNews() {
  const categoryId = "664de39c3f02939fcd48a1d0";
  try {
    const response = await axios.get(
      `https://primexbroker.com/api/fetch/market-news-ar-slugs/${categoryId}`
    );
    const links = response.data.map((item) => ({
      url: `https://primexcapital.com/ar/market-news/${item.slug}`,
      title: item.title,
      language: item.language,
      createdOn: item.createdOn,
      priority: 0.8,
      changefreq: "daily",
    }));
    return links.map((link) => ({
      ...link,
      url: link.url
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      title: link.title
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      language: link.language
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      createdOn: link.createdOn
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
  const marketNewsArUrls = await fetchArabicMarketNews();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
    ${marketNewsArUrls
      .map(
        (article) => `
      <url>
        <loc>${article.url}</loc>
        <news:news>
          <news:publication>
            <news:name>أخبار السوق برايم إكس</news:name>
            <news:language>${article.language}</news:language>
          </news:publication>
          <news:publication_date>${
            article.createdOn.split("T")[0]
          }</news:publication_date>
          <news:title>${article.title}</news:title>
        </news:news>
         <priority>${article.priority}</priority>
        <changefreq>${article.changeFrequency}</changefreq>
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
