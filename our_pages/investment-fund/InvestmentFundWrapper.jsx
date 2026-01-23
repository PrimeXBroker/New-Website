"use client";
import React from "react";
import Hero from "./Hero";
import AboutInvestmentFund from "./AboutInvestmentFund";
import WhyChoose from "./WhyChoose";
import Steps from "./Steps";
import PartnershipProgram from "../homepage/PartnershipProgram";
import { useTranslations } from "next-intl";
import Support from "../homepage/Support";
import ClientReviews from "./ClientsReviews";
import Faqs from "./Faqs";

const InvestmentFundWrapper = () => {
  const f = useTranslations("investmentFunds");

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
      <AboutInvestmentFund />
      <WhyChoose />
      <Steps />
      <PartnershipProgram />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <Faqs />
      </div>
      <ClientReviews />
      <Support />
    </>
  );
};

export default InvestmentFundWrapper;
