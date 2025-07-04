async function fetchArabicTechnicalAnalysis() {
  const categoryId = "6641f01d7c9be5623e1092a4";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/technical-analysis-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexcapital.com/ar/details/technical-analysis/${item.slug}`,
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
  const technicalAnalysisArUrls = await fetchArabicTechnicalAnalysis();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${technicalAnalysisArUrls
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
