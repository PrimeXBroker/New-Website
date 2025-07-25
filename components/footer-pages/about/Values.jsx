"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import integrity from "@/public/animations/about-us/integrity.json";
import innovation from "@/public/animations/about-us/innovation.json";
import customerFocus from "@/public/animations/about-us/customer-focus.json";
import excellence from "@/public/animations/about-us/excellence.json";
import Lottie from "lottie-react";

const Values = () => {
  const { theme } = useTheme();
  const t = useTranslations("about.coreValues");

  const valuesCards = [
    {
      id: 1,
      title: t("value_1_title"),
      description: t("value_1_desc"),
      icon: integrity,
    },
    {
      id: 1,
      title: t("value_2_title"),
      description: t("value_2_desc"),
      icon: innovation,
    },
    {
      id: 3,
      title: t("value_3_title"),
      description: t("value_3_desc"),
      icon: customerFocus,
    },
    {
      id: 4,
      title: t("value_4_title"),
      description: t("value_4_desc"),
      icon: excellence,
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <h2 className="text-center text-tm dark:text-tm-dark text-2xl sm:text-3xl lg:text-4xl font-semibold md:pb-12">
          {t("title1")}{" "}
          <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
        </h2>
        <div className="md:bg-cc md:dark:bg-cc-dark md:rounded-2xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {valuesCards.map((card, index) => (
              <div
                key={card.id}
                className={`flex flex-col justify-center items-center md:border-l md:border-l-e1 md:dark:border-l-e1-dark md:border-r md:border-r-e1 md:dark:border-r-e1-dark px-2 md:px-2 py-10 md:py-0 group
  ${index === 0 ? "first:border-l-0" : ""} 
  ${index === valuesCards.length - 1 ? "last:border-r-0" : ""}
  sm:border-b sm:border-b-e1 sm:dark:border-b-e1-dark xs:border-b xs:border-b-e1 xs:dark:border-b-e1-dark lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`transition-all bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-xl`}
                >
                  <Lottie
                    animationData={card.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
                <h3 className="font-semibold text-tm dark:text-tm-dark text-xl mt-3 mb-2">
                  {card.title}
                </h3>
                <p className="text-ts dark:text-ts-dark text-center text-sm w-[239px] md:w-full">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
