import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const SignUp = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.signup");

  return (
    <>
      <section
        className="container bg-center bg-cover ps-0 md:ps-14 md:h-[250px] lg:h-[234px] mt-20 relative"
        style={
          locale === "ar"
            ? {
                backgroundImage:
                  "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-signup-bg-ar.webp')",
              }
            : {
                backgroundImage:
                  "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-signup-bg-en.webp')",
              }
        }
      >
        <div className="grid grid-cols-12 pt-12 pb-8 md:pt-0 md:pb-0">
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex justify-center relative md:hidden mt-[-104px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/sign-up.webp"
              width="300"
              height="300"
              alt="banner Image"
              className="w-[350px]"
            />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col md:pt-[60px] ">
            <h1
              className={`text-secondary text-2xl md:text-3xl font-semibold mb-5 ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title")}
            </h1>
            <p
              className={`text-secondary md:max-w-xl  text-base font-[500] ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("desc-p1")}{" "}
              <span className="font-semibold">{t("desc_p2")}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 md:flex justify-center mt-7 md:mt-0 relative bottom-[50px] hidden">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/sign-up.webp"
              width="300"
              height="300"
              alt="banner Image"
              className="w-[350px]"
            />
          </div>
        </div>
      </section>
      <section className="container bg-accent ps-0 md:ps-14 mb-8 py-4">
        <div className="grid grid-cols-12 pb-8 md:pt-0 md:pb-0">
          <div className="col-span-12 flex flex-col justify-center">
            <h1
              className={`text-secondary text-lg font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("participate_title")}
            </h1>
            <p
              className={`text-secondary text-base font-[500] ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("participate_desc")}
              <span className="ml-1">
                <Link
                  href=""
                  className="font-semibold underline hover:text-primary"
                >
                  {t("participate_tc")}
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
