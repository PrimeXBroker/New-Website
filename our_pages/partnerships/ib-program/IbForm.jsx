import React from "react";
import Form from "./Form";
import { useTranslations } from "next-intl";

const IbForm = () => {
  const t = useTranslations("ibProgram.ibForm");
  return (
    <section id="ib-form" className="bg-p dark:bg-p-dark py-10">
      <div className="container grid grid-cols-1 items-center">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark">
            {t("main_title1")}
          </h2>
        </div>
        <div className="w-[50%] mx-auto">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default IbForm;
