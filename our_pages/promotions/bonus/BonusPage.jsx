"use client";
import FAQ from "@/components/NewFaq";
import Banner from "./Banner";
import BonusCalculator from "./BonusCalculator";
import BonusFormWrapper from "./BonusFormWrapper";
import MaximizeProfit from "./MaximizeProfit";
import PromotionApplicable from "./PromotionApplicable";
import Steps from "./Steps";
import StepsMobile from "./StepsMobile";
import TermsCondition from "./TermsCondition";
import { useTranslations } from "next-intl";
import React from "react";

const BonusPage = () => {
  const t = useTranslations("bonus.faq");

  const faqs = [
    {
      key: 1,
      question: t("question_1"),
      answer: t("answer_1"),
    },
    {
      key: 2,
      question: t("question_2"),
      answer: t("answer_2"),
    },
    {
      key: 3,
      question: t("question_3"),
      answer: t("answer_3"),
    },
    {
      key: 4,
      question: t("question_4"),
      answer: t("answer_4"),
    },
    {
      key: 5,
      question: t("question_5"),
      answer: t("answer_5"),
    },
    {
      key: 6,
      question: t("question_6"),
      answer: t("answer_6"),
    },
  ];
  return (
    <>
      <Banner />
      <Steps />
      <StepsMobile />
      <BonusFormWrapper />
      <PromotionApplicable />
      <BonusCalculator />
      <MaximizeProfit />
      <TermsCondition />
      <FAQ faqs={faqs} />
    </>
  );
};

export default BonusPage;
