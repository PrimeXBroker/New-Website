import React from "react";
import { useTranslations, useLocale } from "next-intl";
import GreyLabelForm from "./GreyLabelForm";

const GreyLabelFormWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("greyLabel.greyLabelForm");
  return (
    <section className="bg-p dark:bg-p-dark py-10">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="hidden lg:block">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark mb-2">
              {t("main_title1")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark mb-2">
              <span className="text-pcp dark:text-pcp-dark">
                {" "}
                {t("main_title2")}
              </span>
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark  mb-2">
              {t("main_title3")}
              <span className="text-pcp dark:text-pcp-dark mb-2">
                {" "}
                {t("main_title4")}
              </span>
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark">
              {t("main_title5")}
              <span className="text-pcp dark:text-pcp-dark mb-2">
                {" "}
                {t("main_title6")}
              </span>
            </h2>
          </div>
          <div className="block lg:hidden text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark mb-2">
              {t("main_title1")}{" "}
              <span className="text-pcp dark:text-pcp-dark">
                {" "}
                {t("main_title2")}
              </span>{" "}
              {t("main_title3")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark">
              <span className="text-pcp dark:text-pcp-dark mb-2">
                {" "}
                {t("main_title4")}
              </span>{" "}
              {t("main_title5")}
              <span className="text-pcp dark:text-pcp-dark mb-2">
                {" "}
                {t("main_title6")}
              </span>
            </h2>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <GreyLabelForm />
        </div>
      </div>
    </section>
  );
};

export default GreyLabelFormWrapper;
