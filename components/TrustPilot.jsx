"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const TrustPilot = () => {
  const t = useTranslations("trustPilot");
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(
          document.querySelector(".trustpilot-widget"),
          true
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      document
        .querySelectorAll('script[src*="trustpilot"]')
        .forEach((s) => s.remove());
    };
  }, [pathname]);

  return (
    <div
      className="trustpilot-widget h-[52px]"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="62c98ee92471e7d05580c3ac"
      data-style-height="100%"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/primexbroker.com"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
};

export default TrustPilot;
