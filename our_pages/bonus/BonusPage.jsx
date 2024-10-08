"use client";
import BonusCalculator from "@/components/BonusCallculator";
import Banner from "@/components/promotions/bonus/Banner";
import BonusForm from "@/components/promotions/bonus/BonusForm";
import MaximizeProfit from "@/components/promotions/bonus/MaximizeProfit";
import PromotionApplicable from "@/components/promotions/bonus/PromotionApplicable";
import Steps from "@/components/promotions/bonus/Steps";
import StepsMobile from "@/components/promotions/bonus/StepsMobile";
import TermsCondition from "@/components/promotions/bonus/TermsCondition";
import { useTranslations } from "next-intl";
import React from "react";
import Faq from "../instruments/common/Faq";

const BonusPage = () => {
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
      <div className="mt-20">
        <Steps />
      </div>
      <div className="mt-20">
        <StepsMobile />
      </div>
      <PromotionApplicable />
      <BonusForm />
      <BonusCalculator />
      <div className="mt-20">
        <MaximizeProfit />
      </div>
      <TermsCondition />
      <Faq forexFaqs={forexFaqs} />
    </>
  );
};

export default BonusPage;
