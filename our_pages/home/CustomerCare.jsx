"use client";
import Aos from "aos";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import LocaleLink from "@/components/LocaleLink";
import { TbClock24 } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
const CustomerCare = () => {
  const t = useTranslations("home.customerCare");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="container pb-8 flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b-2 border-b-accent">
     <div className="pb-7 lg:pb-0">
      <Image 
      src='https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/customer_care.webp' 
      width='300' 
      height='300' 
      alt="customer care"/>
     </div>
     <div>
      <h1 className="text-center text-xl md:text-4xl font-semibold text-secondary mb-5">Always Here for You</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="flex gap-2 items-center">
          <TbClock24 size={50} color="#FFD000"/>
          <div>
            <p className="text-secondary font-semibold md:text-xl text-lg">24/7 Customer Care</p>
            <p>always ready to assist</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <GrLanguage size={40} color="#FFD000" />
          <div>
            <p className="text-secondary font-semibold md:text-xl text-lg">Multilingual Support</p>
            <p>Help available in Multiple languages</p>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default CustomerCare;
