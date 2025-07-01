import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primexcapital.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "primexbroker.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap/index.xml",
      },
      {
        source: "/sitemap",
        destination: "/sitemap/index",
      },
      {
        source: "/sitemap/en.xml",
        destination: "/sitemap/en.xml",
      },
      {
        source: "/sitemap/en",
        destination: "/sitemap/en",
      },
      {
        source: "/sitemap/ar.xml",
        destination: "/sitemap/ar.xml",
      },
      {
        source: "/sitemap/ar",
        destination: "/sitemap/ar",
      },
      {
        source: "/sitemap/ku.xml",
        destination: "/sitemap/ku.xml",
      },
      {
        source: "/sitemap/ku",
        destination: "/sitemap/ku",
      },
      {
        source: "/sitemap/ps.xml",
        destination: "/sitemap/ps.xml",
      },
      {
        source: "/sitemap/ps",
        destination: "/sitemap/ps",
      },
      {
        source: "/sitemap/es.xml",
        destination: "/sitemap/es.xml",
      },
      {
        source: "/sitemap/es",
        destination: "/sitemap/es",
      },
      {
        source: "/sitemap/market-news-en.xml",
        destination: "/sitemap/market-news-en.xml",
      },
      {
        source: "/sitemap/market-news-en",
        destination: "/sitemap/market-news-en",
      },
      {
        source: "/sitemap/market-news-ar.xml",
        destination: "/sitemap/market-news-ar.xml",
      },
      {
        source: "/sitemap/market-news-ar",
        destination: "/sitemap/market-news-ar",
      },
      {
        source: "/sitemap/technical-analysis-en.xml",
        destination: "/sitemap/technical-analysis-en.xml",
      },
      {
        source: "/sitemap/technical-analysis-en",
        destination: "/sitemap/technical-analysis-en",
      },
      {
        source: "/sitemap/technical-analysis-ar.xml",
        destination: "/sitemap/technical-analysis-ar.xml",
      },
      {
        source: "/sitemap/technical-analysis-ar",
        destination: "/sitemap/technical-analysis-ar",
      },
      {
        source: "/sitemap/blogs-en.xml",
        destination: "/sitemap/blogs-en.xml",
      },
      {
        source: "/sitemap/blogs-en",
        destination: "/sitemap/blogs-en",
      },
      {
        source: "/sitemap/blogs-ar.xml",
        destination: "/sitemap/blogs-ar.xml",
      },
      {
        source: "/sitemap/blogs-ar",
        destination: "/sitemap/blogs-ar",
      },
      {
        source: "/sitemap/starting-gateway-en.xml",
        destination: "/sitemap/starting-gateway-en.xml",
      },
      {
        source: "/sitemap/starting-gateway-en",
        destination: "/sitemap/starting-gateway-en",
      },
      {
        source: "/sitemap/starting-gateway-ar.xml",
        destination: "/sitemap/starting-gateway-ar.xml",
      },
      {
        source: "/sitemap/starting-gateway-ar",
        destination: "/sitemap/starting-gateway-ar",
      },
      {
        source: "/sitemap/press-release-en.xml",
        destination: "/sitemap/press-release-en.xml",
      },
      {
        source: "/sitemap/press-release-en",
        destination: "/sitemap/press-release-en",
      },
      {
        source: "/sitemap/press-release-ar.xml",
        destination: "/sitemap/press-release-ar.xml",
      },
      {
        source: "/sitemap/press-release-ar",
        destination: "/sitemap/press-release-ar",
      },
      {
        source: "/sitemap/learning-hub-en.xml",
        destination: "/sitemap/learning-hub-en.xml",
      },
      {
        source: "/sitemap/learning-hub-en",
        destination: "/sitemap/learning-hub-en",
      },
      {
        source: "/sitemap/learning-hub-ar.xml",
        destination: "/sitemap/learning-hub-ar.xml",
      },
      {
        source: "/sitemap/learning-hub-ar",
        destination: "/sitemap/learning-hub-ar",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
