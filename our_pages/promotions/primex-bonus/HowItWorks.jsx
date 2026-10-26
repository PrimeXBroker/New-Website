"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HowItWorks = () => {
  const t = useTranslations("bonusPage.howItWorks");

  const newClientBenefits = [
    {
      title1: t("title1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+1.svg",
    },
    {
      title1: t("title2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+2.svg",
    },
    {
      title1: t("title3"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+3.svg",
    },
  ];

  const existingClientBenefits = [
    {
      title1: t("title4"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+1.svg",
    },
    {
      title1: t("title5"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+2.svg",
    },
    {
      title1: t("title6"),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/How+it+works+Icon+3.svg",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container flex flex-col">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title")}
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-10">
        <div>
          <h3 className="text-base font-semibold text-tm dark:text-tm-dark mb-4 text-start capitalize">
            {t("subtitle1")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {newClientBenefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-tm dark:text-tm-dark">
                      {benefit.title1}
                    </h3>
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={benefit.icon}
                      width="100"
                      height="100"
                      alt="Bonus Terms"
                      className="w-[90%] h-auto"
                    />
                  </div>
                </div>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-tm dark:text-tm-dark mb-4 text-start capitalize">
            {t("subtitle2")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {existingClientBenefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-tm dark:text-tm-dark">
                      {benefit.title1}
                    </h3>
                  </div>
                  <div>
                    <Image
                      unoptimized={true}
                      src={benefit.icon}
                      width="100"
                      height="100"
                      alt="Bonus Terms"
                      className="w-[90%] h-auto"
                    />
                  </div>
                </div>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
