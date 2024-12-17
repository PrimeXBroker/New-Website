function escapeXML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}
async function fetchArabicMarketNews() {
  const categoryId = "664de39c3f02939fcd48a1d0";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/market-news-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/ar/market-news-detail/${escapeXML(
        item.slug
      )}`,
      title: escapeXML(item.title),
      language: escapeXML(item.language),
      createdOn: new Date(item.createdOn).toISOString(),
    }));
    return links;
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
            <news:name>PrimeX Capital Market News</news:name>
            <news:language>${article.language}</news:language>
          </news:publication>
          <news:publication_date>${new Date(
            article.createdOn
          ).toISOString()}</news:publication_date>
          <news:title>${article.title}</news:title>
        </news:news>
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
