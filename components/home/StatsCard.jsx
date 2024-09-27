"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const StatsCard = ({ stats }) => {
  const locale = useLocale();

  return (
    <section className="container">
      <div
        className="bg-[#000000] bg-opacity-30 backdrop-blur-lg text-white py-8 px-4 rounded-xl grid md:grid-cols-4 gap-6 justify-between items-center"
        style={{ backdropFilter: "blur(40px)" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center  border-[#ffffff] border-opacity-[10%] last:border-none ${
              locale === "ar" ? "border-l-2" : "border-r-2"
            } `}
          >
            <div>
              <div className="rounded-[4px] border-1 border-[#FED100] inline-flex items-center text-sm">
                <div className="bg-[#FED100]">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="px-2">
                  <span className="font-semibold text-[#ffffff] text-xs">
                    {stat.title}
                  </span>
                </div>
              </div>
              <h3 className="text-4xl font-bold mt-1">
                {stat.value1}
                <span className="text-2xl">{stat.value2}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCard;
