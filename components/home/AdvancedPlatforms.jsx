"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import LocaleLink from "@/components/LocaleLink";

const AdvancedPlatforms = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedPlatforms");
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  const leftList = [
    {
      id: 1,
      text: t("li1"),
    },
    {
      id: 2,
      text: t("li2"),
    },
    {
      id: 3,
      text: t("li3"),
    },
    {
      id: 4,
      text: t("li4"),
    },
  ];

  const rightList = [
    {
      id: 1,
      text: t("li5"),
    },
    {
      id: 2,
      text: t("li6"),
    },
    {
      id: 3,
      text: t("li7"),
    },
    {
      id: 4,
      text: t("li8"),
    },
  ];

  const iconsLeftList = [
    {
      text: t("li1"),
      id: 1,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/advanced_tools_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/advanced_tools_white.svg",
    },
    {
      text: t("li5"),
      id: 2,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/community_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/community_white.svg",
    },
    {
      text: t("li8"),
      id: 3,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/superior_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/superior_white.svg",
    },
    {
      text: t("li6"),
      id: 4,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/advanced_signals_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/advanced_signals_white.svg",
    },
  ];

  const iconsRightList = [
    {
      text: t("li2"),
      id: 1,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/multi_asset_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/multi_asset_white.svg",
    },
    {
      text: t("li3"),
      id: 2,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/automated_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/automated_white.svg",
    },
    {
      text: t("li4"),
      id: 3,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/improved_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/improved_white.svg",
    },
    {
      text: t("li7"),
      id: 4,
      iconUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/built_in_white.svg",
      iconUrlHover:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/built_in_white.svg",
    },
  ];

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const handleIconEnter1 = (index) => {
    setHoveredIndex1(index);
  };
  const handleIconLeave1 = () => {
    setHoveredIndex1(null);
  };
  const handleIconEnter2 = (index) => {
    setHoveredIndex2(index);
  };
  const handleIconLeave2 = () => {
    setHoveredIndex2(null);
  };
  return (
    // <section
    //   className="py-12 container justify-around items-center"
    //   data-aos-easing="ease-out"
    //   data-aos-duration={2000}
    //   data-aos="slide-up"
    // >
    //   <h1
    //     className="sectionHeading"
    //     data-aos-easing="ease-out"
    //     data-aos-duration={1100}
    //     data-aos="slide-up"
    //   >
    //     {t("title")}
    //   </h1>
    //   <div className="grid grid-cols-12 mt-14">
    //     <div className="col-span-12 md:col-span-4 flex justify-center">
    //       <div>
    //         {leftList.map((item, index) => {
    //           return (
    //             <div className="relative flex flex-row items-center mb-5 group">
    //               <div
    //                 className="bg-secondary text-primary hover:bg-accent hover:text-secondary min-h-[90px] w-[280px] border border-solid border-secondary  rounded-xl py-4 px-9 text-[1rem] md:text-xl font-semibold flex justify-center items-center text-center"
    //                 key={index}
    //               >
    //                 {item.text}
    //               </div>
    //               <VscTriangleRight className="absolute right-[-40px] text-4xl text-primary group-hover:block hidden" />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="col-span-12 md:col-span-4 flex justify-center my-8 md:my-0">
    //       <div className="flex justify-center">
    //         <Image
    //           unoptimized={true}
    //           src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/mt5-home.webp"
    //           width="50"
    //           height="100"
    //           className="w-[30%] md:w-[50%]"
    //           alt="account logo"
    //         />
    //       </div>
    //     </div>
    //     <div className="col-span-12 md:col-span-4 flex justify-center">
    //       <div>
    //         {rightList.map((item, index) => {
    //           return (
    //             <div className="relative flex flex-row items-center mb-5 group">
    //               <VscTriangleLeft className="absolute left-[-40px] text-4xl text-primary group-hover:block hidden" />
    //               <div
    //                 className="bg-secondary text-primary  hover:bg-accent hover:text-secondary min-h-[90px] w-[280px] border border-solid border-secondary  rounded-xl py-4 px-2 text-[1rem] md:text-xl font-semibold flex justify-center items-center text-center"
    //                 key={index}
    //               >
    //                 {item.text}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="col-span-12 flex justify-center my-8">
    //       <Button
    //         radius="full"
    //         variant="solid"
    //         color="primary"
    //         className="w-[190px] h-[60px] text-center mt-2 flex justify-center items-center"
    //       >
    //         <p className="text-secondary text-lg font-semibold">
    //           {t("btnTxt")}
    //         </p>
    //       </Button>
    //     </div>
    //   </div>
    // </section>

    <section className="py-12 bg-secondary">
      <h2 className="text-white text-lg md:text-3xl font-semibold text-center pb-12">
        {t("title")}
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly items-center container">
        <div className="grid grid-cols-2 md:grid-cols-1 flex-wrap justify-center gap-8 md:gap-4">
          {iconsLeftList.map((item, index) => (
            <div
              onMouseEnter={() => handleIconEnter1(index)}
              onMouseLeave={handleIconLeave1}
              key={index}
              className="flex-col justify-center items-center"
            >
              <Image
                src={item.iconUrl}
                width="80"
                height="100"
                alt="icon image"
                className={`mx-auto block transition-all duration-300 w-[60px] md:w-[80px] ${
                  hoveredIndex1 === index ? "hover:scale-125" : "scale-100"
                }`}
              />
              <p
                className={`text-base font-semibold md:text-lg text-center ${
                  hoveredIndex1 === index ? "text-primary" : "text-white"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-5 md:my-0 w-[200px] md:w-fit">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/mt5-home.webp"
            width="230"
            height="100"
            alt="account logo"
            className="block mx-auto flex-1 animated_image"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 flex-wrap justify-center gap-8 md:gap-4">
          {iconsRightList.map((item, index) => (
            <div
              onMouseEnter={() => handleIconEnter2(index)}
              onMouseLeave={handleIconLeave2}
              key={index}
              className="flex-col justify-center items-center"
            >
              <Image
                src={hoveredIndex2 === index ? item.iconUrlHover : item.iconUrl}
                width="80"
                height="100"
                alt="icon image"
                className={`mx-auto block transition-all w-[60px] md:w-[80px] duration-300 ${
                  hoveredIndex2 === index ? "hover:scale-125" : "scale-100"
                }`}
              />
              <p
                className={`text-base font-semibold md:text-lg text-center ${
                  hoveredIndex2 === index ? "text-primary" : "text-white"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Button
        as={LocaleLink}
        href="/platform/mt5-platform"
        className="bg-primary rounded-full px-6 py-4 w-[160px] mx-auto block my-12 h-auto font-semibold text-center transition-all duration-250 hover:scale-110"
      >
        {t("btnTxt")}
      </Button>
    </section>
  );
};

export default AdvancedPlatforms;
