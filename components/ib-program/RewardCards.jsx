"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import RewardSlider from "./RewardSlider";

const RewardCards = () => {
  const locale = useLocale();
  const t = useTranslations("ib");
  const [activeTab, setActiveTab] = useState(4);

  const tabsContent = [
    {
      title: t("cards.reward_tab1"),
    },
    {
      title: t("cards.reward_tab2"),
    },
    {
      title: t("cards.reward_tab3"),
    },
    {
      title: t("cards.reward_tab4"),
    },
    {
      title: t("cards.reward_tab5"),
    },
    {
      title: t("cards.reward_tab6"),
    },
    {
      title: t("cards.reward_tab7"),
    },
    {
      title: t("cards.reward_tab8"),
    },
    {
      title: t("cards.reward_tab9"),
    },
    {
      title: t("cards.reward_tab10"),
    },
  ];

  const rewardsContent = [
    {
      title: t("cards.reward_li1"),
      innerTitle1: t("cards.reward_li1_title1"),
      innerSubTitle1: t("cards.reward_li1_subtitle1"),
      innerSubTitle2: t("cards.reward_li1_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li1.webp",
    },
    {
      title: t("cards.reward_li2"),
      innerTitle1: t("cards.reward_li2_title1"),
      innerSubTitle1: t("cards.reward_li2_subtitle1"),
      innerSubTitle2: t("cards.reward_li2_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li2.webp",
    },
    {
      title: t("cards.reward_li3"),
      innerTitle1: t("cards.reward_li3_title1"),
      innerSubTitle1: t("cards.reward_li3_subtitle1"),
      innerSubTitle2: t("cards.reward_li3_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li3.webp",
    },
    {
      title: t("cards.reward_li4"),
      innerTitle1: t("cards.reward_li4_title1"),
      innerSubTitle1: t("cards.reward_li4_subtitle1"),
      innerSubTitle2: t("cards.reward_li4_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li4.webp",
    },
    {
      title: t("cards.reward_li5"),
      innerTitle1: t("cards.reward_li5_title1"),
      innerSubTitle1: t("cards.reward_li5_subtitle1"),
      innerSubTitle2: t("cards.reward_li5_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li5.webp",
    },
    {
      title: t("cards.reward_li6"),
      innerTitle1: t("cards.reward_li6_title1"),
      innerSubTitle1: t("cards.reward_li6_subtitle1"),
      innerSubTitle2: t("cards.reward_li6_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li6.webp",
    },
    {
      title: t("cards.reward_li7"),
      innerTitle1: t("cards.reward_li7_title1"),
      innerSubTitle1: t("cards.reward_li7_subtitle1"),
      innerSubTitle2: t("cards.reward_li7_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li7.webp",
    },
    {
      title: t("cards.reward_li8"),
      innerTitle1: t("cards.reward_li8_title1"),
      innerSubTitle1: t("cards.reward_li8_subtitle1"),
      innerSubTitle2: t("cards.reward_li8_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li8.webp",
    },
    {
      title: t("cards.reward_li9"),
      innerTitle1: t("cards.reward_li9_title1"),
      innerSubTitle1: t("cards.reward_li9_subtitle1"),
      innerSubTitle2: t("cards.reward_li9_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li9.webp",
    },
    {
      title: t("cards.reward_li10"),
      innerTitle1: t("cards.reward_li10_title1"),
      innerSubTitle1: t("cards.reward_li10_subtitle1"),
      innerSubTitle2: t("cards.reward_li10_subtitle2"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-reward-li10.webp",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="mb-20 mt-16">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div>
              <div className="flex flex-row flex-wrap items-center gap-3.5 lg:hidden">
                <RewardSlider rewardsContent={rewardsContent} />
              </div>
              <div className="lg:flex justify-center gap-3.5 p-0 hidden">
                {rewardsContent.map((content, index) => (
                  <div
                    key={index}
                    className={`${
                      activeTab === index
                        ? "w-full sm:max-w-[650px] lg:max-w-[400px] lg:h-[400px] p-[24px] relative duration-700 delay-200 overflow-hidden rounded-3xl"
                        : "relative max-w-[70px] w-[100%] max-h-[400px]  bg-accent rounded-3xl transition  ease-in hidden lg:block"
                    } bg-accent`}
                    onMouseEnter={() => handleTabClick(index)}
                  >
                    <div className="relative">
                      <div
                        className={`flex flex-col items-center justify-center cursor-pointer h-[400px] ${
                          activeTab === index ? "hidden" : "block"
                        }`}
                      >
                        <div className="-rotate-90">
                          <h3 className="text-center text-xl font-semibold mb-0 text-secondary w-[350px]">
                            {content.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`${
                          activeTab === index ? "block" : "hidden"
                        } opacity-1 transition-opacity duration-300`}
                      >
                        <Image
                          src={content.img}
                          unoptimized={true}
                          width="100"
                          height="100"
                          alt="img"
                          className="w-full"
                        />
                        <h2 className="text-center text-3xl font-bold mt-4 text-secondary">
                          {content.innerTitle1} <br />
                          {content?.innerTitle2}
                        </h2>
                        <h3 className="text-center text-xl font-light mt-3 text-secondary">
                          {content.innerSubTitle1}
                          <span className="font-bold">
                            {content.innerSubTitle2}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardCards;
