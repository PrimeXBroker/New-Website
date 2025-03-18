import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Recognition = () => {
  const t = useTranslations("home.ourRecognition");

  const awards = [
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-12.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-11.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-8.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award-9-latest.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-10.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+1.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+2.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+3.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+4.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+5.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+6.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award-7-latest.webp",
    },
  ];

  return (
    <section className="bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-[#ffffff] text-3xl font-bold">
              {t("our_recognition_title1")} <br />
              <span className="text-[#FED100]">
                {t("our_recognition_title2")}
              </span>
            </h2>
            <p className="text-sm mt-1 text-[#ffffff]">
              {t("our_recognition_desc")}
            </p>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {awards.slice(0, 3).map((award, index) => (
              <div key={index} className="text-center">
                <Image
                  unoptimized={true}
                  src={award.imgSrc}
                  alt={`Award ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full mb-4"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {awards.slice(3).map((award, index) => (
            <div key={index} className="text-center">
              <Image
                unoptimized={true}
                src={award.imgSrc}
                alt={`Award ${index + 1}`}
                width={100}
                height={100}
                className="w-full mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
