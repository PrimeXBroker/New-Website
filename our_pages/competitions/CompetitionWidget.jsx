"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const WIDGET_ORIGIN = "https://main.d2q4mq7ofspgp.amplifyapp.com";
const LIGHT_WIDGET_URL = `${WIDGET_ORIGIN}/?theme=light`;
const DARK_WIDGET_URL = `${WIDGET_ORIGIN}/?theme=dark`;

const HEIGHT_MESSAGE_TYPE = "competition-widget:height";

const parseHeight = (data) => {
  if (typeof data === "number") return data;
  if (typeof data === "string") {
    const value = Number.parseFloat(data);
    return Number.isFinite(value) ? value : null;
  }
  if (data && typeof data === "object") {
    const value = [data.height, data.scrollHeight, data.iframeHeight].find(
      (item) => typeof item === "number",
    );
    return typeof value === "number" ? value : null;
  }
  return null;
};

const CompetitionWidget = () => {
  const t = useTranslations("competitions.widget");
  const { theme } = useTheme();
  const iframeRef = useRef(null);
  const [widgetHeight, setWidgetHeight] = useState(null);
  const widgetUrl = theme === "light" ? LIGHT_WIDGET_URL : DARK_WIDGET_URL;

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== WIDGET_ORIGIN) return;

      const { data } = event;
      if (
        data &&
        typeof data === "object" &&
        data.type &&
        data.type !== HEIGHT_MESSAGE_TYPE
      ) {
        return;
      }

      const height = parseHeight(data);
      if (!height || height <= 0) return;

      setWidgetHeight(Math.ceil(height));
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          {t("title_part1")}
          <span className="text-pcp dark:text-pcp-dark">
            {t("title_part2")}
          </span>
        </h2>
        <iframe
          ref={iframeRef}
          id="widgetFrame"
          src={widgetUrl}
          title="Competition widget"
          className="block w-full"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: widgetHeight ? `${widgetHeight}px` : "100vh",
            border: 0,
            overflow: "hidden",
          }}
          scrolling={widgetHeight ? "no" : "auto"}
          frameBorder="0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default CompetitionWidget;
