"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("demoAccount.signup");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-[#000000] mx-auto">
      <div className="container">
        <div className="grid grid-cols-12 bg-[#111111] border-2 border-[#1D1D1D] px-8 md:px-14 pt-12 md:pt-0 rounded-[20px]">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <h2 className={`text-[#ffffff] text-2xl md:text-4xl font-semibold`}>
              {t("title")} <span className="text-[#FED100]">{t("title1")}</span>
            </h2>
            <ul class="list-none flex flex-col md:flex-row gap-4 text-[#c6c6c6] text-base my-5">
              <li>{t("li1")}</li>
              <li>{t("li2")}</li>
              <li>{t("li3")}</li>
            </ul>
            <button
              onClick={handleClick}
              className="py-3 text-[#111111] custom-button md:w-[157px]"
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
              alt="Signup"
              className="w-[230px] md:w-[200px] object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
