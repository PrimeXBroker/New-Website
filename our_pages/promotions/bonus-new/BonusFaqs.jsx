"use client";
import { useTranslations, useLocale } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const BonusFaqs = ({ faqs, translation }) => {
  const t = useTranslations(translation);
  const locale = useLocale();
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-cc dark:bg-cc-dark rounded-xl p-6">
              <div
                className="flex justify-between items-center cursor-pointer gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  {faq.question}
                </p>
                <div className="flex justify-center items-center flex-shrink-0 rounded-full bg-tm dark:bg-tm-dark w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]">
                  {active === index ? (
                    <IoIosArrowUp className="text-cc dark:text-cc-dark text-sm sm:text-base" />
                  ) : (
                    <IoIosArrowDown className="text-cc dark:text-cc-dark text-sm sm:text-base" />
                  )}
                </div>
              </div>
              {active === index && (
                <div className="text-tm dark:text-tm-dark text-sm sm:text-base pt-6">
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
