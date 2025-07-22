"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import advancedAnalyticalToolsDark from "@/public/animations/home/dark-mode/advanced-analytical-tools.json";
import advancedAnalyticalToolsLight from "@/public/animations/home/light-mode/advanced-analytical-tools.json";
import dedicatedCommunityDark from "@/public/animations/home/dark-mode/dedicated-community-support.json";
import dedicatedCommunityLight from "@/public/animations/home/light-mode/dedicated-community-support.json";
import powerfulChartingDark from "@/public/animations/home/dark-mode/powerful-charting-capabilities.json";
import powerfulChartingLight from "@/public/animations/home/light-mode/powerful-charting-capabilities.json";
import allInOneMultiDark from "@/public/animations/home/dark-mode/all-in-one-multi-asset-platform.json";
import allInOneMultiLight from "@/public/animations/home/light-mode/all-in-one-multi-asset-platform.json";
import seamlessAutomatedDark from "@/public/animations/home/dark-mode/seamless-automated-trading.json";
import seamlessAutomatedLight from "@/public/animations/home/light-mode/seamless-automated-trading.json";
import integratedEconomicDark from "@/public/animations/home/dark-mode/integrated-economic-calendar.json";
import integratedEconomicLight from "@/public/animations/home/light-mode/integrated-economic-calendar.json";
import lightningFastDark from "@/public/animations/home/dark-mode/lightning-fast-order-execution.json";
import lightningFastLight from "@/public/animations/home/light-mode/lightning-fast-order-execution.json";
import { useTheme } from "next-themes";
import Lottie from "lottie-react";

const AdvancedPlatform = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedPlatforms");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const features = [
    {
      iconDark: powerfulChartingDark,
      iconLight: powerfulChartingLight,
      title: t("li3"),
      description: t("li3_desc"),
    },
    {
      iconDark: allInOneMultiDark,
      iconLight: allInOneMultiLight,
      title: t("li4"),
      description: t("li4_desc"),
    },
    {
      iconDark: seamlessAutomatedDark,
      iconLight: seamlessAutomatedLight,
      title: t("li5"),
      description: t("li5_desc"),
    },
    {
      iconDark: lightningFastDark,
      iconLight: lightningFastLight,
      title: t("li6"),
      description: t("li6_desc"),
    },
    {
      iconDark: integratedEconomicDark,
      iconLight: integratedEconomicLight,
      title: t("li7"),
      description: t("li7_desc"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28 hidden lg:block">
      <div className="container">
        <div class="grid grid-cols-12 gap-6 bg-cc dark:bg-cc-dark p-10 rounded-2xl items-center">
          <div className="col-span-4">
            <div>
              <h5 className="lg:text-2xl xl:text-3xl leading-tight  text-tm dark:text-tm-dark font-bold">
                {t("advance_platform_title_1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("advance_platform_title_2")}
                </span>
              </h5>
              <p className="lg:text-sm xl:text-base text-ts dark:text-ts-dark font-medium lg:my-5 xl:my-6">
                {t("advance_platform_description")}
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="h-10 w-10 flex justify-center items-center bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-md">
                  <Lottie
                    animationData={
                      theme === "dark"
                        ? advancedAnalyticalToolsDark
                        : advancedAnalyticalToolsLight
                    }
                    loop={true}
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>

                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {t("li1")}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {t("li1_desc")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 mt-4">
                <div className="h-10 w-10 flex justify-center items-center bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-md">
                  <Lottie
                    animationData={
                      theme === "dark"
                        ? dedicatedCommunityDark
                        : dedicatedCommunityLight
                    }
                    loop={true}
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {t("li2")}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {t("li2_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/advanced-platform-mid.webp"
                alt="advanced analytical tools"
                width={100}
                height={100}
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="col-span-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-row items-center gap-2 lg:mb-2 xl:mb-4`}
              >
                <div className="h-10 w-10 flex justify-center items-center bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-md">
                  <Lottie
                    animationData={
                      theme === "dark" ? item.iconDark : item.iconLight
                    }
                    loop={true}
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {item.title}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <CustomWhiteButton
              title={t("btnTxt")}
              onClick={handleClick}
              className="lg:py-3 lg:px-6 xl:py-4 xl:px-7 w-auto tablet-md:text-[12px] laptop-sm:text-[15px] laptop-md:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatform;
