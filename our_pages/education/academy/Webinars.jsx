import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import FromWarapper from "./FromWarapper";
import axios from "axios";

const Webinars = ({ active, setActive }) => {
  const locale = useLocale();
  const t = useTranslations("academy.upcomingWebinars");
  const [activeTab, setActiveTab] = useState(0);
  // const [formActive, setFormActive] = useState( active );
  const [upcoming, setUpcoming] = useState([]);

  const fetchUpcomingWebinars = async () => {
    const res = await axios.get(
      "https://primexbroker.com/api/upcoming-webinars"
    );
    if (res.data.success) {
      setUpcoming(res.data.data);
    }
  };

  useEffect(() => {
    fetchUpcomingWebinars();
  }, []);

  return (
    <section id="academy-form" className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start">
            <div className="lg:mt-10">
              <h1
                className={`sectionHeading text-2xl sm:text-3xl lg:text-5xl text-primary font-semibold pb-4 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {t("title")}
              </h1>
            </div>
            <div className="flex w-full my-12 justify-center lg:justify-start">
              {upcoming.map((webinar, index) => (
                <button
                  key={index}
                  className={`md:px-6 px-3 py-2 font-semibold min-w-[100px] sm:min-w-[196px] md:min-w-[220px] lg:min-w-[196px] xl:min-w-[220px] h-[50px] rounded-t-[39px] transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? "bg-primary text-secondary border-primary min-w-[130px] sm:min-w-[230px] md:min-w-[242px] lg:min-w-[230px] xl:min-w-[242px] -mx-3 z-10"
                      : "border-[#666666] border-1 text-[#666666]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {new Date(webinar.start).toLocaleDateString(locale, {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </button>
              ))}
            </div>
            <div className="pt-4">
              {upcoming[activeTab] && (
                <div>
                  <div className="lg:grid lg:grid-cols-12 flex flex-col sm:flex-row justify-center items-center gap-7">
                    <div className="col-span-3 flex items-center lg:items-start">
                      <div>
                        <Image
                          className="mx-auto md:m-0 block lg:w-[140px] xl:w-[150px]"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/webinar-instructor.webp"
                          alt="Banner Image"
                          width="150"
                          height="150"
                        />
                      </div>
                    </div>
                    <div className="col-span-9 flex items-center">
                      <div
                        className={`${
                          locale === "ar"
                            ? "pr-6 sm:border-r sm:border-[#666666]"
                            : "pl-6 sm:border-l sm:border-[#666666]"
                        }`}
                      >
                        <h2
                          className={`text-white text-3xl sm:text-4xl xl:text-5xl font-semibold ${
                            locale === "ar"
                              ? "text-center sm:text-right"
                              : "text-center sm:text-left"
                          }`}
                        >
                          {new Date(
                            upcoming[activeTab].start
                          ).toLocaleTimeString(locale, {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZoneName: "short",
                          })}
                        </h2>
                        <h3
                          className={`text-primary text-xl sm:text-2xl xl:text-3xl my-2 ${
                            locale === "ar"
                              ? "text-center sm:text-right"
                              : "text-center sm:text-left"
                          }`}
                        >
                          {locale === "ar"
                            ? upcoming[activeTab].agendaAr
                            : upcoming[activeTab].agenda}
                        </h3>
                        <p
                          className={`text-white text-base sm:text-lg xl:text-xl font-normal ${
                            locale === "ar"
                              ? "text-center sm:text-right"
                              : "text-center sm:text-left"
                          }`}
                        >
                          {locale === "ar"
                            ? upcoming[activeTab].detailsAr
                            : upcoming[activeTab].details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-center lg:items-end mt-20 lg:mt-0">
            <FromWarapper active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
