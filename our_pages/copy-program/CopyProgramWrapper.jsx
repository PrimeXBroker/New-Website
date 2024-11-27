"use client";
import React, { useRef } from "react";
import Banner from "./Banner";
import AboutCopyProgram from "./AboutCopyProgram";
import Benefits from "./Benefits";
import Steps from "./Steps";
import FAQ from "@/components/NewFaq";
import { useTranslations, useLocale } from "next-intl";
import CopyProgramFormWrapper from "./CopyProgramFormWrapper";
import PrimeTrade from "./PrimeTrade";
import Features from "./Features";
import FeaturesMobile from "./FeaturesMobile";
import BestPerformanceWidget from "./BestPerformanceWidget";
import BestMonthWidget from "./BestMonthWidget";
import LowestDDWidget from "./LowestDDWidget";
import HighProvidersWidget from "./HighProvidersWidget";

const CopyProgramWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram");
  const iframeBestPerformanceRef = useRef(null);
  const iframeBestMonthRef = useRef(null);
  const iframeLowestDDRef = useRef(null);
  const iframeHigherProviderRef = useRef(null);

  const faqs = [
    // {
    //   key: 1,
    //   question: t("faq.question_1"),
    //   answer: t("faq.answer_1"),
    // },
    // {
    //   key: 2,
    //   question: t("faq.question_2"),
    //   answer: t("faq.answer_2"),
    // },
    // {
    //   key: 3,
    //   question: t("faq.question_3"),
    //   answer: t("faq.answer_3"),
    // },
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
    {
      key: 6,
      question: t("faq.question_6"),
      answer: t("faq.answer_6"),
    },
    {
      key: 7,
      question: t("faq.question_7"),
      answer: t("faq.answer_7"),
    },
    {
      key: 8,
      question: t("faq.question_8"),
      answer: t("faq.answer_8"),
    },
    {
      key: 9,
      question: t("faq.question_9"),
      answer: t("faq.answer_9"),
    },
  ];

  return (
    <>
      <Banner />
      <div className="hidden lg:block">
        <Features />
      </div>
      <div className="block lg:hidden">
        <FeaturesMobile />
      </div>
      <AboutCopyProgram />
      <BestPerformanceWidget
        iframeBestPerformanceRef={iframeBestPerformanceRef}
      />
      <BestMonthWidget iframeBestMonthRef={iframeBestMonthRef} />
      <LowestDDWidget iframeLowestDDRef={iframeLowestDDRef} />
      <HighProvidersWidget iframeHigherProviderRef={iframeHigherProviderRef} />
      <Benefits />
      <Steps />
      <PrimeTrade />
      <FAQ faqs={faqs} />
    </>
  );
};

export default CopyProgramWrapper;
