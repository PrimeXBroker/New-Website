"use client";
import Banner from "@/our_pages/instruments/common/Banner";
import Faq from "@/our_pages/instruments/common/Faq";
import Featured from "@/our_pages/instruments/common/Featured";
import ReadyToDive from "@/our_pages/instruments/common/ReadyToDive";
import Steps from "@/our_pages/instruments/common/Steps";
import Strategies from "@/our_pages/instruments/common/Strategies";
import WhyTrade from "@/our_pages/instruments/common/WhyTrade";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Metals = () => {
  const t = useTranslations("metals");
  const [icon1Hovered, setIcon1Hovered] = useState(false);

  const handleIcon1Enter = () => {
    setIcon1Hovered(true);
  };
  const handleIcon1Leave = () => {
    setIcon1Hovered(false);
  };
  const cardsData = [
    {
      title: t("keyFeatures.feature_1_title"),
      description: t("keyFeatures.feature_1_desc"),
      imgUrl: "/images/instruments/metals/metals_options.svg",
      imgHoverUrl: "/images/instruments/metals/metals_options_hover.svg",
    },
    {
      title: t("keyFeatures.feature_2_title"),
      description: t("keyFeatures.feature_2_desc"),
      imgUrl: "/images/instruments/forex/tight_spreads.svg",
      imgHoverUrl: "/images/instruments/forex/tight_spreads_hover.svg",
    },
    {
      title: t("keyFeatures.feature_3_title"),
      description: t("keyFeatures.feature_3_desc"),
      imgUrl: "/images/instruments/metals/global_access.svg",
      imgHoverUrl: "/images/instruments/metals/global_access_hover.svg",
    },
    {
      title: t("keyFeatures.feature_4_title"),
      description: t("keyFeatures.feature_4_desc"),
      imgUrl: "/images/instruments/metals/flexible.svg",
      imgHoverUrl: "/images/instruments/metals/flexible_hover.svg",
    },
  ];
  const tipsData = [
    {
      title: t("strategies.tip_1_title"),
      description: t("strategies.tip_1_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip1.svg",
    },
    {
      title: t("strategies.tip_2_title"),
      description: t("strategies.tip_2_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip2.svg",
    },
    {
      title: t("strategies.tip_3_title"),
      description: t("strategies.tip_3_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip3.svg",
    },
  ];
  const forexFaqs = [
    {
      key: 1,
      question: t("faq.question_1"),
      answer: t("faq.answer_1"),
    },
    {
      key: 2,
      question: t("faq.question_2"),
      answer: t("faq.answer_2"),
    },
    {
      key: 3,
      question: t("faq.question_3"),
      answer: t("faq.answer_3"),
    },
    {
      key: 4,
      question: t("faq.question_4"),
      answer: t("faq.answer_4"),
    },
    {
      key: 5,
      question: t("faq.question_5"),
      answer: t("faq.answer_5"),
    },
  ];
  return (
    <>
      <Banner
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/Banner.webp"
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <Featured
        cardsData={cardsData}
        title={t("keyFeatures.title")}
        icon1Hovered={icon1Hovered}
        handleIcon1Enter={handleIcon1Enter}
        handleIcon1Leave={handleIcon1Leave}
      />
      <WhyTrade
        title={t("whyTrade.title")}
        description={t("whyTrade.description")}
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/why_metals.webp"
      />
      <Steps title={t("steps.title")} />
      <Strategies tipsData={tipsData} />
      <ReadyToDive
        title={t("readyToDive.title")}
        description={t("readyToDive.description")}
      />
      <Faq forexFaqs={forexFaqs} />
    </>
  );
};

export default Metals;
