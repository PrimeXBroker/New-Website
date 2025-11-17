import React from "react";
import Hero from "./Hero";
import Promotions from "./Promotions";
import HomeStats from "./HomeStats";
import GlobalMarketWidget from "./GlobalMarketWidget";
import AccountTypes from "./AccountTypes";
import { useTranslations } from "next-intl";
import AdvancedPlatform from "./AdvancedPlatform";
import ClientReviews from "./ClientsReviews";
import PrimexAcademy from "./PrimexAcademy";
import PartnershipProgram from "./PartnershipProgram";
import Support from "./Support";
import Recognition from "./Recognition";
import PromotionsMobile from "./PromotionsMobile";
import AdvancedPlatformMobile from "./AdvancedPlatformMobile";

const HomeWrapper = () => {
  const t = useTranslations("home.accountTypes");
  const accountTypesData = [
    {
      id: 1,
      title: t("acc1.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/cent-account-icon.png",
      minimumDeposit: t("acc1.minimumDeposit"),
      description: t("acc1.description"),
    },
    {
      id: 2,
      title: t("acc2.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Standard-Account.webp",
      minimumDeposit: t("acc2.minimumDeposit"),
      description: t("acc2.description"),
    },
    {
      id: 3,
      title: t("acc3.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Narrow-Account.webp",
      minimumDeposit: t("acc3.minimumDeposit"),
      description: t("acc3.description"),
    },
    {
      id: 4,
      title: t("acc4.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Raw-Account.webp",
      minimumDeposit: t("acc4.minimumDeposit"),
      description: t("acc4.description"),
    },
  ];

  return (
    <>
      <Hero />
      <HomeStats />
      <Promotions />
      <PromotionsMobile />
      <GlobalMarketWidget />
      <AccountTypes accounts={accountTypesData} />
      <AdvancedPlatform />
      <AdvancedPlatformMobile />
      <ClientReviews />
      <PrimexAcademy />
      <PartnershipProgram />
      <Support />
      <Recognition />
    </>
  );
};

export default HomeWrapper;
