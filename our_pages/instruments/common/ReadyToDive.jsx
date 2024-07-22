import React from "react";

const ReadyToDive = ({ title, description }) => {
  return (
    <section className="container bg-accent flex items-center p-8 lg:h-[200px] justify-around shadow-xl rounded-lg my-12">
      <div className="max-w-2xl">
        <h1 className="sectionHeading text-center md:text-left">{title}</h1>
        <p className="sectionpara text-center md:text-left">{description}</p>
      </div>
      <button className="bg-primary rounded-full text-secondary font-semibold px-4 py-4 w-[250px]">
        Open Your Account
      </button>
    </section>
  );
};

export default ReadyToDive;
