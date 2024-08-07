import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-F4WWRCT0TN"
      />

      <Script id="" strategy="lazyOnload">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-F4WWRCT0TN', {
                  page_path: window.location.pathname,
                  });
              `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
