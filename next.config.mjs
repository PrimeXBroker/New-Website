import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
        destination: "/sitemap",
      },
      {
        source: "/sitemap/en/sitemap.xml",
        destination: "/sitemap/en",
      },
      {
        source: "/sitemap/ar/sitemap.xml",
        destination: "/sitemap/ar",
      },
      {
        source: "/sitemap/fa/sitemap.xml",
        destination: "/sitemap/fa",
      },
      {
        source: "/sitemap/kur/sitemap.xml",
        destination: "/sitemap/kur",
      },
      {
        source: "/sitemap/tr/sitemap.xml",
        destination: "/sitemap/tr",
      },
      {
        source: "/sitemap/market-news-en/sitemap.xml",
        destination: "/sitemap/market-news-en",
      },
      {
        source: "/sitemap/market-news-ar/sitemap.xml",
        destination: "/sitemap/market-news-ar",
      },
      {
        source: "/sitemap/starting-gateway-en/sitemap.xml",
        destination: "/sitemap/starting-gateway-en",
      },
      {
        source: "/sitemap/starting-gateway-ar/sitemap.xml",
        destination: "/sitemap/starting-gateway-ar",
      },
      {
        source: "/sitemap/press-release-en/sitemap.xml",
        destination: "/sitemap/press-release-en",
      },
      {
        source: "/sitemap/press-release-ar/sitemap.xml",
        destination: "/sitemap/press-release-ar",
      },
      {
        source: "/sitemap/technical-analysis-en/sitemap.xml",
        destination: "/sitemap/technical-analysis-en",
      },
      {
        source: "/sitemap/technical-analysis-ar/sitemap.xml",
        destination: "/sitemap/technical-analysis-ar",
      },
      {
        source: "/sitemap/learning-hub-en/sitemap.xml",
        destination: "/sitemap/learning-hub-en",
      },
      {
        source: "/sitemap/learning-hub-ar/sitemap.xml",
        destination: "/sitemap/learning-hub-ar",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
