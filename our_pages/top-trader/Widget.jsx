"use client";
import { useEffect } from "react";

const Widget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pammratings.primexcapital.com/widgets/assets/js/iframeResizer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container mb-20">
      <iframe
        id="widgetFrame"
        style={{ minWidth: "100%" }}
        src="https://pammratings.primexcapital.com/widgets/ratings?widgetKey=TOM-SEP&theme=light&lang=en"
        scrolling="no"
        frameBorder="0"
      ></iframe>
    </section>
  );
};

export default Widget;
