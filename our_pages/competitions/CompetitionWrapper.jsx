"use client";
import React from "react";
import WhyBonusIconic from "../promotions/new-year-bonus/WhyBonusIconic";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";
import Banner from "./Banner";
import CompetitionRules from "./CompetitionRules";
import ParticipateSteps from "./ParticipateSteps";
import PrizeDistribution from "./PrizeDistribution";

const CompetitionWrapper = () => {
  const f = useTranslations("competitions");

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
    {
      key: 8,
      question: f("faq.question_8"),
      answer: f("faq.answer_8"),
    },
    {
      key: 9,
      question: f("faq.question_9"),
      answer: f("faq.answer_9"),
    },
    {
      key: 10,
      question: f("faq.question_10"),
      answer: f("faq.answer_10"),
    },
    {
      key: 11,
      question: f("faq.question_11"),
      answer: f("faq.answer_11"),
    },
    {
      key: 12,
      question: f("faq.question_12"),
      answer: f("faq.answer_12"),
    },
  ];

  return (
    <>
      <Banner />
      <PrizeDistribution />
      <ParticipateSteps />
      <CompetitionRules />
      <FAQ faqs={faqs} />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <WhyBonusIconic />
      </div>
    </>
  );
};

export default CompetitionWrapper;
