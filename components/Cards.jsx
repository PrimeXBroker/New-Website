import React from "react";
import Image from "next/image";

const Cards = ({ items }) => {
  return (
    <section className="sm:py-20">
      <div className="flex flex-row mt-12 gap-12 justify-center flex-wrap">
        {items.map((item, index) => {
          return (
            <div
              className="bg-secondary rounded-lg shadow-2xl border-b-5 border-primary hover:border-primary p-8 w-full mx-3 sm:mx-0 sm:w-[300px] transform transition-transform duration-300 hover:scale-105 group"
              key={index}
            >
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  width="56"
                  height="56"
                  alt={item.title}
                  className="block mx-0"
                />
              </div>
              <h2 className="sectionHeading text-2xl text-center my-4 text-accent group-hover:text-primary">
                {item.title}
              </h2>
              <p className="text-base text-center text-accent">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
