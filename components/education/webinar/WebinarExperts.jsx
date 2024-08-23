import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const WebinarExperts = () => {
  const t = useTranslations("webinar.meetExperts");
  const locale = useLocale();

  const expertsInfo = [
    {
      id: 1,
      name: t("expert1_name"),
      position: t("expert1_position"),
      desc: t("expert1_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/rose.webp",
    },
    {
      id: 2,
      name: t("expert2_name"),
      position: t("expert2_position"),
      desc: t("expert2_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/ahmad.webp",
    },
  ];

  return (
    <section className="py-12">
      <div className="md:max-w-3xl mx-auto">
        <h1
          className="text-secondary md:text-4xl text-xl font-semibold text-center"
          style={{ letterSpacing: "1.25px" }}
        >
          {t("title")}
        </h1>
        <p className="text-secondary md:text-xl text-[16px] font-light text-center py-4 md:py-8">
          {t("description")}
        </p>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-5 ">
        {expertsInfo.map((expert) => (
          <div
            key={expert.id}
            className="relative bg-accent rounded-xl md:w-[50%] h-[320px] shadow-2xl border border-gray-400"
          >
            <Image
              src={expert.imageUrl}
              alt="Background Desktop"
              width={500}
              height={400}
              className="absolute right-0 z-10 bottom-0 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[220px] md:h-[320px] lg:w-[270px] lg:h-[320px] xl:w-[300px] xl:h-[320px]"
              priority={true}
            />
            <div
              className={`flex flex-col h-full justify-center p-5 sm:p-10 md:p-5 lg:p-5 xl:p-10 max-w-[55%] sm:max-w-[55%] md:max-w-[60%] lg:max-w-[60%] ${
                locale === "ar" ? "float-left" : "float-left"
              }`}
            >
              <h2
                className="text-secondary font-semibold xl:text-3xl lg:text-2xl md:text-lg text-xl text-nowrap"
                style={{ letterSpacing: "1.25px" }}
              >
                {expert.name}
              </h2>
              <h5 className="text-secondary font-medium lg:text-xl md:text-[13px] text-nowrap">
                {expert.position}
              </h5>
              <p className="text-[12px] md:text-sm font-medium lg:pt-4 xl:pt-8">
                {expert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebinarExperts;
