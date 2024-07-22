import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Steps = () => {
  const t = useTranslations("gift.steps");

  return (
    <section className="container pt-20">
      <h2 className="sectionHeading">
        <span className="font-light">{t("title")}</span> {t("title_2")}
      </h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
          <div className="w-[40%] h-[56px] m-auto bg-accent rounded-full border-2 border-secondary relative top-7 flex justify-center items-center">
            <h3 className="text-sm sm:text-lg xl:text-xl font-semibold">
              {t("new_client_title")}
            </h3>
          </div>
          <div className="md:w-[70%] lg:w-[90%] m-auto px-20 pt-16 pb-24 bg-accent rounded-3xl">
            <div class="relative flex items-center justify-between w-full">
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-secondary"></div>
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-secondary transition-all duration-500"></div>
              <div class="relative z-10 grid w-12 h-12 font-bold transition-all duration-300 bg-secondary rounded-full place-items-center">
                <Image
                  src="/images/gift/gift-step1.webp"
                  width="30"
                  height="30"
                  alt="img"
                />
                <div class="absolute -bottom-[2rem] w-max text-center">
                  <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#232323]">
                    {t("step1")}
                  </h6>
                </div>
              </div>
              <div class="relative z-10 grid w-12 h-12 font-bold transition-all duration-300 bg-secondary rounded-full place-items-center">
                <Image
                  src="/images/gift/gift-step2.webp"
                  width="30"
                  height="30"
                  alt="img"
                />
                <div class="absolute -bottom-[2rem] w-max text-center">
                  <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#232323]">
                    {t("step2")}
                  </h6>
                </div>
              </div>
              <div class="relative z-10 grid w-12 h-12 font-bold transition-all duration-300 bg-secondary rounded-full place-items-center">
                <Image
                  src="/images/gift/gift-step3.webp"
                  width="26"
                  height="26"
                  alt="img"
                />
                <div class="absolute -bottom-[2rem] w-max text-center">
                  <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#232323]">
                    {t("step3")}
                  </h6>
                </div>
              </div>
            </div>
            <h4 className="m-0 relative -bottom-[4rem] text-xs sm:text-sm xl:text-lg font-semibold text-center">
              {t("new_client_valid")}
            </h4>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="w-[40%] h-[56px] m-auto bg-accent rounded-full border-2 border-secondary relative top-7 flex justify-center items-center">
            <h3 className="text-sm sm:text-lg xl:text-xl font-semibold">
              {t("existing_client_title")}
            </h3>
          </div>
          <div className="md:w-[70%] lg:w-[90%] m-auto px-20 pt-16 pb-24 bg-accent rounded-3xl">
            <div class="relative flex items-center justify-between w-full">
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-secondary"></div>
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-secondary transition-all duration-500"></div>
              <div class="relative z-10 grid w-12 h-12 font-bold transition-all duration-300 bg-secondary rounded-full place-items-center">
                <Image
                  src="/images/gift/gift-step1.webp"
                  width="30"
                  height="30"
                  alt="img"
                />
                <div class="absolute -bottom-[2rem] w-max text-center">
                  <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#232323]">
                    {t("step4")}
                  </h6>
                </div>
              </div>
              <div class="relative z-10 grid w-12 h-12 font-bold transition-all duration-300 bg-secondary rounded-full place-items-center">
                <Image
                  src="/images/gift/gift-step3.webp"
                  width="26"
                  height="26"
                  alt="img"
                />
                <div class="absolute -bottom-[2rem] w-max text-center">
                  <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#232323]">
                    {t("step3")}
                  </h6>
                </div>
              </div>
            </div>
            <h4 className="m-0 relative -bottom-[4rem] text-xs sm:text-sm xl:text-lg font-semibold text-center">
              {t("existing_client_valid")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
