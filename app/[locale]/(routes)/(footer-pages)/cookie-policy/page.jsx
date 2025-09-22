import CookiePolicyPage from "@/our_pages/footer-pages/cookie-policy/CookiePolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/cookie-policy`;

  return {
    title: t("footer.cookiePolicy.metaData.title"),
    description: t("footer.cookiePolicy.metaData.description"),
    alternates: {
      canonical: url,
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
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
    { lng: "pt", url: "pt" },
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/cookie-policy`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <CookiePolicyPage />
    </>
  );
};

export default page;
