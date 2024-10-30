"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const OpenLiveAccount = () => {
  const locale = useLocale();
  const t = useTranslations("whyChooseUs.openLiveAccount");

  return (
    <section className="bg-[#000000]">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-8 rounded-lg bg-cover bg-[#111111] text-[#ffffff]"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/CTA+BG+Desktop.webp')",
          }}
        >
          <div className="text-lg sm:text-2xl font-semibold text-center md:text-left max-w-md">
            {t("title")}
          </div>
          <button
            onClick={() =>
              window.open(
                `${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/register"
                    : "https://client.primexbroker.com/en/register"
                }`
              )
            }
            className="py-3 px-6 lg:py-4 lg:px-8 text-base md:text-[15px] lg:text-base font-semibold rounded-md w-full md:w-auto custom-button"
          >
            {t("btnTxt")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenLiveAccount;
