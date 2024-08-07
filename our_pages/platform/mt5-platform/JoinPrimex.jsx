import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiMicrosoftstore } from "react-icons/si";
import { useTranslations, useLocale } from "next-intl";

const JoinPrimex = () => {
  const locale = useLocale();
  const t = useTranslations("metaTrader5.joinPrimeX");

  return (
    <section className="container">
      <div className="grid grid-cols-12 pb-12">
        <div className="col-span-12 md:col-span-7">
          <h1
            className={`text-secondary md:max-w-sm text-2xl md:text-3xl font-semibold mb-5 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
          <p
            className={`text-secondary md:max-w-xl  text-[15px] font-[500] ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1.4px" }}
          >
            {t("description")}
          </p>
          <div className="pt-5 flex flex-row md:gap-3 flex-wrap justify-around lg:justify-start mt-8 md:mt-0">
            <a
              href="https://download.mql5.com/cdn/web/22640/mt5/primexbroker5setup.exe"
              target="_blank"
              className="relative group  mb-2"
            >
              <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary hover:text-white px-4 py-3 bg-accent hover:bg-secondary flex justify-start items-center gap-3 w-[186px]">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/window.svg"
                  className="w-8"
                />
                <span style={{ lineHeight: "18px" }}>
                  {t("download_window_btn_part1")} <br />
                  <span className="text-[18px] font-semibold block">
                    {t("download_window_btn_part2")}
                  </span>
                </span>
              </button>
            </a>
            <a
              href="https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXBroker-Demo,PrimeXBroker-Live"
              target="_blank"
              className="relative mb-2 group"
            >
              <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary hover:text-white px-4 py-3 bg-accent hover:bg-secondary flex justify-start items-center gap-3 w-[186px]">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/playstore.svg"
                  className="w-8"
                />
                <span className={`${locale === "ar"? 'text-right':'text-left'}`} style={{ lineHeight: "18px" }}>
                  {t("google_play-btn_part1")} <br />
                  <span className="text-[18px] font-semibold block">
                    {t("google_play-btn_part2")}
                  </span>
                </span>
              </button>
            </a>
            <a
              href="https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXBroker-Live"
              target="_blank"
              className="relative group"
            >
              <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary hover:text-white px-4 py-3 bg-accent hover:bg-secondary flex justify-start items-center gap-3 w-[186px]">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/apple.svg"
                  className="w-8"
                />
                <span
                className={`${locale === "ar"? 'text-right':'text-left'}`}
                style={{ lineHeight: "18px" }}>
                  {t("app_store_btn_part1")} <br />
                  <span className="text-[18px] font-semibold block">
                    {t("app_store_btn_part2")}{" "}
                  </span>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center mt-8 md:mt-0">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/join_banner.webp"
            width="470"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinPrimex;
