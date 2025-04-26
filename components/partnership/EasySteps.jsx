"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const EasySteps = ({ easySteps }) => {
  const { theme } = useTheme();
  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center">
          {easySteps.title1}
          <span className="text-tm dark:text-tm-dark">{easySteps.title2}</span>
        </h2>
      </div>
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl">
          <div className="lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between sm:hidden">
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count1}
                </span>
                {easySteps.step2_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step2_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step3_img_dark
                    : easySteps.step3_img_light
                }
                alt="Promote"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count3}
                </span>
                {easySteps.step3_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step3_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step1_img_dark
                    : easySteps.step1_img_light
                }
                alt="Register"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count2}
                </span>
                {easySteps.step1_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step1_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step2_img_dark
                    : easySteps.step2_img_light
                }
                alt="Earn"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between lg:hidden">
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count1}
                </span>
                {easySteps.step2_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step2_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step1_img_dark
                    : easySteps.step1_img_light
                }
                alt="Promote"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count2}
                </span>
                {easySteps.step1_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step1_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step3_img_dark
                    : easySteps.step3_img_light
                }
                alt="Register"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
            <div className="bg-transparent border-dashed border-4 border-e2 dark:border-e2-dark rounded-lg p-6 flex flex-col justify-center h-[250px]">
              <h3 className="text-pcp dark:text-pcp-dark text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                  {easySteps.count3}
                </span>
                {easySteps.step3_title}
              </h3>
              <p className="text-tm dark:text-tm-dark">
                {easySteps.step3_desc}
              </p>
            </div>
            <div className="bg-e1 dark:bg-e1-dark rounded-lg p-6 flex justify-center items-center h-[250px]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? easySteps.step2_img_dark
                    : easySteps.step2_img_light
                }
                alt="Earn"
                width={100}
                height={100}
                className="h-32 w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
