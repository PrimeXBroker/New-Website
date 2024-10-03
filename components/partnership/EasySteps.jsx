import React from "react";
import Image from "next/image";

const EasySteps = ({ easySteps }) => {
  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center">
          {easySteps.title1}
          <span className="text-[#ffffff]">{easySteps.title2}</span>
        </h2>
      </div>
      <div className="container bg-[#111111] border-2 border-[#1D1D1D] rounded-[2px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between">
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px] transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2">
              {easySteps.step2_title}
            </h3>
            <p className="text-[#ffffff]">{easySteps.step2_desc}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px] transform translate-y-[1rem] group">
            <Image
              unoptimized={true}
              src={easySteps.step3_img}
              alt="Promote"
              width={100}
              height={100}
              className="h-32 w-32 group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px] transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2">
              {easySteps.step3_title}
            </h3>
            <p className="text-[#ffffff]">{easySteps.step3_desc}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px] transform translate-y-[1rem] group">
            <Image
              unoptimized={true}
              src={easySteps.step1_img}
              alt="Register"
              width={100}
              height={100}
              className="h-32 w-32 group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px] transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2">
              {easySteps.step1_title}
            </h3>
            <p className="text-[#ffffff]">{easySteps.step1_desc}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px] transform translate-y-[1rem] group">
            <Image
              unoptimized={true}
              src={easySteps.step2_img}
              alt="Earn"
              width={100}
              height={100}
              className="h-32 w-32 group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
