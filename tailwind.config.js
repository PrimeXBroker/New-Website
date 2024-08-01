const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  // important: true,
  content: [
    "./our_pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "up-down": "upDown 2s ease-in-out infinite",
        "float-bob": "floatBob 2s linear infinite",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatBob: {
          "0%, 100%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFD000",
        secondary: "#3F3F3E",
        accent: "#E4E5E6",
        neutral: "#315d89",
        dark: "#3F3F3E",
        medium: "E4E5E6",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        kufi: ["var(--font-kufi)"],
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
