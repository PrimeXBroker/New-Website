"use client";
import React, { useEffect } from "react";

const CompetitionWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ratings.primexcapital.com/widgets/assets/js/iframeResizer.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container mb-12">
      <iframe
        id="widgetFrame"
        style={{ minWidth: "100%" }}
        src="https://ratings.primexcapital.com/widgets/ratings?widgetKey=fund-oct&theme=light&lang=en"
        scrolling="no"
        frameBorder="0"
        onLoad={() => {
          if (window.iFrameResize) {
            window.iFrameResize(
              { heightCalculationMethod: "max", checkOrigin: false },
              "#widgetFrame"
            );
          }
        }}
      ></iframe>
    </section>
  );
};

export default CompetitionWidget;
