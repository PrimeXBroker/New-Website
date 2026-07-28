"use client";

import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { FacebookPixelEvents } from "@/utilities/pixelEvent";
import VideoPopup from "@/components/VideoPopup";
import ImageView from "@/components/ImageView";
import NotificationHandler from "@/components/NotificationHandler";
import RedirectHandler from "@/components/RedirectHandler";
import dynamic from "next/dynamic";
import Cookies from "@/components/Cookies";
import { Suspense, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DesktopHeader = dynamic(
  () => import("@/components/DesktopHeader"),
  { loading: () => null }
);

const MobileHeader = dynamic(
  () => import("@/components/MobileHeader"),
  { loading: () => null }
);

const Footer = dynamic(
  () => import("@/components/Footer"),
  { loading: () => null }
);

const ThemeToggle = dynamic(
  () => import("@/components/common/ThemeToggle"),
  { loading: () => null }
);

const SUPPORTED_LOCALES = ["en", "ar", "ku", "es", "ps", "pt", "fa"];
const RTL_LOCALES = ["ar", "ps", "ku", "fa"];

export default function Providers({ children, messages: initialMessages, locale: initialLocale, direction: initialDirection }) {
  const pathname = usePathname();

  // Track locale, messages, and direction dynamically so client-side
  // navigation to a different locale updates everything instantly
  // (without requiring a full page refresh).
  const [activeLocale, setActiveLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);
  const [direction, setDirection] = useState(initialDirection);

  useEffect(() => {
    const pathLocale = pathname?.split("/")?.[1];

    if (
      pathLocale &&
      SUPPORTED_LOCALES.includes(pathLocale) &&
      pathLocale !== activeLocale
    ) {
      const newDirection = RTL_LOCALES.includes(pathLocale) ? "rtl" : "ltr";

      // Dynamically import the messages for the new locale
      import(`../messages/${pathLocale}.json`)
        .then((mod) => {
          setMessages(mod.default);
          setActiveLocale(pathLocale);
          setDirection(newDirection);

          // Update the <html> element attributes to match the new locale
          document.documentElement.lang = pathLocale;
          document.documentElement.dir = newDirection;
        })
        .catch(() => {
          // Fallback: keep current locale if import fails
        });
    }
  }, [pathname, activeLocale]);

  return (
    <div dir={direction}>
      <NextUIProvider>
        <NextIntlClientProvider messages={messages} locale={activeLocale}>
          <NextThemesProvider
            defaultTheme="dark"
            attribute="class"
            enableSystem={true}
          >
            <Suspense fallback={null}>
              <RedirectHandler />
            </Suspense>
            <Suspense fallback={null}>
              <NotificationHandler />
            </Suspense>
            <Suspense fallback={null}>
              <ImageView />
            </Suspense>
            <Suspense fallback={null}>
              <VideoPopup />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-16 bg-p dark:bg-p-dark animate-pulse" />
              }
            >
              <DesktopHeader locale={activeLocale} />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-16 bg-p dark:bg-p-dark animate-pulse md:hidden" />
              }
            >
              <MobileHeader locale={activeLocale} />
            </Suspense>

            {children}

            <Suspense fallback={null}>
              <ThemeToggle />
            </Suspense>
            <Suspense fallback={null}>
              <Toaster toastOptions={{ duration: 5000 }} />
            </Suspense>
            <Suspense fallback={null}>
              <FacebookPixelEvents />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-40 bg-p dark:bg-p-dark animate-pulse" />
              }
            >
              <Footer />
            </Suspense>
            <Suspense fallback={null}>
              <Cookies />
            </Suspense>
          </NextThemesProvider>
        </NextIntlClientProvider>
      </NextUIProvider>
    </div>
  );
}
