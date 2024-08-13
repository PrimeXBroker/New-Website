import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const WebinarBanner = () => {
    const locale = useLocale();
    const t = useTranslations("webinar.banner");

  return (
    <section className="relative lg:h-[92vh] h-screen">
    <div className={`container h-screen flex flex-col pt-5 z-10 ${locale === 'ar'? 'lg:pt-[6rem]':'lg:pt-[15rem]'}`}>
      <h1
        className={`text-primary z-10 text-2xl md:text-[36px] lg:text-[52px] font-semibold mb-5  text-center lg:text-left ${locale === 'ar' ? 'lg:text-right md:leading-[60px] lg:text-[42px]':'lg:text-left md:leading-[50px]'}`}
        style={{ letterSpacing: "1.2px" }}
      >
        {t("title1_1")}<br className="hidden sm:block" />
        {t("title1_2")} <br className="hidden sm:block" /> {t("title1_3")}
      </h1>
      <p className={`z-10 text-white text-center lg:text-left text-[15px] md:text-[17px] font-light ${locale === 'ar' ? 'lg:text-right':'lg:text-left'}`}>
        {t("desc1_1")}{" "}
        <br className="hidden sm:block" />
        {t("desc1_2")}
      </p>
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
      src={locale === "ar"? 'https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/Webinar_Page-banner.webp':
      'https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/Webinar_Page-banner.webp'}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      quality={75} // Adjust quality as needed
      priority={true} // Prioritize this image for loading
    />
  </div>
  </section>  
  )
}

export default WebinarBanner