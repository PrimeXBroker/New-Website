import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Aos from "aos";

const Benefits = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.benefits");

  useEffect(() => {
    Aos.init({
      easing: "ease-out",
      duration: 2000,
    });
  }, []);

  return (
    <div className="relative h-[550px] sm:h-[500px] md:h-[400px] lg:h-[500px] flex justify-end items-center liquidity-bg">
      <div className="absolute  h-[550px] sm:h-[500px] md:h-[400px] lg:h-[500px] liquidity"></div>
      <div className="relative max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-between gap-y-6 text-center text-white z-10">
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg  w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
        >
          {t("benefit_1")}
        </div>
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
        >
          {t("benefit_2")}
        </div>
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
          data-aos-delay="400"
        >
          {t("benefit_3")}
        </div>
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
          data-aos-delay="400"
        >
          {t("benefit_4")}
        </div>
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
          data-aos-delay="700"
        >
          {t("benefit_5")}
        </div>
        <div
          className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl md:text-lg lg:text-xl opacity-90 hover:text-primary"
          data-aos="slide-up"
          data-aos-delay="700"
        >
          {t("benefit_6")}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
