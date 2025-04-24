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
    <section className="container flex justify-end items-center lg:pb-[27px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[54px]">
      <div id="sun-moon" onClick={toggleDarkMode} className="mr-4"></div>
      {isDarkMode ? (
        <span className="text-ts dark:text-ts-dark relative z-50">
          Dark Mode
        </span>
      ) : (
        <span className="text-ts dark:text-ts-dark relative z-50">
          Light Mode
        </span>
      )}
    </section>
  );
}
