"use client";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const DemoAccountTC = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.terms");

  return (
    <section className="container mb-20">
      <div className="bg-[#000000] flex p-10 flex-col md:flex-row rounded-3xl">
        <div className="md:w-[70%] w-full mb-5 md:mb-0">
          <h2
            className={`text-[#ffffff] text-2xl md:text-4xl font-semibold  mb-2 `}
          >
            {t("title")}
          </h2>
          <p className={`sectionPara text-[#c6c6c6] text-base`}>
            {t("desc_part_1")}
            {t("desc_part_2")}
          </p>
        </div>
        <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center rounded-xl">
          <Button size="lg" color="primary" className="h-14 px-14">
            <a
              href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/Funded_Account_Competition.pdf"
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

export default DemoAccountTC;
