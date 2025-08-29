"use client";
import React from "react";
import Hero from "./Hero";
import AboutECNBroker from "./AboutECNBroker";
import AccountTypes from "./AccountTypes";
import { useTranslations } from "next-intl";
import SignUpECN from "./SignUpECN";
import WhyChooseECN from "./WhyChooseECN";
import DifferentTypesBroker from "./DifferentTypesBroker";
import ecn from "@/public/animations/ecn-broker/ecn.json";
import stp from "@/public/animations/ecn-broker/stp.json";
import marketMaker from "@/public/animations/ecn-broker/market-maker.json";

const ECNBrokerWrapper = () => {
  const t = useTranslations("ecnBroker.accountTypes");
  const b = useTranslations("ecnBroker.differentTypesBroker");

  const accountTypesData = [
    {
      id: 1,
      title: t("acc1.title"),
      subtitle: t("acc1.subtitle"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Standard-Account.webp",
      description: t("acc1.description"),
      btnTxt: t("acc1.btnTxt"),
    },
    {
      id: 2,
      title: t("acc2.title"),
      subtitle: t("acc2.subtitle"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Narrow-Account.webp",
      description: t("acc2.description"),
      btnTxt: t("acc2.btnTxt"),
    },
    {
      id: 3,
      title: t("acc3.title"),
      subtitle: t("acc3.subtitle"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Raw-Account.webp",
      description: t("acc3.description"),
      btnTxt: t("acc3.btnTxt"),
    },
  ];

  const brokerTypesData = [
    {
      id: 1,
      title: b("card1_title"),
      icon: ecn,
      li1: b("card1_li1"),
      li2: b("card1_li2"),
      li3: b("card1_li3"),
    },
    {
      id: 2,
      title: b("card2_title"),
      icon: stp,
      li1: b("card2_li1"),
      li2: b("card2_li2"),
      li3: b("card2_li3"),
    },
    {
      id: 3,
      title: b("card3_title"),
      icon: marketMaker,
      li1: b("card3_li1"),
      li2: b("card3_li2"),
      li3: b("card3_li3"),
    },
  ];

  return (
    <>
      <Hero />
      <AboutECNBroker />
      <WhyChooseECN />
      <DifferentTypesBroker brokerTypes={brokerTypesData} />
      <AccountTypes accounts={accountTypesData} />
      <SignUpECN />
    </>
  );
};

export default ECNBrokerWrapper;
