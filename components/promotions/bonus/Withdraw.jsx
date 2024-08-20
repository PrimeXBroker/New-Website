import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Withdraw = () => {
  const locale = useLocale();
  const t = useTranslations("bonus_landing.withdraw");

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10 2xl:gap-28 justify-center">
        {/* Withdrawable */}
        <div className="bg-secondary flex items-center p-6 rounded-3xl relative w-full max-w-[340px] mx-auto mb-8 xl:mb-0">
          <div className="absolute left-[-84px] sm:left-[-64px] md:left-[-72px]">
            <img
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20_deposit_bonus/withdraw.webp"
              alt="Withdrawable"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]"
            />
          </div>
          <div
            className={`ml-[80px] ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-primary font-bold text-lg">{t("title_1")}</h3>
            <p className="text-white">{t("para_1")}</p>
          </div>
        </div>

        {/* Tradable */}
        <div className="bg-primary flex items-center p-6 rounded-3xl relative w-full max-w-[340px] mx-auto mb-8 xl:mb-0">
          <div className="absolute left-[-52px] sm:left-[-42px] md:left-[-52px]">
            <img
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20_deposit_bonus/tradeable.webp"
              alt="Tradable"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]"
            />
          </div>
          <div
            className={`ml-[70px] ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-secondary font-bold text-lg">{t("title_2")}</h3>
            <p className="text-secondary">{t("para_2")} </p>
          </div>
        </div>

        {/* Losable */}
        <div className="bg-secondary flex items-center p-6 rounded-3xl relative w-full max-w-[340px] mx-auto">
          <div className="absolute left-[-70px] sm:left-[-50px] md:left-[-64px]">
            <img
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20_deposit_bonus/losable.webp"
              alt="Losable"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]"
            />
          </div>
          <div
            className={`ml-[70px] ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-primary font-bold text-lg">{t("title_3")}</h3>
            <p className="text-white">{t("para_3")} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;
