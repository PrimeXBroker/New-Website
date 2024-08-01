"use client";
import BonusCalculator from "@/components/BonusCallculator";
import Academy from "@/our_pages/home/Academy";
import AccountTtpes from "@/our_pages/home/AccountTypes";
import AdvancedPlatforms from "@/our_pages/home/AdvancedPlatforms";
import Banner from "@/our_pages/home/Banner";
import BecomeIB from "@/our_pages/home/BecomeIB";
import CompanyStats from "@/our_pages/home/CompanyStats";
import CustomerCare from "@/our_pages/home/CustomerCare";
import GetStarted from "@/our_pages/home/GetStarted";
import Hero from "@/our_pages/home/Hero";
import OurRecognition from "@/our_pages/home/OurRecognition";
import Rewards from "@/our_pages/home/Rewards";
import TradingOpportunities from "@/our_pages/home/TradingOpportunities";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home.hero");
  const statsOne = [
    {
      value: 250000,
      description: t("fact_desc1"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 5000,
      description: t("fact_no3"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 300,
      description: t("fact_desc3"),
      symbol: "$",
      prepend: "true",
      suffix: " Million+", // Adding suffix
    },
    {
      value: 7,
      description: t("fact_desc4"),
      symbol: " $",
      prepend: "true",
      suffix: " Billion+",
    },
  ];
  return (
    <>
      <Banner />
      <CompanyStats stats={statsOne} />
      <TradingOpportunities />
      <AccountTtpes />
      <AdvancedPlatforms />
      <BecomeIB />
      {/* <Rewards /> */}
      <CustomerCare />
      <Academy />
      {/* <GetStarted /> */}
      <OurRecognition />
    </>
  );
}
