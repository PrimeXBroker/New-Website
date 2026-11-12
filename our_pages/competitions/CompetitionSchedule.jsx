"use client";
import React from "react";
import { useTranslations } from "next-intl";

const CompetitionSchedule = () => {
  const t = useTranslations("competitions.competitionSchedule");

  const steps = [
    {
      step: t("step1_label"),
      date: t("step1_date"),
      subtitle: t("step1_subtitle"),
      desc: t("step1_desc"),
      desktopAlign: "md:items-start md:text-start",
    },
    {
      step: t("step2_label"),
      date: t("step2_date"),
      subtitle: t("step2_subtitle"),
      desc: t("step2_desc"),
      desktopAlign: "md:items-center md:text-center",
    },
    {
      step: t("step3_label"),
      date: t("step3_date"),
      subtitle: t("step3_subtitle"),
      desc: t("step3_desc"),
      desktopAlign: "md:items-end md:text-end",
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center mb-10">
          {t("title_part1")}
          <span className="text-tm dark:text-tm-dark">{t("title_part2")}</span>
        </h2>
        <div className="bg-cc dark:bg-cc-dark rounded-xl px-10 py-10">
          <div className="hidden md:flex items-center justify-between relative mb-8 px-1">
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-pcp dark:bg-pcp-dark" />
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="relative z-10 w-3.5 h-3.5 rounded-full bg-pcp dark:bg-pcp-dark ring-[5px] ring-tm/20 dark:ring-tm-dark/20 block"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-start text-start ${item.desktopAlign} relative ps-8 md:ps-0`}
              >
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute start-[11px] top-6 bottom-[-32px] w-[2px] bg-tm/40 dark:bg-tm-dark/40" />
                )}
                <div className="md:hidden absolute start-0 top-0.5 w-6 h-6 rounded-full bg-tm/20 dark:bg-tm-dark/20 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-tm dark:bg-tm-dark block" />
                </div>
                <span className="text-xs font-semibold text-pcp dark:text-pcp-dark mb-2.5">
                  {item.step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-tm dark:text-tm-dark leading-tight mb-2">
                  {item.date}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-pcp dark:text-pcp-dark leading-snug mb-2.5 max-w-[260px]">
                  {item.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed max-w-[270px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSchedule;
