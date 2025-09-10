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
import WidgetCards from "./WidgetCards";
import BestPerformanceWidget from "./Widgets/best-performance/BestPerformanceWidget";

const CopyProgramWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram");

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
      <BestPerformanceWidget />
      {/* <WidgetCards /> */}
      <Benefits />
      <Steps />
      <PrimeTrade />
      <CopyProgramFormWrapper />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default CopyProgramWrapper;
