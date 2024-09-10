import CommoditiesPage from "@/our_pages/instruments/commodities/CommoditiesPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/commodities`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/commodities`;
  return {
    title: t("commodities.metaData.title"),
    description: t("commodities.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("commodities.metaData.title"),
      description: t("commodities.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("commodities.metaData.title"),
        },
      ],
    },
  };
}

const Commodities = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        id="json-ld"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Trading Commodities Profitable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commodity trading can be profitable if prices move in the trader's favor. Traders can go long if they expect prices to rise or short if they expect prices to fall. However, trading carries risks, and using stop loss orders is crucial.",
                },
              },
              {
                "@type": "Question",
                "name": "Which Commodities Offer the Best Trading Opportunities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Popular commodities for trading include crude oil (WTI and Brent), gold, silver, copper, natural gas, cocoa, coffee, soybeans, iron, platinum, and palladium.",
                },
              },
              {
                "@type": "Question",
                "name": "What Is a Commodity Index?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A commodity index tracks a basket of underlying commodities, such as wheat, oil, and gold, with its performance based on the price changes of these commodities.",
                },
              },
              {
                "@type": "Question",
                "name": "Are Commodities Riskier than Stocks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commodities are often more volatile than stocks, bonds, and currencies. Their prices can experience significant fluctuations over short periods.",
                },
              },
              {
                "@type": "Question",
                "name": "What Causes Commodity Prices to Change?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commodity prices are primarily influenced by supply and demand. Other factors include weather, international events, government policies, shifting consumer preferences, and input costs.",
                },
              },
              {
                "@type": "Question",
                "name": "How Can Beginners Trade in Commodities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beginners should understand the risks involved in trading commodity CFDs, practice on demo accounts, and stay informed about events that could affect commodity prices.",
                },
              },
            ],
          }),
        }}
      />
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.primexcapital.com/en"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Trading",
                "item": "https://www.primexcapital.com/en/trading"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Commodities",
                "item": "https://www.primexcapital.com/en/commodities"
              }
            ]
          }),
        }}
      />
      <CommoditiesPage />
    </>
  );
};

export default Commodities;
