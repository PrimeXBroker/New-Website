export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.primexcapital.com/sitemap.xml",
      "https://primexcapital.com/sitemap/en.xml",
      "https://primexcapital.com/sitemap/ar.xml",
      "https://primexcapital.com/sitemap/kd.xml",
      "https://primexcapital.com/sitemap/market-news-en.xml",
      "https://primexcapital.com/sitemap/market-news-ar.xml",
      "https://primexcapital.com/sitemap/starting-gateway-en.xml",
      "https://primexcapital.com/sitemap/starting-gateway-ar.xml",
      "https://primexcapital.com/sitemap/press-release-en.xml",
      "https://primexcapital.com/sitemap/press-release-ar.xml",
      "https://primexcapital.com/sitemap/technical-analysis-en.xml",
      "https://primexcapital.com/sitemap/technical-analysis-ar.xml",
      "https://primexcapital.com/sitemap/learning-hub-en.xml",
      "https://primexcapital.com/sitemap/learning-hub-ar.xml",
    ],
  };
}
