import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const AboutBanner = () => {
  const locale = useLocale();
  const t = useTranslations("about.hero");

  return (
    <section className={`bg-[#000000] pt-[60px] lg:pt-20`}>
      <div className="container flex flex-col md:flex-row justify-between gap-10 items-center py-12">
        <div className="md:w-[60%] lg:w-[45%]">
          {/* <div className="text-center md:text-start mb-4">
            <TrustPilot />
          </div> */}
          <h1
            className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] mb-5 ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
          >
            {t("title1")} <br />
            <span className="text-[#ffffff] inline-block my-1">
              {" "}
              {t("title2")}
            </span>{" "}
            <br />
            <span className="text-[#ffffff]"> {t("title3")}</span>
          </h1>
          <p
            className={`text-[#c6c6c6] text-[15px] font-[500] px-2 md:px-0 ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("description")}
          </p>
        </div>
        <div className="text-right">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/about-us-hero.webp"
            width="500"
            height="300"
            alt="About Banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
