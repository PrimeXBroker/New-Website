import React from "react";
import Image from "next/image";

const Cards = ({ items }) => {
  return (
    <section className="py-12">
      <div className="flex flex-row mt-12 gap-12 justify-center flex-wrap">
        {items.map((item) => {
          return (
            <div className="bg-secondary rounded-lg shadow-2xl border-b-5 border-primary hover:border-primary p-8 w-[300px] transform transition-transform duration-300 hover:scale-105 group">
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt="academy icon"
                  width="56"
                  height="56"
                  className="block mx-0"
                />
              </div>
              <h1 className="sectionHeading text-2xl text-center my-4 text-accent group-hover:text-primary">
                {item.title}
              </h1>
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
