"use client";
import React from "react";
import Hero from "./Hero";
import FAQ from "@/components/NewFaq";
import { useTranslations } from "next-intl";
import OpenAccount from "./OpenAccount";
import WhyChooseHammurabi from "./WhyChooseHammurabi";
import PartnerFeatures from "@/components/partnership/PartnerFeatures";
import customerSupport from "@/public/animations/account-types/customer-support.json";
import optimalTradingConditions from "@/public/animations/account-types/optimal-trading-conditions.json";
import primexAcademy from "@/public/animations/account-types/primex-academy.json";

const HammurabiWrapper = () => {
  const f = useTranslations("hammurabiAccount");
  const t = useTranslations("accountTypes.accountTypesBenefits");

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

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: customerSupport,
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/MT5+Platform.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/MT5+Platform.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: optimalTradingConditions,
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: primexAcademy,
    },
  ];

  const featureTitle = {
    title1: t("main_title1"),
    title2: t("main_title2"),
  };

  return (
    <>
      <Hero />
      <WhyChooseHammurabi />
      <PartnerFeatures features={features} featureTitle={featureTitle} />
      <FAQ faqs={faqs} />
      <OpenAccount />
    </>
  );
};

export default HammurabiWrapper;
