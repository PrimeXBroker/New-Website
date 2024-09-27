"use client";

import Banner from "@/components/new-home/Banner";
import StatsCard from "@/components/new-home/StatsCard";
import { useLocale, useTranslations } from "next-intl";
import AccountTypes from "./AccountTypes";
import TradePlatform from "./TradePlatform";
import Testimonials from "./Testimonials";
import Academy from "./Academy";
import Support from "./Support";
import Recognition from "./Recognition";
import MobileRecognition from "./MoileRecognition";
import Promotions from "./Promotions";
import TradingOpportunities from "./TradingOpportunities";

const HomePage = () => {
  const locale = useLocale();
  const t = useTranslations("newHomePage.accountTypes");
  const c = useTranslations("newHomePage.academy");
  const p = useTranslations("newHomePage.promotions");
  const s = useTranslations("newHomePage.stats");

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
    },
    {
      id: 2,
      title1: c("academy_card_2_title_1"),
      title2: c("academy_card_2_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/one-on-one+coaching.svg",
      description: c("academy_card_2_desc_1"),
    },
    {
      id: 3,
      title1: c("academy_card_3_title_1"),
      title2: c("academy_card_3_title_2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Expert+Market+Analysis.svg",
      description: c("academy_card_3_desc_1"),
    },
  ];

  const promotionsData = [
    {
      title: p("title1_1"),
      highlight: p("title1_2"),
      title2: p("title1_3"),
      description: p("desc1_1"),
      buttonText: p("start_btn"),
      iconSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Bonus+Image.svg",
      link: `https://primexcapital.com/${locale}/bonus`,
    },
    {
      title: p("title2_1"),
      highlight: p("title2_2"),
      title2: p("title2_3"),
      description: p("desc2_1"),
      buttonText: p("start_btn"),
      iconSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Gift+Image.svg",
      link: `https://primexcapital.com/${locale}/funded-account-competition`,
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
      <Support />
      <Promotions promotions={promotionsData} />
      <div className="lg:block hidden">
        <Recognition />
      </div>
      <div className="lg:hidden block">
        <MobileRecognition />
      </div>
    </>
  );
};

export default HomePage;