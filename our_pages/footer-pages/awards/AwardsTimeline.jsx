"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const AwardsTimeline = () => {
  const locale = useLocale();
  const t = useTranslations("newAwards.awardCards");
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef([]);

  const awardIds = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setActiveIndex((prevIndex) => Math.max(prevIndex, index));
          } else if (entry.boundingClientRect.top > 0) {
            setActiveIndex((prevIndex) => Math.min(prevIndex, index - 1));
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      timelineRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28 relative overflow-hidden">
      <div className="container relative mx-auto overflow-hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-cc dark:bg-cc-dark h-full"></div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-pcp dark:bg-pcp-dark"
          style={{
            height: `${(activeIndex / awardIds.length) * 100}%`,
            transition: "height 0.5s ease-in-out",
          }}
        ></div>
        {awardIds.map((id, i) => (
          <div
            key={id}
            className={`relative flex items-center py-10 timeline-card transition-all duration-700 ${
              activeIndex >= i + 1 ? "active" : ""
            }`}
            data-index={i + 1}
            ref={(el) => (timelineRefs.current[i] = el)}
          >
            <div
              className={`absolute transform  w-14 h-14 ${
                activeIndex >= i + 1
                  ? "bg-pcp dark:bg-pcp-dark"
                  : "bg-cc dark:bg-cc-dark"
              } rounded-full flex items-center justify-center ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "right-1/2 translate-x-1/2"
                  : "left-1/2 -translate-x-1/2"
              }`}
              style={{ zIndex: 10 }}
            >
              <span
                className={`${
                  activeIndex >= i + 1
                    ? "text-nb dark:text-nb-dark"
                    : "text-ts dark:text-ts-dark"
                } font-semibold text-lg`}
              >
                {t(`awardYear${id}`)}
              </span>
              {i % 2 === 0 ? (
                <div
                  className={`absolute top-1/2 transform w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
                    activeIndex >= i + 1
                      ? "border-l-[12px] border-l-pcp dark:border-l-pcp-dark"
                      : "border-l-[12px] border-l-cc dark:border-l-cc-dark"
                  } ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "-translate-y-1/2 -left-2 rotate-180"
                      : "-right-2 -translate-y-1/2"
                  }`}
                ></div>
              ) : (
                <div
                  className={`absolute top-1/2 transform w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
                    activeIndex >= i + 1
                      ? "border-r-[12px] border-r-pcp dark:border-r-pcp-dark"
                      : "border-r-[12px] border-r-cc dark:border-r-cc-dark"
                  } ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "-right-2 -translate-y-1/2 rotate-180"
                      : "-left-2 -translate-y-1/2"
                  }`}
                ></div>
              )}
            </div>
            <div
              className={`${
                activeIndex >= i + 1
                  ? i % 2 === 0
                    ? locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                      ? "mr-auto -translate-y-0 opacity-100"
                      : "ml-auto translate-y-0 opacity-100"
                    : locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                    ? "ml-auto -translate-y-0 opacity-100"
                    : "mr-auto translate-y-0 opacity-100"
                  : i % 2 === 0
                  ? locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                    ? "mr-auto -translate-y-[100%] opacity-0"
                    : "ml-auto translate-y-[100%] opacity-0"
                  : locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                  ? "ml-auto translate-y-[100%] opacity-0"
                  : "mr-auto -translate-y-[100%] opacity-0"
              } w-96 md:w-80 lg:w-96 transition-all duration-700`}
            >
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    ${
                      activeIndex === i + 1
                        ? "bg-tm dark:bg-tm-dark text-p dark:text-p-dark"
                        : "bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark"
                    }
                `}
              >
                <div
                  className={`relative p-10 rounded-[12px] ${
                    activeIndex === i + 1
                      ? "bg-e2 dark:bg-e2-dark"
                      : "bg-e2 dark:bg-e2-dark"
                  }`}
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/primex-awards/award+${id}.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3
                    className={`text-sm md:text-xs lg:text-sm font-normal ${
                      activeIndex === i + 1
                        ? "text-tl dark:text-tl-dark"
                        : "text-ts dark:text-ts-dark"
                    }`}
                  >
                    {t(`subtitle${id}`)}
                  </h3>
                  <h2
                    className={`text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ${
                      activeIndex === i + 1
                        ? "text-p dark:text-p-dark"
                        : "text-tm dark:text-tm-dark"
                    }`}
                  >
                    {t(`title${id}`)}
                  </h2>
                  <p
                    className={`text-sm mt-2 ${
                      activeIndex === i + 1
                        ? "text-tl dark:text-tl-dark"
                        : "text-ts dark:text-ts-dark"
                    }`}
                  >
                    {t(`description${id}`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsTimeline;
