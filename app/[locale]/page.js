import BonusCalculator from "@/components/BonusCallculator";
import Academy from "@/our_pages/home/Academy";
import AdvancedPlatforms from "@/our_pages/home/AdvancedPlatforms";
import BecomeIB from "@/our_pages/home/BecomeIB";
import CustomerCare from "@/our_pages/home/CustomerCare";
import GetStarted from "@/our_pages/home/GetStarted";
import Hero from "@/our_pages/home/Hero";
import OurRecognition from "@/our_pages/home/OurRecognition";
import Rewards from "@/our_pages/home/Rewards";
import TradingOpportunities from "@/our_pages/home/TradingOpportunities";

export default function Home() {
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
