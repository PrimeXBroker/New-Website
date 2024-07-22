import Banner from "@/our_pages/gift_account/Banner";
import Steps from "@/our_pages/gift_account/Steps";
import { useLocale, useTranslations } from "next-intl";
import PremiumAdvantages from "@/components/PremiumAdvantages";
import React from "react";
import Instruments from "@/our_pages/gift_account/Instruments";
import TermsCondition from "@/our_pages/gift_account/TermsCondition";

const page = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes");

  const advantagesData = {
    imgEn: "/images/advantage-en.webp",
    imgAr: "/images/advantage-ar.webp",
    mainTitle1: t("advantages.adv_h2"),
    mainTitle2: t("advantages.adv_h2_1"),
    btnTxt: t("header.btnTxt"),
    regNow: t("advantages.reg_now"),
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
      <Steps />
      <PremiumAdvantages items={advantagesContent} data={advantagesData} />
      <Instruments />
      <TermsCondition />
    </>
  );
};

export default page;
