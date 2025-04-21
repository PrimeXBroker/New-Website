import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Banner = ({
  background,
  title,
  titleColor,
  description,
  descriptionColor,
  imgUrl,
  imgWidth,
  imgHeight,
  children,
}) => {
  const locale = useLocale();

  return (
    <section className={`${background}`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[40%]">
          ={" "}
          <h1
            className={`${titleColor} text-xl md:text-3xl font-semibold mb-5 ${
              locale === "ar" || locale === "fa" || locale === "ku"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {title}
          </h1>
          <p
            className={`${descriptionColor} text-lg font-[500]  ${
              locale === "ar" || locale === "fa" || locale === "ku"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1.4px" }}
          >
            {description}
          </p>
          {children}
        </div>
        <div>
          <Image src={imgUrl} width={imgWidth} height={imgHeight} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
