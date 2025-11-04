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
        source: "/sitemap/pt.xml",
        destination: "/sitemap/pt.xml",
      },
      {
        source: "/sitemap/pt",
        destination: "/sitemap/pt",
      },
      {
        source: "/sitemap/fa.xml",
        destination: "/sitemap/fa.xml",
      },
      {
        source: "/sitemap/fa",
        destination: "/sitemap/fa",
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
    ];
  },
};

export default withNextIntl(nextConfig);
