export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
    sitemap: [
      "https://www.primexcapital.com/sitemap.xml",
      "https://www.primexcapital.com/sitemap/market-news-en.xml",
    ],
  };
}
