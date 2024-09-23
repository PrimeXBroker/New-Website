export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
    sitemap: "https://www.primexcapital.com/sitemap.xml",
  };
}
