import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BonusRules = () => {
  const t = useTranslations("bonusPage.bonusRules");

  const rulesData = [
    {
      category: t("trading_rules_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/Trading-Rules.svg",
      items: [
        {
          label: t("trading_rules_li1_highlight"),
          value: t("trading_rules_li1_desc"),
        },
        {
          label: t("trading_rules_li2_highlight"),
          value: t("trading_rules_li2_desc"),
        },
        {
          label: t("trading_rules_li3_highlight"),
          value: t("trading_rules_li3_desc"),
        },
        {
          label: t("trading_rules_li4_highlight"),
          value: t("trading_rules_li4_desc"),
        },
      ],
    },
    {
      category: t("general_rules_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/General-Rules.svg",
      items: [
        t("general_rules_li1_desc"),
        t("general_rules_li2_desc"),
        t("general_rules_li3_desc"),
      ],
    },
    {
      category: t("timeline_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/TIMELINE.svg",
      items: [
        { label: t("timeline_li1_highlight"), value: t("timeline_li1_desc") },
        { label: t("timeline_li2_highlight"), value: t("timeline_li2_desc") },
        { label: t("timeline_li3_highlight"), value: t("timeline_li3_desc") },
      ],
    },
    {
      category: t("works_title"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/HOW-IT-WORKS.svg",
      items: [
        { label: t("works_li1_highlight"), value: t("works_li1_desc") },
        { label: t("works_li2_highlight"), value: t("works_li2_desc") },
        { label: t("works_li3_highlight"), value: t("works_li3_desc") },
      ],
    },
  ];

  return (
    <div className="bg-[#030303] text-[#F9F9F9] px-8">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-lg min-h-[244px]"
            >
              <dv className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold mb-6">{rule.category}</h3>
                <div>
                  <Image
                    unoptimized={true}
                    src={rule.imageUrl}
                    width="100"
                    height="100"
                    alt={`${rule.category} Prize`}
                    className="w-[52px] h-[52px]"
                  />
                </div>
              </dv>
              <ul className="space-y-2 list-disc ms-6">
                {rule.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-medium">
                    {item.label ? (
                      <>
                        <span className="font-bold">{item.label}</span>
                        {item.value}
                      </>
                    ) : (
                      item
                    )}
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
