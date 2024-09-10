import StocksPage from "@/our_pages/instruments/stocks/StocksPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/stocks`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/stocks`;

  return {
    title: t("stocks.metaData.title"),
    description: t("stocks.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("stocks.metaData.title"),
      description: t("stocks.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("stocks.metaData.title"),
        },
      ],
    },
  };
}

const Stocks = () => {
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
                "name": "What are Stock CFDs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stocks CFDs allow traders to speculate on the price movements of shares without owning the actual shares. They enable trading in both rising and falling markets and are leveraged products, which can amplify both potential profits and losses.",
                },
              },
              {
                "@type": "Question",
                "name": "What are some effective stock trading strategies for beginners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common stock trading strategies for beginners include active trading, day trading, position trading, swing trading, and scalping. It's crucial to identify and time market opportunities and use stop loss orders to minimize losses.",
                },
              },
              {
                "@type": "Question",
                "name": "Where can I open a trading account to trade stock CFDs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To trade CFD stocks online, you can open a trading account with us and choose to trade after researching companies and industries, and then open a position based on your analysis.",
                },
              },
              {
                "@type": "Question",
                "name": "Is Trading Share CFDs Different from Buying Shares in a Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, trading share CFDs differs from buying shares as CFDs are leveraged and don't involve ownership of the stock. When you buy shares, you own a part of the company, while trading CFDs involves speculating on price movements with a smaller initial investment.",
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
                "name": "Stocks",
                "item": "https://www.primexcapital.com/en/stocks"
              }
            ]
          }),
        }}
      />
      <StocksPage />
    </>
  );
};

export default Stocks;
