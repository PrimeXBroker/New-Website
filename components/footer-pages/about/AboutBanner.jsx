import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const AboutBanner = () => {
  const locale = useLocale();
  const t = useTranslations("about.hero");

  return (
    <section className={`bg-p dark:bg-p-dark pt-[60px] lg:pt-20`}>
      <div className="container flex flex-col md:flex-row justify-between gap-10 items-center py-12">
        <div className="md:w-[60%] lg:w-[45%]">
          <h1
            className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark mb-5 ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
          >
            {t("title1")} <br />
            <span className="text-tm dark:text-tm-dark inline-block my-1">
              {" "}
              {t("title2")}
            </span>{" "}
            <br />
            <span className="text-tm dark:text-tm-dark"> {t("title3")}</span>
          </h1>
          <p
            className={`text-ts dark:text-ts-dark text-[15px] font-[500] px-2 md:px-0 ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
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
