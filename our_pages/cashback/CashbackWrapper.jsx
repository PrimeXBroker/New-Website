"use client";
import React from "react";
import TermsCondition from "./TermsCondition";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";
import CashbackReward from "./CashbackReward";
import TradingNow from "./TradingNow";
import TradeMore from "./TradeMore";
import RewardAutomatically from "./RewardAutomatically";
import Hero from "./Hero";

const CashbackWrapper = () => {
  const f = useTranslations("cashback");

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

    {
      key: 6,
      question: f("faq.question_6"),
      answer: f("faq.answer_6"),
    },
    {
      key: 7,
      question: f("faq.question_7"),
      answer: f("faq.answer_7"),
    },
  ];

  return (
    <>
      <Hero />
      <RewardAutomatically />
      <TradeMore />
      <TermsCondition />
      <CashbackReward />
      <FAQ faqs={faqs} />
      <TradingNow />
    </>
  );
};

export default CashbackWrapper;
