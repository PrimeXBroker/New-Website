import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logos/logo-white.webp";
import { useLocale, useTranslations } from "next-intl";

const Rewards = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.rewards");

  return (
    <section className="bg-[#000000] py-10">
      <div className="relative container bg-[#111111] border-2 border-[#1D1D1D] rounded-xl p-8">
        {/* row 1 */}
        <div className="flex items-start justify-center gap-5 mb-5">
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Desktop-Iphone.svg"
                alt="Iphone"
                width={100}
                height={100}
                className="w-full h-[389px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward1_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward1_lots")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/card.svg"
                alt="Card"
                width={100}
                height={100}
                className="w-full h-[389px]"
              />
              <div className="absolute top-0 w-full flex flex-col justify-center items-center mt-4">
                <Image
                  unoptimized={true}
                  width="120"
                  height="120"
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                  alt="Logo Image"
                  className="mb-2"
                />
                <h2 className="text-4xl text-[#ffffff]">{t("main_title1")}</h2>
                <h2 className="text-4xl text-[#ffffff] mb-2">
                  {t("main_title2")}
                </h2>
                <p className="text-base text-[#ffffff]">{t("main_desc")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Cash+Reward+1000.svg"
                alt="Cash Reward 1000"
                width={100}
                height={100}
                className="w-full h-[159px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward2_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward2_lots")}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Macbook.svg"
                alt="Macbook"
                width={100}
                height={100}
                className="w-full h-[211px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward3_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward3_lots")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[465px] top-[25%]">
          <div>
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Handshake.svg"
              alt="Handshake"
              width={100}
              height={100}
              className="w-full h-[270px]"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex items-start justify-center gap-5 mb-5">
          <div className="flex flex-col items-start gap-5">
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Cash+Reward+5000.svg"
                alt="Cash Reward 5000"
                width={100}
                height={100}
                className="w-full h-[219px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward4_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward4_lots")}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Cash+Reward+20000.svg"
                alt="Cash Reward 20000"
                width={100}
                height={100}
                className="w-full h-[165px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward5_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward5_lots")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={`${
                  locale === "ar" || locale === "fa" || locale === "kd"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Inverse-Maldives-Ar.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Maldives.svg"
                }`}
                alt="Maldives"
                width={100}
                height={100}
                className="w-full h-[404px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward6_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward6_lots")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={`${
                  locale === "ar" || locale === "fa" || locale === "kd"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Inverse-europe-Ar.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Europe.svg"
                }`}
                alt="Europe"
                width={100}
                height={100}
                className="w-full h-[404px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward7_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward7_lots")}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex items-start justify-center gap-5 mb-5">
          <div className="flex flex-col items-start gap-5">
            <div className="relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Mercedes.svg"
                alt="Mercedes"
                width={100}
                height={100}
                className="w-full h-[300px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-[#ffffff] mb-2">
                  {t("reward8_title")}
                </h3>
                <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                  {t("reward8_lots")}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Bentley+Bentayga.svg"
              alt="Bentley Bentayga"
              width={100}
              height={100}
              className="w-full h-[300px]"
            />
            <div className="absolute bottom-5 px-5">
              <h3 className="text-lg text-[#ffffff] mb-2">
                {t("reward9_title")}
              </h3>
              <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                {t("reward9_lots")}
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/1+BHK+Apartment++in+Dubai.svg"
              alt="1 BHK Apartment in Dubai"
              width={100}
              height={100}
              className="w-full h-[300px]"
            />
            <div className="absolute bottom-5 px-5">
              <h3 className="text-lg text-[#ffffff] mb-2">
                {t("reward10_title")}
              </h3>
              <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                {t("reward10_lots")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
