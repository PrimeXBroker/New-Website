import React from "react";
import { useTranslations } from "next-intl";
import CopyProgramForm from "./CopyProgramForm";

const CopyProgramFormWrapper = () => {
  const t = useTranslations("copyProgram.copyProgramForm");
  return (
    <section className="bg-[#000000] pb-20">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="hidden lg:block">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("main_title1")} <br />
              <span className="text-[#ffffff] inline-block my-2">
                {t("main_title2")}
              </span>
              <br />
              <span className="text-[#FED100] inline-block mb-2">
                {t("main_title3")}
              </span>
              <br />
              <span className="text-[#FED100] inline-block">
                {t("main_title4")}
              </span>
            </h2>
          </div>
          <div className="block lg:hidden text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("main_title1")}
              <span className="text-[#FED100]"> {t("main_title2")}</span>
              {t("main_title3")}
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]">
              <span className="text-[#FED100] mb-2"> {t("main_title4")}</span>
              {t("main_title5")}
              <span className="text-[#FED100] mb-2"> {t("main_title6")}</span>
            </h2>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <CopyProgramForm />
        </div>
      </div>
    </section>
  );
};

export default CopyProgramFormWrapper;
