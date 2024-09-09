import { useLocale, useTranslations } from "next-intl";
import CompanyStats1 from "./CompanyStats1";
import Link from "next/link";
import ParticlesBackground from "../ParticlesBackground";
import Image from "next/image";

const NewBanner = () => {
  const locale = useLocale();
  const t = useTranslations("home.hero");

  const statsOne = [
    {
      value: 250000,
      description: t("fact_desc1"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 5000,
      description: t("fact_desc2"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 300,
      description: t("fact_desc3"),
      symbol: locale === "en" ? "$" : "",
      prepend: "false",
      suffix: t("fact_million"), // Adding suffix
      dir: locale === "ar" ? "rtl" : "ltr",
    },
    {
      value: 7,
      description: t("fact_desc4"),
      symbol: locale === "en" ? "$" : "",
      prepend: "true",
      suffix: t("fact_no4"),
      dir: locale === "ar" ? "rtl" : "ltr",
    },
  ];
  return (
    <section className="relative sm:h-screen lg:h-[92vh] pt-[38px] sm:pt-[71px] lg:pt-0">
      <div
        className={`container h-[700px] sm:h-screen flex flex-col pt-14 sm:pt-5 z-10 ${
          locale === "ar" ? "lg:pt-[6rem]" : "lg:pt-[10rem]"
        }`}
      >
        <h1
          className={`text-white z-10 text-2xl md:text-[36px] lg:text-[52px] font-semibold mb-5  text-center lg:text-left ${
            locale === "ar"
              ? "lg:text-right md:leading-[60px] lg:text-[42px]"
              : "lg:text-left md:leading-[50px]"
          }`}
          style={{ letterSpacing: "1.2px" }}
        >
          {t("new_title1_1")}
          <span className="text-primary mr-2">
            {t("new_title1_3")} <br className="block" /> {t("new_title1_2")}
          </span>
          {t("new_title1_4")}
          <br className="block" /> {t("new_title1_5")}
        </h1>
        <p
          className={`z-10 text-white text-center lg:text-left text-[15px] md:text-[17px] font-light ${
            locale === "ar" ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {t("new_desc1_1")}{" "}
        </p>
        <div className="z-10 mt-4 sm:mt-10 gap-4  mx-auto lg:mx-0 flex sm:flex-row">
          <Link
            href="https://client.primexbroker.com/en/register"
            className="bg-primary text-secondary rounded-full w-[155px] sm:w-[200px]
           shadow-xl text-center z-10 py-3 px-4 sm:text-[16px] text-[14px]"
          >
            {t("btn1_txt")}
          </Link>
          {/* <Link
            href="https://client.primexbroker.com/en/register"
            className="bg-transparent border border-primary text-white rounded-full w-[155px] sm:w-[200px]
           shadow-xl text-center z-10 py-3 px-4 hover:bg-primary hover:text-secondary 
           transition-all hover:scale-105 duration-300 sm:text-[16px] text-[14px]"
          >
            {t("btn2_txt")}
          </Link> */}
        </div>
        <div className="block lg:hidden z-10 mt-3 sm:mt-0">
          <CompanyStats1 stats={statsOne} />
        </div>
      </div>
      <div className="lg:hidden absolute inset-0 w-full h-full bg-opacity-100 z-0">
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_mobile2.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75} // Adjust as needed, lower for smaller file size
          priority={true} // Ensures it's loaded ASAP
        />
      </div>
      <div className="hidden lg:block absolute inset-0 w-full h-full bg-opacity-100 z-0">
        <Image
          src={
            locale === "ar"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_ar2.webp"
              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_en2.webp"
          }
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75} // Adjust quality as needed
          priority={true} // Prioritize this image for loading
        />
      </div>
      <div
        className="hidden lg:block absolute z-20 bg-center bottom-0 h-[6.5rem] w-full bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/shape.svg')",
        }}
      >
        <CompanyStats1 stats={statsOne} />
      </div>
    </section>
  );
};

export default NewBanner;
