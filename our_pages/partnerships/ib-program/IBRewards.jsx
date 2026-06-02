import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const IBRewards = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.ibRewards");

  const rewardData = [
    {
      id: 1,
      title: t("tiers.l1.title"),
      levelStr: t("tiers.l1.levelStr"),
      lots: t("tiers.l1.lots"),
      rewardText: t("tiers.l1.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Bronze/L1+Bronze+medal.png",
    },
    {
      id: 2,
      title: t("tiers.l2.title"),
      levelStr: t("tiers.l2.levelStr"),
      lots: t("tiers.l2.lots"),
      rewardText: t("tiers.l2.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Bronze/L2+Bronze+medal.png",
    },
    {
      id: 3,
      title: t("tiers.l3.title"),
      levelStr: t("tiers.l3.levelStr"),
      lots: t("tiers.l3.lots"),
      rewardText: t("tiers.l3.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Bronze/L3+Bronze+medal.png",
    },
    {
      id: 4,
      title: t("tiers.l4.title"),
      levelStr: t("tiers.l4.levelStr"),
      lots: t("tiers.l4.lots"),
      rewardText: t("tiers.l4.rewardText"),
      extraGiftBadge: t("tiers.l4.extraGiftBadge"),
      extraGiftImgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/Apple+watch.png",
      extraGiftImgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Bronze/Apple+watch.png",
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Bronze/L4+Bronze+medal.png",
    },
    {
      id: 5,
      title: t("tiers.l5.title"),
      levelStr: t("tiers.l5.levelStr"),
      lots: t("tiers.l5.lots"),
      rewardText: t("tiers.l5.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Silver/L5+Silver+Medal.png",
    },
    {
      id: 6,
      title: t("tiers.l6.title"),
      levelStr: t("tiers.l6.levelStr"),
      lots: t("tiers.l6.lots"),
      rewardText: t("tiers.l6.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Silver/L6+Silver+Medal.png",
    },
    {
      id: 7,
      title: t("tiers.l7.title"),
      levelStr: t("tiers.l7.levelStr"),
      lots: t("tiers.l7.lots"),
      rewardText: t("tiers.l7.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Silver/L7+Silver+Medal.png",
    },
    {
      id: 8,
      title: t("tiers.l8.title"),
      levelStr: t("tiers.l8.levelStr"),
      lots: t("tiers.l8.lots"),
      rewardText: t("tiers.l8.rewardText"),
      extraGiftBadge: t("tiers.l8.extraGiftBadge"),
      extraGiftImgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/Apple+Iphone.png",
      extraGiftImgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Silver/Apple+Iphone.png",
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Silver/L8+Silver+Medal.png",
    },
    {
      id: 9,
      title: t("tiers.l9.title"),
      levelStr: t("tiers.l9.levelStr"),
      lots: t("tiers.l9.lots"),
      rewardText: t("tiers.l9.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Gold/L9+Gold+Medal.png",
    },
    {
      id: 10,
      title: t("tiers.l10.title"),
      levelStr: t("tiers.l10.levelStr"),
      lots: t("tiers.l10.lots"),
      rewardText: t("tiers.l10.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Gold/L10+Gold+Medal.png",
    },
    {
      id: 11,
      title: t("tiers.l11.title"),
      levelStr: t("tiers.l11.levelStr"),
      lots: t("tiers.l11.lots"),
      rewardText: t("tiers.l11.rewardText"),
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Gold/L11+Gold+Medal.png",
    },
    {
      id: 12,
      title: t("tiers.l12.title"),
      levelStr: t("tiers.l12.levelStr"),
      lots: t("tiers.l12.lots"),
      rewardText: t("tiers.l12.rewardText"),
      extraGiftBadge: t("tiers.l12.extraGiftBadge"),
      extraGiftImgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/MG+Car.png",
      extraGiftImgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Gold/MG+Car.png",
      medalImg:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Gold/L12+Gold+Medal.png",
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-10">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">
              {t("main_title1")}
            </span>{" "}
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">
              {t("main_title2")}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("main_desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
          {rewardData.map((item) => (
            <div
              key={item.id}
              className="bg-cc dark:bg-cc-dark px-2 pt-2 pb-6 rounded-xl"
            >
              <div
                className={`relative flex items-center justify-center ${theme === "dark" ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/Background.png')]" : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Background.png')]"}  bg-cover bg-center rounded-xl h-[245px]`}
              >
                <Image
                  src={item.medalImg}
                  alt={item.title}
                  width={170}
                  height={164}
                  className="w-[160px] h-auto"
                />
                {item.extraGiftBadge && (
                  <div className="absolute top-3 end-2 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/extra-rewards.png')] bg-cover bg-center text-nb dark:text-nb-dark text-[11px] font-medium px-[10px] py-1 rounded">
                    + {item.extraGiftBadge}
                  </div>
                )}
                {item.extraGiftImgDark && item.extraGiftImgLight && (
                  <div className="absolute bottom-2 end-2">
                    <Image
                      src={
                        theme === "dark"
                          ? item.extraGiftImgDark
                          : item.extraGiftImgLight
                      }
                      alt={item.extraGiftBadge}
                      width={101}
                      height={80}
                      className="w-[101px] h-auto"
                    />
                  </div>
                )}
              </div>
              <div className="mt-6 px-3">
                <h3 className="text-tm dark:text-tm-dark text-xl lg:text-lg xl:text-xl font-semibold uppercase mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-b-black/10 dark:border-b-white/10 ">
                  <p className="text-tm dark:text-tm-dark text-sm font-medium">
                    {item.levelStr}
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={
                        theme === "dark"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/dark/Lots+Icon.png"
                          : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-rewards/light/Lots+Icon.png"
                      }
                      alt="Lots"
                      width={14}
                      height={14}
                      className="w-[14px] h-auto"
                    />
                    <p className="text-ts dark:text-ts-dark text-sm font-medium">
                      {item.lots}
                    </p>
                  </div>
                </div>
                <p className="text-pcp dark:text-pcp-dark text-2xl lg:text-xl xl:text-2xl font-semibold text-end">
                  {item.rewardText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IBRewards;
