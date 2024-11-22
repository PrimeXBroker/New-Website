"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Offer = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount.offer");

  return (
    <div className="bg-[#000000] py-9 md:py-20 relative">
      <div className="container relative">
        <div className="bg-black/30 py-8 md:py-11 relative rounded-2xl border border-[#222222] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Mobile+CTA+Background.png')] md:hidden">
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="absolute inset-0 hidden md:block bg-cover bg-center bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Desktop+CTA+Background.png')]">
            <div className="absolute inset-0 bg-[#11111180]/30"></div>
          </div>

          <div className="relative z-10 text-white px-6 md:px-7">
            <div className="bg-[#1D1D1D] border border-[#222222] rounded-md inline-block px-4 py-2 mb-4">
              <p className="text-sm md:text-base font-medium">{t("title1")}</p>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {t("title2")}
            </h1>
            <button className="bg-[#FFD700] text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              {t("btnTxt")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
