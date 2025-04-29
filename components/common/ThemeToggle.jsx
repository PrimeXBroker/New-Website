"use client";
import { useTheme as useNextTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useNextTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <section className="fixed left-5 bottom-5 flex justify-end items-center z-50">
      <button
        onClick={toggleDarkMode}
        className={`flex items-center justify-center gap-2 h-[32px] sm:h-[40px] p-2 rounded-md font-medium text-xs sm:text-sm
          transition-all ease-in-out duration-[180ms]
          ${
            isDarkMode
              ? "bg-cc text-ts border border-e1 shadow-md"
              : "bg-cc-dark text-ts-dark border border-e1-dark shadow-md"
          }`}
      >
        <span className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-all ease-in-out duration-[180ms]"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={isDarkMode ? "#666666" : "#A6A6A6"}
              strokeWidth="2"
              fill="none"
            />
            <path
              d={
                isDarkMode
                  ? "M12 2 A10 10 0 0 1 12 22 Z"
                  : "M12 2 A10 10 0 0 0 12 22 Z"
              }
              fill={isDarkMode ? "#666666" : "#A6A6A6"}
            />
          </svg>
        </span>
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </section>
  );
}
