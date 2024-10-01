"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const ClientSatisfaction = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.offer");

  return (
    <section className="bg-[#000000]">
      <div className="container">
        <div className="ib-client-wrapper">
          <div className="ib-fixed-text">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              Your Client
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#FED100] mb-2">
              Satisfaction <span className="text-[#ffffff]">is</span>
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              Guaranteed
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#FED100] mb-2">
              as they
            </h2>
          </div>
          <ul>
            <li>
              <div>
                <div className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 w-[400px] h-[px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold ">{t("title1")}</h3>
                    <img src="" alt="" className="w-12 h-12" />
                  </div>
                  <p className="text-[#c6c6c6] mt-2">{t("description1")}</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 w-[400px] h-[px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold ">{t("title1")}</h3>
                    <img src="" alt="" className="w-12 h-12" />
                  </div>
                  <p className="text-[#c6c6c6] mt-2">{t("description1")}</p>
                </div>
              </div>
            </li>{" "}
            <li>
              <div>
                <div className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 w-[400px] h-[px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold ">{t("title1")}</h3>
                    <img src="" alt="" className="w-12 h-12" />
                  </div>
                  <p className="text-[#c6c6c6] mt-2">{t("description1")}</p>
                </div>
              </div>
            </li>{" "}
            <li>
              <div>
                <div className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 w-[400px] h-[px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold ">{t("title1")}</h3>
                    <img src="" alt="" className="w-12 h-12" />
                  </div>
                  <p className="text-[#c6c6c6] mt-2">{t("description1")}</p>
                </div>
              </div>
            </li>{" "}
            <li>
              <div>
                <div className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 w-[400px] h-[px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold ">{t("title1")}</h3>
                    <img src="" alt="" className="w-12 h-12" />
                  </div>
                  <p className="text-[#c6c6c6] mt-2">{t("description1")}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;
