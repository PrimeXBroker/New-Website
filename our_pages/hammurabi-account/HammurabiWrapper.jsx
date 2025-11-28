"use client";
import React from "react";
import Hero from "./Hero";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";
import OpenAccount from "./OpenAccount";
import WhyChooseHammurabi from "./WhyChooseHammurabi";

const HammurabiWrapper = () => {
  const f = useTranslations("hammurabiAccount");

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
      <WhyChooseHammurabi />
      <FAQ faqs={faqs} />
      <OpenAccount />
    </>
  );
};

export default HammurabiWrapper;
