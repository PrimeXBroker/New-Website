import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const WhyTrade = ({ title, description, imgUrl }) => {
  const locale = useLocale();

  return (
    <section className="py-8">
      <div className="container flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-xl">
          <h2
            className={`sectionHeading ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {title}
          </h2>
          <p
            className={`sectionPara md:text-lg text-sm  ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center md:w-full w-[60%]">
          <Image src={imgUrl} alt="banner img" width="350" height="600" />
        </div>
      </div>
    </section>
  );
};

export default WhyTrade;
