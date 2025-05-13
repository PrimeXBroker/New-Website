"use client";

import { useTheme } from "next-themes";

export default function ProgressIndicator({ step }) {
  const { theme } = useTheme();

  const percentage = (step / 4) * 100;
  const circumference = 2 * Math.PI * 22;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  const mobileCircumference = 2 * Math.PI * 16;
  const mobileStrokeDashoffset =
    mobileCircumference - (mobileCircumference * percentage) / 100;

  return (
    <>
      <div className="hidden sm:flex justify-center items-center">
        <div className="relative w-14 h-14">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="22"
              stroke={theme === "dark" ? "#333333" : "#CCCCCC"}
              strokeWidth="5"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="22"
              stroke={theme === "dark" ? "#FED100" : "#FED100"}
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-tm dark:text-tm-dark">
            {step}
          </div>
        </div>
      </div>
      <div className="flex sm:hidden justify-center">
        <div className="relative w-10 h-10">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="16"
              stroke={theme === "dark" ? "#333333" : "#CCCCCC"}
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="16"
              stroke={theme === "dark" ? "#FED100" : "#FED100"}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={mobileCircumference}
              strokeDashoffset={mobileStrokeDashoffset}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base font-semibold text-tm dark:text-tm-dark">
            {step}
          </div>
        </div>
      </div>
    </>
  );
}
