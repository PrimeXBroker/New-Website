"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import discover from "@/public/animations/ib-program/discover.json";
import benefit from "@/public/animations/ib-program/benefit.json";
import experience from "@/public/animations/ib-program/experience.json";
import enjoy from "@/public/animations/ib-program/enjoy.json";
import countOn from "@/public/animations/ib-program/count-on.json";
import Lottie from "lottie-react";

const ClientSatisfaction = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.clientSatisfaction");

  return (
    <section className="bg-p dark:bg-p-dark pt-10 pb-20">
      <div className="container">
        <div className="ib-client-wrapper">
          <div className="ib-fixed-text sm:block hidden">
            <div className="flex flex-col justify-end h-[60vh]">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark mb-2">
                {t("main_title1")}
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-pcp dark:text-pcp-dark mb-2">
                {t("main_title2")}{" "}
                <span className="text-tm dark:text-tm-dark">
                  {t("main_title3")}
                </span>
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark mb-2">
                {t("main_title4")}
              </h2>
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-pcp dark:text-pcp-dark mb-2 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "hidden"
                    : ""
                }`}
              >
                {t("main_title5")}
              </h2>
            </div>
          </div>
          <div className="ib-fixed-text block sm:hidden text-center mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-ts dark:text-ts-dark mb-2">
              {t("main_title1")}{" "}
              <span className="text-pcp dark:text-pcp-dark">
                {" "}
                {t("main_title2")}
              </span>{" "}
              {t("main_title3")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-ts dark:text-ts-dark mb-2">
              {t("main_title4")}
              <span
                className={`text-pcp dark:text-pcp-dark ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "hidden"
                    : ""
                }`}
              >
                {" "}
                {t("main_title5")}
              </span>
            </h2>
          </div>
          <ul>
            <li>
              <div>
                <div
                  className={`bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-auto ml-0"
                      : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{t("title1")}</h3>
                    <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex justify-center items-center">
                      <Lottie
                        animationData={discover}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                    {t("description1")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-auto ml-0"
                      : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{t("title2")}</h3>
                    <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex justify-center items-center">
                      <Lottie
                        animationData={benefit}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                    {t("description2")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-auto ml-0"
                      : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{t("title3")}</h3>
                    <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex justify-center items-center">
                      <Lottie
                        animationData={experience}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                    {t("description3")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-auto ml-0"
                      : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{t("title4")}</h3>
                    <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex justify-center items-center">
                      <Lottie
                        animationData={enjoy}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                    {t("description4")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-auto ml-0"
                      : "ml-auto mr-0"
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{t("title5")}</h3>
                    <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex justify-center items-center">
                      <Lottie
                        animationData={countOn}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
                    {t("description5")}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;
