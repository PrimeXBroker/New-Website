import { useTranslations } from "next-intl";
import React from "react";

const JoinNow = () => {
  const t = useTranslations("bonusPage.bonusJoinNow");

  return (
    <section className="bg-[#030303] py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#F9F9F9] leading-tight">
          {t("title1")}
          <br />
          {t("title2")}
        </h2>
        <p className="text-2xl font-semibold text-[#FED100] mt-4 mb-10">
          {t("subtitle")}
        </p>
        <div className="text-center">
          <button className="px-12 py-4 font-semibold w-auto mx-auto text-lg !rounded-lg flex items-center justify-center gap-3 custom-button-yellow-white">
            {t("btnTxt")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
