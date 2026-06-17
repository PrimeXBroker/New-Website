"use client";
import React from "react";
import { useTranslations } from "next-intl";
import transferSpeed from "@/public/animations/local-depositor/transfer-speed.json";
import depositorDeterminesTheFees from "@/public/animations/local-depositor/depositor-determines-the-fees.json";
import easeOfUse from "@/public/animations/local-depositor/ease-of-use.json";
import Lottie from "lottie-react";

const Benefits = () => {
  const t = useTranslations("localDepositor.benefits");

  const benefits = [
    {
      title1: t("title1"),
      title2: t("title1_1"),
      description: t("description1"),
      icon: transferSpeed,
    },
    {
      title1: t("title2"),
      title2: t("title2_1"),
      description: t("description2"),
      icon: depositorDeterminesTheFees,
    },
    {
      title1: t("title3"),
      title2: t("title3_1"),
      description: t("description3"),
      icon: easeOfUse,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container flex flex-col mb-10">
        <div className="w-full">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("main_title")}
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {benefit.title1}
                    <span className="text-tm dark:text-tm-dark">
                      {benefit.title2}
                    </span>
                  </h3>
                </div>
                <div className="w-16 h-16 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                  <Lottie
                    animationData={benefit.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
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
  );
};

export default Benefits;
