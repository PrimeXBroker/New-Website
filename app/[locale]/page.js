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
  const t = useTranslations("home.stats");

  const statsOne = [
    {
      value: t("value_1"),
      description: t("desc_1"),
      symbol: "+",
      prepend: false,
    },
    {
      value: t("value_2"),
      description: t("desc_2"),
      symbol: "+",
      prepend: false,
    },
    {
      value: t("value_3"),
      description: t("desc_3"),
      symbol: "$",
      prepend: "true",
      suffix: t("suffix_3"), // Adding suffix
    },
    {
      value: t("value_4"),
      description: t("desc_4"),
      symbol: " $",
      prepend: "true",
      suffix: t("suffix_4"),
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
