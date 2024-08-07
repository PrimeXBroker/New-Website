import React, { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import FromWarapper from "./FromWarapper";

const Webinars = () => {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("tab1");
  const [formActive, setFormActive] = useState("Webinars");

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div>
              <h1
                className={`sectionHeading md:text-5xl text-primary font-semibold pb-4 ${
                  locale === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                Upcoming Free Webinars
              </h1>
            </div>
            <div className="flex w-full my-12">
              {["tab1", "tab2", "tab3"].map((tab, index) => (
                <button
                  key={tab}
                  className={`md:px-6 px-3 py-2 font-semibold min-w-[220px] h-[50px] rounded-t-[39px] transition-all duration-300 ease-in-out ${
                    activeTab === tab
                      ? "bg-primary text-secondary border-primary min-w-[242px] -mx-3 z-10"
                      : "border-[#666666] border-1 text-[#666666]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {["Tue, 6 Aug", "Wed, 7 Aug", "Thurs, 8 Aug"][index]}
                </button>
              ))}
            </div>
            <div className="pt-4">
              {activeTab === "tab2" && (
                <div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-3">
                      <div>
                        <Image
                          className="mx-auto md:m-0 block"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/webinar-instructor.webp"
                          alt="Banner Image"
                          width="150"
                          height="150"
                        />
                      </div>
                    </div>
                    <div className="col-span-9 flex items-center">
                      <div
                        className="pl-6"
                        style={{ borderLeft: "1px solid #666666" }}
                      >
                        <h2 className="text-white text-5xl font-semibold">
                          12:00 GMT
                        </h2>
                        <h3 className="text-primary text-3xl my-2">
                          Time and Price (power of three)
                        </h3>
                        <p className="text-white text-xl font-thin">
                          Classic Low of the Week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-5">
            <FromWarapper active={formActive} setActive={setFormActive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
