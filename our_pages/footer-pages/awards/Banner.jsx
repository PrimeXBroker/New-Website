import React from "react";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import Image from "next/image";

const AwardsBanner = () => {
  const t = useTranslations("awards.hero");
  const locale = useLocale();

  return (
    <section className="bg-[#000000] pt-[60px] lg:pt-18">
      <div className="container flex flex-col md:flex-row gap-10 items-center py-12">
        <div className="md:w-[50%]">
          <div className="text-center md:text-start mb-4">
            <TrustPilot />
          </div>
          <h1
            className={`text-[#ffffff] text-xl md:text-3xl font-semibold mb-5 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title1")}
            <span className="text-[#FED100]">{t("title2")}</span>
          </h1>
          <p
            className={`text-lg font-[500] text-[#c6c6c6] ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1.4px" }}
          >
            {t("description")}
          </p>
        </div>
        <div className="mx-auto">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/Banner.webp"
            width="200"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsBanner;
