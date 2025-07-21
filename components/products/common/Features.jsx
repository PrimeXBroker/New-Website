"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import diverseAssetsOptions from "@/public/animations/products/diverse-assets-options.json";
import tightSpreads from "@/public/animations/products/tight-spreads.json";
import globalMarket from "@/public/animations/products/global-market.json";
import flexibleTerms from "@/public/animations/products/flexible-terms.json";
import Lottie from "lottie-react";

const Features = () => {
  const { theme } = useTheme();
  const t = useTranslations("productsPageCommon.features");

  const features = [
    {
      id: 1,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      icon: diverseAssetsOptions,
    },
    {
      id: 1,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      icon: tightSpreads,
    },
    {
      id: 3,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      icon: globalMarket,
    },
    {
      id: 4,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      icon: flexibleTerms,
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl py-3 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex md:flex-col gap-4 sm:gap-7 md:gap-0 justify-center items-center md:border-l md:border-l-e1 md:dark:border-l-e1-dark md:border-r md:border-r-e1 md:dark:border-r-e1-dark px-2 md:px-2 py-10 md:py-0 group
  ${index === 0 ? "first:border-l-0" : ""} 
  ${index === features.length - 1 ? "last:border-r-0" : ""}
  sm:border-b sm:border-b-e1 sm:dark:border-b-e1-dark xs:border-b xs:border-b-e1 xs:dark:border-b-e1-dark lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 flex justify-center items-center rounded-[6.32px]`}
                >
                  <Lottie
                    animationData={feature.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
                <div className="md:text-center">
                  <h3 className="font-semibold text-tm dark:text-tm-dark text-lg sm:text-xl md:mt-3 mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-ts dark:text-ts-dark w-[239px] text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
