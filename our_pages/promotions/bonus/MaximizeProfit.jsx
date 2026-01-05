"use client";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const MaximizeProfit = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("bonus.maximize");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <div className="grid grid-cols-12 justify-center items-center bg-cc dark:bg-cc-dark rounded-[20px] px-14 pt-8">
          <div
            className={`col-span-12 lg:col-span-6 ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark mb-2 ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_1")}
            </h2>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_2")}
            </h2>
            <div
              className={`${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              <CustomYellowButton
                title={t("register_btn")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-5"
              />

              <a
                onClick={() => window.open(getLoginUrl(locale))}
                target="_blank"
                className={`text-xs text-tm dark:text-tm-dark font-normal block mt-2 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "text-center lg:text-start"
                    : "text-center lg:text-start"
                }`}
              >
                {t("already-reg")}
                <span className="italic font-semibold">{t("login_here")}</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-maximize.webp"
              width="400"
              height="400"
              alt="Bonus Maximize"
              className="w-full sm:w-[50%] lg:w-[60%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximizeProfit;
