import Banner from "@/components/accounts/Banner";
import ChooseAccount from "@/components/accounts/ChooseAccount";
import Slider from "@/components/accounts/Slider";
import Cards from "@/components/Cards";
import PremiumAdvantages from "@/components/PremiumAdvantages";
import { useLocale, useTranslations } from "next-intl";

const AccountTypesPage = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes");
  const b = useTranslations("regBtn");

  const cardContents = [
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/standard-acc.webp",
      title: t("card.account1-title"),
      description: t("card.account1-desc"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/narrow-acc.webp",
      title: t("card.account2-title"),
      description: t("card.account2-desc"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/zero-acc.webp",
      title: t("card.account3-title"),
      description: t("card.account3-desc"),
    },
  ];

  const advantagesData = {
    imgEn:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/advantage-en.webp",
    imgAr:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/advantage-ar.webp",
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
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo1.svg",
      hoveredImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo1-hover.svg",
      title: t("advantages.adv1_h3"),
      description: t("advantages.adv1_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo2.svg",
      hoveredImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo2-hover.svg",
      title: t("advantages.adv2_h3"),
      description: t("advantages.adv2_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo3.svg",
      hoveredImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo3-hover.svg",
      title: t("advantages.adv3_h3"),
      description: t("advantages.adv3_p"),
    },
    // {
    //   img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo4.svg",
    //   hoveredImg:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo4-hover.svg",
    //   title: t("advantages.adv4_h3"),
    //   description: t("advantages.adv4_p"),
    // },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo5.svg",
      hoveredImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/adv-logo5-hover.svg",
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

export default AccountTypesPage;
