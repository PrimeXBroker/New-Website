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

const Commodities = () => {
  const t = useTranslations("commodities");
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
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip1.svg",
    },
    {
      title: t("strategies.tip_2_title"),
      description: t("strategies.tip_2_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip2.svg",
    },
    {
      title: t("strategies.tip_3_title"),
      description: t("strategies.tip_3_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip3.svg",
    },
  ];
  const forexFaqs = [
    {
      key: 1,
      question: "What Does it Mean to Trade an Index?",
      answer:
        "Trading an index involves buying or selling a specific stock market index, which measures the performance of a group of stocks within a particular market.",
    },
    {
      key: 2,
      question: "Can I Profit from Index Trading?",
      answer:
        "Yes, you can profit from index trading, but there is also the potential for losses, similar to trading other instruments.",
    },
    {
      key: 3,
      question: "Which Are the Most Popular Stock Indices?",
      answer:
        "Popular stock indices include the S&P 500, Nasdaq, Dow Jones, FTSE 100, Nifty 50, and Nikkei 225.",
    },
    {
      key: 4,
      question: "What Moves the Index Price?",
      answer:
        "Index prices are influenced by the price changes of the index's constituent stocks.",
    },
    {
      key: 5,
      question: "What is the Best Time to Trade Indices?",
      answer:
        "The best time to trade indices is during the respective market's trading hours. For example, trade the Nasdaq when the US markets are open. Whether to trade stocks or indices depends on an individual's risk appetite and financial goals. There is no universal answer.",
    },
  ];
  return (
    <>
      <Banner
        title={t("hero.title")}
        description={t("hero.description")}
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/Banner.webp"
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
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/why_commodities.webp"
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

export default Commodities;
