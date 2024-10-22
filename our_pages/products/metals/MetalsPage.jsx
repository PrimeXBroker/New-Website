"use client";
import Banner from "@/components/products/common/Banner";
import React from "react";
import { useTranslations } from "next-intl";
import Features from "@/components/products/common/Features";
import GetStarted from "@/components/products/common/GetStarted";
import OpenLiveAccount from "@/components/products/common/OpenLiveAccount";
import Strategies from "@/components/products/common/Strategies";
import FAQ from "@/components/NewFaq";
import WhyTrade from "@/components/products/common/WhyTrade";

const MetalsPage = () => {
  const t = useTranslations("metalsProduct");

  const getStarted = [
    {
      id: 1,
      count: t("getStarted.step1_count"),
      title_part1: t("getStarted.step1_title1"),
      title_part2: t("getStarted.step1_title2"),
    },
    {
      id: 2,
      count: t("getStarted.step2_count"),
      title_part1: t("getStarted.step2_title1"),
      title_part2: t("getStarted.step2_title2"),
    },
    {
      id: 3,
      count: t("getStarted.step3_count"),
      title_part1: t("getStarted.step3_title1"),
      title_part2: t("getStarted.step3_title2"),
    },
    {
      id: 4,
      count: t("getStarted.step4_count"),
      title_part1: t("getStarted.step4_title1"),
      title_part2: t("getStarted.step4_title2"),
    },
  ];

  const faqs = [
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

  const productTickers = [
    {
      tradingSymbol: "PrimeX_REST_RA||XAUUSD||XAUUSD",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metal+Icon+-+Gold.svg",
      name: "XAU/USD",
      description: "Gold",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||XAGUSD||XAGUSD",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metal+Icon+-+Silver.svg",
      name: "XAG/USD",
      description: "Silver",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||XPTUSD||XPTUSD",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metal+Icon+-+Platinum.svg",
      name: "XPT/USD",
      description: "Platinum",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||COPPER||COPPER",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metal+Icon+-+Copper.svg",
      name: "HG/USD",
      description: "Copper",
    },
  ];

  return (
    <>
      <Banner
        title_part1={t("hero.title1")}
        title_part2={t("hero.title2")}
        title_part3={t("hero.title3")}
        title_part4={t("hero.title4")}
        title_part5={t("hero.title5")}
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metals.webp"
      />
      <Features />
      <WhyTrade
        title_part1={t("whyTrade.title_part1")}
        title_part2={t("whyTrade.title_part2")}
        description={t("whyTrade.description")}
        productTickers={productTickers}
      />
      <GetStarted
        getStarted={getStarted}
        main_title1={t("getStarted.main_title1")}
        main_title2={t("getStarted.main_title2")}
      />
      <OpenLiveAccount
        title_part1={t("openLiveAccount.title_part1")}
        title_part2={t("openLiveAccount.title_part2")}
        title_part3={t("openLiveAccount.title_part3")}
        title_part4={t("openLiveAccount.title_part4")}
        description={t("openLiveAccount.description")}
      />
      <Strategies />
      <div className="pb-8 bg-[#000000]">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default MetalsPage;
