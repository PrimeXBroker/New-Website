"use client";
import React from "react";
import Banner from "./Banner";
import AboutCopyProgram from "./AboutCopyProgram";
import Benefits from "./Benefits";
import Steps from "./Steps";
import FAQ from "@/components/NewFaq";
import { useTranslations, useLocale } from "next-intl";
import CopyProgramFormWrapper from "./CopyProgramFormWrapper";

const CopyProgramWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram");

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
      <AboutCopyProgram />
      <Benefits />
      <Steps />
      <CopyProgramFormWrapper />
      <FAQ faqs={faqs} />
    </>
  );
};

export default CopyProgramWrapper;
