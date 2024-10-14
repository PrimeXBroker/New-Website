import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PrivateSessions = ({ setActive }) => {
  const t = useTranslations("academy.privateSessions");

  return (
    <div className="bg-[#000000] text-[#ffffff] py-10">
      <div className="container">
        <div className="px-5 sm:px-8 py-8 rounded-xl bg-[#111111] border-2 border-[#222222]">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
            <div className="space-y-4 w-full lg:w-1/2">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
                  {t("title")}
                </h2>
                <p className="text-[#c6c6c6] text-sm sm:text-base">
                  {t("description")}
                </p>
              </div>
              <div className="md:bg-[#1D1D1D] md:border-2 md:border-[#222222] md:px-6 md:py-4 rounded-lg shadow-lg md:hover:border-[#FED100]">
                <h3 className="text-[#FED100] text-base sm:text-lg font-semibold">
                  {t("eligibility_criteria1_li1")}
                </h3>
                <p className="text-[#c6c6c6] mt-1 text-sm sm:text-base">
                  {t("eligibility_criteria1_li2")}
                </p>
              </div>
              <div className="md:bg-[#1D1D1D] md:border-2 md:border-[#222222] py-2 md:px-6 md:py-4 rounded-lg shadow-lg md:hover:border-[#FED100]">
                <h3 className="text-[#FED100] text-base sm:text-lg font-semibold">
                  {t("eligibility_criteria2_li1")}
                </h3>
                <p className="text-[#c6c6c6] mt-1 text-sm sm:text-base">
                  {t("eligibility_criteria2_li2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full lg:w-1/2 gap-4 justify-center lg:justify-end">
              <div className="cursor-pointer p-5 bg-[#1D1D1D] border-2 border-[#222222] hover:border-[#FED100] rounded-lg md:w-[214px] group w-full flex flex-row md:flex-col gap-3 md:gap-0">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/ahmed.webp"
                  width="250"
                  height="200"
                  alt="expert image"
                  className="w-[83px] sm:w-[100px] md:w-[250px]"
                />
                <div>
                  <h3 className="text-[#ffffff] md:text-center text-base sm:text-lg group-hover:text-[#FED100]">
                    {t("expert_2_name")}
                  </h3>
                  <h4 className="text-[#c6c6c6] md:text-center text-xs sm:text-sm">
                    {t("expert_2_position")}
                  </h4>
                  <Link
                    href="#academy-form"
                    onClick={() => setActive("Session")}
                    className="py-2 px-4 sm:px-6 w-full shadow-xl text-xs sm:text-sm mx-auto block mt-3 md:mt-4 custom-button font-semibold"
                  >
                    {t("book_session_btn")}
                  </Link>
                </div>
              </div>
              <div className="cursor-pointer p-5 bg-[#1D1D1D] border-2 border-[#222222] hover:border-[#FED100] rounded-lg md:w-[214px] group w-full flex flex-row md:flex-col gap-3 md:gap-0">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/rose.webp"
                  width="250"
                  height="200"
                  alt="expert image"
                  className="w-[83px] sm:-[100px] md:w-[250px]"
                />
                <div>
                  <h3 className="text-[#ffffff] md:text-center text-base sm:text-lg group-hover:text-[#FED100]">
                    {t("expert_1_name")}
                  </h3>
                  <h4 className="text-[#c6c6c6] md:text-center text-xs sm:text-sm">
                    {t("expert_1_position")}
                  </h4>
                  <Link
                    href="#academy-form"
                    onClick={() => setActive("Session")}
                    className="py-2 px-4 sm:px-6 w-full shadow-xl text-xs sm:text-sm mx-auto block mt-4 custom-button font-semibold"
                  >
                    {t("book_session_btn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSessions;
