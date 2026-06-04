"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import advancedAnalyticalDark from "@/public/animations/home-v2/dark/advanced-analytical-tool.json";
import advancedAnalyticalLight from "@/public/animations/home-v2/light/advanced-analytical-tool.json";
import chartingCapabilitiesDark from "@/public/animations/home-v2/dark/charting-capabilities.json";
import chartingCapabilitiesLight from "@/public/animations/home-v2/light/charting-capabilities.json";
import communitySupportDark from "@/public/animations/home-v2/dark/community-support.json";
import communitySupportLight from "@/public/animations/home-v2/light/community-support.json";
import fastOrderDark from "@/public/animations/home-v2/dark/fast-order-execution.json";
import fastOrderLight from "@/public/animations/home-v2/light/fast-order-execution.json";
import integratedEconomicDark from "@/public/animations/home-v2/dark/integrated-economic-calendar.json";
import integratedEconomicLight from "@/public/animations/home-v2/light/integrated-economic-calendar.json";
import integratedEconomicMblDark from "@/public/animations/home-v2/dark/integrated-economic-calendar-mobile.json";
import integratedEconomicMblLight from "@/public/animations/home-v2/light/integrated-economic-calendar-mobile.json";
import multiAssetDark from "@/public/animations/home-v2/dark/multi-assets-platform.json";
import multiAssetLight from "@/public/animations/home-v2/light/multi-assets-platform.json";
import seamlessAutomatedDark from "@/public/animations/home-v2/dark/seamless-automated-trading.json";
import seamlessAutomatedLight from "@/public/animations/home-v2/light/seamless-automated-trading.json";
import Lottie from "lottie-react";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const AdvancedPlatform = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedTraderPlatforms");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">
              {" "}
              {t("advance_platform_title_1")}
            </span>
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">
              {t("advance_platform_title_2")}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 text-ts dark:text-ts-dark sm:w-[65%] mx-auto">
            {t("advance_platform_description")}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li1")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li1_desc")}
                </p>
              </div>
              <Lottie
                animationData={
                  theme === "dark"
                    ? advancedAnalyticalDark
                    : advancedAnalyticalLight
                }
                loop={true}
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2 my-4">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li2")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li2_desc")}
                </p>
              </div>
              <Lottie
                animationData={
                  theme === "dark" ? multiAssetDark : multiAssetLight
                }
                loop={true}
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li3")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li3_desc")}
                </p>
              </div>
              <Lottie
                animationData={
                  theme === "dark"
                    ? seamlessAutomatedDark
                    : seamlessAutomatedLight
                }
                loop={true}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li4")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li4_desc")}
                </p>
              </div>
              <Lottie
                animationData={
                  theme === "dark" ? fastOrderDark : fastOrderLight
                }
                loop={true}
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl p-2 my-4">
              <div className="bg-e1 dark:bg-[#242424] border border-e2 dark:border-[#242424] rounded-xl p-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li5")}
                </h3>
                <button
                  onClick={handleClick}
                  className="flex items-center justify-center gap-3 mt-4 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/Button+BG.png')] bg-cover bg-center rounded-lg sm:rounded-xl px-6 py-4 text-nb-dark dark:text-nb-dark w-full text-base sm:text-lg lg:text-sm xl:text-lg font-bold uppercase !leading-tight"
                >
                  {t("li5_desc")}
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                  >
                    <FiArrowUp className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li6")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li6_desc")}
                </p>
              </div>

              <Lottie
                animationData={
                  theme === "dark"
                    ? chartingCapabilitiesDark
                    : chartingCapabilitiesLight
                }
                loop={true}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pb-6 pt-2">
              <Lottie
                animationData={
                  theme === "dark"
                    ? communitySupportDark
                    : communitySupportLight
                }
                loop={true}
              />
              <div className="mt-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li7")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li7_desc")}
                </p>
              </div>
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pb-6 pt-2 mt-4">
              <div className="w-full h-[558px] hidden lg:block">
                <Lottie
                  animationData={
                    theme === "dark"
                      ? integratedEconomicDark
                      : integratedEconomicLight
                  }
                  loop={true}
                />
              </div>
              <div className="w-full h-auto lg:hidden">
                <Lottie
                  animationData={
                    theme === "dark"
                      ? integratedEconomicMblDark
                      : integratedEconomicMblLight
                  }
                  loop={true}
                />
              </div>
              <div className="mt-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li8")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base tracking-[-0.04em] font-medium mt-2">
                  {t("li8_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatform;
