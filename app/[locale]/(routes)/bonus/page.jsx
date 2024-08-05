"use client";
import Banner from "@/our_pages/bonus/Banner";
import BonusForm from "@/our_pages/bonus/BonusForm";
import MaximizeProfit from "@/our_pages/bonus/MaximizeProfit";
import PremiumAdvantages from "@/our_pages/bonus/PremiumAdvantages";
import PromotionApplicable from "@/our_pages/bonus/PromotionApplicable";
import Steps from "@/our_pages/bonus/Steps";
import StepsMobile from "@/our_pages/bonus/StepsMobile";
import TermsCondition from "@/our_pages/bonus/TermsCondition";
import Faq from "@/our_pages/instruments/common/Faq";
import React from "react";
import { useTranslations } from "next-intl";
import BonusCalculator from "@/components/BonusCallculator";

const page = () => {
  const t = useTranslations("bonus.faq");

  const forexFaqs = [
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
      <PromotionApplicable />
      <PremiumAdvantages /> 
      <BonusForm />
      <BonusCalculator/>
      <MaximizeProfit />
      <TermsCondition />
      <Faq forexFaqs={forexFaqs} />
    </>
  );
};

export default page;
