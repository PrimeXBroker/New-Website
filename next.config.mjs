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
};

export default withNextIntl(nextConfig);
