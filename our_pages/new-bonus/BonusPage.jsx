"use client";
import FAQ from "@/components/NewFaq";
import Banner from "@/components/promotions/new-bonus/Banner";
import BonusCalculator from "@/components/promotions/new-bonus/BonusCalculator";
import BonusFormWrapper from "@/components/promotions/new-bonus/BonusFormWrapper";
import MaximizeProfit from "@/components/promotions/new-bonus/MaximizeProfit";
import PromotionApplicable from "@/components/promotions/new-bonus/PromotionApplicable";
import Steps from "@/components/promotions/new-bonus/Steps";
import StepsMobile from "@/components/promotions/new-bonus/StepsMobile";
import TermsCondition from "@/components/promotions/new-bonus/TermsCondition";
import { useTranslations } from "next-intl";
import React from "react";

const BonusPage = () => {
  const t = useTranslations("newBonus.faq");

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
