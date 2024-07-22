"use client";

import Image from "next/image";
import React, { useState } from "react";

const Featured = ({
  title,
  cardsData,
  handleIcon1Enter,
  handleIcon1Leave,
  icon1Hovered,
}) => {
  return (
    <section className="bg-[#e4e5e6] xl:h-[45vh] pb-10 xl:pb-0">
      <div className="container">
        <h1 className="sectionHeading">{title}</h1>
        <div className="flex flex-row mt-16 gap-12 justify-center flex-wrap xl:flex-wrap">
          {cardsData.map((card, index) => (
            <div
              onMouseEnter={handleIcon1Enter}
              onMouseLeave={handleIcon1Leave}
              key={index}
              className="bg-accent cursor-pointer rounded-2xl shadow-2xl border-b-5 w-[250px] h-[250px] group
           hover:bg-[#3F3F3E] border-black hover:border-primary p-4 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
            >
              <div className="flex justify-end mb-4">
                <Image
                  src={icon1Hovered ? card.imgHoverUrl : card.imgUrl}
                  alt="academy icon"
                  width="70"
                  height="70"
                  className="block mx-0 academy_img"
                />
              </div>
              <h1 className="sectionHeading text-xl text-left group-hover:text-white">
                {card.title}
              </h1>
              <p className="sectionPara text-left text-sm group-hover:text-white">
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
