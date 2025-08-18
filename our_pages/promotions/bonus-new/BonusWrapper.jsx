import React from "react";
import Hero from "./Hero";
import PrizesBreakdown from "./PrizesBreakdown";
import BonusRules from "./BonusRules";
import BonusFaqs from "./BonusFaqs";
import JoinNow from "./JoinNow";
import AccountTypes from "./AccountTypes";
import WhyBonusIconic from "../primex-bonus/WhyBonusIconic";
import bonusEligibility from "@/public/animations/bonus/bonus-eligibility.json";
import bonusRules from "@/public/animations/bonus/bonus-rules.json";
import generalRules from "@/public/animations/bonus/general-rules.json";
import tradingStrategies from "@/public/animations/bonus/prohibited-trading-strategies.json";
import { useLocale, useTranslations } from "next-intl";

const BonusWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("newBonusPage.bonusRules");
  const f = useTranslations("newBonusPage.bonusFaqs");

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
        // t("timeline_li2_desc"),
        t("timeline_li3_desc"),
      ],
    },
    {
      category: t("works_title"),
      icon: tradingStrategies,
      items: [t("works_li1_desc"), t("works_li2_desc"), t("works_li3_desc")],
    },
  ];

  const faqs = [
    {
      question: f("question1"),
      answer: (
        <>
          <p className="mb-0">{f("answer1")}</p>
        </>
      ),
    },
    {
      question: f("question2"),
      answer: (
        <>
          <p className="mb-2">{f("answer2")}</p>
          <ul
            className={`list-disc ${
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "pr-5"
                : "pl-5"
            } space-y-1 marker:text-tm dark:marker:text-tm-dark`}
          >
            <li>{f("answer2_li1")}</li>
            <li>{f("answer2_li2")}</li>
            <li>{f("answer2_li3")}</li>
          </ul>
        </>
      ),
    },
    {
      question: f("question3"),
      answer: (
        <>
          <p className="mb-2">{f("answer3")}</p>
          <ul
            className={`list-disc ${
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "pr-5"
                : "pl-5"
            } space-y-1 marker:text-tm dark:marker:text-tm-dark`}
          >
            <li>{f("answer3_li1")}</li>
            <li>{f("answer3_li2")}</li>
            <li>{f("answer3_li3")}</li>
          </ul>
        </>
      ),
    },
    {
      question: f("question4"),
      answer: (
        <>
          <p className="mb-0">{f("answer4")}</p>
        </>
      ),
    },
    {
      question: f("question5"),
      answer: (
        <>
          <p className="mb-0">{f("answer5")}</p>
        </>
      ),
    },
    {
      question: f("question6"),
      answer: (
        <>
          <p className="mb-0">{f("answer6")}</p>
        </>
      ),
    },
    {
      question: f("question7"),
      answer: (
        <>
          <p className="mb-0">{f("answer7")}</p>
        </>
      ),
    },
    {
      question: f("question8"),
      answer: (
        <>
          <p className="mb-0">{f("answer8")}</p>
        </>
      ),
    },
    {
      question: f("question9"),
      answer: (
        <>
          <p className="mb-0">{f("answer9")}</p>
        </>
      ),
    },
    {
      question: f("question10"),
      answer: (
        <>
          <p className="mb-0">{f("answer10")}</p>
        </>
      ),
    },
  ];

  return (
    <>
      <Hero
        translation="newBonusPage.bonusHero"
        heroImage="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/cover-new.png"
        textChange={false}
      />
      <AccountTypes />
      <PrizesBreakdown />
      <BonusRules rulesData={rulesData} translation="newBonusPage.bonusRules" />
      <BonusFaqs faqs={faqs} translation="newBonusPage.bonusFaqs" />
      <WhyBonusIconic />
      <JoinNow translation="newBonusPage.bonusJoinNow" customStyle={false} />
    </>
  );
};

export default BonusWrapper;
