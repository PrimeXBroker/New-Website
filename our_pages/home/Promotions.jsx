"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Promotions = ({ promotions }) => {
  const locale = useLocale();
  const t = useTranslations("home.promotions");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#ffffff] font-bold text-center mb-12">
            {t("main_title1")}{" "}
            <span className="text-[#FED100]">{t("main_title2")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {promotions.map((promotion, index) => (
              <div
                key={index}
                className="bg-[#111111] border-2 border-[#1D1D1D] rounded-xl px-6 py-8 flex flex-col justify-between transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-[#ffffff]">
                    {promotion.title}
                    <span className="text-[#FED100]">
                      {promotion.highlight}
                    </span>{" "}
                    <br
                      className={`${
                        locale === "ar" || locale === "fa" || locale === "kur"
                          ? "hidden"
                          : "block"
                      }`}
                    />
                    <span
                      className={
                        promotion.title2 === "Competition"
                          ? "text-[#FED100]"
                          : "text-[#ffffff]"
                      }
                    >
                      {promotion.title2}
                    </span>
                  </h3>
                  <div className="w-[90px] h-[90px] flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      src={promotion.iconSrc}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                </div>
                <p className="text-[#c6c6c6] mb-6 text-sm sm:text-base">
                  {promotion.description}
                </p>
                <Link
                  href={promotion.link}
                  className="font-bold py-3 px-6 rounded-xl transition custom-button"
                >
                  {promotion.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
