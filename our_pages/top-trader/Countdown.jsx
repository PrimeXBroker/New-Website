"use client";
import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

const Countdown = () => {
  const locale = useLocale();
  const t = useTranslations("topTrader.countdown");
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("September 1, 2024 00:01:00 UTC+4").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeGroups = [
    {
      label: "HOURS",
      digits: timeLeft.hours.split(""),
    },
    {
      label: "MINUTES",
      digits: timeLeft.minutes.split(""),
    },
    {
      label: "SECONDS",
      digits: timeLeft.seconds.split(""),
    },
  ];

  return (
    <section className="mt-20">
      <h1 className="sectionHeading px-8 md:px-0 mb-8">{t("title")}</h1>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4 xs:flex-row xs:gap-2 sm:gap-8">
          {timeGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`flex flex-col items-center ${
                groupIndex < timeGroups.length - 1
                  ? "mr-3 sm:mr-6 md:mr-10"
                  : ""
              } xs:flex-1 xs:flex xs:flex-col xs:items-center`}
            >
              <div className="flex gap-2">
                {group.digits.map((digit, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center rounded-lg sm:w-[70px] sm:h-[110px] md:w-[80px] md:h-[120px] lg:w-[110px] lg:h-[150px] xs:w-[40px] xs:h-[60px]`}
                    style={{
                      backgroundImage:
                        "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/countdown.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span
                      className={`text-5xl md:text-6xl lg:text-7xl xs:text-3xl font-bold text-secondary ${
                        locale === "ar"
                          ? "mr-[5px] sm:mr-[8px]"
                          : "mr-[5px] sm:mr-[8px]"
                      }`}
                    >
                      {digit}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-2 xs:mt-1">
                {group.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
