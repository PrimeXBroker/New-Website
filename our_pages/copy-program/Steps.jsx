"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Steps = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.steps");

  const steps = [
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Steps+1.webp",
      alt: "Step 1",
      label: t("step1"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Steps+2.webp",
      alt: "Step 2",
      label: t("step2"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Steps+3.webp",
      alt: "Step 3",
      label: t("step3"),
    },
  ];

  return (
    <section className="bg-[#000000] py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          <span className="text-[#FED100]">{t("title_part1")}</span>{" "}
          {t("title_part2")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#111111] border-2 border-[#1D1D1D] rounded-2xl text-[#ffffff] px-10 lg:px-14 py-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center group mb-1 sm:mb-2 md:mb-0">
              <Image
                unoptimized={true}
                src={step.src}
                alt={step.alt}
                width={128}
                height={128}
                className="mx-auto w-full group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold mt-6 group-hover:text-[#fed100]">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
