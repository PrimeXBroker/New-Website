import CookiePolicyPage from "@/our_pages/footer-pages/cookie-policy/CookiePolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cookie-policy`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/cookie-policy`;

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
  return <CookiePolicyPage />;
};

export default page;
