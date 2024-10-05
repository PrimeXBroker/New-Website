"use client";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const DemoAccountTC = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.terms");

  return (
    <section className="bg-[#000000] pb-20">
      <div className="container">
        <div className="bg-[#111111] border-[#1D1D1D] border-2 flex p-10 flex-col md:flex-row rounded-[20px]">
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
            <button className="h-14 px-14 custom-button text-[#111111]">
              <a
                href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/Funded_Account_Competition.pdf"
                target="_blank"
                className="text-[#111111] font-semibold"
              >
                {t("title")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAccountTC;
