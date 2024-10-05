import RegButton from "@/components/RegButton";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MaximizeProfit = () => {
  const locale = useLocale();
  const t = useTranslations("newBonus.maximize");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div className="grid grid-cols-12 justify-center items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] px-14 pt-8">
          <div
            className={`col-span-12 lg:col-span-6 ${
              locale === "ar"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] mb-2 ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_1")}
            </h2>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_2")}
            </h2>
            <div
              className={`${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              <button
                onClick={() =>
                  window.open(
                    `${
                      locale === "ar"
                        ? "https://client.primexbroker.com/ar/register"
                        : "https://client.primexbroker.com/en/register"
                    }`
                  )
                }
                className="py-[16px] px-[32px] sm:px-[46px] font-semibold mt-5 custom-button"
              >
                {t("register_btn")}
              </button>
              <Link
                href={`${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/login"
                    : "https://client.primexbroker.com/en/login"
                }`}
                target="_blank"
                className={`text-xs text-[#ffffff] font-normal block mt-2 ${
                  locale === "ar"
                    ? "text-center lg:text-start mr-2"
                    : "text-center lg:text-start md:ml-6"
                }`}
              >
                {t("already-reg")}
                <span className="italic font-semibold">{t("login_here")}</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-maximize.webp"
              width="400"
              height="400"
              alt="img"
              className="w-full sm:w-[50%] lg:w-[60%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximizeProfit;
