import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Rewards = () => {
  const locale = useLocale();
  const t = useTranslations("ib");

  return (
    <section>
      <div className="container">
        <h1 className="sectionHeading">{t("rewards.title")}</h1>
        <div className="grid grid-cols-12 mt-16 items-center">
          <div className="col-span-12 sm:col-start-3 sm:col-span-8 md:col-span-6">
            <h2 className="sectionHeading font-normal text-center md:text-left">
              {t("rewards.subtitle_1")} <br /> {t("rewards.subtitle_2")}
            </h2>
            <p className="sectionPara md:max-w-xl text-center md:text-left">
              {t("rewards.description")}
            </p>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 mt-5">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/ib/ib-new-reward.webp"
                width="500"
                height="500"
                alt="img"
                className=" w-[80%] sm:w-[70%] md:w-[90%] lg:w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
