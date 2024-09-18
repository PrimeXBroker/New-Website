export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
      crawlDelay: 10,
    },
    sitemap: "https://www.primexcapital.com/sitemap.xml",
  };
}
