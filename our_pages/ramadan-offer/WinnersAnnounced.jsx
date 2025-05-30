"use client";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const WinnersAnnounced = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.winnersAnnounced");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <div className="bg-[#000000]">
      <div className="container">
        <div
          className="bg-cover bg-center flex items-center text-[#ffffff] rounded-[20px] px-6 md:px-8 overflow-hidden border-[2px] bg-[#111111] border-[#1D1D1D] h-[310px] sm:h-[270px]"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/winner-announced-bg.webp')",
          }}
        >
          <div className="">
            <div className="bg-[#1D1D1D] border-[#222222] text-[#ffffff] text-sm px-4 py-2 rounded-md mb-5 sm:mb-4 inline-block">
              {t("badge_title")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{t("title")}</h2>
            <button
              onClick={handleClick}
              className="py-[16px] px-[46px] font-semibold mt-5 sm:mt-4 w-full md:w-auto custom-button"
            >
              {t("btnTxt")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersAnnounced;
