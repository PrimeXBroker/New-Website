"use client";

import Image from "next/image";
import React, { useState } from "react";

const Featured = ({ title, cardsData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="bg-[#e4e5e6] pt-12 pb-16">
      <div className="container">
        <div className="flex flex-row gap-12 justify-center flex-wrap xl:flex-wrap">
          {cardsData.map((card, index) => (
            <div
              onMouseEnter={() => handleIconEnter(index)}
              onMouseLeave={handleIconLeave}
              key={index}
              className="flex flex-col justify-center bg-accent cursor-pointer rounded-2xl shadow-2xl border-b-5 w-[250px] h-[250px] group
           hover:bg-[#3F3F3E] border-black hover:border-primary transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
            >
              <div className="flex justify-start mb-4">
                <Image
                  src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
                  alt="academy icon"
                  width="100"
                  height="70"
                  className="block mx-0 academy_img"
                />
              </div>
              <h1 className="pl-4 sectionHeading text-xl text-left group-hover:text-white">
                {card.title}
              </h1>
              <p className="pl-4 sectionPara text-left text-sm group-hover:text-white">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
