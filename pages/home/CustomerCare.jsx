import { Button } from "@nextui-org/button";
import Image from "next/image";

const CustomerCare = () => {
  return (
    <section className="container mb-8 grid grid-cols-3 border-b-2 border-b-accent">
      <div className="flex flex-col justify-center">
        <h1 className="sectionHeading text-left mb-8">
          Always Here <br /> for You
        </h1>
        <Button
          variant="solid"
          radius="full"
          color="primary"
          className="w-[13rem]"
        >
          <p className="text-secondary font-semibold">Contact Us</p>
        </Button>
      </div>
      <div>
        <Image
          src="/images/customer_care.webp"
          alt="customer care"
          width="300"
          height="300"
        />{" "}
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex gap-2">
          <Image
            src="/images/cc_icon1.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              24/7 Customer Care
            </h1>
            <p>Always ready to assist</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src="/images/cc_icon2.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              Multilingual Support
            </h1>
            <p>Help available in multiple languages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
