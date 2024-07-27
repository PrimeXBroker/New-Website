"use client";
import Image from "next/image";
import { useState } from "react";

const valuesCards = [
  {
    id: 1,
    title: "Integrity",
    description: "Upholding the highest standards of transparency and fairness",
    imgUrl: "/images/about/integrity.svg",
    imgHoverUrl: "/images/about/integrity_hover.svg",
  },
  {
    id: 1,
    title: "Inovation",
    description: "pioneering advancements in trading technology and services",
    imgUrl: "/images/about/innovation.svg",
    imgHoverUrl: "/images/about/innovation_hover.svg",
  },
  {
    id: 3,
    title: "Customer Focus",
    description: "Providing exceptional support and personalized solutions",
    imgUrl: "/images/about/customer.svg",
    imgHoverUrl: "/images/about/customer_hover.svg",
  },
  {
    id: 4,
    title: "Excellence",
    description: "committed to delivering top-quality trading experience",
    imgUrl: "/images/about/excellence.svg",
    imgHoverUrl: "/images/about/excellence_hover.svg",
  },
];

const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="container pt-6 pb-12">
      <h1 className="text-center text-secondary font-bold text-3xl pb-8 md:pb-12">
        Core Values
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
        {valuesCards.map((card, index) => (
          <div
            key={card.id}
            onMouseEnter={() => handleIconEnter(index)}
            onMouseLeave={handleIconLeave}
            className={`flex flex-col justify-center items-center cursor-pointer border-l border-l-gray-300 border-r border-r-gray-300 ${
              index === 0
            }`}
          >
            <Image
              src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
              alt={card.title}
              width="80"
              height="200"
              className={`transition-all ${
                hoveredIndex === index
                  ? "translate-y-[-10px] duration-500"
                  : "translate-y-0"
              } `}
            />
            <h1 className="font-semibold text-secondary text-xl mt-3 mb-2">
              {card.title}
            </h1>
            <p className="text-secondary text-center text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
