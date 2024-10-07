"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const StatsCard = ({ stats }) => {
  const locale = useLocale();
  const t = useTranslations("newHomePage.hero");

  return (
    <section className="container relative md:mt-[202px] lg:mt-[206px]">
      <div
        className="border-[#1D1D1D] border-2 md:border-0 bg-[#111111] md:bg-[#000000] md:bg-opacity-30 backdrop-blur-lg text-white py-8 px-4 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-6 justify-between items-center"
        style={{ backdropFilter: "blur(40px)" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col md:items-center justify-center  border-[#ffffff] border-opacity-[10%] last:border-none px-20 pb-4 md:px-0 md:pb-0 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "border-b-2 md:border-b-0 md:border-l-2"
                : "border-b-2 md:border-b-0 md:border-r-2"
            } `}
          >
            <div>
              <div className="rounded-[4px] border-1 border-[#FED100] inline-flex items-center text-sm">
                <div className="bg-[#FED100]">
                  <Image
                    unoptimized={true}
                    src={stat.icon}
                    alt={stat.title}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="px-2">
                  <span className="font-semibold text-[#ffffff] text-xs md:text-[10px] lg:text-xs">
                    {stat.title}
                  </span>
                </div>
              </div>
              <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold mt-1">
                {stat.value1}
                <span className="text-xl md:text-lg lg:text-2xl">
                  {stat.value2}
                </span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCard;
