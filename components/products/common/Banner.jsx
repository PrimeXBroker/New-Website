"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const Banner = ({
  title_part1,
  title_part2,
  title_part3,
  title_part4,
  title_part5,
  imgUrl,
}) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("productsPageCommon");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center overflow-hidden">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-5 md:mt-4 lg:mt-5 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {title_part1} <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark my-2 inline-block md:my-1 lg:my-2">
                  {title_part2}
                </span>
                <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark mb-2 inline-block md:mb-1 lg:mb-2">
                  {title_part3 ? <span>{title_part3}</span> : ""}
                  <span className="text-pcp dark:text-pcp-dark">
                    {title_part4}
                  </span>
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark">
                  {title_part5}
                </span>
              </h1>
            </div>
            <div
              className={`mt-10 md:mt-9 lg:mt-10 flex ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "justify-center md:justify-start"
                  : "justify-center md:justify-start"
              }`}
            >
              <CustomYellowButton
                title={t("sign_up_btn")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 mt-8 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <Image
                unoptimized={true}
                src={imgUrl}
                width="100"
                height="100"
                alt="Product Image"
                className={`w-full sm:w-[70%] ms:w-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
