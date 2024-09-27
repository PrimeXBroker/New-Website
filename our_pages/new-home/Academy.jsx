"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Academy = ({ academy }) => {
  const locale = useLocale();
  const c = useTranslations("newHomePage.academy");

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {academy.map((acc) => (
          <div
            key={acc.id}
            className="bg-[#111111] p-6 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group"
          >
            <Link href={`https://primexcapital.com/${locale}/academy`}>
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
                    <h3 className="text-lg sm:text-xl font-semibold text-[#ffffff] group-hover:text-[#FED100]">
                      {acc.title1} <br />
                      {acc.title2}
                    </h3>
                  </div>
                </div>
                <Link href={`https://primexcapital.com/${locale}/academy`}>
                  <div className="w-[33px] h-[33px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Arrow.svg"
                      alt="Trustpilot"
                      width={100}
                      height={100}
                      className={acc.title}
                    />
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
