import React from "react";
import Script from "next/script";
import { createTranslator } from "next-intl";
import HomeWrapper from "@/our_pages/homepage/HomeWrapper";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}`;

  return {
    title: t("home.metaData.title"),
    description: t("home.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("home.metaData.title"),
      description: t("home.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/X-Icon.png",
          width: 1200,
          height: 630,
          alt: t("home.metaData.title"),
        },
      ],
    },
  };
}

export default function Home() {
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
            href={`https://www.primexcapital.com/${item.url}`}
            hreflang={item.lng}
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
