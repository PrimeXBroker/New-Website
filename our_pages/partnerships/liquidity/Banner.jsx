"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = ({ scrollToForm }) => {
  const locale = useLocale();
  const t = useTranslations("liquidity.banner");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#000000] md:h-[550px] pt-28 md:pt-32 pb-[32px] md:pb-[0px]">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            {/* <div className="mb-5 text-center md:text-start">
              <TrustPilot />
            </div> */}
            <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff] sm:mb-2 md:mb-0 lg:mb-1 xl:mb-3 text-center md:text-start">
              {t("title1")}
              <span className="text-[#FED100]">{t("title2")}</span>
              {t("title3")}
            </h1>
            <p className="text-base sm:text-xl my-4 text-[#C6C6C6] text-center md:text-start">
              {t("desc")}
            </p>
            <div className="my-6">
              <button
                onClick={scrollToForm}
                className="py-3 w-[100%] md:w-[157px] custom-button"
              >
                {t("contact_btn")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center mt-8 md:mt-0">
            <div>
              <dotlottie-player
                src="/dotlotti/hero-animation.lottie"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "100%" }}
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
