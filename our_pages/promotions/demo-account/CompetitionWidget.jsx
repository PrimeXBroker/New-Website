"use client";
import React, { useEffect, useRef, useState } from "react";

const CompetitionWidget = () => {
  const iframeRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

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
    <section className="pt-20 bg-[#000000]">
      <div className="container">
        <iframe
          ref={iframeRef}
          id="widgetFrame"
          style={{ minWidth: "100%", visibility: "visible" }}
          src="https://ratings.primexcapital.com/widgets/ratings?widgetKey=fund-oct&theme=dark&lang=en"
          scrolling="no"
          frameBorder="0"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </section>
  );
};

export default CompetitionWidget;
