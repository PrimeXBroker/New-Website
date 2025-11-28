"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Hero = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("hammurabiAccount.banner");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark md:mt-0 lg:my-1">
                {t("title1")}
              </h1>
              <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title2")}
              </h2>
              <p className="text-pcp dark:text-pcp-dark my-4 text-xl">
                {t("subtitle")}
              </p>
              <p className="text-tm dark:text-ts-dark">{t("description")}</p>
            </div>
            <div className="mt-8">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/hammurabic-account/Hero+Image.png"
                width="100"
                height="100"
                alt="Hammurabi account"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
