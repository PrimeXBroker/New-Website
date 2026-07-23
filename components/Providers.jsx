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
import { Suspense } from "react";

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

export default function Providers({ children, messages, locale, direction }) {
  return (
    <div dir={direction}>
      <NextUIProvider>
        <NextIntlClientProvider messages={messages} locale={locale}>
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
              <DesktopHeader locale={locale} />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-16 bg-p dark:bg-p-dark animate-pulse md:hidden" />
              }
            >
              <MobileHeader locale={locale} />
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
