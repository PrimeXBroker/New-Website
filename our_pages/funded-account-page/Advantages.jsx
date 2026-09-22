"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import withdrawableProfits from "@/public/animations/funded-account/withdrawable-profits.json";
import automatedTradingSpreads from "@/public/animations/funded-account/sponsored-account.json";
import lucrativePartnership from "@/public/animations/why-choose-us/lucrative-partnership-programs.json";
import Lottie from "lottie-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Advantages = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("fundedAccountPage.advantages");

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme || "dark" : "dark";

  const advantagesData = [
    {
      title1: t("feature_1_title1"),
      title2: t("feature_1_title2"),
      description: t("feature_1_description"),
      icon: withdrawableProfits,
    },
    {
      title1: t("feature_2_title1"),
      title2: t("feature_2_title2"),
      description: t("feature_2_description"),
      icon: automatedTradingSpreads,
    },
    {
      title1: t("feature_3_title1"),
      title2: t("feature_3_title2"),
      description: t("feature_3_description"),
      icon: lucrativePartnership,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center capitalize">
            {t("title1")}{" "}
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            {t("title3")}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {advantagesData.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col relative overflow-hidden"
            >
              <div className="flex justify-center items-center w-14 h-14 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg">
                <Lottie
                  animationData={benefit.icon}
                  loop={true}
                  style={{ width: "52px", height: "52px" }}
                />
              </div>
              <div className="mt-6 mb-3">
                <h3 className="text-xl font-semibold text-pcp dark:text-pcp-dark">
                  {benefit.title1}
                </h3>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                  {benefit.title2}
                </h3>
              </div>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                {benefit.description}
              </p>
              <div className="absolute top-6 end-6 pointer-events-none select-none">
                <Image
                  src={
                    currentTheme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/X+Trade+more.+Get+more+value..svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/x+Trade+more.+Get+more+value..png"
                  }
                  alt="X background"
                  width={100}
                  height={113}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
