import ComplaintsManagementPage from "@/our_pages/footer-pages/complaints-management/ComplaintsManagementPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/complaints-management`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/complaints-management`;

  return {
    title: t("footer.complaintsManagement.metaData.title"),
    description: t("footer.complaintsManagement.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.complaintsManagement.metaData.title"),
      description: t("footer.complaintsManagement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/complaints.webp",
          width: 1200,
          height: 630,
          alt: t("footer.complaintsManagement.metaData.title"),
        },
      ],
    },
  };
}

const page = ({ params: { locale } }) => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];

  return (
    <>
      <head>
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/complaints-management`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="alternate"
              href={`https://www.primexcapital.com/${item.url}/complaints-management`}
              hreflang={item.lng}
            />
          ))}
      </head>
      <ComplaintsManagementPage />
    </>
  );
};

export default page;
