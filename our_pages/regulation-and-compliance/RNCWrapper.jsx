"use client";
import React from "react";
import Hero from "./Hero";
import TradeSecurelySCA from "./TradeSecurelySCA";
import TradeSecurelyFSC from "./TradeSecurelyFSC";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";

const RNCWrapper = () => {
  const f = useTranslations("regulationCompliance");

  const faqs = [
    {
      key: 1,
      question: f("faq.question_1"),
      answer: f("faq.answer_1"),
    },
    {
      key: 2,
      question: f("faq.question_2"),
      answer: f("faq.answer_2"),
    },
    {
      key: 3,
      question: f("faq.question_3"),
      answer: f("faq.answer_3"),
    },
    {
      key: 4,
      question: f("faq.question_4"),
      answer: f("faq.answer_4"),
    },
    {
      key: 5,
      question: f("faq.question_5"),
      answer: f("faq.answer_5"),
    },
  ];
  return (
    <>
      <Hero />
      <TradeSecurelySCA />
      <TradeSecurelyFSC />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default RNCWrapper;
