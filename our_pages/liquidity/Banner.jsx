"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Banner = () => {
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
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#ffffff] sm:mb-1">
              {t("title1")}
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#ffffff]">
              {t("title2")} <span className="text-primary"> {t("title3")}</span>
            </h2>
            <p className="text-base sm:text-xl my-4 text-[#C6C6C6]">
              {t("desc")}
            </p>
            <div className="my-6">
              <button className="py-3 bg-primary text-[#000000] rounded-lg hover:bg-[#ffffff] border-2 border-primary hover:border-[#ffffff] w-[100%] md:w-[157px]">
                {t("contact_btn")}
              </button>
            </div>
            <div className="w-full h-[100px] flex flex-col justify-between">
              <div className="flex flex-row items-center gap-2 mb-1">
                <div>
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/trustpilot-logo.svg"
                    alt="Trustpilot Logo"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/reviews.svg"
                  alt="Reviews"
                  width={180}
                  height={180}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs mb-1 text-[#ffffff]">
                  {t("review_title")}
                </span>
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-testi.webp"
                  alt="User Testimonials"
                  width={120}
                  height={120}
                />
              </div>
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
