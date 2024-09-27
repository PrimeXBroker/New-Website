import Image from "next/image";
import { useTranslations } from "next-intl";

const AwardsSection = () => {
  const t = useTranslations("awards.tabs");

  const awardsData = [
    {
      id: 2,
      year: t("award_year_2"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/image.webp",
          title: t("award_8_title"),
          location: t("award_8_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
          title: t("award_4_title"),
          location: t("award_4_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
          title: t("award_5_title"),
          location: t("award_5_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
          title: t("award_6_title"),
          location: t("award_6_location"),
        },
      ],
    },
  ];

  return (
    <section className="bg-accent py-12">
      <div className="container text-center">
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          {awardsData.map((tab) =>
            tab.awards.map((award, index) => (
              <div
                key={index}
                className={`flex flex-col shadow-lg items-center p-4 
                  border border-gray-300
                  hover:bg-secondary rounded-2xl
                  border-b-3
                  hover:border-b-3
                  hover:border-b-primary group cursor-pointer w-[250px] h-[300px]
                  transition-transform hover:translate-y-[-0.5rem] duration-500`}
              >
                <Image
                  src={award.imgSrc}
                  alt={`${award.title} ${award.location}`}
                  width="150"
                  height="150"
                />
                <p className="text-center font-semibold mt-2 group-hover:text-primary">
                  {award.title}
                  <br />
                  {award.location}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
