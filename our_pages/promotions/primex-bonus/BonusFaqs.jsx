"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const BonusFaqs = () => {
  const t = useTranslations("bonusPage.bonusFaqs");
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: t("question1"),
      answer: (
        <>
          <p className="mb-0">{t("answer1")}</p>
        </>
      ),
    },
    {
      question: t("question2"),
      answer: (
        <>
          <p className="mb-0">{t("answer2")}</p>
        </>
      ),
    },
    {
      question: t("question3"),
      answer: (
        <>
          <p className="mb-0">{t("answer3")}</p>
        </>
      ),
    },
    {
      question: t("question4"),
      answer: (
        <>
          <p className="mb-0">{t("answer4")}</p>
        </>
      ),
    },
    {
      question: t("question5"),
      answer: (
        <>
          <p className="mb-0">{t("answer5")}</p>
        </>
      ),
    },
    {
      question: t("question6"),
      answer: (
        <>
          <p className="mb-0">{t("answer6")}</p>
        </>
      ),
    },
    {
      question: t("question7"),
      answer: (
        <>
          <p className="mb-0">{t("answer7")}</p>
        </>
      ),
    },
    {
      question: t("question8"),
      answer: (
        <>
          <p className="mb-0">{t("answer8")}</p>
        </>
      ),
    },
    {
      question: t("question9"),
      answer: (
        <>
          <p className="mb-0">{t("answer9")}</p>
        </>
      ),
    },
    {
      question: t("question10"),
      answer: (
        <>
          <p className="mb-0">{t("answer10")}</p>
        </>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="bg-[#030303] text-[#F9F9F9] py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-xl p-6">
              <div
                className="flex justify-between items-center cursor-pointer gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  {faq.question}
                </p>
                <div className="flex justify-center items-center flex-shrink-0 rounded-full bg-[#F9F9F9] w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]">
                  {active === index ? (
                    <IoIosArrowUp className="text-[#1A1A1A] text-sm sm:text-base" />
                  ) : (
                    <IoIosArrowDown className="text-[#1A1A1A] text-sm sm:text-base" />
                  )}
                </div>
              </div>
              {active === index && (
                <div className="text-[#F9F9F9] text-sm sm:text-base pt-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusFaqs;
