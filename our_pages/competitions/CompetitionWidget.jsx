"use client";
import React from "react";
import { useTheme } from "next-themes";

const LIGHT_WIDGET_URL = "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=light";
const DARK_WIDGET_URL = "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=dark";

const CompetitionWidget = () => {
  const { theme } = useTheme();
  const widgetUrl = theme === "light" ? LIGHT_WIDGET_URL : DARK_WIDGET_URL;

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
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
