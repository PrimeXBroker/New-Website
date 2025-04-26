import React from "react";
import Banner from "./Banner";
import KeyFeatures from "./KeyFeatures";
import { useTranslations } from "next-intl";
import GetStarted from "./GetStarted";
import JoinPrimex from "./JoinPrimex";

const MT5PlatformWrapper = () => {
  const t = useTranslations("metaTrader5.mt5Features");

  const analyticalTools = [
    {
      title: t("feature8_title1"),
      description: t("feature8_desc1"),
    },
    {
      title: t("feature8_title2"),
      description: t("feature8_desc2"),
    },
  ];

  const multiAssets = [
    {
      title: t("feature1_title1"),
      description: t("feature1_desc1"),
    },
    {
      title: t("feature1_title2"),
      description: t("feature1_desc2"),
    },
  ];

  const automatedTrading = [
    {
      title: t("feature2_title1"),
      description: t("feature2_desc1"),
    },
    {
      title: t("feature2_title2"),
      description: t("feature2_desc2"),
    },
  ];

  const communitySupport = [
    {
      title: t("feature3_title1"),
      description: t("feature3_desc1"),
    },
    {
      title: t("feature3_title2"),
      description: t("feature3_desc2"),
    },
  ];

  const orderExecution = [
    {
      title: t("feature4_title1"),
      description: t("feature4_desc1"),
    },
    {
      title: t("feature4_title2"),
      description: t("feature4_desc2"),
    },
  ];

  const chartingCapabilities = [
    {
      title: t("feature5_title1"),
      description: t("feature5_desc1"),
    },
    {
      title: t("feature5_title2"),
      description: t("feature5_desc2"),
    },
  ];

  const userExperience = [
    {
      title: t("feature6_title1"),
      description: t("feature6_desc1"),
    },
    {
      title: t("feature6_title2"),
      description: t("feature6_desc2"),
    },
  ];

  const economicCalender = [
    {
      title: t("feature7_title1"),
      description: t("feature7_desc1"),
    },
    {
      title: t("feature7_title2"),
      description: t("feature7_desc2"),
    },
  ];

  return (
    <>
      <Banner />
      <div>
        <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center pb-10">
              {t("title1")}{" "}
              <span className="text-tm dark:text-tm-dark">{t("title2")}</span>
            </h2>
          </div>
        </div>
        <KeyFeatures
          sectionTitle={t("feature8_main_title1")}
          sectionHighlight={t("feature8_main_title2")}
          features={analyticalTools}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/pie-chart_2695446+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Advanced+Analytical+Tools.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature1_main_title1")}
          sectionHighlight={t("feature1_main_title2")}
          features={multiAssets}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/layers_11072985.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Multi+Asset+Platform.svg"
          titleColor="text-pcp dark:text-pcp-dark"
          highlightColor="text-tm dark:text-tm-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature2_main_title1")}
          sectionHighlight={t("feature2_main_title2")}
          features={automatedTrading}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/currency-exchange_10434529+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Automated+Trading.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature3_main_title1")}
          sectionHighlight={t("feature3_main_title2")}
          sectionTitle1={t("feature3_main_title3")}
          features={communitySupport}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/workgroup_12886641+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Community+and+Support.svg"
          titleColor="text-pcp dark:text-pcp-dark"
          highlightColor="text-tm dark:text-tm-dark"
          titleColor1="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature4_main_title1")}
          sectionHighlight={t("feature4_main_title2")}
          features={orderExecution}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/receipt_10440045+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Improved+Order+Execution.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature5_main_title1")}
          sectionHighlight={t("feature5_main_title2")}
          features={chartingCapabilities}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/bar-chart_386894+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Superior+Charting+Capabilities.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature6_main_title1")}
          sectionHighlight={t("feature6_main_title2")}
          features={userExperience}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/Frame+2147224183.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Enhanced+User+Experience.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
        <KeyFeatures
          sectionTitle={t("feature7_main_title1")}
          sectionHighlight={t("feature7_main_title2")}
          features={economicCalender}
          iconDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/calendar_9310559+1.svg"
          iconLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Built-in+Economic+Calendar.svg"
          titleColor="text-tm dark:text-tm-dark"
          highlightColor="text-pcp dark:text-pcp-dark"
        />
      </div>
      <GetStarted />
      <JoinPrimex />
    </>
  );
};

export default MT5PlatformWrapper;
