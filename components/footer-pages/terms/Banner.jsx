"use client";
import React from "react";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "next-themes";
import termsConditions from "@/public/animations/policies/terms-conditions.json";
import Lottie from "lottie-react";

const Banner = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("footer.termsCondition");

  const handleDownload = (loc, name) => {
    const anchor = document.createElement("a");
    anchor.href = loc;
    anchor.download = `${name}.pdf`;
    anchor.click();
  };

  return (
    <section className="bg-p dark:bg-p-dark flex items-center pb-16 sm:pb-32 pt-32 sm:pt-44">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark p-8 rounded-[20px] w-full flex flex-col gap-y-6 relative shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              {t("title_part1")} <br className="block sm:hidden" />{" "}
              <span>{t("title_part2")}</span>
            </h1>
            <div
              className={`bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 w-14 h-14 flex justify-center items-center rounded-lg`}
            >
              <Lottie
                animationData={termsConditions}
                loop={true}
                style={{ width: "52px", height: "52px" }}
              />
            </div>
          </div>
          <p className="text-ts dark:text-ts-dark leading-relaxed text-sm sm:text-base">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-x-4">
            <a
              href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/PDF/PrimeX_Capital_Terms_Conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold py-4 sm:py-3 sm:w-1/2 rounded-lg flex justify-center items-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark mb-5 sm:mb-0 cursor-pointer"
            >
              {t("view_btn")}{" "}
              {locale === "ar" || locale === "ps" || locale === "ku" ? (
                <FiArrowUpLeft
                  className={`text-lg font-bold text-nb dark:text-nb-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              ) : (
                <FiArrowUpRight
                  className={`text-lg font-bold text-nb dark:text-nb-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              )}
            </a>
            <a
              onClick={() =>
                handleDownload(
                  "/assets/pdf/PrimeX_Capital_Terms_Conditions.pdf",
                  "PrimeX Capital Terms of Business"
                )
              }
              className="font-bold py-4 sm:py-3 sm:w-1/2 rounded-lg flex justify-center items-center bg-tm dark:bg-tm-dark text-p dark:text-p-dark mb-5 sm:mb-0 cursor-pointer"
            >
              {t("download_btn")}{" "}
              {locale === "ar" || locale === "ps" || locale === "ku" ? (
                <FiDownload
                  className={`text-lg font-bold text-p dark:text-p-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              ) : (
                <FiDownload
                  className={`text-lg font-bold text-p dark:text-p-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
