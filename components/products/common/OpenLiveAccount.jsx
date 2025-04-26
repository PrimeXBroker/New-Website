"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";

const OpenLiveAccount = ({
  title_part1,
  title_part2,
  title_part3,
  title_part4,
  description,
}) => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("productsPageCommon");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <div
          className="md:px-10 xl:px-16 h-[240px] bg-cover bg-center bg-cc dark:bg-cc-dark lg:h-[310px] rounded-[20px] flex flex-col justify-center"
          style={
            theme === "dark"
              ? {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/CTA+BG+Desktop.webp')",
                }
              : {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/CTA+Desktop+Light.webp')",
                }
          }
        >
          <div
            className={`${
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <h2 className="text-tm dark:text-tm-dark text-2xl lg:text-4xl font-semibold">
              {title_part1}
              <span className="text-pcp dark:text-pcp-dark">{title_part2}</span>
              {title_part3}
              <span className="text-pcp dark:text-pcp-dark">{title_part4}</span>
            </h2>
            <p className="text-ts dark:text-ts-dark pt-4">{description}</p>
          </div>
          <div
            className={`mt-8 ${
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <CustomYellowButton
              title={t("open_account_btn")}
              onClick={() => window.open(getRegisterUrl(locale))}
              className="py-[16px] px-[46px] font-semibold w-full sm:w-72 md:w-auto custom-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenLiveAccount;
