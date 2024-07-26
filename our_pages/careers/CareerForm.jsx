import React from "react";

const CareerForm = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container py-16 max-w-xl flex flex-col gap-2">
        <h1
          className="text-2xl md:text-3xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          Be A Part of PrimeX Capital
        </h1>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          Join us and be a part of a forward-thinking company where your skills
          and ambitions can thrive.
        </p>
      </div>
    </section>
  );
};

export default CareerForm;
