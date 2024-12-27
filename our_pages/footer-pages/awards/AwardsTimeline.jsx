"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const AwardsTimeline = () => {
  const locale = useLocale();
  const t = useTranslations("newAwards.awardCards");
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef([]);

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
    <section className="bg-[#000000] py-20 relative overflow-x-hidden">
      <div className="container relative mx-auto">
        {/* Base Timeline Line (always visible in #222222) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-[#222222] h-full"></div>

        {/* Animated Timeline Line (in #ffffff, grows and shrinks on scroll) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-[#FED100]"
          style={{
            height: `${(activeIndex / timelineRefs.current.length) * 100}%`,
            transition: "height 0.5s ease-in-out",
          }}
        ></div>

        {/* Timeline Points */}
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className={`relative flex items-center py-10 timeline-card transition-all duration-700 ${
              activeIndex >= i + 1 ? "active" : ""
            }`}
            data-index={i + 1}
            ref={(el) => (timelineRefs.current[i] = el)}
          >
            {/* Timeline Marker with Conditional Arrows */}
            <div
              className={`absolute transform  w-14 h-14 ${
                activeIndex >= i + 1 ? "bg-[#FED100]" : "bg-[#222222]"
              } rounded-full flex items-center justify-center ${
                locale === "ar" || locale === "fa" || locale === "kur"
                  ? "right-1/2 translate-x-1/2"
                  : "left-1/2 -translate-x-1/2"
              }`}
              style={{ zIndex: 10 }} // Increased z-index to bring the marker above the timeline
            >
              <span
                className={`${
                  activeIndex >= i + 1 ? "text-[#222222]" : "text-[#c6c6c6]"
                } font-semibold text-lg`}
              >
                {t(`awardYear${i + 1}`)}
              </span>

              {i % 2 === 0 ? (
                // Right Arrow for even index
                <div
                  className={`absolute top-1/2 transform w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
                    activeIndex >= i + 1
                      ? "border-l-[12px] border-l-[#FED100]"
                      : "border-l-[12px] border-l-[#222222]"
                  } ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "-translate-y-1/2 -left-2 rotate-180"
                      : "-right-2 -translate-y-1/2"
                  }`}
                ></div>
              ) : (
                // Left Arrow for odd index
                <div
                  className={`absolute top-1/2 transform w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
                    activeIndex >= i + 1
                      ? "border-r-[12px] border-r-[#FED100]"
                      : "border-r-[12px] border-r-[#222222]"
                  } ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "-right-2 -translate-y-1/2 rotate-180"
                      : "-left-2 -translate-y-1/2"
                  }`}
                ></div>
              )}
            </div>

            {/* Award Card */}
            <div
              className={`${
                activeIndex >= i + 1
                  ? i % 2 === 0
                    ? locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-auto -translate-x-0 opacity-100"
                      : "ml-auto translate-x-0 opacity-100"
                    : locale === "ar" || locale === "fa" || locale === "kur"
                    ? "ml-auto -translate-x-0 opacity-100"
                    : "mr-auto translate-x-0 opacity-100"
                  : i % 2 === 0
                  ? locale === "ar" || locale === "fa" || locale === "kur"
                    ? "mr-auto -translate-x-[100%] opacity-0"
                    : "ml-auto translate-x-[100%] opacity-0"
                  : locale === "ar" || locale === "fa" || locale === "kur"
                  ? "ml-auto translate-x-[100%] opacity-0"
                  : "mr-auto -translate-x-[100%] opacity-0"
              } w-96 md:w-80 lg:w-96 transition-all duration-700`}
            >
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    ${
                      activeIndex === i + 1
                        ? "bg-[#ffffff] text-[#111111]"
                        : "bg-[#111111] text-[#ffffff]"
                    }
                `}
              >
                <div
                  className={`relative p-10 rounded-[12px] ${
                    activeIndex === i + 1 ? "bg-[#000000]" : "bg-[#1d1d1d]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+${
                        i + 1
                      }.svg`}
                      alt="Award"
                      className="w-full"
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
                  {/* <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-[4px] text-sm md:text-xs lg:text-sm ${
                      activeIndex === i + 1 ? "bg-[#ffffff]" : "bg-[#333333]"
                    }`}
                  >
                    {t(`awardYear${i + 1}`)}
                  </div> */}
                </div>
                <div className="mt-4">
                  <h3
                    className={`text-sm md:text-xs lg:text-sm font-normal ${
                      activeIndex === i + 1
                        ? "text-[##222222]"
                        : "text-[#F1F1F1]"
                    }`}
                  >
                    {t(`subtitle${i + 1}`)}
                  </h3>
                  <h2
                    className={`text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ${
                      activeIndex === i + 1
                        ? "text-[#000000]"
                        : "text-[#ffffff]"
                    }`}
                  >
                    {t(`title${i + 1}`)}
                  </h2>
                  <p
                    className={`text-sm mt-2 ${
                      activeIndex === i + 1
                        ? "text-[#555555]"
                        : "text-[#c6c6c6]"
                    }`}
                  >
                    {t(`description${i + 1}`)}
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
