"use client";
import { useTranslations } from "next-intl";
import React from "react";
import bonusEligibility from "@/public/animations/bonus/bonus-eligibility.json";
import generalRules from "@/public/animations/bonus/general-rules.json";
import tradingStrategies from "@/public/animations/bonus/prohibited-trading-strategies.json";
import Lottie from "lottie-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const TermsCondition = () => {
  const { theme } = useTheme();
  const t = useTranslations("cashback.termsCondition");

  const rulesData = [
    {
      category: t("eligibility_title"),
      icon: bonusEligibility,
      items: [
        t("eligibility_li1_desc"),
        t("eligibility_li2_desc"),
        t("eligibility_li3_desc"),
        t("eligibility_li4_desc"),
      ],
      imageClasses:
        "absolute -bottom-6 end-10 -rotate-[7deg] w-[138px] h-[157px]",
    },
    {
      category: t("general_rules_title"),
      icon: generalRules,
      items: [
        t("general_rules_li1_desc"),
        t("general_rules_li2_desc"),
        t("general_rules_li3_desc"),
        t("general_rules_li4_desc"),
      ],
      imageClasses:
        "absolute top-1/2 -translate-y-1/2 end-80 rotate-[-35deg] w-[138px] h-[157px]",
    },
    {
      category: t("strategies_title"),
      icon: tradingStrategies,
      items: [
        t("strategies_li1_desc"),
        t("strategies_li2_desc"),
        t("strategies_li3_desc"),
      ],
      imageClasses:
        "absolute -bottom-8 end-32 rotate-[14deg] w-[138px] h-[157px]",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pb-16 sm:pb-28">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark capitalize">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="bg-cc dark:bg-cc-dark p-8 rounded-lg min-h-[244px] relative overflow-hidden"
            >
              <dv className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {rule.category}
                </h3>
                <div>
                  <Lottie
                    animationData={rule.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
              </dv>
              <ul className="space-y-2 list-disc ms-6">
                {rule.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-medium text-sm sm:text-base md:text-sm lg:text-base text-ts dark:text-ts-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className={`${rule.imageClasses} pointer-events-none select-none`}
              >
                <Image
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/X+terms+and+conditions.svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/x+Terms+and+Conditions.png"
                  }
                  alt="X background"
                  fill
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

export default TermsCondition;
