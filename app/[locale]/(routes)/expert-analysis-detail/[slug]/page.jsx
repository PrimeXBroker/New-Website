import React from "react";
import ExpertAnalysisDetailWrapper from "@/our_pages/expert-analysis-detail/ExpertAnalysisDetailWrapper";
import axios from "axios";

export async function generateMetadata({ params: { locale, slug } }) {
  try {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/one/market-news/${slug}`
    );

    const blo = res?.data?.data;
    const url =
      locale !== "en"
        ? `https://primexcapital.com/${locale}/${slug}`
        : `https://primexcapital.com/${slug}`;

    return {
      title: locale === "ar" ? blo?.titleAr : blo?.titleEn,
      description: locale === "ar" ? blo?.description : blo?.description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "website",
        locale: locale,
        url: url,
        title: locale === "ar" ? blo?.titleAr : blo?.titleEn,
        description: locale === "ar" ? blo?.description : blo?.description,
        images: [
          {
            url: blo?.image,
            width: 1200,
            height: 630,
            alt: locale === "ar" ? blo?.titleAr : blo?.titleEn,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);

    return {
      title: "Default Title",
      description: "Default Description",
      alternates: {
        canonical:
          locale !== "en"
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`
            : `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      },
      openGraph: {
        type: "website",
        locale: locale,
        url:
          locale !== "en"
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`
            : `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        title: "Default Title",
        description: "Default Description",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/default-image.jpg`,
            width: 1200,
            height: 627,
            alt: "Default Alt Text",
          },
        ],
      },
    };
  }
}

const page = () => {
  return (
    <>
      <ExpertAnalysisDetailWrapper />
    </>
  );
};

export default page;
