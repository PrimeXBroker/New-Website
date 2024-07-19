import React from "react";
import { useTranslations } from "next-intl";

const ChooseAccount = () => {
  const t = useTranslations("accountTypes.chooseAccount");

  return (
    <section className="my-12 bg-secondary flex p-10 flex-col md:flex-row">
      <div className="w-full mb-5 md:mb-0">
        <h1 className="sectionHeading text-3xl text-primary font-semibold text-center">
          {t("title")}
        </h1>
        <p className="sectionPara  text-white text-center">{t("sub-title")}</p>
      </div>
    </section>
  );
};

export default ChooseAccount;
