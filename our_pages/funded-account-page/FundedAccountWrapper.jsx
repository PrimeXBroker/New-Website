"use client";
import React from "react";
import Hero from "./Hero";
import FundedJourney from "./FundedJourney";
import Advantages from "./Advantages";
import TradingParameters from "./TradingParameters";
import InitiativeRegistration from "./InitiativeRegistration";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";

const FundedAccountWrapper = () => {
  const t = useTranslations("fundedAccountPage.faq");

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

  return (
    <>
      <Hero />
      <FundedJourney />
      <Advantages />
      <TradingParameters />
      <InitiativeRegistration />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default FundedAccountWrapper;
