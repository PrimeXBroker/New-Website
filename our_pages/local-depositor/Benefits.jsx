"use client";
import React from "react";
import { useTranslations } from "next-intl";
import transferSpeed from "@/public/animations/local-depositor/transfer-speed.json";
import depositorDeterminesTheFees from "@/public/animations/local-depositor/depositor-determines-the-fees.json";
import easeOfUse from "@/public/animations/local-depositor/ease-of-use.json";
import Lottie from "lottie-react";

const Benefits = () => {
  const t = useTranslations("localDepositor.benefits");
  console.log(t("main_title"), "t");

  const benefits = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: transferSpeed,
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: depositorDeterminesTheFees,
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: easeOfUse,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("main_title")}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-lg border-2 border-cc dark:border-cc-dark text-pcp dark:text-pcp-dark flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <div className="w-14 h-14 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                <Lottie
                  animationData={benefit.icon}
                  loop={true}
                  style={{ width: "52px", height: "52px" }}
                />
              </div>
            </div>
            <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
