import Image from "next/image";
import React from "react";

const PrivateSessions = () => {
  const expertCards = [
    {
      name: "Rose Shawish",
      position: "Fundamental Analyst",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/rose.webp",
    },
    {
      name: "Ahmed Alsajadi",
      position: "Technical Analyst",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/ahmed.webp",
    },
  ];
  return (
    <section className="relative mt-12 mb-64 container bg-accent px-8 pt-8 pb-40">
      <h1
        className="text-secondary text-2xl font-semibold"
        style={{ letterSpacing: "1px", lineHeight: "50px" }}
      >
        Private Sessions
      </h1>
      <p className="text-secondary text-lg pb-6">
        Get Free Exclusive Private Sessions With Our Experts Every Month!
      </p>
      <p className="text-secondary text-sm">
        For Clients with active balance of $1000 - $10,000 - 1 Free private
        session per month !{" "}
      </p>
      <p className="text-secondary text-sm">
        For Clients with active balance of over $10,000 - 4 Free private session
        per month !
      </p>
      <div className="absolute flex flex-row justify-center items-center right-0 left-0 md:bottom-[-60%]">
        {expertCards.map((card, index) => (
          <div
            key={index}
            className="transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 cursor-pointer"
          >
            <Image
              src={card.imgUrl}
              width="250"
              height="200"
              alt="expert image"
            />
            <h3 className="text-secondary text-center text-lg">{card.name}</h3>
            <h4 className="text-secondary text-center text-sm">
              {card.position}
            </h4>
            <button className="bg-primary py-2 rounded-full w-[150px] shadow-xl text-secondary text-sm mx-auto block mt-4">
              Book a Session
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivateSessions;
