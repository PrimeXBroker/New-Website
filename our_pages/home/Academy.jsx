"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftUpLine } from "react-icons/ri";

const Academy = ({ academy }) => {
  const locale = useLocale();
  const c = useTranslations("home.academy");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black text-white pt-10 pb-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <span className="text-white">{c("academy_title1")}</span>
          <span className="text-[#FED100]">{c("academy_title2")}</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mt-4 md:w-[540px] mx-auto">
          {c("academy_desc")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {academy.map((acc) => (
          <div
            key={acc.id}
            className="flex-1 min-w-[300px] max-w-full sm:max-w-[350px] p-6 rounded-xl border-2 border-[#1d1d1d] bg-[#111111] hover:shadow-xl hover:border-[#333333] group transition-all duration-500 ease-in-out"
            onMouseEnter={() => setHovered(acc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={`/${locale}/${acc.link}`}>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="w-[58px] h-[58px]">
                    <Image
                      unoptimized={true}
                      src={acc.icon}
                      alt={acc.title}
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#ffffff]">
                      {acc.title1} <br />
                      {acc.title2}
                    </h3>
                  </div>
                </div>
                <Link href={`/${locale}/${acc.link}`}>
                  <div className="w-[33px] h-[33px] rounded-[5.73px] bg-[#1D1D1D] flex justify-center items-center group-hover:bg-[#F9F9F9] transition-all duration-500 ease-in-out">
                    {locale === "ar" || locale === "ps" || locale === "ku" ? (
                      <RiArrowLeftUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === acc.id
                            ? "rotate-[-45deg] text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    ) : (
                      <RiArrowRightUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === acc.id
                            ? "rotate-45 text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-base">
                {acc.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
