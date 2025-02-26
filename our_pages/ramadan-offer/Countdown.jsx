"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useTranslations, useLocale } from "next-intl";

const targetDate = dayjs()
  .add(32, "days")
  .add(22, "hours")
  .add(33, "minutes")
  .add(1, "second");

const Countdown = () => {
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.countdown");
  const [timeLeft, setTimeLeft] = useState(targetDate.diff(dayjs(), "second"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.diff(dayjs(), "second"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="bg-[#000000] pt-4 md:pt-14">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#ffffff] font-semibold">
              {t("title1")}
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FED100] font-semibold mt-1 lg:mt-2">
              {t("title2")}
            </h2>
          </div>
          <div className="flex gap-2 sm:gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mt-8 lg:mt-0">
            <div className="text-center">
              <span className="text-5xl sm:text-6xl font-semibold">
                {String(days).padStart(2, "0")}
              </span>
              <p className="text-xs sm:text-sm font-medium">{t("days")}</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span className="text-5xl sm:text-6xl font-semibold">
                {String(hours).padStart(2, "0")}
              </span>
              <p className="text-xs sm:text-sm font-medium">{t("hours")}</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span className="text-5xl sm:text-6xl font-semibold">
                {String(minutes).padStart(2, "0")}
              </span>
              <p className="text-xs sm:text-sm font-medium">{t("minutes")}</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span className="text-5xl sm:text-6xl font-semibold">
                {String(secs).padStart(2, "0")}
              </span>
              <p className="text-xs sm:text-sm font-medium">{t("seconds")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
