"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";
import bonusEligibility from "@/public/animations/bonus/bonus-eligibility.json";
import bonusRules from "@/public/animations/bonus/bonus-rules.json";
import generalRules from "@/public/animations/bonus/general-rules.json";
import tradingStrategies from "@/public/animations/bonus/prohibited-trading-strategies.json";
import Lottie from "lottie-react";

const BonusRules = () => {
  const { theme } = useTheme();
  const t = useTranslations("newYearBonus.bonusRules");

  const rulesData = [
    {
      category: t("trading_rules_title"),
      icon: bonusEligibility,
      items: [
        t("trading_rules_li1_desc"),
        t("trading_rules_li2_desc"),
        t("trading_rules_li3_desc"),
      ],
    },
    {
      category: t("general_rules_title"),
      icon: bonusRules,
      items: [
        t("general_rules_li1_desc"),
        t("general_rules_li2_desc"),
        t("general_rules_li3_desc"),
        t("general_rules_li4_desc"),
      ],
    },
    {
      category: t("timeline_title"),
      icon: generalRules,
      items: [
        t("timeline_li1_desc"),
        t("timeline_li2_desc"),
        t("timeline_li3_desc"),
      ],
    },
    {
      category: t("works_title"),
      icon: tradingStrategies,
      items: [
        t("works_li1_desc"),
        t("works_li2_desc"),
        t("works_li3_desc"),
        t("works_li4_desc"),
        t("works_li5_desc"),
        t("works_li6_desc"),
      ],
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="bg-cc dark:bg-cc-dark p-8 rounded-lg min-h-[244px]"
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
                    className="font-medium text-sm sm:text-base md:text-sm lg:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusRules;
