import React from "react";
import { useTranslations, useLocale } from "next-intl";

const CEOMessage = () => {
  const locale = useLocale();
  const t = useTranslations("about.ceoMessage");

  return (
    <section className="bg-[#000000]">
      <div className="container">
        <div
          className="p-8 rounded-[20px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Background+CEO+Message.webp')",
          }}
        >
          <p className="text-lg text-[#ffffff]">{t("message")}</p>
          <p
            className={`text-[#ffffff] font-semibold mt-4 text-2xl ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "text-left"
                : "text-right"
            }`}
          >
            {t("title")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
