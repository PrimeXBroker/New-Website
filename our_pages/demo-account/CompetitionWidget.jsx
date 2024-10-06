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
    <section className=" pt-20 bg-[#000000]">
      <div className="container">
        <iframe
          id="widgetFrame"
          style={{ minWidth: "100%" }}
          src="https://ratings.primexcapital.com/widgets/ratings?widgetKey=fund-oct&theme=dark&lang=en"
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
      </div>
    </section>
  );
};

export default CompetitionWidget;
