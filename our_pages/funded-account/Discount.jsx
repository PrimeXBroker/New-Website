import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Discount = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount.discount");

  return (
    <div className="bg-[#000000] py-12 md:py-20 relative">
      <div className="container relative">
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ffffff] text-center px-2 sm:px-3 md:px-0">
            {t("main_title1")}
            <span className="text-[#FED100]">{t("main_title2")}</span>
            {t("main_title3")}
          </h2>
        </div>

        <div className="bg-black py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Mobile+Steps+Background.png')] md:hidden">
            <div className="absolute inset-0 bg-black/"></div>
          </div>

          <div className="absolute inset-0 hidden md:block bg-cover bg-center bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Desktop+Steps+Background.png')]">
            <div className="absolute inset-0 bg-[#11111180]/10"></div>
          </div>

          <div className="relative mx-auto px-4">
            <div className="absolute inset-0 bg-[#11111180]/50 backdrop-blur-md rounded-xl z-0 mx-11"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center py-11 px-8 md:px-12">
              <div className="rounded-lg p-6 text-center md:text-start relative flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="h-2 w-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <h3 className="text-white font-medium text-base leading-none">
                    {t("title1")}
                  </h3>
                </div>
                <h1 className="text-3xl md:text-2xl lg:text-3xl font-medium mb-2 text-[#FFFFFF]">
                  {t("title1_1")}
                </h1>
                <p className="text-[#C6C6C6] text-base md:text-sm lg:text-base px-7 md:px-0">
                  {t("description1")}
                </p>
                <div
                  className={`absolute right-0 top-0 h-full w-px bg-[#C6C6C6] ${
                    locale === "ar" || locale === "fa" || locale === "kd"
                      ? "hidden"
                      : "hidden md:block"
                  }`}
                ></div>
              </div>

              <div className="block md:hidden w-60 h-px bg-[#1D1D1D]"></div>

              <div className="rounded-lg p-6 text-center md:text-start relative flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="h-2 w-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <h3 className="text-white font-medium text-base leading-none">
                    {t("title2")}
                  </h3>
                </div>
                <h1 className="text-3xl md:text-2xl lg:text-3xl font-medium mb-2 text-[#FFFFFF]">
                  {t("title2_1")}
                </h1>
                <p className="text-[#C6C6C6] text-base md:text-sm lg:text-base px-5 md:px-0">
                  {t("description2")}{" "}
                </p>

                <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-[#C6C6C6]"></div>
              </div>

              <div className="block md:hidden w-60 h-px bg-[#1D1D1D]"></div>

              <div className="rounded-lg p-6 text-center md:text-start relative flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="h-2 w-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <h3 className="text-white font-medium text-base leading-none">
                    {t("title3")}
                  </h3>
                </div>
                <h1 className="text-3xl md:text-2xl lg:text-3xl font-medium mb-2 text-[#FFFFFF]">
                  {t("title3_1")}
                </h1>
                <p className="text-[#C6C6C6] text-base md:text-sm lg:text-base px-5 md:px-0">
                  {t("description3")}
                </p>
                <div
                  className={`absolute right-0 top-0 h-full w-px bg-[#C6C6C6] ${
                    locale === "ar" || locale === "fa" || locale === "kd"
                      ? "hidden md:block"
                      : "hidden"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
