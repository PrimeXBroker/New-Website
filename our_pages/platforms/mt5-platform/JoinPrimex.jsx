"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const JoinPrimex = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("metaTrader5.joinPrimex");

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <div
          className={`grid grid-cols-12 py-10 bg-cc dark:bg-cc-dark rounded-[20px] ${
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "pr-5 lg:pr-10 pl-5 lg:pl-0"
              : "pl-5 lg:pl-10 pr-5 lg:pr-0"
          }`}
        >
          <div className="col-span-12 lg:col-span-5 flex justify-center mb-8 lg:mb-0 sm:hidden">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/join_banner.webp"
              width="470"
              height="300"
              alt="MT5 Join"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h2
              className={`text-tm dark:text-tm-dark sm:max-w-sm sm:mx-auto lg:mx-0 text-2xl md:text-3xl font-semibold mb-5 ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title1")}{" "}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              {t("title3")}
            </h2>
            <p
              className={`text-ts dark:text-ts-dark sm:max-w-xl sm:mx-auto lg:mx-0 text-sm sm:text-[15px] font-[500] ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
              style={{ letterSpacing: "1.4px" }}
            >
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-8">
              <a
                href="https://download.mql5.com/cdn/web/primex.capital.ltd/mt5/primexcapital5setup.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-1 border-e1 dark:border-e1-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full sm:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/microsoft_732221+1.svg"
                  alt="Microsoft Store"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts dark:text-ts-dark">
                    {t("download_window_btn_part1")}
                  </p>
                  <p className="text-lg font-semibold">
                    {t("download_window_btn_part2")}
                  </p>
                </div>
              </a>

              <div className="hidden md:block h-[60px] border-l-2 border-e1 dark:border-e1-dark" />

              <a
                href="https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXCapital-Live"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-1 border-e1 dark:border-e1-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full sm:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts dark:text-ts-dark">
                    {t("google_play-btn_part1")}
                  </p>
                  <p className="text-lg font-semibold">
                    {t("google_play-btn_part2")}
                  </p>
                </div>
              </a>

              <div className="hidden md:block h-[60px] border-l-2 border-e1 dark:border-e1-dark" />

              <a
                href="https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXCapital-Live"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-1 border-e1 dark:border-e1-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full sm:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Apple+Icon.svg"
                  }
                  alt="Apple Store"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts dark:text-ts-dark">
                    {t("app_store_btn_part1")}
                  </p>
                  <p className="text-lg font-semibold">
                    {t("app_store_btn_part2")}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 sm:flex justify-center mt-8 lg:mt-0 hidden">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/mt5-banner-mbl.webp"
              width="470"
              height="300"
              alt="MT5 Banner Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPrimex;
