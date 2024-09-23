"use client";
import Banner from "@/our_pages/demo-account/Banner";
import FundedAccount from "@/our_pages/demo-account/FundedAccount";
import SignUp from "@/our_pages/demo-account/SignUp";
import React from "react";
import Faq from "@/components/instrments/common/Faq";
import { useTranslations } from "next-intl";
import ParticipateForm from "@/our_pages/demo-account/ParticipateForm";
import CompetitionWidget from "./CompetitionWidget";
import DemoAccountTC from "./DemoAccountTC";

const DemoAccountWrapper = () => {
  const t = useTranslations("demoAccount");

  const forexFaqs = [
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
      <div className="relative z-10 -mt-52 sm:-mt-20">
        <FundedAccount />
      </div>
      <CompetitionWidget />
      <ParticipateForm />
      <SignUp />
      <Faq forexFaqs={forexFaqs} />
      <DemoAccountTC />
    </div>
  );
};

export default DemoAccountWrapper;
