"use client";
import Banner from "@/our_pages/demo-account/Banner";
import FundedAccount from "@/our_pages/demo-account/FundedAccount";
import SignUp from "@/our_pages/demo-account/SignUp";
import React from "react";
import Faq from "@/components/instrments/common/Faq";
import { useTranslations } from "next-intl";
import ParticipateForm from "@/our_pages/demo-account/ParticipateForm";

const page = () => {
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
    {
      key: 5,
      question: t("faq.question_5"),
      answer: t("faq.answer_5"),
    },
  ];

  return (
    <>
      <Banner />
      <FundedAccount />
      <ParticipateForm />
      <SignUp />
      <Faq forexFaqs={forexFaqs} />
    </>
  );
};

export default page;
