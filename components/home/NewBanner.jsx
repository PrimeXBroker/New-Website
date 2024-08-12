import { useLocale, useTranslations } from "next-intl";
import CompanyStats1 from "./CompanyStats1";
import Link from "next/link";
// import YellowButton from "../YellowButton";

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
    },
    {
      value: 7,
      description: t("fact_desc4"),
      symbol: locale === "en" ? "$" : "",
      prepend: "true",
      suffix: t("fact_no4"),
    },
  ];
  return (
    <section className="relative lg:h-[92vh] h-screen">
      <div className="container h-screen flex flex-col pt-5 lg:pt-[10rem] z-10">
        <h1
          className={`text-white z-10 text-2xl md:text-[36px] lg:text-[52px] font-semibold mb-5 md:leading-[50px] text-center lg:text-left ${locale === 'ar' ? 'lg:text-right':'lg:text-left'}`}
          style={{ letterSpacing: "1.2px" }}
        >
          The{" "}
          <span className="text-primary mr-2">
            No.1 <br className="hidden sm:block" /> Choice
          </span>
          of World
          <br className="hidden sm:block" /> Class Traders!
        </h1>
        <p className={`z-10 text-white text-center lg:text-left text-[15px] md:text-[17px] font-light ${locale === 'ar' ? 'lg:text-right':'lg:text-left'}`}>
          Step into the Future of Trading with PrimeX. Dive into a World of{" "}
          <br className="hidden sm:block" />
          Abundant Liquidity, Seamless Execution, and Fair Opportunities for
          Your
          <br className="hidden sm:block" /> Financial Growth.{" "}
          <strong>Join the Trading Revolution Today.</strong>
        </p>
        <div className="z-10 mt-4 sm:mt-10 gap-4  mx-auto lg:mx-0 flex sm:flex-row">
          <Link 
          href='https://client.primexbroker.com/en/register'
          className="bg-primary text-secondary rounded-full w-[155px] sm:w-[200px] h-[50px]
           shadow-xl text-center z-10 py-3 px-4 sm:text-[16px] text-[14px]">
          { t("btn1_txt")}
          </Link>
          <Link 
          href='https://client.primexbroker.com/en/register'
          className="bg-transparent border border-primary text-white rounded-full w-[155px] sm:w-[200px]
           shadow-xl text-center z-10 py-3 px-4 hover:bg-primary hover:text-secondary 
           transition-all hover:scale-105 duration-300 sm:text-[16px] text-[14px]">
            { t("btn2_txt")}
          </Link>
        </div>
        <div className="block lg:hidden z-10">
        <CompanyStats1 stats={statsOne}/>
        </div>
      </div>
      <div  className="lg:hidden absolute inset-0 w-full h-full bg-cover sm:bg-center bg-opacity-100 z-0"
        style={{
          backgroundImage:"url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_mobile.webp')",
        }}>
     
      </div>
      <div
        className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-100"
        style={{
          backgroundImage:
            locale === "ar"
              ? "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_ar.webp')"
              : "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/banner_bg_desktop_en.webp')",
        }}
      ></div>
      <div
        className="hidden lg:block absolute z-20 bg-center bottom-0 h-[6.5rem] w-full bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/shape.svg')",
        }}
      >
       <CompanyStats1 stats={statsOne}/>
      </div>
    </section>
  );
};

export default NewBanner;
