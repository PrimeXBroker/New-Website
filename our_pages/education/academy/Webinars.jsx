import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import FormWrapper from "./FormWrapper";
import moment from "moment-timezone";

const Webinars = ({ active, setActive }) => {
  const locale = useLocale();
  const t = useTranslations("academy.upcomingWebinars");
  const [upcoming, setUpcoming] = useState([]);
  const userTimeZone = moment.tz.guess();

  const fetchUpcomingWebinars = async () => {
    try {
      const res = await axios.get(
        "https://primexbroker.com/api/upcoming-webinars"
      );
      console.log(res, "res");
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
    <section id="academy-form" className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start">
            <div className="lg:mt-10">
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-pcp dark:text-pcp-dark lg:mb-4 ${
                  locale === "ar" || locale === "ku" || locale === "ps"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {t("title1")}
              </h2>
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-rm dark:text-tm-dark ${
                  locale === "ar" || locale === "ku" || locale === "ps"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {t("title2")}
              </h2>
            </div>
            {upcoming.map((webinar) => {
              if (webinar._id === "681c6b7c227fc53fe3d71162") return null;
              return (
                <div
                  key={webinar._id}
                  className="bg-cc dark:bg-cc-dark text-rm dark:text-tm-dark rounded-lg p-6 gap-3 flex flex-col lg:flex-row mt-8 upcoming-webinar w-full md:w-[68%] lg:w-[85%] group"
                >
                  <div className="flex flex-row lg:flex-col gap-3 lg:gap-0 lg:w-[30%] xl:w-[25%]">
                    <img
                      className="rounded w-[80px] sm:w-[100px] lg:w-full mb-3"
                      src={
                        webinar.selectedName === "Ahmed Al Araji & Zyad Atta" ||
                        webinar._id === "681c618c227fc53fe3d710e7"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/Due.webp"
                          : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/zyad.webp"
                      }
                      alt="webinar image"
                    />
                    <div className="w-[70%] lg:w-[100%]">
                      <p className="text-tm dark:text-tm-dark text-sm mb-1 sm:mb-0">
                        {webinar.selectedName ===
                          "Ahmed Al Araji & Zyad Atta" ||
                        webinar._id === "681c618c227fc53fe3d710e7"
                          ? t("webinar_title3")
                          : t("webinar_title1")}
                      </p>
                      <p className="text-tm dark:text-tm-dark text-xs">
                        {webinar.selectedName ===
                          "Ahmed Al Araji & Zyad Atta" ||
                        webinar._id === "681c618c227fc53fe3d710e7"
                          ? ""
                          : t("Webinar1_by")}
                      </p>
                      <div className="text-tm dark:text-tm-dark w-full lg:hidden mt-2">
                        <p className="text-xs mb-1">
                          {moment(webinar.start)
                            .tz(userTimeZone)
                            .format("dddd, MMM D")}
                        </p>
                        <p className="text-xs">
                          {moment(webinar.start)
                            .tz(userTimeZone)
                            .format("h:mm A")}{" "}
                          {userTimeZone}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[70%] xl:w-[85%]">
                    <h2 className="text-base md:text-xl xl:text-2xl mb-2 group-hover:text-pcp dark:text-pcp-dark">
                      {locale === "ar" ? webinar.agendaAr : webinar.agenda}
                    </h2>
                    <p className="text-sm xl:text-base mb-2 text-rm dark:text-tm-dark line-clamp-2">
                      {locale === "ar" ? webinar.detailsAr : webinar.details}
                    </p>
                    {webinar.selectedName === "Ahmed Al Araji & Zyad Atta" && (
                      <p className="text-sm xl:text-base mb-2 text-rm dark:text-tm-dark line-clamp-2">
                        {locale === "ar"
                          ? "أحمد الاعرجي (محلل اقتصادي)، زياد عطا (محلل فني)"
                          : "Ahmed Al Araji (Fundamentals Analyst), Zyad Atta (Forex Analysis)"}
                      </p>
                    )}
                    <div className="bg-cc dark:bg-cc-dark p-3 rounded-lg lg:flex items-center justify-between text-tm dark:text-tm-dark w-[100%] hidden text-sm xl:text-base">
                      <span>
                        {moment(webinar.start)
                          .tz(userTimeZone)
                          .format("dddd, MMM D")}{" "}
                      </span>
                      <span className="border-l border-e1 dark:border-e1-dark h-6"></span>
                      <span>
                        {moment(webinar.start)
                          .tz(userTimeZone)
                          .format("h:mm A")}{" "}
                        {userTimeZone}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
