import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const DrivingSuccess = () => {
  const locale = useLocale();
  const t = useTranslations("careersPage.drivingSuccess");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Multicultural+Organization.svg",
      titleColor: "#FED100",
      title1Color: "#FFFFFF",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Market+Competitive+Remuneration.svg",
      titleColor: "#FED100",
      title1Color: "#FFFFFF",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Employees++of+the+Month.svg",
      titleColor: "#FFFFFF",
      title1Color: "#FED100",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      title2: t("title4_2"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Training+and+Development.svg",
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      title2: t("title5_2"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Ethics+and+Transparency.svg",
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      title2: t("title6_2"),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Incentives+and+Rewards.svg",
      titleColor: "#FED100",
      title1Color: "#FED100",
    },
  ];

  return (
    <section className="bg-[#000000] py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffffff] mb-6">
                {t("title_part1")}
                <span className="text-[#FED100]">{t("title_part2")}</span>
              </h2>
              <p className="text-[#c6c6c6] text-sm sm:text-base">
                {t("desc_part1")}
              </p>
              <p className="text-[#c6c6c6] text-sm sm:text-base mt-4">
                {t("desc_part2")}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] hover:border-[#FED100] text-[#FED100] flex flex-col gap-2 "
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: feature.titleColor }}
                  >
                    {feature.title}
                    {feature.title2 ? (
                      <span className="text-[#ffffff]">{feature.title2}</span>
                    ) : (
                      ""
                    )}
                  </h3>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: feature.title1Color }}
                  >
                    {feature.title1}
                  </h3>
                </div>
                <div className="w-16 h-16 border-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width="40"
                    height="200"
                    className="w-[34px] sm:w-[40px]"
                  />
                </div>
              </div>
              <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
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
