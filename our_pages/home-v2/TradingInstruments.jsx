"use client";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const TradingInstruments = () => {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("Forex");

  const tabs = ["Forex", "Metals", "Indices", "Commodities", "Crypto"];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            Unlock Diverse
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark"> Global</span> Markets
          </h2>
        </div>
        <div className="w-full mb-10">
          <div className="flex items-center justify-center space-x-6 min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative text-xl md:text-2xl font-light tracking-wide transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-tm dark:text-tm-dark text-lg font-light">
                    {tab}
                  </span>
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[4px] w-[90%] h-[2px] bg-pcp dark:bg-pcp-dark rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"></div>
      </div>
    </div>
  );
};

export default TradingInstruments;
