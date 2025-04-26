"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Features = () => {
  const { theme } = useTheme();
  const t = useTranslations("productsPageCommon.features");

  const features = [
    {
      id: 1,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Diverse+Stock+Options.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Diverse-Stock-Options.svg",
    },
    {
      id: 1,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Tight+Spreads.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Tight-Spreads.svg",
    },
    {
      id: 3,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Global+Market.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Global-Market.svg",
    },
    {
      id: 4,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Flexible+Terms.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Flexible-Terms.svg",
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
                  className={`bg-e1 dark:bg-e1-dark w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 flex justify-center items-center rounded-[6.32px]`}
                >
                  <Image
                    src={theme === "dark" ? feature.imgDark : feature.imgLight}
                    alt={feature.title}
                    width="40"
                    height="200"
                    className="w-[34px] sm:w-[40px]"
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
