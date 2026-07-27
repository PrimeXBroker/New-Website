"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const HeroBanner = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations("home.heroSection");
  const t1 = useTranslations("investmentFunds.hero");
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const slides = [
    {
      id: 1,
      badgeIconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Join+250%2C000%2B+traders+worldwide+icon.png",
      badgeIconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Join+250%2C000%2B+traders+worldwide+icon.png",
      badgeLabel: t("slide1_badgeLabel"),
      titlePrefix: t("slide1_titlePrefix"),
      titleHighlight1: t("slide1_titleHighlight1"),
      titleHighlight2: t("slide1_titleHighlight2"),
      titleSeparator1: t("slide1_titleSeparator1"),
      titleSuffix: t("slide1_titleSuffix"),
      description: t("slide1_description"),
    },
    {
      id: 2,
      badgeIconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Grow+your+savings+Icon.png",
      badgeIconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Grow+your+savings+Icon.png",
      badgeLabel: t("slide2_badgeLabel"),
      titlePrefix: t("slide2_titlePrefix"),
      titleHighlight1: t("slide2_titleHighlight1"),
      titleSeparator1: t("slide2_titleSeparator1"),
      titleHighlight2: t("slide2_titleHighlight2"),
      titleSeparator2: t("slide2_titleSeparator2"),
      titleSuffix: t("slide2_titleSuffix"),
      description: t1("description"),
    },
  ];

  const s = slides[current];

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [current]);

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const isDark = theme === "dark";
  const isRtl =
    locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa";

  const bgGraphSrc = isRtl
    ? isDark
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/ar-graph-dark.svg"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/ar-graph-light.svg"
    : isDark
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/graph-dark.svg"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/graph-light.svg";

  const heroImageSrc = isRtl
    ? isDark
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/ar-hero-dark-slide1.svg"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/ar-hero-light-slide1.svg"
    : isDark
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/en-hero-dark-slide1.svg"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/en-hero-light-slide1.svg";

  const handleStart = (clientX) => {
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX) => {
    if (!isDragging.current) return;
    touchEndX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      isRtl ? prevSlide() : nextSlide();
    } else if (distance < -minSwipeDistance) {
      isRtl ? nextSlide() : prevSlide();
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div
        className="container relative overflow-hidden"
        onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => handleMove(e.targetTouches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div className="grid grid-cols-12 items-center relative z-10">
          <div className="col-span-12 md:col-span-5">
            <div>
              <div
                key={`badge-${current}`}
                className="flex items-center mx-auto md:mx-0 gap-2 bg-cc dark:bg-cc-dark w-fit px-4 py-[10px] rounded-lg mb-4"
              >
                <Image
                  unoptimized={true}
                  src={theme === "dark" ? s.badgeIconDark : s.badgeIconLight}
                  width="16"
                  height="16"
                  alt="badge"
                  className="w-[20px] h-auto"
                />
                <p className="text-tm dark:text-tm-dark font-medium text-base md:text-sm lg:text-base">
                  {s.badgeLabel}
                </p>
              </div>
              {s.id === 1 && (
                <h1
                  key={`title-${current}`}
                  className="text-tm dark:text-tm-dark text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start !leading-tight"
                >
                  {s.titlePrefix}
                  <span className="text-pcp dark:text-pcp-dark">
                    {locale === "es" || locale === "pt" ? (
                      <>
                        <br className="hidden sm:block" /> {s.titleHighlight1}
                        {s.titleHighlight2}
                      </>
                    ) : (
                      <>
                        {s.titleHighlight1} <br className="hidden sm:block" />
                        {s.titleHighlight2}
                      </>
                    )}
                  </span>
                  {locale === "ku" ||
                  locale === "ps" ||
                  locale === "fa" ||
                  locale === "pt" ||
                  locale === "es" ? (
                    <>
                      <br className="hidden sm:block" /> {s.titleSeparator1}
                    </>
                  ) : (
                    <>{s.titleSeparator1}</>
                  )}
                  <br className="hidden sm:block" /> {s.titleSuffix}
                </h1>
              )}
              {s.id === 2 && (
                <h1
                  key={`title-${current}`}
                  className="text-tm dark:text-tm-dark text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start !leading-tight"
                >
                  {s.titlePrefix}
                  <span className="text-pcp dark:text-pcp-dark">
                    {s.titleHighlight1}
                  </span>
                  {locale === "ku" ? (
                    <>
                      <br className="hidden sm:block" /> {s.titleSeparator1}
                      <br className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      {s.titleSeparator1} <br className="hidden sm:block" />
                    </>
                  )}
                  <span className="text-pcp dark:text-pcp-dark">
                    {s.titleHighlight2}
                  </span>
                  {locale === "ar" ||
                  locale === "ku" ||
                  (locale === "fa") | (locale === "es") ? (
                    <>
                      <br className="hidden sm:block" />
                      {s.titleSeparator2}
                      <br className="hidden sm:block" /> {s.titleSuffix}
                    </>
                  ) : (
                    <>
                      {s.titleSeparator2}
                      <br className="hidden sm:block" /> {s.titleSuffix}
                    </>
                  )}
                </h1>
              )}
            </div>
            <p className="font-normal text-base sm:text-lg text-ts dark:text-ts-dark mt-4 text-center md:text-start">
              {s.description}
            </p>
            <div className="mt-6">
              <CustomYellowButton
                onClick={handleClick}
                title={t("btnTxt")}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0 ">
              <Image
                unoptimized={true}
                src={heroImageSrc}
                width="100"
                height="100"
                alt="Hammurabi account"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-36 md:bottom-0 left-0 right-0 w-full z-0 pointer-events-none flex justify-center">
          <Image
            unoptimized={true}
            src={bgGraphSrc}
            alt="Background Graph"
            width={1920}
            height={400}
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
      </div>
      <div
        className={`reviews-swiper-navigation-buttons flex justify-center gap-4 mt-10 md:mt-5`}
        dir="ltr"
      >
        <button
          onClick={prevSlide}
          className="reviews-swiper-button-prev group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out"
        >
          <TiArrowLeftThick className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark transition-transform duration-500 ease-in-out" />
        </button>
        <button
          onClick={nextSlide}
          className="reviews-swiper-button-next group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out"
        >
          <TiArrowRightThick className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark transition-transform duration-500 ease-in-out" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
