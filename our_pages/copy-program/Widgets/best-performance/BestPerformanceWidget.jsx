"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const BestPerformanceWidget = () => {
  const locale = useLocale();
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
    <section className="bg-[#000000] py-28">
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
            src={`https://socialratings.primexcapital.com/widgets/ratings?widgetKey=social_platform_ratings&theme=dark&lang=${locale}`}
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
