import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const PartnershipMobile = () => {
  const locale = useLocale();
  const t = useTranslations("home.partnerships");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div
          className={`px-8 pt-8 pb-12 bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] bg-no-repeat`}
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/CTA+BG+M.webp')",
            backgroundSize: "80%",
            backgroundPosition: "bottom",
          }}
        >
          <div
            className={`w-full md:w-[70%] lg:w-[50%]  ${
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <h2 className="text-[#ffffff] text-2xl sm:text-3xl font-bold">
              {t("title1")}{" "}
              <span className="text-[#FED100]"> {t("title2")}</span>
              <br />
              <span className="text-[#FED100]"> {t("title3")}</span>
              {t("title4")}
            </h2>
            <p className="text-[#c6c6c6] pt-4">{t("description")}</p>
          </div>
          <div className="mt-8 flex md:flex-row flex-col md:gap-6 lg:gap-14">
            <Link
              href={`/${locale}/ib-program`}
              className="py-4 md:px-4 lg:px-6 font-semibold custom-button text-sm"
            >
              {t("ib_btn")}
            </Link>
            <Link
              href={`/${locale}/grey-label-partner`}
              className="py-4 md:px-4 lg:px-6 font-semibold custom-button text-sm my-6"
            >
              {t("grey_label_btn")}
            </Link>
            <Link
              href={`/${locale}/regional-partner`}
              className="py-4 md:px-4 lg:px-6 font-semibold custom-button text-sm"
            >
              {t("regional_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipMobile;
