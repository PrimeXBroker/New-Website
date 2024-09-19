import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const SignUp = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.signup");

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12 bg-[#000000] px-8 md:px-14 pt-12 md:pt-0 rounded-xl mb-8 ">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <h2 className={`text-[#ffffff] text-2xl md:text-4xl font-semibold`}>
            {t("title")}
          </h2>
          <ul class="list-none flex flex-col md:flex-row gap-4 text-[#c6c6c6] text-base my-5">
            <li>{t("li1")}</li>
            <li>{t("li2")}</li>
            <li>{t("li3")}</li>
          </ul>
          <button
            onClick={() =>
              window.open(
                `${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/register"
                    : "https://client.primexbroker.com/en/register"
                }`
              )
            }
            className="py-3 bg-primary text-black rounded-lg hover:bg-white md:w-[157px]"
          >
            {t("start_btn")}
          </button>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/signup.webp"
            width="100"
            height="200"
            alt="banner Image"
            className="w-[230px] md:w-[200px] object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
