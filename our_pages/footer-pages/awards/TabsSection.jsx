import React from "react";
import Image from "next/image";

const TabsSection = () => {
  const awards = [
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
    <section className="bg-[#000000] text-white py-10 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {awards.slice(0, 8).map((award, index) => (
            <div key={index} className="text-center">
              <Image
                unoptimized={true}
                src={award.imgSrc}
                alt={`Award ${index + 1}`}
                width={100}
                height={100}
                className="w-full mb-4 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
              />
            </div>
          ))}
          <div className="col-span-1"></div>
          {awards.slice(8).map((award, index) => (
            <div key={index} className="text-center">
              <Image
                unoptimized={true}
                src={award.imgSrc}
                alt={`Award ${index + 9}`}
                width={100}
                height={100}
                className="w-full mb-4 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
