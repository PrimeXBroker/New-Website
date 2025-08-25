import BlogsDetail from "@/our_pages/education/academy/BlogsDetail";
import React from "react";
import axios from "axios";

export async function generateMetadata({ params: { locale, slug } }) {
  try {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/one/all-blog/${slug}`
    );
    const blo = res?.data?.data;
    const url =
      locale !== "en"
        ? `https://primexcapital.com/${locale}/${slug}`
        : `https://primexcapital.com/${slug}`;

    return {
      title:
        locale === "ar"
          ? blo?.titleAr
          : locale === "ku"
          ? blo?.titleKd
          : locale === "pt"
          ? blo?.titlePt
          : blo?.titleEn,
      description:
        locale === "ar"
          ? blo?.metaDescriptionAr
          : locale === "ku"
          ? blo?.metaDescriptionKd
          : locale === "pt"
          ? blo?.metaDescriptionPt
          : blo?.metaDescriptionEn,
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "website",
        locale: locale,
        url: url,
        title:
          locale === "ar"
            ? blo?.titleAr
            : locale === "ku"
            ? blo?.titleKd
            : locale === "pt"
            ? blo?.titlePt
            : blo?.titleEn,
        description:
          locale === "ar"
            ? blo?.metaDescriptionAr
            : locale === "ku"
            ? blo?.metaDescriptionKd
            : locale === "pt"
            ? blo?.metaDescriptionPt
            : blo?.metaDescriptionEn,
        images: [
          {
            url:
              locale === "ar"
                ? blo?.imageAr || blo?.image
                : locale === "ku"
                ? blo?.imageKd || blo?.image
                : locale === "pt"
                ? blo?.imagePt || blo?.image
                : blo?.image,
            width: 1200,
            height: 630,
            alt: blo?.altTag,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

const page = () => {
  return <BlogsDetail />;
};

export default page;
