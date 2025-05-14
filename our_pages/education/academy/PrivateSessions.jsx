import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

const PrivateSessions = ({ setActive }) => {
  const locale = useLocale();
  const t = useTranslations("academy.privateSessions");

  return (
    <div className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pb-16 sm:pb-28">
      <div className="container" id="booksession">
        <div className="px-5 sm:px-8 py-8 rounded-xl bg-cc dark:bg-cc-dark">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
            <div className="space-y-4 w-full md:w-[70%]">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
                  {t("title")}
                </h2>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                  {t("description")}
                </p>
              </div>
              <div className="md:bg-e1 md:dark:bg-e1-dark md:px-6 md:py-4 rounded-lg">
                <h3 className="text-pcp dark:text-pcp-dark text-base sm:text-lg font-semibold">
                  {t("eligibility_criteria1_li1")}
                </h3>
                <p className="text-ts dark:text-ts-dark mt-1 text-sm sm:text-base">
                  {t("eligibility_criteria1_li2")}
                </p>
              </div>
              <div className="md:bg-e1 md:dark:bg-e1-dark py-2 md:px-6 md:py-4 rounded-lg">
                <h3 className="text-pcp dark:text-pcp-dark text-base sm:text-lg font-semibold">
                  {t("eligibility_criteria2_li1")}
                </h3>
                <p className="text-ts dark:text-ts-dark mt-1 text-sm sm:text-base">
                  {t("eligibility_criteria2_li2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-[30%] justify-center lg:justify-end">
              <div className="cursor-pointer p-5 bg-e1 md:dark:bg-e1-dark rounded-lg md:w-[214px] group w-full flex flex-row md:flex-col gap-3 md:gap-0">
                <div className="w-full h-40 overflow-hidden rounded-lg">
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/speaker-ziad.webp"
                    width={250}
                    height={200}
                    alt="Zyad"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-tm dark:text-tm-dark md:text-center text-base sm:text-lg">
                    {t("expert_2_name")}
                  </h3>
                  <h4 className="text-ts dark:text-ts-dark md:text-center text-xs sm:text-sm">
                    {t("expert_2_position")}
                  </h4>
                  <Link
                    href="#academy-form"
                    onClick={() => setActive("Session")}
                    className="py-2 px-4 sm:px-6 w-full text-xs sm:text-sm mx-auto mt-3 md:mt-4 bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group rounded-lg font-bold flex items-center justify-center gap-1"
                  >
                    {t("book_session_btn")}
                    {locale === "ar" || locale === "ku" || locale === "ps" ? (
                      <div
                        className={`w-[14px] h-[14px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                      >
                        <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                      </div>
                    ) : (
                      <div
                        className={`w-[14px] h-[14px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                      >
                        <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
                      </div>
                    )}
                  </Link>
                </div>
              </div>

              {/* <div className="cursor-pointer p-5 bg-e1 md:dark:bg-e1-dark border-2 border-[#222222] rounded-lg md:w-[214px] group w-full flex flex-row md:flex-col gap-3 md:gap-0">
                <div className="flex items-center justify-center w-full h-40 overflow-hidden rounded-lg">
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/rose_academy_image.jpg"
                    width="150"
                    height="200"
                    alt="Rose"
                    className="h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-tm dark:text-tm-dark md:text-center text-base sm:text-lg">
                    {t("expert_1_name")}
                  </h3>
                  <h4 className="text-ts dark:text-ts-dark md:text-center text-xs sm:text-sm">
                    {t("expert_1_position")}
                  </h4>
                  <Link
                    href="#academy-form"
                    onClick={() => setActive("Session")}
                    className="py-2 px-4 sm:px-6 w-full text-xs sm:text-sm mx-auto block mt-4 custom-button font-semibold"
                  >
                    {t("book_session_btn")}
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSessions;
