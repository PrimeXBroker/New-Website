"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const KeyFeatures = () => {
  const t = useTranslations("metaTrader5.keyFeatures");
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresData = [
    {
      key: 1,
      tabTitle: t("feature_1_tab_title"),
      subTitle1: t("feature_1_subTitle1"),
      desc1: t("feature_1_desc1"),
      subTitle2: t("feature_1_subTitle2"),
      desc2: t("feature_1_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-02.svg",
    },
    {
      key: 2,
      tabTitle: t("feature_2_tab_title"),
      subTitle1: t("feature_2_subTitle1"),
      desc1: t("feature_2_desc1"),
      subTitle2: t("feature_2_subTitle2"),
      desc2: t("feature_2_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-03.svg",
    },
    {
      key: 3,
      tabTitle: t("feature_3_tab_title"),
      subTitle1: t("feature_3_subTitle1"),
      desc1: t("feature_3_desc1"),
      subTitle2: t("feature_3_subTitle2"),
      desc2: t("feature_3_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-04.svg",
    },
    {
      key: 4,
      tabTitle: t("feature_9_tab_title"),
      subTitle1: t("feature_9_subTitle1"),
      desc1: t("feature_9_desc1"),
      subTitle2: t("feature_9_subTitle2"),
      desc2: t("feature_9_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/Customer+and+Support.svg",
    },
    {
      key: 5,
      tabTitle: t("feature_6_tab_title"),
      subTitle1: t("feature_6_subTitle1"),
      desc1: t("feature_6_desc1"),
      subTitle2: t("feature_6_subTitle2"),
      desc2: t("feature_6_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-10.svg",
    },
    {
      key: 6,
      tabTitle: t("feature_4_tab_title"),
      subTitle1: t("feature_4_subTitle1"),
      desc1: t("feature_4_desc1"),
      subTitle2: t("feature_4_subTitle2"),
      desc2: t("feature_4_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-09.svg",
    },
    {
      key: 7,
      tabTitle: t("feature_8_tab_title"),
      subTitle1: t("feature_8_subTitle1"),
      desc1: t("feature_8_desc1"),
      subTitle2: t("feature_8_subTitle2"),
      desc2: t("feature_8_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-08.svg",
    },
    {
      key: 8,
      tabTitle: t("feature_5_tab_title"),
      subTitle1: t("feature_5_subTitle1"),
      desc1: t("feature_5_desc1"),
      subTitle2: t("feature_5_subTitle2"),
      desc2: t("feature_5_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-07.svg",
    },
    {
      key: 9,
      tabTitle: t("feature_7_tab_title"),
      subTitle1: t("feature_7_subTitle1"),
      desc1: t("feature_7_desc1"),
      subTitle2: t("feature_7_subTitle2"),
      desc2: t("feature_7_desc2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/MT5+Page-06.svg",
    },
  ];

  return (
    <div className="bg-accent pt-14">
      <div className="container">
        <h1 className="sectionHeading text-secondary">{t("title")}</h1>
        <div className="grid grid-cols-12 mt-14">
          {featuresData.map((item, index) => {
            return (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center relative mb-10 lg:mb-16"
                key={index}
              >
                <div
                  className={`mt5-tabs h-[80px] w-[320px] rounded-full flex justify-center items-center gap-2 px-6 cursor-pointer ${
                    activeFeature === item.key
                      ? "bg-primary border-1 border-primary z-30"
                      : "bg-transparent border-1 border-secondary z-10"
                  }`}
                  onClick={() =>
                    setActiveFeature(
                      activeFeature === item.key ? null : item.key
                    )
                  }
                >
                  <Image src={item.imgUrl} width="50" height="50" alt="img" />
                  <span
                    className="text-lg font-bold"
                    style={{ lineHeight: "1.3rem" }}
                  >
                    {item.tabTitle}
                  </span>
                </div>
                {activeFeature === item.key && (
                  <div className="feature-content feature-content-active flex flex-col justify-center items-center mb-4 h-[330px] w-[270px] bg-secondary relative top-4 pt-16 px-5 rounded-3xl z-20 mt-[-88px]">
                    <h1 className="sectionHeading text-primary mb-1 text-center text-base">
                      {item.subTitle1}
                    </h1>
                    <p className="sectionPara text-center text-xs text-white">
                      {item.desc1}
                    </p>
                    <h1 className="sectionHeading text-primary mb-1 text-center text-base mt-5">
                      {item.subTitle2}
                    </h1>
                    <p className="sectionPara text-center text-xs text-white">
                      {item.desc2}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
