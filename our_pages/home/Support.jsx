import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Support = () => {
  const locale = useLocale();
  const t = useTranslations("home.customerCare");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div className="bg-[#111111] pt-5 md:pt-0 text-[#ffffff] border-2 border-[#1D1D1D] px-8 rounded-[20px] flex flex-col lg:flex-row justify-between items-center">
          <div className="space-y-5 md:space-y-8 lg:space-y-5 py-6 lg:py-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-start md:text-center lg:text-start">
              {t("customer_care_title1")}{" "}
              <span className="text-yellow-400">
                {t("customer_care_title2")}
              </span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2 group">
                <div className="w-[52px] h-[52px]">
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/7-support-new.svg"
                    alt="Support Team"
                    width={300}
                    height={150}
                    className="w-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">
                    {t("customer_care_li1_title")}
                  </p>
                  <p className="text-xs sm:text-sm text-[#c6c6c6]">
                    {t("customer_care_li1_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-[52px] h-[52px]">
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/multilingual-new.svg"
                    alt="Multilingual"
                    width={300}
                    height={150}
                    className="w-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">
                    {t("customer_care_li2_title")}
                  </p>
                  <p className="text-xs sm:text-sm text-[#c6c6c6">
                    {t("customer_care_li2_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-start md:text-center lg:text-start">
              <Link
                href={`/${locale}/contact`}
                className="py-2 px-6 font-semibold w-full md:w-auto custom-button"
              >
                {t("customer_care_btn")}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Support+Image.webp"
              alt="Support Team"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
