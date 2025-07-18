import "./globals.css";
import "../../public/venobox/venobox.css";
import "../../public/venobox/magnific-popup.css";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
import Cookies from "@/components/Cookies";
import "aos/dist/aos.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { FacebookPixelEvents } from "@/utilities/pixelEvent";
import FallbackLoader from "@/components/LoadingSpinner";
import Script from "next/script";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import VideoPopup from "@/components/VideoPopup";
import ImageView from "@/components/ImageView";
import NotificationHandler from "@/components/NotificationHandler";
import RedirectHandler from "@/components/RedirectHandler";
import ThemeToggle from "@/components/common/ThemeToggle";
import ThemeProviderWrapper from "@/context/theme-provider";
import RedirectionHandler from "@/components/common/RedirectionHandler";
import MousePartialEffect from "@/components/common/MousePartialEffect";

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

export default async function layout({ children, params: { locale } }) {
  const messages = await getMessages();
  const detectLanguage = () => {
    if (locale === "ar" || locale === "ps" || locale === "ku") {
      return "rtl";
    } else {
      return "ltr";
    }
  };
  const direction = detectLanguage();

  return (
    <html
      className={`${
        locale === "ar-AE"
          ? `${portada.variable} font-portada`
          : `${montserrat.variable} font-montserrat`
      } `}
      lang={locale}
    >
      <head>
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "o4jb4ltpwi");`,
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-F4WWRCT0TN"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments); }
                gtag('js', new Date());
            
                gtag('config', 'G-F4WWRCT0TN', {
                  'linker': {
                    'domains': ['primexgrp.com', 'primexcapital.com']
                  }
                });
              </script>
            `,
          }}
        />
        <Script
          id="gtag-report-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-11492934355/UxvrCKrc_LMaENOFoegq',
                    'value': 1.0,
                    'currency': 'AED',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <Script
          id="gtag-signup-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                  'send_to': 'AW-11492934355/UxvrCKrc_LMaENOFoegq',
                  'value': 1.0,
                  'currency': 'AED'
              });
            `,
          }}
        />
      </head>
      <body>
        <RedirectionHandler />
        <Suspense fallback={<FallbackLoader />}>
          <div dir={direction}>
            <NextUIProvider>
              <NextIntlClientProvider messages={messages}>
                <ThemeProviderWrapper>
                  <RedirectHandler />
                  <NotificationHandler />
                  <ImageView />
                  <VideoPopup />
                  <MousePartialEffect />
                  <DesktopHeader locale={locale} />
                  <MobileHeader locale={locale} />
                  {children}
                  <ThemeToggle />
                  <Toaster
                    toastOptions={{
                      duration: 5000,
                    }}
                  />
                  <FacebookPixelEvents />
                  <Footer />
                  <Cookies />
                </ThemeProviderWrapper>
              </NextIntlClientProvider>
            </NextUIProvider>
          </div>
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
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
                w.TiktokAnalyticsObject=t;
                var ttq=w[t]=w[t]||[];
                ttq.methods=[
                  "page","track","identify","instances","debug","on","off","once","ready","alias","group",
                  "enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"
                ];
                ttq.setAndDefer=function(t,e){
                  t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}
                };
                for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
                ttq.instance=function(t){
                  for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                  return e
                };
                ttq.load=function(e,n){
                  var r="https://analytics.tiktok.com/i18n/pixel/events.js",
                  o=n&&n.partner;
                  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,
                  ttq._o=ttq._o||{},ttq._o[e]=n||{};
                  n=document.createElement("script");
                  n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
                  e=document.getElementsByTagName("script")[0];
                  e.parentNode.insertBefore(n,e)
                };
                ttq.load('CRDDOLRC77U00RLLNCIG');
                ttq.page();
              }(window, document, 'ttq');`,
          }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1089594275856519');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1089594275856519&ev=PageView&noscript=1"
          />
        </noscript>
        <Script
          id="livechat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__lc = window.__lc || {};
              window.__lc.license = 18955417;
              window.__lc.integration_name = "manual_onboarding";
              window.__lc.product_name = "livechat";
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
            `,
          }}
        />
        <noscript>
          <a href="https://www.livechat.com/chat-with/18955417/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </body>
    </html>
  );
}
