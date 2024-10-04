"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Banner from "./Banner";
import PartnerFeatures from "@/components/partnership/PartnerFeatures";
import EasySteps from "@/components/partnership/EasySteps";
import GreyLabelFormWrapper from "./GreyLabelFormWrapper";
import ClientSatisfaction from "../ib/ClientSatisfaction";
import EasyStepsMobile from "@/components/partnership/MobileEasySteps";

const GreyLabelWrapper = () => {
  const t = useTranslations("greyLabel.greyLabelBenefits");
  const s = useTranslations("greyLabel.easySteps");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Favorable++Rebate+Structure.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Offline+Marketing+Support+New.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/7++Expert+Support.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Administrative++Assistance.svg",
    },
  ];

  const featureTitle = {
    title1: t("main_title1"),
    title2: t("main_title2"),
  };

  const easySteps = {
    title1: s("title1"),
    title2: s("title2"),
    step1_title: s("step1_title"),
    step1_desc: s("step1_desc"),
    step1_img:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
    step2_title: s("step2_title"),
    step2_desc: s("step2_desc"),
    step2_img:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
    step3_title: s("step3_title"),
    step3_desc: s("step3_desc"),
    step3_img:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
  };

  const easyStepsMobile = [
    {
      step_title: s("step1_title"),
      step_desc: s("step1_desc"),
      step_img:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
    },
    {
      step_title: s("step2_title"),
      step_desc: s("step2_desc"),
      step_img:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
    },
    {
      step_title: s("step3_title"),
      step_desc: s("step3_desc"),
      step_img:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
    },
  ];

  return (
    <>
      <Banner />
      <PartnerFeatures features={features} featureTitle={featureTitle} />
      <div className="hidden sm:block">
        <EasySteps easySteps={easySteps} />
      </div>
      <div className="block sm:hidden">
        <EasyStepsMobile
          easyStepsMobile={easyStepsMobile}
          easySteps={easySteps}
        />
      </div>
      <GreyLabelFormWrapper />
      <ClientSatisfaction />
    </>
  );
};

export default GreyLabelWrapper;
