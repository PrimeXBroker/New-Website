import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("footer.termsCondition");

  return (
    <section className={`bg-secondary lg:h-screen pt-[60px] lg:pt-12`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[40%]">
          <h1
            className={`text-primary text-xl md:text-6xl font-semibold mb-5 ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title_part1")} <br /> {t("title_part2")}
          </h1>
          <p
            className={`text-white text-[14px] md:text-lg ${
              locale === "ar"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
          >
            {t("description")}
          </p>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/terms/Banner.webp"
            width="300"
            height="300"
            alt="banner Image"
            priority={true}
          />
        </div>
      </div>
      <div className="container py-8 flex flex-col md:flex-row items-center justify-center gap-10">
        <Button
          title="Click to View"
          as="a"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/footer-legal/PrimeX_Capital_Terms_of_Business.pdf"
          color="white"
          className="relative text-white text-center flex h-[70px] rounded-full w-[250px] bg-secondary border border-accent shadow-2xl"
          endContent={
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/eye.svg"
              className="left-0 absolute"
              width="70"
              height="50"
              alt="eye"
            />
          }
        >
          <span className="absolute right-0 left-8 text-[14px] md:text-[16px]">
            {" "}
            {t("view_btn")}
          </span>
        </Button>
        <Button
          title="Click to View"
          as="a"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/footer-legal/PrimeX_Capital_Terms_of_Business.pdf"
          color="white"
          className="relative text-white text-center flex h-[70px] rounded-full w-[250px] bg-secondary border border-accent shadow-2xl"
          endContent={
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/pdf_silver.svg"
              className="left-0 absolute"
              width="70"
              height="50"
              alt="eye"
            />
          }
        >
          <span className="absolute right-0 left-8 text-[14px] md:text-[16px]">
            {t("download_btn")}
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Banner;
