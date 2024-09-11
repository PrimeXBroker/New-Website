import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Steps = ({ title }) => {
  const t = useTranslations("commodities.steps");
  const locale = useLocale();

  return (
    <section className="container border-t border-t-accent py-12">
      <h2 className="sectionHeading">{title}</h2>
      <div className="flex flex-col lg:flex-row mt-12 justify-center items-center">
        <div
          className={` text-white hover:text-black w-[270px] lg:w-[300px] xl:w-[350px] h-[130px] lg:h-[200px] bg-center bg-no-repeat ${
            locale === "ar"
              ? "lg:ml-[-8px] xl:ml-[-10px] pr-12 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step1-ar.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow1-ar.svg')]"
              : "lg:mr-[-6px] xl:mr-[-10px] pl-12 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step1.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow-1.svg')]"
          } flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer`}
        >
          <div className="flex flex-row gap-2">
            <div className="text-5xl">{t("step_1")}</div>
            <div className="flex flex-col">
              <p>{t("step_1_title_part_1")}</p>
              <p>{t("step_1_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div
          className={` text-white hover:text-black w-[270px] lg:w-[300px] xl:w-[350px] h-[130px] lg:h-[200px] bg-center bg-no-repeat ${
            locale === "ar"
              ? "lg:mx-[-32px] xl:mx-[-40px] bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step2-ar.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow2-ar.svg')]"
              : "lg:mx-[-40px] xl:mx-[-50px] bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step2.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow-2.svg')]"
          } flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer`}
        >
          <div className="flex flex-row gap-2">
            <div className="text-5xl">{t("step_2")}</div>
            <div className="flex flex-col">
              <p>{t("step_2_title_part_1")}</p>
              <p>{t("step_2_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div
          className={` text-white hover:text-black w-[270px] lg:w-[300px] xl:w-[350px] h-[130px] lg:h-[200px] bg-center bg-no-repeat ${
            locale === "ar"
              ? "pl-8 lg:mx-[-32px] xl:mx-[-40px] bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step3-ar.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow3-ar.svg')]"
              : "pl-8 lg:mx-[-40px] xl:mx-[-50px] bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step3.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow-3.svg')]"
          } flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer`}
        >
          <div className="flex flex-row gap-2">
            <div className="text-5xl">{t("step_3")}</div>
            <div className="flex flex-col">
              <p>{t("step_3_title_part_1")}</p>
              <p>{t("step_3_title_part_2")}</p>
            </div>
          </div>
        </div>
        <div
          className={` text-white hover:text-black w-[270px] lg:w-[300px] xl:w-[350px] h-[130px] lg:h-[200px] bg-center bg-no-repeat ${
            locale === "ar"
              ? "lg:mr-[-24px] xl:mr-[-28px] pl-12 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step4-ar.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow4-ar.svg')]"
              : "lg:ml-[-16px] xl:ml-[-20px] pr-12 bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step4.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/yellow-4.svg')]"
          } flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer`}
        >
          <div className="flex flex-row gap-2">
            <div className="text-5xl">{t("step_4")}</div>
            <div className="flex flex-col">
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
