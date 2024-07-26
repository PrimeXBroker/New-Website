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
            {/* <img src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/icon-09.svg" className="w-12 absolute left-[-10px]" /> */}
            <div className="bg-secondary  w-12 h-12 absolute left-[-10px] rounded-3xl group-hover:bg-primary ">
              {" "}
              <div className=" h-[100%]  flex items-center justify-center text-[#fff] group-hover:text-secondary">
                <SiMicrosoftstore />
              </div>{" "}
            </div>
            <button className="border-2 border-secondary rounded-full border-opacity-75  text-[13px] font-semibold text-secondary px-2 py-3 pl-10 ">
              {t("download_window_btn")}
            </button>
          </a>
          <a
            href="https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXBroker-Demo,PrimeXBroker-Live"
            target="_blank"
            className="relative mb-2 group"
          >
            {/* <img src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/icon-08.svg"  className="w-12 absolute left-[-10px]" /> */}
            <div className="bg-secondary w-12 h-12 absolute left-[-10px] rounded-3xl group-hover:bg-primary">
              {" "}
              <div className=" h-[100%]  flex items-center justify-center text-[#fff] group-hover:text-secondary">
                <IoLogoGooglePlaystore />
              </div>{" "}
            </div>
            <button className="border-2 border-secondary rounded-full border-opacity-75 text-[13px] font-semibold text-secondary px-2 py-3 pl-10">
              {t("google_play-btn")}
            </button>
          </a>
          <a
            href="https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXBroker-Live"
            target="_blank"
            className="relative group"
          >
            {/* <img src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/icon-09.svg" className="w-12 absolute left-[-10px]" /> */}
            <div className="bg-secondary w-12 h-12 absolute left-[-10px] rounded-3xl group-hover:bg-primary">
              {" "}
              <div className=" h-[100%]  flex items-center justify-center text-[#fff] group-hover:text-secondary">
                <FaApple />
              </div>{" "}
            </div>
            <button className="border-2 border-secondary rounded-full border-opacity-75 text-[13px] font-semibold text-secondary px-2 py-3 pl-10">
              {t("app_store_btn")}
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
