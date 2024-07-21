"use client";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 bg-accent dark:bg-secondary"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon size={18} className="text-primary" />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "5px" } : { right: "5px" }}
      ></div>
      <BsSunFill className="ml-auto text-[#FFD000]" size={18} />
    </div>
  );
};

export default ThemeToggle;
