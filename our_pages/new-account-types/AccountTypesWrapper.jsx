"use client";
import React from "react";
import Banner from "./Banner";
import { useTranslations } from "next-intl";
import PartnerFeatures from "@/components/partnership/PartnerFeatures";
import Testimonials from "../new-home/Testimonials";
import AccountTypes from "./AccountTypes";
import AccountTypesPricingTableMobile from "./AccountTypesPricingTableMobile";
import FAQ from "@/components/NewFaq";

const AccountTypesWrapper = () => {
  const t = useTranslations("newAccountTypes.accountTypesBenefits");
  const a = useTranslations("newAccountTypes.accountTypes");
  const f = useTranslations("newAccountTypes");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/7+Customer+Support.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/MT5+Platform.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/Optimal+Trading+Conditions.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/Primex+academy.svg",
    },
  ];

  const featureTitle = {
    title1: t("main_title1"),
    title2: t("main_title2"),
  };

  const accountTypesData = [
    {
      id: 1,
      title: a("acc1.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Standard+Account.svg",
      description: a("acc1.description"),
      btnTxt: a("acc1.btnTxt"),
    },
    {
      id: 2,
      title: a("acc2.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Narrow+Account.svg",
      description: a("acc2.description"),
      btnTxt: a("acc2.btnTxt"),
    },
    {
      id: 3,
      title: a("acc3.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Raw+Account.svg",
      description: a("acc3.description"),
      btnTxt: a("acc3.btnTxt"),
    },
  ];

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
  ];

  return (
    <>
      <Banner />
      <AccountTypes accounts={accountTypesData} />
      <div className="block lg:hidden">
        <AccountTypesPricingTableMobile />
      </div>
      <PartnerFeatures features={features} featureTitle={featureTitle} />
      <Testimonials />
      <FAQ faqs={faqs} />
    </>
  );
};

export default AccountTypesWrapper;
