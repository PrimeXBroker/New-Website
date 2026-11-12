"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const LIGHT_WIDGET_URL =
  "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=light";
const DARK_WIDGET_URL = "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=dark";

const CompetitionWidget = () => {
  const t = useTranslations("competitions.widget");
  const { theme } = useTheme();
  const widgetUrl = theme === "light" ? LIGHT_WIDGET_URL : DARK_WIDGET_URL;

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          {t("title_part1")}
          <span className="text-pcp dark:text-pcp-dark">
            {t("title_part2")}
          </span>
        </h2>
        <div className="overflow-hidden rounded-2xl border border-cc dark:border-cc-dark">
          <iframe
            src={widgetUrl}
            title="Competition widget"
            className="block w-full h-auto"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CompetitionWidget;
