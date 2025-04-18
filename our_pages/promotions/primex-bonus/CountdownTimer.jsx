"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const t = useTranslations("bonusPage.bonusHero");

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-05-20T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-2 sm:gap-9 md:gap-0 lg:gap-6 xl:gap-9 w-full justify-between sm:justify-center md:justify-between lg:justify-center bg-white/20 p-4 border border-white/20 rounded-xl text-white text-2xl lg:text-4xl font-medium uppercase">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-xs lg:text-sm lg:mt-1 font-semibold">
            {t("label_1")}
          </span>
        </div>
        <span className="text-white">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-xs lg:text-sm lg:mt-1 font-semibold">
            {t("label_2")}
          </span>
        </div>
        <span className="text-white">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-xs lg:text-sm lg:mt-1 font-semibold">
            {t("label_3")}
          </span>
        </div>
        <span className="text-white">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-xs lg:text-sm lg:mt-1 font-semibold">
            {t("label_4")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
