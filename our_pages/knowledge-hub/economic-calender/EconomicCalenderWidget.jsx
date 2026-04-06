"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useParams } from "next/navigation";

const EconomicCalendarWidget = () => {
  const { theme } = useTheme();
  const params = useParams();
  const locale = params?.locale || "en";
  useEffect(() => {
    const widgetContainer = document.getElementById("economicCalendarWidget");
    if (!widgetContainer) return;

    widgetContainer.innerHTML = "";

    if (window.calendarCompletedID) {
      window.calendarCompletedID = [];
    }

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
        lang: locale,
        ...(theme === "dark" && { theme: 1 }),
      }),
    );

    script.appendChild(scriptContent);
    widgetContainer.appendChild(script);

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, [theme, locale]);

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-xl p-4 h-[800px]">
          <div id="economicCalendarWidget" className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendarWidget;
