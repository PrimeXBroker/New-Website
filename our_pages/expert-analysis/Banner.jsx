import React from "react";
import { useLocale } from "next-intl";

const Banner = ({ id }) => {
  const locale = useLocale();

  return (
    <section
      className={`${
        id === "6641f0097c9be5623e10929e"
          ? locale === "ar"
            ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/fundamental-analysis-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/fundamental-analysis-ar.webp')]"
            : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/fundamental-analysis-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/fundamental-analysis.webp')]"
          : locale === "ar"
          ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/technical-analysis-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/technical-analysis-ar.webp')]"
          : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/technical-analysis-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/expert-analysis/technical-analysis.webp')]"
      } bg-cover bg-no-repeat bg-center md:bg-center`}
    >
      <div className="container flex flex-col md:flex-row justify-start items-center py-12 lg:md:text-left text-center h-[50vh]">
        <div className="w-[60%]">
          <h1
            className={`text-white text-3xl md:text:4xl xl:text-6xl font-semibold mb-8 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {locale === "ar"
              ? id === "6641f0097c9be5623e10929e"
                ? "اخر الاخبار والتحليلات الاساسية"
                : "اخر التحليلات الفنية"
              : id === "6641f0097c9be5623e10929e"
              ? "Fundamental Analysis"
              : "Technical Analysis"}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
