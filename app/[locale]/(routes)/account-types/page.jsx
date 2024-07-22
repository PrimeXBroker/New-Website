import React from "react";
import PremiumAdvantages from "@/components/PremiumAdvantages";
import Banner from "@/our_pages/account_types/Banner";
import ChooseAccount from "@/our_pages/account_types/ChooseAccount";
import Slider from "@/our_pages/account_types/Slider";
import { useLocale, useTranslations } from "next-intl";
import Cards from "@/components/Cards";

const page = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes");
  const b = useTranslations("regBtn");

  const cardContents = [
    {
      img: "/images/account-types/standard-acc.webp",
      title: t("card.account1-title"),
      description: t("card.account1-desc"),
    },
    {
      img: "/images/account-types/narrow-acc.webp",
      title: t("card.account2-title"),
      description: t("card.account2-desc"),
    },
    {
      img: "/images/account-types/zero-acc.webp",
      title: t("card.account3-title"),
      description: t("card.account3-desc"),
    },
    {
      img: "/images/account-types/crypto-acc.webp",
      title: t("card.account4-title"),
      description: t("card.account4-desc"),
    },
  ];

  const advantagesData = {
    imgEn: "/images/advantage-en.webp",
    imgAr: "/images/advantage-ar.webp",
    mainTitle1: t("advantages.adv_h2"),
    mainTitle2: t("advantages.adv_h2_1"),
    btnTxt: b("btnTxt"),
    regNow: b("reg_now"),
    loginHere: t("advantages.login_here"),
    regLink: `https://client.primexbroker.com/${locale}/register`,
    loginLink: `https://client.primexbroker.com/${locale}/auth/sign-in`,
  };

  const advantagesContent = [
    {
      img: "/images/adv-logo1.svg",
      hoveredImg: "/images/adv-logo1-hover.svg",
      title: t("advantages.adv1_h3"),
      description: t("advantages.adv1_p"),
    },
    {
      img: "/images/adv-logo2.svg",
      hoveredImg: "/images/adv-logo2-hover.svg",
      title: t("advantages.adv2_h3"),
      description: t("advantages.adv2_p"),
    },
    {
      img: "/images/adv-logo3.svg",
      hoveredImg: "/images/adv-logo3-hover.svg",
      title: t("advantages.adv3_h3"),
      description: t("advantages.adv3_p"),
    },
    {
      img: "/images/adv-logo4.svg",
      hoveredImg: "/images/adv-logo4-hover.svg",
      title: t("advantages.adv4_h3"),
      description: t("advantages.adv4_p"),
    },
    {
      img: "/images/adv-logo5.svg",
      hoveredImg: "/images/adv-logo5-hover.svg",
      title: t("advantages.adv5_h3"),
      description: t("advantages.adv5_p"),
    },
  ];

  return (
    <>
      <Banner />
      <Cards items={cardContents} />
      <ChooseAccount />
      <Slider />
      <PremiumAdvantages items={advantagesContent} data={advantagesData} />
    </>
  );
};

export default page;
