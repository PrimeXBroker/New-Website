"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("copyProgram.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title_part1")} <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark my-2 inline-block md:my-1 lg:my-2">
                  {t("title_part2")}
                </span>
                <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark mb-2 inline-block md:mb-1 lg:mb-2">
                  {t("title_part3")}
                  <span className={`text-pcp dark:text-pcp-dark`}>
                    {t("title_part4")}{" "}
                  </span>
                </span>
                <span
                  className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark mb-2 inline-block md:mb-1 lg:mb-2 ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2 md:mr-2"
                      : "ml-2 md:ml-0"
                  }`}
                >
                  {t("title_part5")}
                </span>
              </h1>
              <p className="text-ts dark:text-ts-dark mt-4 w-full lg:w-[80%]">
                {t("description")}
              </p>
            </div>
            <div className="lg:mt-8 flex justify-center md:justify-start">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Hero-Image-Copy-Program.webp"
                width="100"
                height="100"
                alt="Copy Program Hero"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
