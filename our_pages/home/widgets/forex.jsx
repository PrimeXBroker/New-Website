"use client";
import React, { useEffect } from "react";

export default function Forex() {
  useEffect(() => {
    const container = document.getElementById(
      "tradingview-widget-container-forex"
    );
    if (container) {
      container.innerHTML = ""; // Clear the container before appending the new script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            description: "",
            proName: "OANDA:AUDCAD",
          },
          {
            description: "",
            proName: "OANDA:AUDCHF",
          },
          {
            description: "",
            proName: "OANDA:AUDJPY",
          },
          {
            description: "",
            proName: "OANDA:AUDNZD",
          },
          {
            description: "",
            proName: "FX:AUDUSD",
          },
          {
            description: "",
            proName: "OANDA:CADCHF",
          },
          {
            description: "",
            proName: "FX:CADJPY",
          },
          {
            description: "",
            proName: "OANDA:CHFJPY",
          },
          {
            description: "",
            proName: "OANDA:EURAUD",
          },
          {
            description: "",
            proName: "OANDA:EURCAD",
          },
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        isTransparent: false,
        displayMode: "compact",
        locale: "en",
      });
      container.appendChild(script);
    }
  }, []);

  return (
    <div
      id="tradingview-widget-container-forex"
      className="tradingview-widget-container-forex"
    >
      {/* The widget will be injected here */}
    </div>
  );
}
