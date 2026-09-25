import "../public/venobox/venobox.css";
import "../public/venobox/magnific-popup.css";
import localFont from "next/font/local";
import { Suspense } from "react";
import Script from "next/script";
import FallbackLoader from "@/components/LoadingSpinner";
import RedirectionHandler from "@/components/common/RedirectionHandler";
import MousePartialEffect from "@/components/common/MousePartialEffect";
import ReduxProvider from "@/redux/ReduxProvider";
import Providers from "@/components/Providers";
import { getMessages, getLocale } from "next-intl/server";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-montserrat",
});

const portada = localFont({
  src: [
    {
      path: "../public/fonts/Portada/Portada-Light.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Portada/Portada-Regular.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Portada/Portada-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Portada/Portada-Extrabold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-portada",
});

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction =
    locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa"
      ? "rtl"
      : "ltr";

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
          id="openai-chatgpt-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"L2erm1UtZoSNoSF5BcV79Q",debug:true});`,
          }}
        />
      </head>
      <body>
        <ReduxProvider>
          <RedirectionHandler />
          <Suspense fallback={<FallbackLoader />}>
            <Providers
              messages={messages}
              locale={locale}
              direction={direction}
            >
              <Suspense fallback={null}>
                <MousePartialEffect />
              </Suspense>
              {children}
            </Providers>
          </Suspense>
        </ReduxProvider>
        <Script id="gtm" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KMBDB8LD');
  `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMBDB8LD"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
