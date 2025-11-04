"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const WhyChooseECN = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("ecnBroker.whyChooseECN");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title1")} <br className="hidden md:block" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div
              className={`relative ${
                theme === "dark"
                  ? locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                    ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+1st.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Dark+High++transparency.svg)]"
                    : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+1st.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+1st+Dark+Mode.svg)]"
                  : locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+1st.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Light+High++transparency.svg)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+1st.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+1st+Light+Mode.svg)]"
              } bg-cover h-auto lg:h-[394px] rounded-2xl p-8 flex flex-col justify-between sm:justify-end`}
            >
              <div
                className={`absolute ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "-left-1"
                    : "-right-1"
                } bottom-[70px] hidden lg:block`}
              >
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/high-transparency-dark.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[343px] h-full"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/High+transparency.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full mb-6"
                />
              </div>
              <div>
                <h2 className="text-tm dark:text-tm-dark font-bold uppercase text-2xl lg:text-xl xl:text-[28px] leading-tight mb-2 sm:w-[50%]">
                  {t("card1_title")}
                </h2>
                <p className="text-ts dark:text-ts-dark font-normal text-sm sm:text-base">
                  {t("card1_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7">
            <div
              className={`relative ${
                theme === "dark"
                  ? locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                    ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+2nd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Dark+Direct+connection+to+markets.svg)]"
                    : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+2nd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+2nd+Dark+Mode.svg)]"
                  : locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+2nd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Light+Direct+connection+to+markets.svg)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+2nd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+2nd+Light+Mode.svg)]"
              } bg-cover h-auto lg:h-[394px] rounded-2xl p-8 flex flex-col justify-between sm:justify-end`}
            >
              <div
                className={`absolute ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "left-0"
                    : "right-0"
                } bottom-12 hidden lg:block`}
              >
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/direct-connection-to-markets-dark.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[356px] h-full"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Direct+connection+to+markets.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full mb-6"
                />
              </div>
              <div>
                <h2 className="text-tm dark:text-tm-dark font-bold uppercase text-2xl lg:text-xl xl:text-[28px] leading-tight mb-2">
                  {t("card2_title1")} <br /> {t("card2_title2")}
                </h2>
                <p className="text-ts dark:text-ts-dark font-normal text-sm sm:text-base">
                  {t("card2_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7">
            <div
              className={`relative ${
                theme === "dark"
                  ? locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                    ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+3rd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Dark+Greater+control++with+lower+costs.svg)]"
                    : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+3rd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+3rd+Dark+Mode.svg)]"
                  : locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+3rd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Light+Greater+control++with+lower+costs.svg)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+3rd.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+3rd+Light+Mode.svg)]"
              } bg-cover h-auto lg:h-[394px] rounded-2xl p-8 flex flex-col justify-between sm:justify-end`}
            >
              <div
                className={`absolute ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "left-0"
                    : "right-0"
                } bottom-20 hidden lg:block`}
              >
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/greater-control-with-lower-costs-dark.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[357px] h-full"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Greater+control++with+lower+costs.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full mb-6"
                />
              </div>
              <div>
                <h2 className="text-tm dark:text-tm-dark font-bold uppercase text-2xl lg:text-xl xl:text-[28px] leading-tight mb-2">
                  {t("card3_title1")} <br /> {t("card3_title2")}
                </h2>
                <p className="text-ts dark:text-ts-dark font-normal text-sm sm:text-base">
                  {t("card3_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div
              className={`relative ${
                theme === "dark"
                  ? locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                    ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+4th.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Dark+High++transparency.svg)]"
                    : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Dark+4th.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+4th+Dark+Mode.svg)]"
                  : locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+4th.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/arabic-bg/Flipped+arabic+Desktop+Light+High++transparency.svg)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Mobile+Light+4th.svg)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/BG+4th+Light+Mode.svg)]"
              } bg-cover h-auto lg:h-[394px] rounded-2xl p-8 flex flex-col justify-between sm:justify-end`}
            >
              <div
                className={`absolute ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "left-4"
                    : "right-4"
                } bottom-24 hidden lg:block`}
              >
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/desktop-graphics/Fast+execution.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[290px] h-full"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/mobile-images/Fast+execution.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full mb-6"
                />
              </div>
              <div>
                <h2 className="text-tm dark:text-tm-dark font-bold uppercase text-2xl lg:text-xl xl:text-[28px] leading-tight mb-2">
                  {t("card4_title")}
                </h2>
                <p className="text-ts dark:text-ts-dark font-normal text-sm sm:text-base">
                  {t("card4_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseECN;
