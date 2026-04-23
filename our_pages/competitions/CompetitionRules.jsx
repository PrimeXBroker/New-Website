"use client";
import { useTranslations } from "next-intl";
import React from "react";
import bonusEligibility from "@/public/animations/bonus/bonus-eligibility.json";
import generalRules from "@/public/animations/bonus/general-rules.json";
import tradingStrategies from "@/public/animations/bonus/prohibited-trading-strategies.json";
import Lottie from "lottie-react";

const CompetitionRules = () => {
  const t = useTranslations("competitions.competitionRules");

  const rulesData = [
    {
      category: t("contest_eligibility_title"),
      icon: bonusEligibility,
      items: [
        t("contest_eligibility_li1_desc"),
        t("contest_eligibility_li2_desc"),
        t("contest_eligibility_li3_desc"),
        t("contest_eligibility_li4_desc"),
      ],
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
    },
    {
      category: t("strategies_title"),
      icon: tradingStrategies,
      items: [t("strategies_li1_desc"), t("strategies_li2_desc")],
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

export default CompetitionRules;
