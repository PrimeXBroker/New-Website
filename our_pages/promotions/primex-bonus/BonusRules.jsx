import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BonusRules = () => {
  const t = useTranslations("bonusPage.bonusRules");

  const rulesData = [
    {
      category: t("trading_rules_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Bonus-Eligibility.svg",
      items: [
        t("trading_rules_li1_desc"),
        t("trading_rules_li2_desc"),
        t("trading_rules_li3_desc"),
      ],
    },
    {
      category: t("general_rules_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Bonus-Rules.svg",
      items: [
        t("general_rules_li1_desc"),
        t("general_rules_li2_desc"),
        t("general_rules_li3_desc"),
        t("general_rules_li4_desc"),
      ],
    },
    {
      category: t("timeline_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/General-rules.svg",
      items: [
        t("timeline_li1_desc"),
        t("timeline_li2_desc"),
        t("timeline_li3_desc"),
        t("timeline_li4_desc"),
      ],
    },
    {
      category: t("works_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Prohibited-Trading-Strategies.svg",
      items: [t("works_li1_desc"), t("works_li2_desc"), t("works_li3_desc")],
    },
  ];

  return (
    <div className="bg-[#030303] text-[#F9F9F9]">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-lg min-h-[244px]"
            >
              <dv className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {rule.category}
                </h3>
                <div>
                  <Image
                    unoptimized={true}
                    src={rule.imageUrl}
                    width="100"
                    height="100"
                    alt={`${rule.category} Prize`}
                    className="w-[42px] h-[42px] sm:w-[52px] sm:h-[52px]"
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
