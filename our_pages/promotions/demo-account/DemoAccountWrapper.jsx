"use client";
import Banner from "./Banner";
import FundedAccount from "./FundedAccount";
import SignUp from "./SignUp";
import React from "react";
import { useTranslations } from "next-intl";
import ParticipateForm from "./ParticipateForm";
import CompetitionWidget from "./CompetitionWidget";
import DemoAccountTC from "./DemoAccountTC";
import FAQ from "@/components/NewFaq";

const DemoAccountWrapper = () => {
  const t = useTranslations("demoAccount");

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

  return (
    <div className="relative">
      <Banner />
      <FundedAccount />
      <CompetitionWidget />
      <ParticipateForm />
      <SignUp />
      <FAQ faqs={faqs} />
      <DemoAccountTC />
    </div>
  );
};

export default DemoAccountWrapper;
