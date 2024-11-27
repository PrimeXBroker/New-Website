"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const BestPerformanceWidget = ({ iframeBestPerformanceRef }) => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.bestPerformanceWidget");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://socialratings.primexcapital.com/widgets/assets/js/iframeResizer.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      if (iframeBestPerformanceRef.current) {
        window.iFrameResize(
          { heightCalculationMethod: "max", checkOrigin: false },
          iframeBestPerformanceRef.current
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleIframeLoad = () => {
    if (isScriptLoaded && iframeBestPerformanceRef.current) {
      window.iFrameResize(
        { heightCalculationMethod: "max", checkOrigin: false },
        iframeBestPerformanceRef.current
      );
    }
  };

  return (
    <section className="bg-[#000000]">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          {t("title1")}
          <span className="text-[#FED100]">{t("title2")}</span>
        </h2>
        <div
          className="rounded-2xl p-3"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/widget-gradient.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <iframe
            ref={iframeBestPerformanceRef}
            id="widgetFrameBestPerformance"
            style={{
              minWidth: "100%",
              visibility: "visible",
              borderRadius: "16px",
            }}
            src={`https://socialratings.primexcapital.com/widgets/ratings?widgetKey=Best_performance&theme=dark&lang=${locale}`}
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
