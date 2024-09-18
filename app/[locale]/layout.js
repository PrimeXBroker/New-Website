import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
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
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
    },
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

const portada = localFont({
  src: [
    {
      path: "../../public/fonts/Portada/Portada-Light.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Portada/Portada-Regular.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Portada/Portada-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Portada/Portada-Extrabold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-portada",
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
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("home.metaData.title"),
      description: t("home.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/home-metadata.webp",
          width: 1200,
          height: 630,
          alt: t("home.metaData.title"),
        },
      ],
    },
  };
}

export default async function layout({ children, params: { locale } }) {
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      className={`${
        locale === "ar-AE"
          ? `${portada.variable} font-portada`
          : `${montserrat.variable} font-montserrat`
      } `}
      lang={locale}
    >
      <Head>
        <link
          rel="preload"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_ar.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_en.webp"
          as="image"
        />
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://www.primexcapital.com/cn"
          hreflang="cn"
        />
        <link
          rel="alternate"
          href="https://www.primexcapital.com/ar"
          hreflang="ar"
        />
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en"
          hreflang="x-default"
        />
         <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "o4jb4ltpwi");`,
          }}
        />
        
      </Head>
      <GoogleAnalytics />
      <body>
        <Suspense fallback={<FallbackLoader />}>
          <div dir={direction}>
            <NextUIProvider>
              <NextIntlClientProvider messages={messages}>
                <DesktopHeader locale={locale} />
                <MobileHeader locale={locale} />
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
        <Script
          id="tiktok-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('CRDDOLRC77U00RLLNCIG');
              ttq.page();
            }(window, document, 'ttq');
          `,
          }}
        />
        <Script id="gtm" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M3KSBZMM');
      `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3KSBZMM"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Script
          id="linkedin-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "7629401";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7629401&fmt=gif" />`,
          }}
        />
        <Script
          id="gtag-send-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Helper function to delay opening a URL until a gtag event is sent.
              // Call it in response to an action that should navigate to a URL.
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                gtag('event', 'GA4', {
                  'event_callback': callback,
                  'event_timeout': 2000,
                  // <event_parameters>
                });
                return false;
              }
            `,
          }}
        />
       
      </body>
    </html>
  );
}
