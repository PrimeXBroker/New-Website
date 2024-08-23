import LocaleLink from "@/components/LocaleLink";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SignUp = () => {
  const locale = useLocale();
  const t = useTranslations("webinar.signup");
  const backgroundImageUrl =
    locale === "ar"
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/third_section_ar.webp"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/Webinar_Page_sec3.webp";
  return (
    <section className="relative container gap-4 py-8 shadow-lg my-8">
      {/* Background Image */}
      <Image
        src={backgroundImageUrl}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
        priority={true}
      />

      {/* Content */}
      <div className="container flex flex-col md:flex-row">
        <div className="w-full md:w-[75%] flex flex-col md:items-start items-center justify-center p-8 z-10">
          <h1 className="text-white md:text-left text-center text-2xl md:text-[2.125rem] font-semibold w-fit">
            {t("title")}
          </h1>
          <div className="mt-[2rem]">
            <LocaleLink
              href="/ib-program"
              className="text-sm md:text-[24px] block w-fit px-6 py-3 rounded-full mx-auto md:mx-0 shadow-xl 
            bg-primary text-secondary border-3 border-white hover:bg-secondary font-semibold 
            hover:text-primary text-center transition-all duration-300 hover:border-secondary hover:scale-105"
            >
              {t("btnTxt")}
            </LocaleLink>
          </div>
          <p className="text-white text-[16px] font-light max-w-[80%] text-center md:text-left pt-4">
            {t("desc")}
          </p>
          <div className="flex justify-start gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
