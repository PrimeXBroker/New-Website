import React from "react";
import Banner from "./Banner";
import KeyFeatures from "./KeyFeatures";
import { useTranslations, useLocale } from "next-intl";
import GetStarted from "./GetStarted";
import JoinPrimex from "./JoinPrimex";

const MT5PlatformWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("newMT5Platform.mt5Features");

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
        <div className="bg-[#000000] pt-10">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center pb-10">
              {t("title1")}{" "}
              <span className="text-[#ffffff]">{t("title2")}</span>
            </h2>
          </div>
        </div>
        <KeyFeatures
          sectionTitle={t("feature8_main_title1")}
          sectionHighlight={t("feature8_main_title2")}
          features={analyticalTools}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/pie-chart_2695446+1.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature1_main_title1")}
          sectionHighlight={t("feature1_main_title2")}
          features={multiAssets}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/layers_11072985.svg"
          titleColor="#FED100"
          highlightColor="#ffffff"
        />
        <KeyFeatures
          sectionTitle={t("feature2_main_title1")}
          sectionHighlight={t("feature2_main_title2")}
          features={automatedTrading}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/currency-exchange_10434529+1.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature3_main_title1")}
          sectionHighlight={t("feature3_main_title2")}
          sectionTitle1={t("feature3_main_title3")}
          features={communitySupport}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/workgroup_12886641+1.svg"
          titleColor="#FED100"
          highlightColor="#ffffff"
          titleColor1="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature4_main_title1")}
          sectionHighlight={t("feature4_main_title2")}
          features={orderExecution}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/receipt_10440045+1.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature5_main_title1")}
          sectionHighlight={t("feature5_main_title2")}
          features={chartingCapabilities}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/bar-chart_386894+1.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature6_main_title1")}
          sectionHighlight={t("feature6_main_title2")}
          features={userExperience}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/Frame+2147224183.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
        <KeyFeatures
          sectionTitle={t("feature7_main_title1")}
          sectionHighlight={t("feature7_main_title2")}
          features={economicCalender}
          icon="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/calendar_9310559+1.svg"
          titleColor="#ffffff"
          highlightColor="#FED100"
        />
      </div>
      <GetStarted />
      <JoinPrimex />
    </>
  );
};

export default MT5PlatformWrapper;
