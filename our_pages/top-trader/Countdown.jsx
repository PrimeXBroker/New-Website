"use client";
import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

const Countdown = () => {
  const locale = useLocale();
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("September 30, 2024 23:59:59").getTime();

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
    <section className="flex justify-center items-center gap-4 mt-20">
      <div className="flex justify-center items-center gap-8">
        {timeGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex flex-col items-center ${
              groupIndex < timeGroups.length - 1 ? "mr-10" : ""
            }`}
          >
            <div className="flex gap-2">
              {group.digits.map((digit, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center rounded-lg`}
                  style={{
                    backgroundImage:
                      "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/countdown.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "110px",
                    height: "150px",
                  }}
                >
                  <span
                    className={`text-7xl font-bold text-secondary ${
                      locale === "ar" ? "ml-[8px]" : "mr-[8px]"
                    }`}
                  >
                    {digit}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-sm font-semibold mt-2">{group.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
