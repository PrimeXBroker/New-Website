import React from "react";
import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";

const AwardsBanner = () => {
  const t = useTranslations("awards.hero");

  return (
    <>
      <Banner
        background="bg-accent pt-[60px] lg:pt-18"
        title={t("title")}
        description={t("description")}
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/Banner.webp"
        imgWidth="150"
        imgHeight="300"
        titleColor="text-secondary"
        descriptionColor="text-secondary"
      />
    </>
  );
};

export default AwardsBanner;
