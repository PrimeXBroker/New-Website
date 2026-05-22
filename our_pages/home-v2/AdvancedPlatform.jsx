"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiArrowUp } from "react-icons/fi";

const AdvancedPlatform = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedTraderPlatforms");

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
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li1_desc")}
                </p>
              </div>
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Advanced+Analytical+Tool.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Advanced+Analytical+Tool.png"
                }
                alt="Advanced Analytical Tool"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2 my-4">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li2")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li2_desc")}
                </p>
              </div>
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Multi-Asset+Platform.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Multi-Asset+Platform.png"
                }
                alt="Multi-Asset Platform"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li3")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li3_desc")}
                </p>
              </div>
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Seamless+Automated+Trading.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Seamless+Automated+Trading.png"
                }
                alt="Seamless Automated Trading"
                className="w-full h-auto lg:h-[239px]"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pt-6 pb-2">
              <div className="mb-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li4")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li4_desc")}
                </p>
              </div>
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Fast+Order+Execution.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Fast+Order+Execution.png"
                }
                alt="Fast Order Execution"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl p-2 my-4">
              <div className="bg-e1 dark:bg-[#242424] border border-e2 dark:border-[#242424] rounded-xl p-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li5")}
                </h3>
                <button className="flex items-center justify-center gap-3 mt-6 bg-pcp dark:bg-pcp-dark rounded-lg sm:rounded-xl px-6 py-4 text-nb-dark dark:text-nb-dark w-full text-base sm:text-lg lg:text-sm xl:text-lg font-bold uppercase !leading-tight">
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
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li6_desc")}
                </p>
              </div>
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Charting+Capabilities.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Charting+Capabilities.png"
                }
                alt="Charting Capabilities"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pb-6 pt-2">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Community+%26+Support.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Community+%26+Support.png"
                }
                alt="Community & Support"
                className="w-full h-auto"
              />
              <div className="mt-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li7")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
                  {t("li7_desc")}
                </p>
              </div>
            </div>
            <div className="bg-cc dark:bg-cc-dark rounded-2xl px-2 pb-6 pt-2 mt-4">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Integrated+Economic+Calendar.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Integrated+Economic+Calendar.png"
                }
                alt="Integrated Economic Calendar"
                className="w-full h-auto lg:h-[567px] hidden lg:block"
              />
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/dark/Integrated+Economic+Calendar+Dark+Mode+Mobile.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/advanced-platforms/light/Integrated+Economic+Calendar+Mobile.png"
                }
                alt="Integrated Economic Calendar"
                className="w-full h-auto lg:hidden"
              />
              <div className="mt-4 px-4">
                <h3 className="text-tm dark:text-tm-dark text-xl font-semibold">
                  {t("li8")}
                </h3>
                <p className="text-ts dark:text-ts-dark text-base font-medium mt-2">
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
