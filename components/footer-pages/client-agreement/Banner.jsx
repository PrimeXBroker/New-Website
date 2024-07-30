import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[45%]">
          <h1
            className={`text-primary text-xl md:text-6xl font-semibold mb-5 md:text-left text-center`}
            style={{ letterSpacing: "1px" }}
          >
            Client <br /> Agreement
          </h1>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/Banner.webp"
            width="300"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
      <div className="container py-8 flex justify-center gap-10">
        <Button
          title="Click to View"
          as="a"
          href="https://drive.google.com/file/d/1mNGtSnTp8h11o8exI8dVqfxsfQGD41MU/view?usp=sharing"
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
          Click to View
        </Button>
        <Button
          title="Click to View"
          as="a"
          href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/client_agreement.pdf"
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
          Download PDF
        </Button>
      </div>
    </section>
  );
};

export default Banner;
