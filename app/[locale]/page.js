import Script from "next/script";
import { createTranslator } from "next-intl";
import { GetLocation } from "@/components/GetLocation";
import HomeWrapper from "@/our_pages/homepage/HomeWrapper";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  const userCountry = await GetLocation();
  const isInUAE = userCountry === "AE";

  const descriptions = {
    en: `Trade Forex, stocks, indices, CFDs, and metals online${
      isInUAE ? " UAE" : ""
    } with PrimeX Capital. Access top trading tools and insights. Learn more and start trading today!`,
    ar: `تداول الفوركس والأسهم والمؤشرات وعقود الفروقات والمعادن عبر الإنترنت${
      isInUAE ? " في الإمارات" : ""
    } مع برايم اكس كابيتال. احصل على أفضل الأدوات المالية والرؤى. تعلم المزيد وابدأ التداول اليوم!`,
    cn: `通过PrimeX Capital在线交易外汇、股票、指数、差价合约和金属${
      isInUAE ? " UAE" : ""
    }。获取顶级交易工具和见解。了解更多并立即开始交易！`,
  };

  const description = descriptions[locale] || descriptions["en"];

  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: t("home.metaData.title"),
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("home.metaData.title"),
      description: description,
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/World+map+hero+bg.webp",
          width: 1200,
          height: 630,
          alt: t("home.metaData.title"),
        },
      ],
    },
  };
}

export default function Home({ params: { locale } }) {
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
              href={`https://www.primexcapital.com/${item.url}`}
            />
          ))}
      </head>
      <Script
        type="application/ld+json"
        id="organization-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PrimeX Capital",
            url: "https://www.primexcapital.com/en",
            logo: "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            description:
              "At PrimeX Capital, we are dedicated to transforming the trading experience...",
            foundingDate: "2022",
            founder: {
              "@type": "Person",
              name: "Ahmed Alarji",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@primexcapital.com",
              telephone: "+971 800 774639",
              contactType: "Customer Support",
              areaServed: "UAE",
              availableLanguage: ["English", "Arabic"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Westburry Office Tower...",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "United Arab Emirates",
            },
            sameAs: [
              "https://www.facebook.com/PrimeX.Capital.En",
              "https://x.com/PrimeXCapital",
              "https://www.instagram.com/primexcapital.en/",
              "https://www.youtube.com/@primex.capital",
            ],
          }),
        }}
      />
      <HomeWrapper />
    </>
  );
}
