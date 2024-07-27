import Image from "next/image";

const missionCards = [
  {
    id: 1,
    title: "Mission",
    description:
      "To offer a cutting-edge trading environment that support traders with advanced tools, exceptional service, and diverse opporunities for financial success",
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/mission.webp",
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To be the leading choice for traders worldwide by continualy innovating and expanding our offerings to meet the evolving needs of the global trading community",
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/vision.webp",
  },
];

const Mission = () => {
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
