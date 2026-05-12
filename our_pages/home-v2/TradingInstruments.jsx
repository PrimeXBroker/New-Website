"use client";
import React from "react";

const InstrumentCard = ({
  symbol = "USD/JPY",
  type = "Forex",
  price = "140.751",
  speed = "0.007",
}) => {
  return (
    <div className="relative w-[302px] h-[276px] bg-[#171717] rounded-[12px] p-[24px] flex flex-col justify-between overflow-hidden border border-[#2B2B2B]">
      {/* --- THE FIX: EXACT FIGMA CORNER GLOW --- */}
      {/* Hum linear ki jagah radial gradient use kar rahe hain taake glow corner se nikle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          left: "-150px",
          top: "-150px",
          zIndex: 0,
          background: `radial-gradient(circle, 
            rgba(254, 209, 0, 0.35) 0%, 
            rgba(254, 209, 0, 0.1) 40%, 
            transparent 70%)`,
          filter: "blur(40px)", // Zyada blur muddy banata hai, 40px-60px is perfect for web
        }}
      />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* Yellow Icon Box - Is par outer glow (drop-shadow) lazmi hai */}
        <div className="w-[48px] h-[48px] bg-[#FED100] rounded-[8px] flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(254,209,0,0.5)]">
          <span className="text-black text-xl font-bold">🍎</span>
        </div>

        <h3 className="text-white text-[32px] font-bold leading-none mb-4 tracking-tight">
          {symbol}
        </h3>

        <div className="flex gap-2">
          <span className="bg-[#FED100] text-black px-3 py-1 rounded-[4px] text-[12px] font-bold uppercase">
            {type}
          </span>
          <span className="bg-[#262626] text-[#A1A1A1] px-3 py-1 rounded-[4px] text-[12px] font-medium border border-white/5">
            Popular
          </span>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="relative z-10">
        <div className="w-full h-[1px] bg-white/10 mb-4" />
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <p className="text-[#808080] text-[12px] font-medium">
              Latest Price
            </p>
            <p className="text-white text-[24px] font-bold tracking-tight">
              {price}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="text-[#808080] text-[12px] font-medium">Speed</p>
            <p className="text-[#FED100] text-[24px] font-bold tracking-tight">
              {speed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;
