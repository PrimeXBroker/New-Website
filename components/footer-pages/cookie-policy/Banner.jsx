"use client";
import React from "react";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("footer.cookiePolicy");

  const handleDownload = (loc, name) => {
    const anchor = document.createElement("a");
    anchor.href = loc;
    anchor.download = `${name}.pdf`;
    anchor.click();
  };

  return (
    <section className="bg-[#000000] flex items-center pb-16 sm:pb-32 pt-32 sm:pt-44">
      <div className="container mx-auto">
        <div className="bg-[#111111] text-[#ffffff] border-[#1d1d1d] border-2 p-8 rounded-[20px] w-full flex flex-col gap-y-6 relative shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              {t("title_part1")} <br className="block sm:hidden" />{" "}
              <span>{t("title_part2")}</span>
            </h1>
            <div
              className={`bg-[#1D1D1D] border-2 border-[#222222] w-14 h-14 flex justify-center items-center rounded-lg`}
            >
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/policy/Cookie+Policy.svg"
                alt="image"
                width="34"
                height="200"
              />
            </div>
          </div>
          <p className="text-[#c6c6c6] leading-relaxed text-sm sm:text-base">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-x-4">
            <a
              href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/footer-legal/PrimeX_Capital_Cookie_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-4 sm:py-3 sm:w-1/2 rounded-lg flex justify-center items-center custom-button mb-5 sm:mb-0"
            >
              {t("view_btn")}{" "}
              {locale === "ar" || locale === "fa" || locale === "kur" ? (
                <FiArrowUpLeft
                  className={`text-lg font-bold text-[#111111] ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              ) : (
                <FiArrowUpRight
                  className={`text-lg font-bold text-[#111111] ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              )}
            </a>
            <a
              onClick={() =>
                handleDownload(
                  "/assets/pdf/PrimeX_Capital_Cookie_Policy.pdf",
                  "PrimeX Capital Cookie Policy"
                )
              }
              className="font-semibold py-4 sm:py-3 sm:w-1/2 rounded-lg flex justify-center items-center custom-button-white mb-5 sm:mb-0"
            >
              {t("download_btn")}{" "}
              {locale === "ar" || locale === "fa" || locale === "kur" ? (
                <FiDownload
                  className={`text-lg font-bold text-[#111111] ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              ) : (
                <FiDownload
                  className={`text-lg font-bold text-[#111111] ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
