"use client";
import Banner from "@/our_pages/top-trader/Banner";
import Requirements from "@/our_pages/top-trader/Requirements";
import TopTraderForm from "@/our_pages/top-trader/TopTraderForm";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import Faq from "@/components/instrments/common/Faq";
import Countdown from "@/our_pages/top-trader/Countdown";

const page = () => {
  const t = useTranslations("topTrader");
  const formRef = useRef(null);

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
    <>
      <Banner formRef={formRef} />
      <Countdown />
      <Requirements />
      <div ref={formRef}>
        <TopTraderForm />
      </div>
      <div className="bg-accent mt-20">
        <Faq forexFaqs={forexFaqs} />
      </div>
    </>
  );
};

export default page;
