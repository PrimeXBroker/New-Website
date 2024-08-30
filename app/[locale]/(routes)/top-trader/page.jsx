"use client";
import Banner from "@/our_pages/top-trader/Banner";
import Requirements from "@/our_pages/top-trader/Requirements";
import TopTraderForm from "@/our_pages/top-trader/TopTraderForm";
import React from "react";
import { useTranslations } from "next-intl";
import Faq from "@/components/instrments/common/Faq";
import Countdown from "@/our_pages/top-trader/Countdown";

const page = () => {
  const t = useTranslations("topTrader");

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
      <Countdown />
      <Requirements />
      <TopTraderForm />
      <div className="bg-accent mt-20">
        <Faq forexFaqs={forexFaqs} />
      </div>
    </>
  );
};

export default page;
