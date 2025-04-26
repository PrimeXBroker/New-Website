"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const CustomerServices = () => {
  const locale = useLocale();
  const t = useTranslations("whyChooseUs.customerServices");

  const steps = [
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-1.webp",
      alt: "Step 1",
      label: t("step1"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-2.webp",
      alt: "Step 2",
      label: t("step2"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-3.webp",
      alt: "Step 3",
      label: t("step3"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-4.webp",
      alt: "Step 4",
      label: t("step4"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-5.webp",
      alt: "Step 5",
      label: t("step5"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/dedicated-service-6.webp",
      alt: "Step 6",
      label: t("step6"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          <span className="text-[#FED100]">{t("title_part1")}</span>{" "}
          {t("title_part2")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-cc dark:bg-cc-dark rounded-2xl text-tm dark:text-tm-dark px-10 lg:px-14 pt-10">
          {steps.map((step, index) => (
            <div key={index} className="group mb-6 md:mb-10">
              <Image
                unoptimized={true}
                src={step.src}
                alt={step.alt}
                width={128}
                height={128}
                className="mx-auto w-full"
              />
              <p className="text-lg sm:text-base lg:text-xl font-semibold mt-6">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServices;
