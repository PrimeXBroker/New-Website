import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Banner = ({ title, description, imgUrl }) => {
  const t = useTranslations("commodities.hero");

  return (
    <section className="lg:h-[70vh] bg-gradient-to-b from-[#3f3f3e] to-[#e4e5e6]">
      <div className="container flex flex-col lg:flex-row py-12 justify-around">
        <div className="w-full lg:max-w-xl flex flex-col justify-center">
          <h1 className="sectionHeading text-primary text-center lg:text-left">
            {title}
          </h1>
          <p className="sectionPara text-accent text-center lg:text-left pb-4">
            {description}
          </p>
          <button className="bg-primary rounded-full text-secondary font-semibold px-4 py-2 w-[250px] mx-auto lg:m-0  lg:block">
            {t("start_now_btn")}
          </button>
        </div>
        <div className="flex justify-center items-center lg:mt-0 mt-8">
          <Image src={imgUrl} alt="banner img" width="300" height="600" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
