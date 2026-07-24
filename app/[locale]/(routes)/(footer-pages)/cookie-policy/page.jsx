import CookiePolicyPage from "@/our_pages/footer-pages/cookie-policy/CookiePolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/cookie-policy`;

  return {
    title: t("footer.cookiePolicy.metaData.title"),
    description: t("footer.cookiePolicy.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/cookie-policy",
        ar: "https://www.primexcapital.com/ar/cookie-policy",
        ku: "https://www.primexcapital.com/ku/cookie-policy",
        es: "https://www.primexcapital.com/es/cookie-policy",
        ps: "https://www.primexcapital.com/ps/cookie-policy",
        pt: "https://www.primexcapital.com/pt/cookie-policy",
        fa: "https://www.primexcapital.com/fa/cookie-policy",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.cookiePolicy.metaData.title"),
      description: t("footer.cookiePolicy.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/cookie-policy.webp",
          width: 1200,
          height: 630,
          alt: t("footer.cookiePolicy.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CookiePolicyPage />;
};

export default page;
