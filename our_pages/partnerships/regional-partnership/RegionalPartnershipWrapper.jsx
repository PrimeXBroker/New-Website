"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Banner from "./Banner";
import PartnerFeatures from "@/components/partnership/PartnerFeatures";
import EasySteps from "@/components/partnership/EasySteps";
import EasyStepsMobile from "@/components/partnership/MobileEasySteps";
import RegionalFormWrapper from "./RegionalFormWrapper";
import ClientSatisfaction from "../ib-program/ClientSatisfaction";
import lucrativeRebateStructure from "@/public/animations/regional-partnership/lucrative-rebate-structure.json";
import multiTieredCommissions from "@/public/animations/regional-partnership/multi-tiered-commissions.json";
import expertSupport from "@/public/animations/regional-partnership/expert-support.json";
import rentalAdministrativeAssistance from "@/public/animations/regional-partnership/rental-administrative-assistance.json";
import offlineMarketingResources from "@/public/animations/regional-partnership/offline-marketing-resources.json";
import employeeCompensationSupport from "@/public/animations/regional-partnership/employee-compensation-support.json";
import register from "@/public/animations/regional-partnership/register.json";
import earn from "@/public/animations/regional-partnership/earn.json";
import promote from "@/public/animations/regional-partnership/promote.json";

const RegionalPartnershipWrapper = () => {
  const t = useTranslations("regionalPartnership.regionalBenefits");
  const s = useTranslations("regionalPartnership.easySteps");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: lucrativeRebateStructure,
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: multiTieredCommissions,
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: expertSupport,
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: rentalAdministrativeAssistance,
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      icon: offlineMarketingResources,
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      icon: employeeCompensationSupport,
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
    step1_icon: register,
    step2_title: s("step2_title"),
    step2_desc: s("step2_desc"),
    step2_icon: earn,
    step3_title: s("step3_title"),
    step3_desc: s("step3_desc"),
    step3_icon: promote,
    count1: s("step1_count"),
    count2: s("step2_count"),
    count3: s("step3_count"),
  };

  const easyStepsMobile = [
    {
      step_title: s("step1_title"),
      step_desc: s("step1_desc"),
      step1_icon: register,
      count: s("step1_count"),
    },
    {
      step_title: s("step2_title"),
      step_desc: s("step2_desc"),
      step2_icon: earn,
      count: s("step2_count"),
    },
    {
      step_title: s("step3_title"),
      step_desc: s("step3_desc"),
      step3_icon: promote,
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
      {/* <RegionalFormWrapper /> */}
      <ClientSatisfaction />
    </>
  );
};

export default RegionalPartnershipWrapper;
