"use client";
import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Greede from "./Greede";
import Discount from "./Discount";
import Choose from "./Choose";
import Offer from "./Offer";
import FAQ from "@/components/NewFaq";
import { useTranslations, useLocale } from "next-intl";


const FundedAccountWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount");
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
    {
      key: 6,
      question: t("faq.question_6"),
      answer: t("faq.answer_6"),
    },
    {
      key: 7,
      question: t("faq.question_7"),
      answer: t("faq.answer_7"),
    }
  ];

  return (
    <>
      <Banner1 />
      <Greede />
      <Banner2 />
      <Discount />
      <Choose />
      <Offer />

      <FAQ faqs={faqs} />
    </>
  );
};

export default FundedAccountWrapper;
