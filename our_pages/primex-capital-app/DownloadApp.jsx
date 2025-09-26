"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const DownloadApp = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("primeXTradingApp.downloadAppToady");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {t("heading")}
          </h2>
        </div>
        <div
          className={`grid grid-cols-12 bg-cc dark:bg-cc-dark rounded-[20px] items-center pt-8 lg:pt-0 px-5 lg:px-6 xl:px-10`}
        >
          <div className="col-span-12 lg:col-span-6">
            <h2
              className={`text-tm dark:text-tm-dark sm:mx-auto lg:mx-0 text-2xl md:text-3xl font-semibold mb-5 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center lg:text-start"
                  : "text-center lg:text-start"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title1")}{" "}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              {t("title3")}
            </h2>
            <p
              className={`text-ts dark:text-ts-dark sm:max-w-xl sm:mx-auto lg:mx-0 text-sm sm:text-[15px] font-[500] ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center lg:text-start"
                  : "text-center lg:text-start"
              }`}
              style={{ letterSpacing: "1.4px" }}
            >
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] lg:w-[170px] xl:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs lg:text-[11px] xl:text-xs text-ts dark:text-ts-dark">
                    {t("google_play-btn_part1")}
                  </p>
                  <p className="text-lg lg:text-base xl:text-lg font-semibold">
                    {t("google_play-btn_part2")}
                  </p>
                </div>
              </a>
              <a
                href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] lg:w-[170px] xl:w-[200px] h-[60px] rounded-lg group"
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
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs lg:text-[11px] xl:text-xs text-ts dark:text-ts-dark">
                    {t("app_store_btn_part1")}
                  </p>
                  <p className="text-lg lg:text-base xl:text-lg font-semibold">
                    {t("app_store_btn_part2")}
                  </p>
                </div>
              </a>
              {/* <a
                href="https://appgallery.cloud.huawei.com/ag/n/app/C114072661?locale=en_GB&source=appshare&subsource=C114072661&shareTo=com.android.bluetooth&shareFrom=appmarket&shareIds=e02c3da07c89442dbb99f53adb01464d_com.android.bluetooth&callType=SHARE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] lg:w-[170px] xl:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
                  }
                  alt="Apple Store"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs lg:text-[11px] xl:text-xs text-ts dark:text-ts-dark">
                    {t("app_gallery_btn_part1")}
                  </p>
                  <p className="text-lg lg:text-base xl:text-lg font-semibold">
                    {t("app_gallery_btn_part2")}
                  </p>
                </div>
              </a> */}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end mt-5 lg:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/download-app-cta.png"
              width="470"
              height="300"
              alt="Download Image"
              className="w-full sm:w-[84%] h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
