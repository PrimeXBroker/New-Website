"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Banner from "./Banner";
import PartnerFeatures from "@/components/partnership/PartnerFeatures";
import EasySteps from "@/components/partnership/EasySteps";
import EasyStepsMobile from "@/components/partnership/MobileEasySteps";
import RegionalFormWrapper from "./RegionalFormWrapper";
import ClientSatisfaction from "../ib-program/ClientSatisfaction";

const RegionalPartnershipWrapper = () => {
  const t = useTranslations("regionalPartnership.regionalBenefits");
  const s = useTranslations("regionalPartnership.easySteps");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Lucrative++Rebate+Structure.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Lucrative++Rebate+Structure.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Multi-tiered++Commissions.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Multi-tiered++Commissions.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Comprehensive++Support+Suite.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/24+7++Expert+Support.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Administrative++Assistance.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Rental+Administrative++Assistance.svg",
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Offline++Marketing+Resources.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Offline++Marketing+Resources.svg",
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Employee++Compensation+Support.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Employee++Compensation+Support.svg",
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
    step1_img_dark:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
    step1_img_light:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Register.svg",
    step2_title: s("step2_title"),
    step2_desc: s("step2_desc"),
    step2_img_dark:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
    step2_img_light:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Earn.svg",
    step3_title: s("step3_title"),
    step3_desc: s("step3_desc"),
    step3_img_dark:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
    step3_img_light:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Promote.svg",
    count1: s("step1_count"),
    count2: s("step2_count"),
    count3: s("step3_count"),
  };

  const easyStepsMobile = [
    {
      step_title: s("step1_title"),
      step_desc: s("step1_desc"),
      step_img_dark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
      step_img_light:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Register.svg",
      count: s("step1_count"),
    },
    {
      step_title: s("step2_title"),
      step_desc: s("step2_desc"),
      step_img_dark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
      step_img_light:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Earn.svg",
      count: s("step2_count"),
    },
    {
      step_title: s("step3_title"),
      step_desc: s("step3_desc"),
      step_img_dark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
      step_img_light:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Promote.svg",
      count: s("step3_count"),
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
      <RegionalFormWrapper />
      <ClientSatisfaction />
    </>
  );
};

export default RegionalPartnershipWrapper;
