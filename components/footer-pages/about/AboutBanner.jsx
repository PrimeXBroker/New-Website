import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const AboutBanner = () => {
  const locale = useLocale();
  const t = useTranslations("about.hero");

  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[45%]">
          <h1
            className={`text-primary text-xl md:text-3xl font-semibold mb-5 ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "4px" }}
          >
            {t("title")}
          </h1>
          <p
            className={`text-white text-[15px] font-[500] ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("description")}
          </p>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/Banner.webp"
            width="500"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
