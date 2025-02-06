"use client";
import Banner from "./Banner";
import StatsCard from "./StatsCard";
import { useLocale, useTranslations } from "next-intl";
import AccountTypes from "./AccountTypes";
import TradePlatform from "./TradePlatform";
import Testimonials from "./Testimonials";
import Academy from "./Academy";
import Support from "./Support";
import Recognition from "./Recognition";
import MobileRecognition from "./MobileRecognition";
// import Promotions from "./Promotions";
import TradingOpportunities from "./TradingOpportunities";
import Partnerships from "./Partnerships";
import PartnershipMobile from "./PartnershipMobile";

const HomePage = () => {
  const locale = useLocale();
  const t = useTranslations("home.accountTypes");
  const c = useTranslations("home.academy");
  const p = useTranslations("home.promotions");
  const s = useTranslations("home.stats");

  const accountTypesData = [
    {
      id: 1,
      title: t("acc1.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Standard+Account.svg",
      minimumDeposit: t("acc1.minimumDeposit"),
      description: t("acc1.description"),
    },
    {
      id: 2,
      title: t("acc2.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Narrow+Account.svg",
      minimumDeposit: t("acc2.minimumDeposit"),
      description: t("acc2.description"),
    },
    {
      id: 3,
      title: t("acc3.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Raw+Account.svg",
      minimumDeposit: t("acc3.minimumDeposit"),
      description: t("acc3.description"),
    },
  ];

  const academyData = [
    {
      id: 1,
      title1: c("academy_card_1_title_1"),
      title2: c("academy_card_1_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Free+webinars.svg",
      description: c("academy_card_1_desc_1"),
      link: "webinars",
    },
    {
      id: 2,
      title1: c("academy_card_2_title_1"),
      title2: c("academy_card_2_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Daily+Market+Updates.svg",
      description: c("academy_card_2_desc_1"),
      link: "market-news",
    },
    {
      id: 3,
      title1: c("academy_card_3_title_1"),
      title2: c("academy_card_3_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Expert+Market+Analysis.svg",
      description: c("academy_card_3_desc_1"),
      link: "technical-analysis",
    },
    {
      id: 4,
      title1: c("academy_card_4_title_1"),
      title2: c("academy_card_4_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/calendar-hub.svg",
      description: c("academy_card_4_desc_1"),
      link: "economic-calender",
    },
    {
      id: 5,
      title1: c("academy_card_5_title_1"),
      title2: c("academy_card_5_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/blogs-hub.svg",
      description: c("academy_card_5_desc_1"),
      link: "blogs",
    },
  ];

  const promotionsData = [
    // {
    //   title: p("title1_1"),
    //   highlight: p("title1_2"),
    //   title2: p("title1_3"),
    //   description: p("desc1_1"),
    //   buttonText: p("start_btn"),
    //   iconSrc:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Bonus+Image.svg",
    //   link: `/${locale}/bonus`,
    // },
    {
      title: p("title2_1"),
      highlight: p("title2_2"),
      title2: p("title2_3"),
      description: p("desc2_1"),
      buttonText: p("start_btn"),
      iconSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Gift+Image.svg",
      link: `/${locale}/funded-account-competition`,
    },
  ];

  const statsData = [
    {
      title: s("stat1.title"),
      value1: s("stat1.value1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Served+Clients.svg",
    },
    {
      title: s("stat2.title"),
      value1: s("stat2.value1"),
      value2: s("stat2.value2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Paid-up+Capital.svg",
    },
    {
      title: s("stat3.title"),
      value1: s("stat3.value1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Introducing+Brokers.svg",
    },
    {
      title: s("stat4.title"),
      value1: s("stat4.value1"),
      value2: s("stat4.value2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Daily+Trades.svg",
    },
  ];

  return (
    <>
      <Banner />
      <div className="block md:hidden bg-[#000000] py-10">
        <StatsCard stats={statsData} />
      </div>
      <TradingOpportunities />
      <AccountTypes accounts={accountTypesData} />
      <TradePlatform />
      <Testimonials />
      <Academy academy={academyData} />
      <div className="hidden md:block">
        <Partnerships />
      </div>
      <div className="block md:hidden">
        <PartnershipMobile />
      </div>
      <Support />
      {/* <Promotions promotions={promotionsData} /> */}
      <div className="lg:block hidden py-10 bg-[#000000]">
        <Recognition />
      </div>
      <div className="lg:hidden block">
        <MobileRecognition />
      </div>
    </>
  );
};

export default HomePage;
