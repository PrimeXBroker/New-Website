import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from "@next/font/local";
import Cookies from "@/components/Cookies";
import "aos/dist/aos.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ChatWidget from "@/components/ChatWidget";
import { FacebookPixelEvents } from "@/utilities/pixelEvent";
import FallbackLoader from "@/components/LoadingSpinner";
import Head from "next/head";
import Script from "next/script";
import GoogleAnalytics from "@/utilities/GoogleAnalytics";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-montserrat",
});

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: t("home.metaData.title"),
    description: t("home.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}

export default async function layout({ children, params: { locale } }) {
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html className={`${montserrat.variable}`} lang={locale}>
      <GoogleAnalytics />
      <body>
        <Suspense fallback={<FallbackLoader />}>
          <div dir={direction}>
            <NextUIProvider>
              <NextIntlClientProvider messages={messages}>
                <Header locale={locale} />
                {children}
                <Toaster
                  toastOptions={{
                    duration: 5000,
                  }}
                />
                <FacebookPixelEvents />
                <Footer />
                <Cookies />
              </NextIntlClientProvider>
            </NextUIProvider>
          </div>
          <ChatWidget />
        </Suspense>
        <Script id="gtm" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',''GTM-M3KSBZMM'');
      `}
    </Script>
    <noscript
        dangerouslySetInnerHTML={{
        __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3KSBZMM"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} 
    	/>
      </body>
    </html>
  );
}
