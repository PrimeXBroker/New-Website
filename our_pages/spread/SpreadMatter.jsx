"use client";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const SpreadMatter = () => {
  const locale = useLocale();
  const t = useTranslations("spreadPage.spreadMatters");

  return (
    <section className="bg-black text-white pt-8 sm:pt-16">
      <div className="container mx-auto">
        <div className="bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
          <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start">
            <h2 className="text-3xl sm:text-[42px] font-bold text-white mb-4">
              {t("title1")}
              <span className="text-[#FED100]">{t("title2")}</span>
            </h2>
            <p className="text-lg md:text-2xl mb-4 text-[#A6A6A6] font-semibold">
              {t("subtitle")}
            </p>
            <p className="text-base text-white">{t("description")}</p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="custom-button-white-yellow px-6 py-4 mt-5 rounded-[12px] w-full sm:w-auto flex items-center justify-center gap-3 font-semibold"
              >
                {t("btnTxt")}
                {locale === "ar" || locale === "ku" ? (
                  <BsArrowUpLeftCircleFill />
                ) : (
                  <BsArrowUpRightCircleFill />
                )}
              </button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/spread-matter.png"
                alt="Spread Matters"
                className={`sm:w-[80%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMatter;
