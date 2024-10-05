import MT5PlatformWrapper from "@/our_pages/new-platform/MT5PlatformWrapper";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/platform/mt5-platform`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/platform/mt5-platform`;

  return {
    title: t("metaTrader5.metaData.title"),
    description: t("metaTrader5.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("metaTrader5.metaData.title"),
      description: t("metaTrader5.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/Hero+Image.webp",
          width: 1200,
          height: 630,
          alt: t("metaTrader5.metaData.title"),
        },
      ],
    },
  };
}

const Mt5Platform = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.primexcapital.com/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Platform",
                item: "https://www.primexcapital.com/en/platform",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "MetaTrader 5",
                item: "https://www.primexcapital.com/en/platform/mt5-platform",
              },
            ],
          }),
        }}
      />
      <MT5PlatformWrapper />
    </>
  );
};

export default Mt5Platform;
