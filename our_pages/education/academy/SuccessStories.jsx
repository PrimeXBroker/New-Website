import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const successData = [
  {
    id: 1,
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/testimonial_1.svg",
  },
  {
    id: 2,
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/testimonial_2.svg",
  },
  {
    id: 3,
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/testimonial_3.svg",
  },
  {
    id: 4,
    imgUrl:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/testimonial_4.svg",
  },
];

const SuccessStories = () => {
  const t = useTranslations("academy.successStories");

  return (
    <section className="container py-12">
      <h1 className="text-secondary text-3xl font-semibold text-center mb-6">
        {t("title")}
      </h1>
      <p className="text-secondary text-lg text-center max-w-xl mx-auto">
        {t("description")}
      </p>
      <div className="grid grid-cols-4 pt-6">
        {successData.map((el) => (
          <div key={el.id}>
            <Image src={el.imgUrl} width="350" height="100" alt="users" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
