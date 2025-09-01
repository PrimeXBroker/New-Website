"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const BestPerformanceWidget = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.bestPerformanceWidget");
  const w = useTranslations("copyProgram");
  const iframeRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://socialratings.primexcapital.com/widgets/assets/js/iframeResizer.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      if (iframeRef.current) {
        window.iFrameResize(
          { heightCalculationMethod: "max", checkOrigin: false },
          iframeRef.current
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
        iframeRef.current
      );
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          {w("widgetCards.title1")}
          <span className="text-pcp dark:text-pcp-dark">
            {w("widgetCards.title2")}
          </span>
        </h2>
        <div
          className="rounded-2xl p-1"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/widget-gradient.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <iframe
            ref={iframeRef}
            id="widgetFrame"
            style={{
              minWidth: "100%",
              visibility: "visible",
              borderRadius: "16px",
            }}
            src={
              theme === "dark"
                ? `https://socialratings.primexcapital.com/widgets/ratings?widgetKey=CRM1&theme=dark&lang=${locale}`
                : `https://socialratings.primexcapital.com/widgets/ratings?widgetKey=CRM1&theme=light&lang=${locale}`
            }
            scrolling="no"
            frameBorder="0"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BestPerformanceWidget;
