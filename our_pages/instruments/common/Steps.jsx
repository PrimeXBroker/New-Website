import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Steps = ({ title }) => {
  const t = useTranslations("commodities.steps");

  return (
    <section className="container border-t border-t-accent py-12">
      <h1 className="sectionHeading">{title}</h1>
      <div className="flex flex-col lg:flex-row mt-12 justify-center items-center">
        <div className="pl-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mr-[-10px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step1.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              {t("step_1")}
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>{t("step_1_title_part_1")}</p>
              <p>{t("step_1_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div className="w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step2.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              {t("step_2")}
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>{t("step_2_title_part_1")}</p>
              <p>{t("step_2_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div className="pl-8 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step3.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              {t("step_3")}
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>{t("step_3_title_part_1")}</p>
              <p>{t("step_3_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div className="pr-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:ml-[-20px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step4.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              {t("step_4")}
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>{t("step_4_title_part_1")}</p>
              <p>{t("step_4_title_part_2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
