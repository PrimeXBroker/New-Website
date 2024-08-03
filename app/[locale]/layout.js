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
import Head from "next/head";
import Script from "next/script";

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
// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }
export default async function layout({ children, params: { locale } }) {
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      className={`direction_layout ${montserrat.variable}`}
      lang={locale}
      dir={direction}
    >
      {/* <Head>
        <link rel="stylesheet" href="https://primexbroker.online/static/css/main.css" />
      </Head> */}
      <body className="direction_layout">
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <Suspense fallback={null}>
              {children}
              <Toaster
                toastOptions={{
                  duration: 5000,
                }}
              />
            </Suspense>
            <Footer />
            <Cookies />
          </NextIntlClientProvider>
        </NextUIProvider>

        <link
          rel="stylesheet"
          href="https://primexbroker.online/static/css/main.css"
        />
        {/* <div id="chat_app"></div> */}

        <Script
          src="https://primexbroker.online/static/js/main.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
