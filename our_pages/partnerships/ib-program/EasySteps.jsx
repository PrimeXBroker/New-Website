"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";

const EasySteps = () => {
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.easySteps");

  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("title1")}
          <span className="text-pcp dark:text-pcp-dark">{t("title2")} </span>
        </h2>
      </div>
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl">
          <div className="sm:hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between">
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step1_count")}
                </span>
                {t("step2_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step2_desc")}</p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Promote.svg"
                }
                alt="Promote"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px] ">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step3_count")}
                </span>
                {t("step3_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step3_desc")}</p>
            </div>
            <div className="bg-e1 dark dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Register.svg"
                }
                alt="Register"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step2_count")}
                </span>
                {t("step1_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step1_desc")}</p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Earn.svg"
                }
                alt="Earn"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between lg:hidden">
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step1_count")}
                </span>
                {t("step2_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step2_desc")}</p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Register.svg"
                }
                alt="Promote"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px] ">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step2_count")}
                </span>
                {t("step1_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step1_desc")}</p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Promote.svg"
                }
                alt="Register"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {t("step3_count")}
                </span>
                {t("step3_title")}
              </h3>
              <p className="text-tm dark:text-tm-dark">{t("step3_desc")}</p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Earn.svg"
                }
                alt="Earn"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
