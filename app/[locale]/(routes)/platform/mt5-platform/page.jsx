import Banner from "@/our_pages/platform/mt5-platform/Banner";
import JoinPrimex from "@/our_pages/platform/mt5-platform/JoinPrimex";
import KeyFeatures from "@/our_pages/platform/mt5-platform/KeyFeatures";
import ProcessTimeline from "@/our_pages/platform/mt5-platform/steps";
import { useTranslations } from "next-intl";
import React from "react";

const Mt5Platform = () => {
  const t = useTranslations("metaTrader5.processTimeline");
  return (
    <>
      <Banner />
      <KeyFeatures />
      <ProcessTimeline title={t("title_part_1")} title2={t("title_part_2")} />
      <JoinPrimex />
    </>
  );
};

export default Mt5Platform;
