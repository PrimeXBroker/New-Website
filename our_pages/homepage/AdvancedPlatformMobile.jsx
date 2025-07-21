"use client";
import CustomButton from "@/components/common/CustomYellowButton";
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

const AdvancedPlatformMobile = () => {
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
      iconDark: advancedAnalyticalToolsDark,
      iconLight: advancedAnalyticalToolsLight,
      title: t("li1"),
      description: t("li1_desc"),
    },
    {
      iconDark: dedicatedCommunityDark,
      iconLight: dedicatedCommunityLight,
      title: t("li2"),
      description: t("li2_desc"),
    },
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
    <section className="bg-p dark:bg-p-dark lg:hidden py-16 sm:py-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark px-4 py-8 sm:px-10 sm:py-10 rounded-xl">
          <div>
            <h5 className="text-3xl sm:text-3xl lg:text-4xl  text-tm dark:text-tm-dark font-bold text-center mb-3">
              {t("advance_platform_title_1")}
              <span className="text-pcp dark:text-pcp-dark">
                {t("advance_platform_title_2")}
              </span>
            </h5>
            <p className="text-sm sm:text-base text-ts dark:text-ts-dark font-medium mb-0 text-center">
              {t("advance_platform_description")}
            </p>
          </div>
          <div className="my-6">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/advanced-platform-mid.webp"
              alt="advanced analytical tools"
              width={100}
              height={100}
              className="w-full rounded-xl"
            />
          </div>
          <div className="mb-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-row items-center gap-3 sm:gap-5 ${
                  index !== features.length - 1 ? "mb-6" : ""
                }`}
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
                  <p className="text-sm sm:text-xl text-tm dark:text-tm-dark font-semibold mb-0">
                    {item.title}
                  </p>
                  <p className="text-sm m:text-lg text-ts dark:text-ts-dark font-medium mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <CustomButton
            title="Open Account"
            onClick={handleClick}
            className="py-4 px-7 w-full justify-between text-base bg-pcp dark:bg-pcp-dark hover:bg-tm dark:hover:bg-tm-dark text-nb dark:text-nb-dark"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatformMobile;
