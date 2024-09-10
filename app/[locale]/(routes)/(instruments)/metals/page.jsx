import MetalsPage from "@/our_pages/instruments/metals/MetalsPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/metals`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/metals`;

  return {
    title: t("metals.metaData.title"),
    description: t("metals.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("metals.metaData.title"),
      description: t("metals.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("metals.metaData.title"),
        },
      ],
    },
  };
}
const Metals = () => {
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
                "name": "Why Invest in Precious Metals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Investing in precious metals provides diversification, serves as a hedge against inflation and currency devaluation, and offers the potential for significant returns during market volatility.",
                },
              },
              {
                "@type": "Question",
                "name": "How Can I Start Trading Precious Metals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To begin trading precious metals, open a trading account with a broker, research the market, choose your preferred metals, and place your trades based on market analysis.",
                },
              },
              {
                "@type": "Question",
                "name": "What Factors Influence Precious Metal Prices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Prices of precious metals are influenced by factors such as supply and demand, geopolitical events, inflation rates, and changes in currency values.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the Difference Between Physical and Paper Precious Metals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Physical precious metals refer to tangible assets like gold bars and silver coins, whereas paper precious metals involve financial instruments like ETFs and futures contracts that track the value of these metals.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the Role of Precious Metals in Portfolio Diversification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Precious metals can enhance portfolio diversification by providing a non-correlated asset class, reducing overall risk, and potentially improving returns during economic downturns.",
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
                "name": "Metals",
                "item": "https://www.primexcapital.com/en/metals"
              }
            ]
          }),
        }}
      />
      <MetalsPage />
    </>
  );
};

export default Metals;
