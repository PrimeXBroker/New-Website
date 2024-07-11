import BonusCalculator from "@/components/BonusCallculator";
import Academy from "@/pages/home/Academy";
import AdvancedPlatforms from "@/pages/home/AdvancedPlatforms";
import BecomeIB from "@/pages/home/BecomeIB";
import CustomerCare from "@/pages/home/CustomerCare";
import GetStarted from "@/pages/home/GetStarted";
import Hero from "@/pages/home/Hero";
import OurRecognition from "@/pages/home/OurRecognition";
import Rewards from "@/pages/home/Rewards";
import TradingOpportunities from "@/pages/home/TradingOpportunities";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Hero />
      <TradingOpportunities />
      <AdvancedPlatforms />
      <BecomeIB />
      <Rewards />
      <CustomerCare />
      <Academy />
      <GetStarted />
      <OurRecognition />
    </>
  );
}
