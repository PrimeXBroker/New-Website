import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiMicrosoftstore } from "react-icons/si";
import { useTranslations } from "next-intl";

const JoinPrimex = () => {
  const t = useTranslations("metaTrader5.joinPrimeX");

  return (
    <section className="container flex flex-col md:flex-row justify-center items-center py-12 ">
      <div>
        <h1
          className="text-secondary md:max-w-sm md:text-3xl font-semibold mb-5"
          style={{ letterSpacing: "1px" }}
        >
          {t("title")}
        </h1>
        <p
          className="text-secondary md:max-w-lg  text-[15px] font-[500]"
          style={{ letterSpacing: "1.4px" }}
        >
          {t("description")}
        </p>
        <div className="pt-5 flex flex-row md:gap-6 flex-wrap justify-center lg:justify-start ">
          <a
            href="https://download.mql5.com/cdn/web/22640/mt5/primexbroker5setup.exe"
            target="_blank"
            className="relative group  mb-2"
          >
            <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary px-6 py-3 bg-accent flex justify-center items-center gap-3">
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
            <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary px-6 py-3 bg-accent flex justify-center items-center gap-3">
              <img
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/playstore.svg"
                className="w-8"
              />
              <span style={{ lineHeight: "18px" }}>
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
            <button className="rounded-xl text-left border-opacity-75 text-[13px] font-semibold text-secondary px-6 py-3 bg-accent flex justify-center items-center gap-3">
              <img
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/apple.svg"
                className="w-8"
              />
              <span style={{ lineHeight: "18px" }}>
                {t("app_store_btn_part1")} <br />
                <span className="text-[18px] font-semibold block">
                  {t("app_store_btn_part1")}{" "}
                </span>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div>
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/join_banner.webp"
          width="350"
          height="300"
          alt="banner Image"
        />
      </div>
    </section>
  );
};

export default JoinPrimex;
