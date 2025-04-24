"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        enableSystem={true}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
