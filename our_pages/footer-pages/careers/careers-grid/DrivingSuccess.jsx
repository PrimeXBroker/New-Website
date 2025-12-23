import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";
import EmployeesOfTheMonth from "@/public/animations/careers/employees-of-the-month.json";
import EthicsAndTransparency from "@/public/animations/careers/ethics-and-transparency.json";
import IncentivesAndRewards from "@/public/animations/careers/incentives-and-rewards.json";
import MarketCompetitiveRemuneration from "@/public/animations/careers/market-competitive-remuneration.json";
import MulticulturalOrganization from "@/public/animations/careers/multicultural-organization.json";
import TrainingAndDevelopment from "@/public/animations/careers/training-and-development.json";
import Lottie from "lottie-react";

const DrivingSuccess = () => {
  const { theme } = useTheme();
  const t = useTranslations("careersPage.drivingSuccess");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: MulticulturalOrganization,
      titleColor: "#FED100",
      title1Color: "#F9F9F9",
      title1ColorLight: "#111111",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: MarketCompetitiveRemuneration,
      titleColor: "#FED100",
      title1Color: "#F9F9F9",
      title1ColorLight: "#111111",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: EmployeesOfTheMonth,
      titleColor: "#F9F9F9",
      titleColorLight: "#111111",
      title1Color: "#FED100",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      title2: t("title4_2"),
      description: t("description4"),
      icon: TrainingAndDevelopment,
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      title2: t("title5_2"),
      description: t("description5"),
      icon: EthicsAndTransparency,
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      title2: t("title6_2"),
      description: t("description6"),
      icon: IncentivesAndRewards,
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-tm dark:text-tm-dark mb-6">
                {t("title_part1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title_part2")}
                </span>
              </h2>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                {t("desc_part1")}
              </p>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base mt-4">
                {t("desc_part2")}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-2 "
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      color:
                        feature.titleColorLight && theme === "light"
                          ? feature.titleColorLight
                          : feature.titleColor,
                    }}
                  >
                    {feature.title}
                    {feature.title2 ? (
                      <span className="text-tm dark:text-tm-dark">
                        {feature.title2}
                      </span>
                    ) : (
                      ""
                    )}
                  </h3>
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      color:
                        feature.title1ColorLight && theme === "light"
                          ? feature.title1ColorLight
                          : feature.title1Color,
                    }}
                  >
                    {feature.title1}
                  </h3>
                </div>
                <div className="w-16 h-16 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                  <Lottie
                    animationData={feature.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
              </div>
              <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrivingSuccess;
