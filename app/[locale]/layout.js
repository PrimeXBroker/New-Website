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
import ChatWidget from "@/components/ChatWidget";
import { FacebookPixelEvents } from "@/utilities/pixelEvent";
import FallbackLoader from "@/components/LoadingSpinner";
import Script from "next/script";
import GoogleAnalytics from "@/utilities/GoogleAnalytics";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import VideoPopup from "@/components/VideoPopup";
import ImageView from "@/components/ImageView";
import { GetLocation } from "@/components/GetLocation";

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

const hreflangLocales = ["en", "ar", "fa", "kur", "tr"];

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  const userCountry = await GetLocation();
  const isInUAE = userCountry === "AE";

  const descriptions = {
    en: `Trade Forex, stocks, indices, CFDs, and metals online${
      isInUAE ? " UAE" : ""
    } with PrimeX Capital. Access top trading tools and insights. Learn more and start trading today!`,
    ar: `تداول الفوركس والأسهم والمؤشرات وعقود الفروقات والمعادن عبر الإنترنت${
      isInUAE ? " في الإمارات" : ""
    } مع برايم اكس كابيتال. احصل على أفضل الأدوات المالية والرؤى. تعلم المزيد وابدأ التداول اليوم!`,
    cn: `通过PrimeX Capital在线交易外汇、股票、指数、差价合约和金属${
      isInUAE ? " UAE" : ""
    }。获取顶级交易工具和见解。了解更多并立即开始交易！`,
  };

  const description = descriptions[locale] || descriptions["en"];

  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: t("home.metaData.title"),
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("home.metaData.title"),
      description: description,
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
  const detectLanguage = () => {
    if (locale === "ar" || locale === "fa" || locale === "kur") {
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
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/forex`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/forex"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/metals`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/metals"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/indices`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/indices"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/commodities`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/commodities"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/stocks`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/stocks"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/crypto`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/crypto"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/platform/mt5-platform`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/platform/mt5-platform"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/account-types`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/account-types"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/ib-program`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/ib-program"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/regional-partner`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/regional-partner"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/grey-label-partner`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/grey-label-partner"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/liquidity-providing`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/liquidity-providing"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/academy`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/academy"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/why-choose-us`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/why-choose-us"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/about`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/about"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/contact`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/contact"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/awards`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/awards"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/careers`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/careers"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/client-agreement`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/client-agreement"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/terms`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/terms"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/policy-statement`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/policy-statement"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/risk-disclosure`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/risk-disclosure"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/complaints-management`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/complaints-management"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/cookie-policy`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/cookie-policy"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/policy-of-aml`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/policy-of-aml"
          hreflang="x-default"
        />
        {hreflangLocales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${lng}/social-trading`}
            hreflang={lng}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.primexcapital.com/en/social-trading"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://primexcapital.com/en/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://primexcapital.com/ar/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
          hreflang="ar"
        />
        <link
          rel="alternate"
          href="https://primexcapital.com/en/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
          hreflang="x-default"
        />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "o4jb4ltpwi");`,
          }}
        />
      </head>
      <GoogleAnalytics />
      <body>
        <Suspense fallback={<FallbackLoader />}>
          <div dir={direction}>
            <NextUIProvider>
              <NextIntlClientProvider messages={messages}>
                <ImageView />
                <VideoPopup />
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
