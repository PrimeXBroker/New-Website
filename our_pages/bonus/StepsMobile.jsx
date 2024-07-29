import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const StepsMobile = () => {
  const t = useTranslations("bonus.claim");

  return (
    <section className="container pt-20 block md:hidden">
      <h1 className="sectionHeading">
        <span className="font-normal">{t("title1")}</span> <br />
        {t("title2")}
      </h1>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="w-[230px]">
          <div className="w-44 h-44 rounded-full bg-secondary flex justify-end items-center m-auto">
            <Image
              src="/images/bonus/claim1.svg"
              width={100}
              height={100}
              alt="img"
              className=" w-[90px] h-[90px] m-auto"
            />
          </div>
          <div>
            <div className="bg-primary w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
              <h6 className="text-lg font-semibold m-0 text-center">
                {t("claim_li1")}
              </h6>
            </div>
            <p className="text-center">{t("claim_li1_p")}</p>
          </div>
        </div>
        <div className="w-[230px] my-12">
          <div className="w-44 h-44 rounded-full bg-secondary flex justify-end items-center m-auto">
            <Image
              src="/images/bonus/claim2.svg"
              width={100}
              height={100}
              alt="img"
              className=" w-[90px] h-[90px] m-auto"
            />
          </div>
          <div>
            <div className="bg-primary w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
              <h6 className="text-lg font-semibold m-0 text-center">
                {t("claim_li2")}
              </h6>
            </div>
            <p className="text-center">{t("claim_li2_p")}</p>
          </div>
        </div>
        <div className="w-[230px]">
          <div className="w-44 h-44 rounded-full bg-secondary flex justify-end items-center m-auto">
            <Image
              src="/images/bonus/claim3.svg"
              width={100}
              height={100}
              alt="img"
              className=" w-[90px] h-[90px] m-auto"
            />
          </div>
          <div>
            <div className="bg-primary w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
              <h6 className="text-lg font-semibold m-0 text-center">
                {t("claim_li3")}
              </h6>
            </div>
            <p className="text-center">{t("claim_li3_p")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsMobile;
