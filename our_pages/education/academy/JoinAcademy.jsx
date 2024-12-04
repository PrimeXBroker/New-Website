"use client";
import React from "react";
import Link from "next/link";

const JoinAcademy = ({ joinAcademy, setActive }) => {
  return (
    <div className="bg-[#000000] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {joinAcademy.map((academy, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#FED100] flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <div className="w-[70%] sm::w-[60%]">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FED100]">
                  {academy.title1}
                  <span className="text-[#ffffff]">{academy.title2}</span>
                </h3>
              </div>
              <div className="w-14 h-14 borer-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                <img
                  src={academy.icon}
                  alt={academy.title1}
                  className="w-[40px]"
                />
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#ffffff]">
                {academy.question}
              </h4>
              <p className="text-[#c6c6c6] text-sm sm:text-base">
                {academy.description}
              </p>
            </div>
            <div className="mt-2">
              <Link
                className="text-center font-semibold px-4 py-4 w-full shadow-xl mx-auto block md:m-0 custom-button"
                href="#academy-form"
                onClick={() => setActive(academy.formId)}
              >
                {academy.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinAcademy;
