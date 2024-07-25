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

const statsOne = [
  { value: 895000, description: "Served Clients" },
  {
    value: 85000,
    description: "Introducing Broker",
    symbol: "",
    prepend: false,
  },
  {
    value: 300,
    description: "Paid-up Capital",
    symbol: " $",
    prepend: true,
  },
  {
    value: 28,
    description: "Daily trades",
    symbol: " $",
    prepend: "true",
  },
];
export default function Home() {
  return (
    <>
      <Banner />
      <CompanyStats stats={statsOne} />
      <TradingOpportunities />
      <AccountTtpes/>
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
