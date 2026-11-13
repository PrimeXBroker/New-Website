"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const LIGHT_WIDGET_URL =
  "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=light";
const DARK_WIDGET_URL = "https://main.d2q4mq7ofspgp.amplifyapp.com/?theme=dark";

const CompetitionWidget = () => {
  const t = useTranslations("competitions.widget");
  const { theme } = useTheme();
  const iframeRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const widgetUrl = theme === "light" ? LIGHT_WIDGET_URL : DARK_WIDGET_URL;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ratings.primexcapital.com/widgets/assets/js/iframeResizer.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      if (iframeRef.current) {
        window.iFrameResize(
          { heightCalculationMethod: "max", checkOrigin: false },
          iframeRef.current,
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleIframeLoad = () => {
    if (isScriptLoaded && iframeRef.current) {
      window.iFrameResize(
        { heightCalculationMethod: "max", checkOrigin: false },
        iframeRef.current,
      );
    }
  };

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
            minWidth: "100%",
            visibility: "visible",
            border: 0,
            overflow: "hidden",
          }}
          loading="lazy"
          onLoad={handleIframeLoad}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default CompetitionWidget;
