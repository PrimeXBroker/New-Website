"use client";

import Image from "next/image";
import { useState } from "react";

const HaveQuestion = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  const cardsData = [
    {
      title: "Help Center:",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      imgUrl: "/images/contact/chat.svg",
      imgHoverUrl: "/images/contact/chat_hover.svg",
    },
    {
      title: "Email:",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      imgUrl: "/images/contact/email.svg",
      imgHoverUrl: "/images/contact/email_hover.svg",
    },
    {
      title: "Live Chat:",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      imgUrl: "/images/contact/headphone.svg",
      imgHoverUrl: "/images/contact/headphone_hover.svg",
    },
    {
      title: "Phone:",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      imgUrl: "/images/contact/phone.svg",
      imgHoverUrl: "/images/contact/phone_hover.svg",
    },
  ];
  return (
    <section className="bg-accent py-12 ">
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-secondary md:text-2xl text-lg font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          Have a Question?
        </h1>
        <p
          className="text-secondary md:text-lg text-md font-light text-center"
          style={{ lineHeight: "30px", letterSpacing: "1px" }}
        >
          PrimeX offers flexible funding options to get you trading faster
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-12 justify-center flex-wrap xl:flex-wrap mt-8 ">
        {cardsData.map((card, index) => (
          <div
            onMouseEnter={() => handleIconEnter(index)}
            onMouseLeave={handleIconLeave}
            key={index}
            className="flex flex-col justify-center bg-accent cursor-pointer rounded-2xl shadow-2xl border-b-5 h-auto group
           hover:bg-[#3F3F3E] border-black hover:border-primary transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
          >
            <div className="flex justify-end">
              <Image
                src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
                alt="academy icon"
                width="100"
                height="70"
                className="block mx-0 academy_img"
              />
            </div>
            <h1 className="pl-4 sectionHeading text-xl text-left group-hover:text-primary">
              {card.title}
            </h1>
            <p className="pl-4 sectionPara text-left text-sm group-hover:text-white">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HaveQuestion;
