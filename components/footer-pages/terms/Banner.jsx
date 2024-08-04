import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("footer.termsCondition");

  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[40%]">
          <h1
            className={`text-primary text-xl md:text-6xl font-semibold mb-5 ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title_part1")} <br /> {t("title_part2")}
          </h1>
          <p
            className={`text-white text-lg ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
          >
            {t("description")}
          </p>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/terms/Banner.webp"
            width="300"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
