async function fetchEnglishStartingGateway() {
  const categoryId = "66532f1079afa70a9ae6302e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/starting-gateway-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/en/starting-gateway/${item.slug}`,
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

export async function GET() {
  const startingGatewayEnUrls = await fetchEnglishStartingGateway();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${startingGatewayEnUrls
      .map(
        ({ url, priority, changeFrequency, lastModified }) => `
      <url>
        <loc>${url}</loc>
         <priority>${priority}</priority>
          <frequency>${changeFrequency}</frequency>
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
