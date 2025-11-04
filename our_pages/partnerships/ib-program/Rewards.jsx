import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logos/logo-white.webp";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Rewards = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.rewards");

  return (
    <section className="bg-p dark:bg-p-dark py-10">
      <div className="relative container bg-cc dark:bg-cc-dark rounded-xl p-8">
        {/* row 1 */}
        <div className="flex items-start justify-center gap-5 mb-5">
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Iphone.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Iphone.webp"
                }
                alt="Iphone"
                width={100}
                height={100}
                className="w-full h-[389px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward1_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                  {t("reward1_lots")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Text+Heading+BG.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Text+Heading+BG.webp"
                }
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
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
                  }
                  alt="Logo Image"
                  className="mb-2"
                />
                <h2 className="text-4xl text-tm dark:text-tm-dark">
                  {t("main_title1")}
                </h2>
                <h2 className="text-4xl text-tm dark:text-tm-dark mb-2">
                  {t("main_title2")}
                </h2>
                <p className="text-base text-tm dark:text-tm-dark">
                  {t("main_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/1000%24.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/1000%24.webp"
                }
                alt="Cash Reward 1000"
                width={100}
                height={100}
                className="w-full h-[159px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward2_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                  {t("reward2_lots")}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Macbook.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Macbook.webp"
                }
                alt="Macbook"
                width={100}
                height={100}
                className="w-full h-[211px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward3_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
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
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Handshake.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Handshake.webp"
              }
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
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/5000%24.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/5000%24.webp"
                }
                alt="Cash Reward 5000"
                width={100}
                height={100}
                className="w-full h-[219px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward4_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                  {t("reward4_lots")}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/20%2C000.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/20%2C000%24.webp"
                }
                alt="Cash Reward 20000"
                width={100}
                height={100}
                className="w-full h-[165px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward5_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
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
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "kur" ||
                  locale === "fa"
                    ? theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Maldives+Ar.webp"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Maldives+Ar.webp"
                    : theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Maldives.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Maldives.webp"
                }`}
                alt="Maldives"
                width={100}
                height={100}
                className="w-full h-[404px]"
              />

              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward6_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
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
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "kur" ||
                  locale === "fa"
                    ? theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Family+Trip+Ar.webp"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Family+Trip+Ar.webp"
                    : theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Family+Trip.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Family+Trip.webp"
                }`}
                alt="Europe"
                width={100}
                height={100}
                className="w-full h-[404px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                  {t("reward7_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
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
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Mercedes.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Mercedes.webp"
                }
                alt="Mercedes"
                width={100}
                height={100}
                className="w-full h-[300px]"
              />
              <div className="absolute bottom-5 px-5">
                <h3 className="text-lg text-tm dark:text-tm-dark mb-2">
                  {t("reward8_title")}
                </h3>
                <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                  {t("reward8_lots")}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/Bentley.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Bentley.webp"
              }
              alt="Bentley Bentayga"
              width={100}
              height={100}
              className="w-full h-[300px]"
            />
            <div className="absolute bottom-5 px-5">
              <h3 className="text-lg text-tm dark:text-tm-dark mb-2">
                {t("reward9_title")}
              </h3>
              <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                {t("reward9_lots")}
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-dark/1+BHK+Apartment.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-light/Apartment.webp"
              }
              alt="1 BHK Apartment in Dubai"
              width={100}
              height={100}
              className="w-full h-[300px]"
            />
            <div className="absolute bottom-5 px-5">
              <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                {t("reward10_title")}
              </h3>
              <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
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
