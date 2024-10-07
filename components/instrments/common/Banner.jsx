import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Banner = ({ title, description, imgUrl }) => {
  const t = useTranslations("commodities.hero");
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-b from-[#3f3f3e] to-[#e4e5e6] pt-[60px] lg:pt-12">
      <div className="container flex flex-col lg:flex-row py-12 justify-around">
        <div className="w-full lg:max-w-xl flex flex-col justify-center">
          <h1
            className={`sectionHeading text-primary ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            {title}
          </h1>
          <p
            className={`sectionPara text-accent pb-4 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            {description}
          </p>
          <Link
            href="https://client.primexbroker.com/en/register"
            className="bg-primary rounded-full text-secondary text-center font-semibold px-4 py-2 w-[250px] mx-auto lg:m-0  lg:block"
          >
            {t("start_now_btn")}
          </Link>
        </div>
        <div className="flex justify-center items-center lg:mt-0 mt-8">
          <Image
            src={imgUrl}
            alt="banner img"
            width="300"
            height="600"
            quality={75}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
