import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import FormWrapper from "./FormWrapper";

const Webinars = ({ active, setActive }) => {
  const locale = useLocale();
  const t = useTranslations("newAcademy.upcomingWebinars");
  const [activeTab, setActiveTab] = useState(0);
  const [upcoming, setUpcoming] = useState([]);

  const fetchUpcomingWebinars = async () => {
    try {
      const res = await axios.get(
        "https://primexbroker.com/api/upcoming-webinars"
      );
      if (res.data.success) {
        setUpcoming(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching webinars:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingWebinars();
  }, []);

  return (
    <section id="academy-form" className="bg-[#000000] py-10">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start">
            <div className="lg:mt-10">
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#FED100] lg:mb-4 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {t("title1")}
              </h2>
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#ffffff] ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {t("title2")}
              </h2>
            </div>
            {upcoming.map((webinar) => (
              <div
                key={webinar._id}
                className="bg-[#1D1D1D] text-[#ffffff] rounded-lg p-6 border-2 border-[#222222] gap-6 flex flex-col lg:flex-row justify-between mt-8 upcoming-webinar w-full md:w-[68%] lg:w-[85%] group"
              >
                <div className="flex flex-row lg:flex-col gap-3 lg:gap-0 lg:w-[280px] xl:w-[250px]">
                  <img
                    className="rounded w-[80px] sm:w-[100px] lg:w-full"
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/ahmed.webp"
                    alt=""
                  />
                  <div className="w-[70%] lg:w-[100%]">
                    <p className="text-[#f9f9f9] text-sm mb-1 sm:mb-0">
                      {t("webinar_title")}
                    </p>
                    <p className="text-[#f9f9f9] text-xs"> {t("Webinar_by")}</p>
                    <div className="text-[#c6c6c6] w-full lg:hidden mt-2">
                      <p className="text-xs mb-1">
                        {new Date(webinar.start).toLocaleDateString(locale, {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs">
                        {new Date(webinar.start).toLocaleTimeString(locale, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        GMT +3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-base sm:text-2xl sm:mb-4 group-hover:text-[#FED100]">
                    {locale === "ar" ? webinar.agendaAr : webinar.agenda}
                  </h2>
                  <div className="bg-[#222222] border-1 border-[#333333] p-3 rounded-lg lg:flex items-center justify-between text-[#c6c6c6] w-[90%] hidden">
                    <span>
                      {new Date(webinar.start).toLocaleDateString(locale, {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="border-l border-[#333333] h-6"></span>
                    <span>
                      {new Date(webinar.start).toLocaleTimeString(locale, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      GMT +3
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center lg:items-end mt-20 lg:mt-0">
            <FormWrapper active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
