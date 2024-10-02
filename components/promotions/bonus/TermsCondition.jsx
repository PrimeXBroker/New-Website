"use client";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const TermsCondition = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.terms");

  return (
    <section className="container my-20">
      <div className="bg-accent flex p-10 flex-col md:flex-row rounded-3xl">
        <div className="md:w-[70%] w-full mb-5 md:mb-0">
          <h2
            className={`sectionHeading text-3xl text-secondary font-semibold ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("title")}
          </h2>
          <p
            className={`sectionPara text-secondary ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("desc_part_1")}
            {t("desc_part_2")}
          </p>
        </div>
        <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center">
          <Button
            radius="full"
            size="lg"
            color="primary"
            className="h-14 px-14"
          >
            <a
              href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/PrimeX_Deposit_Bonus.pdf"
              target="_blank"
              className="text-secondary font-semibold"
            >
              {t("title")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
