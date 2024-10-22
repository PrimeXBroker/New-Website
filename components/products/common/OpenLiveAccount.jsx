import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const OpenLiveAccount = ({
  title_part1,
  title_part2,
  title_part3,
  title_part4,
  description,
}) => {
  const locale = useLocale();
  const t = useTranslations("productsPageCommon");

  return (
    <section className="bg-[#000000]">
      <div className="container">
        <div
          className="bg-cover md:px-10 xl:px-16 h-[240px] lg:h-[310px] border-2 border-[#1D1D1D] rounded-[20px] flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/open-acc-bg.webp')",
          }}
        >
          <div
            className={`${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <h2 className="text-[#ffffff] text-2xl lg:text-4xl font-semibold">
              {title_part1}
              <span className="text-[#FED100]">{title_part2}</span>
              {title_part3}
              <span className="text-[#FED100]">{title_part4}</span>
            </h2>
            <p className="text-[#c6c6c6] pt-4">{description}</p>
          </div>
          <div
            className={`mt-8 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <Link
              href={`${
                locale === "ar"
                  ? "https://client.primexbroker.com/ar/register"
                  : "https://client.primexbroker.com/en/register"
              }`}
              className="py-4 text-sm px-20 sm:px-4 lg:text-base lg:px-6 font-semibold custom-button"
            >
              {t("open_account_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenLiveAccount;
