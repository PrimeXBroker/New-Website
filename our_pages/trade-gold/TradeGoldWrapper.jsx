import React from "react";
import Prizes from "./Prizes";
import howWin from "@/public/animations/trade-gold/how-to-win.json";
import rulesParticipation from "@/public/animations/trade-gold/rules-of-participation.json";
import duration from "@/public/animations/trade-gold/duration.json";
import generalRules from "@/public/animations/trade-gold/general-rules.json";
import { useLocale, useTranslations } from "next-intl";
import BonusFaqs from "../promotions/bonus-new/BonusFaqs";
import JoinNow from "../promotions/bonus-new/JoinNow";
import BonusRules from "../promotions/bonus-new/BonusRules";
import WinGoldSteps from "./WinGoldSteps";
import Hero from "./Hero";

const TradeGoldWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("trdaeGold.rules");
  const f = useTranslations("trdaeGold.faqs");
  const rulesData = [
    {
      category: t("win_rules_title"),
      icon: howWin,
      items: [
        t("win_rules_li1_desc"),
        t("win_rules_li2_desc"),
        t("win_rules_li3_desc"),
      ],
    },
    {
      category: t("participation_rules_title"),
      icon: rulesParticipation,
      items: [
        t("participation_rules_li1_desc"),
        t("participation_rules_li2_desc"),
        t("participation_rules_li3_desc"),
      ],
    },
    {
      category: t("duration_title"),
      icon: duration,
      items: [t("duration_li1_desc"), t("duration_li2_desc")],
    },
    {
      category: t("general_title"),
      icon: generalRules,
      items: [t("general_li1_desc"), t("general_li2_desc")],
    },
  ];

  const faqs = [
    {
      question: f("question1"),
      answer: (
        <>
          <p className="mb-2">{f("answer1")}</p>
          <ul
            className={`list-disc ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "pr-5"
                : "pl-5"
            } space-y-1 marker:text-tm dark:marker:text-tm-dark`}
          >
            <li>{f("answer1_li1")}</li>
            <li>{f("answer1_li2")}</li>
            <li>{f("answer1_li3")}</li>
          </ul>
        </>
      ),
    },
    {
      question: f("question2"),
      answer: (
        <>
          <p className="mb-0">{f("answer2")}</p>
        </>
      ),
    },
    {
      question: f("question3"),
      answer: (
        <>
          <p className="mb-0">{f("answer3")}</p>
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
  ];

  return (
    <>
      <Hero
        translation="trdaeGold.hero"
        heroImageLight="https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/contest-hero-light.webp"
        heroImageDark="https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/contest-hero-dark.webp"
        textChange={true}
      />
      <WinGoldSteps />
      <Prizes />
      <BonusRules rulesData={rulesData} translation="trdaeGold.rules" />
      <BonusFaqs faqs={faqs} translation="trdaeGold.faqs" />
      <JoinNow translation="trdaeGold.joinNow" customStyle={true} />
    </>
  );
};

export default TradeGoldWrapper;
