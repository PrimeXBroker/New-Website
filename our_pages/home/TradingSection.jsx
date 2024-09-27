"use client";
import React from "react";

const TradingSection = () => {
  return (
    <section className="bg-[#000000] pt-12 pb-20">
      <div className="container">
        <div className="bg-[#111111] text-[#ffffff] border-2 border-[#1d1d1d] py-8 px-4 md:px-14 rounded-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Explore <span className="text-[#FED100]">330+</span> Trading
              Opportunities
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start space-y-4">
            <p className="text-[#c6c6c6]">
              Dive into a diverse array of assets including forex, indices,
              commodities, cryptocurrencies, and stocks.
            </p>
            <button className="bg-[#FED100] text-black py-[18px] px-[48px] rounded-xl font-semibold">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
