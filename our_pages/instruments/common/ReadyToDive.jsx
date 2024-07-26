import React from "react";
import { useTranslations } from "next-intl";

const ReadyToDive = ({ title, description }) => {
  const t = useTranslations("commodities.readyToDive");

  return (
    <section className="container bg-accent flex gap-5 md:gap-0 flex-col md:flex-row items-center p-8 lg:h-[200px] justify-around shadow-xl rounded-lg my-12">
      <div className="max-w-2xl">
        <h1 className="sectionHeading text-2xl text-center md:text-left">
          {title}
        </h1>
        <p className="sectionpara text-center md:text-left">{description}</p>
      </div>
      <button className="bg-primary rounded-full text-secondary font-semibold px-4 py-4 w-[250px]">
        {t("open_account_btn")}
      </button>
    </section>
  );
};

export default ReadyToDive;
