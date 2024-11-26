"use client";
import React, { useEffect, useRef, useState } from "react";

const BestMonthWidget = () => {
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
    <section className="py-28 bg-[#000000]">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          Best <span className="text-[#FED100]">this Month</span>
        </h2>
        <div className="bg-[#111111] border-2 border-[#1D1D1D] rounded-2xl px-12 py-12">
          <iframe
            ref={iframeRef}
            id="widgetFrameBestMonth"
            style={{
              minWidth: "100%",
              visibility: "visible",
              borderRadius: "16px",
            }}
            src="https://socialratings.primexcapital.com/widgets/ratings?widgetKey=best_this_month&theme=dark&lang=en"
            scrolling="no"
            frameBorder="0"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BestMonthWidget;
