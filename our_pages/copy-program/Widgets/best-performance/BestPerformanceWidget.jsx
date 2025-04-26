"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const BestPerformanceWidget = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.bestPerformanceWidget");
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
    <section className="bg-p dark:bg-p-dark py-28">
      <div className="container  ">
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
                ? `https://socialratings.primexcapital.com/widgets/ratings?widgetKey=Best_performance&theme=dark&lang=${locale}`
                : `https://socialratings.primexcapital.com/widgets/ratings?widgetKey=Best_performance&theme=light&lang=${locale}`
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
