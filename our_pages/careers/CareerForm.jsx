import React from "react";
import { useTranslations } from "next-intl";

const CareerForm = () => {
  const t = useTranslations("careers.careersForm");

  return (
    <section className="bg-accent py-20">
      <div className="container py-16 max-w-xl flex flex-col gap-2">
        <h1
          className="text-2xl md:text-3xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          {t("title")}
        </h1>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          {t("description")}
        </p>
      </div>
    </section>
  );
};

export default CareerForm;
