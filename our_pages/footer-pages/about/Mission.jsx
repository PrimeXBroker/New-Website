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
    <section className="container py-16 flex flex-col justify-center items-center gap-6 lg:flex-row">
      {missionCards.map((card) => (
        <div
          key={card.id}
          className="flex p-8 items-center bg-white shadow-lg border border-accent rounded-2xl hover:bg-secondary group transition-all duration-300 hover:translate-y-[-10px] cursor-pointer"
        >
          <div className="space-y-2">
            <h1
              className="text-primary text-2xl font-semibold"
              style={{ letterSpacing: "1.2px" }}
            >
              {card.title}
            </h1>
            <p className="text-secondary text-[15px] group-hover:text-white">
              {card.description}
            </p>
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
    </section>
  );
};

export default Mission;
