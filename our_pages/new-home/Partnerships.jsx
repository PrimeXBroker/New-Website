import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Partnerships = () => {
  const locale = useLocale();
  const t = useTranslations("newHomePage.partnerships");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div
          className="bg-cover px-8 pt-8 pb-12 bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] partnerships-background"
          style={
            locale === "ar"
              ? {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/CTA+BG+D-Ar.webp')",
                }
              : {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/CTA+BG+D.webp')",
                }
          }
        >
          <div className="md:w-[60%] lg:w-[50%]">
            <h2 className="text-[#ffffff] text-3xl font-bold">
              {t("title1")}{" "}
              <span className="text-[#FED100]"> {t("title2")}</span>
              <br />
              <span className="text-[#FED100]"> {t("title3")}</span>
              {t("title4")}
            </h2>
            <p className="text-[#c6c6c6] pt-4">{t("description")}</p>
          </div>
          <div className="mt-8 flex gap-3 lg:gap-14">
            <div className="">
              <Link
                href={`/${locale}/ib-program`}
                className="py-4 text-sm px-4 lg:text-base lg:px-6 font-semibold custom-button"
              >
                {t("ib_btn")}
              </Link>
            </div>
            <div className="">
              <Link
                href={`/${locale}/grey-label-partner`}
                className="py-4 text-sm px-4 lg:text-base lg:px-6 font-semibold custom-button"
              >
                {t("grey_label_btn")}
              </Link>
            </div>
            <div className="">
              <Link
                href={`/${locale}/regional-partner`}
                className="py-4 text-sm px-4 lg:text-base lg:px-6 font-semibold custom-button"
              >
                {t("regional_btn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
