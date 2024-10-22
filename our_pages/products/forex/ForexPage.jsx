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

const ForexPage = () => {
  const t = useTranslations("forexProduct");

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
  ];

  const productTickers = [
    {
      tradingSymbol: "PrimeX_REST_RA||EURUSD||EURUSD",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/EURUSD.svg",
      name: "EUR/USD",
      description: "EURO / US Dollar",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||USDJPY||USDJPY",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/USDJPY.svg",
      name: "USD/JPY",
      description: "US Dollar / Yen",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||GBPUSD||GBPUSD",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/GBPUSD.svg",
      name: "GBP/USD",
      description: "Pound / US Dollar",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||USDCHF||USDCHF",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/USDCHF.svg",
      name: "USD/CHF",
      description: "US Dollar / Franc",
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
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/Forex.webp"
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
      <div className="pb-0 sm:pb-8 bg-[#000000]">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default ForexPage;
