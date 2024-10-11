import Image from "next/image";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("about.mission");

  const missionCards = [
    {
      id: 1,
      title: t("mission_title"),
      description: t("mission_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/mission.webp",
    },
    {
      id: 2,
      title: t("vision_title"),
      description: t("vision_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/vision.webp",
    },
  ];

  return (
    <section className="bg-[#000000]">
      <div className="container py-16 flex flex-col justify-center items-center gap-6 lg:flex-row">
        {missionCards.map((card) => (
          <div
            key={card.id}
            className="flex p-8 items-center bg-[#111111] shadow-lg border-2 border-[#1D1D1D] rounded-2xl hover:border-[#FED100] group transition-all duration-300 hover:translate-y-[-10px] cursor-pointer group"
          >
            <div className="space-y-2">
              <h2
                className="text-[#ffffff] text-2xl font-semibold group-hover:text-[#FED100]"
                style={{ letterSpacing: "1.2px" }}
              >
                {card.title}
              </h2>
              <p className="text-[#c6c6c6] text-[15px]">{card.description}</p>
            </div>
            <div>
              <Image
                src={card.imgUrl}
                alt={card.title}
                width="500"
                height="100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
