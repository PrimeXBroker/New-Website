import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Mission = () => {
  const locale = useLocale();
  const t = useTranslations("about.mission");

  const missionCards = [
    {
      id: 1,
      title: t("mission_title"),
      description: t("mission_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Mission.svg",
    },
    {
      id: 2,
      title: t("vision_title"),
      description: t("vision_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Vision.svg",
    },
  ];

  return (
    <section className="bg-[#000000] py-5 sm:py-20">
      <div className="container">
        <div className="py-4 flex flex-col justify-center items-center md:flex-row border-[#1D1D1D] border-2 bg-[#111111] rounded-2xl">
          {missionCards.map((card, index) => (
            <div
              key={card.id}
              className={`flex items-center group p-8 ${
                index === 0
                  ? `${
                      locale === "ar" || locale === "fa" || locale === "kur"
                        ? "md:border-l-2 md:border-[#1D1D1D] md:pl-12"
                        : "md:border-r-2 md:border-[#1D1D1D] md:pr-12"
                    }`
                  : "md:pl-12"
              } ${
                index !== missionCards.length - 1
                  ? "border-b-2 md:border-b-0 border-[#1D1D1D]"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2
                    className="text-[#ffffff] text-2xl sm:text-3xl font-semibold group-hover:text-[#FED100]"
                    style={{ letterSpacing: "1.2px" }}
                  >
                    {card.title}
                  </h2>
                  <div className="w-14 h-14 border-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                    <Image
                      src={card.imgUrl}
                      alt={card.title}
                      width="500"
                      height="100"
                      className="w-[46px]"
                    />
                  </div>
                </div>
                <p className="text-[#c6c6c6] text-sm sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
