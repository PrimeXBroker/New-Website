"use client";
import { useEffect } from "react";

const EconomicCalendarWidget = () => {
  useEffect(() => {
    const widgetContainer = document.getElementById("economicCalendarWidget");
    if (!widgetContainer) return;

    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("data-type", "calendar-widget");
    script.src = "https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13";

    const scriptContent = document.createTextNode(
      JSON.stringify({
        width: "100%",
        height: "100%",
        mode: "2",
        theme: 1,
      })
    );

    script.appendChild(scriptContent);
    widgetContainer.appendChild(script);

    return () => {
      if (widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div className="bg-[#111111] border-2 border-[#1d1d1d] rounded-xl p-4 h-[800px]">
          <div id="economicCalendarWidget" className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendarWidget;
