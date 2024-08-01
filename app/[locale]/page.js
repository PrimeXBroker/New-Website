"use client";
import Academy from "@/our_pages/home/Academy";
import AccountTtpes from "@/our_pages/home/AccountTypes";
import AdvancedPlatforms from "@/our_pages/home/AdvancedPlatforms";
import Banner from "@/our_pages/home/Banner";
import BecomeIB from "@/our_pages/home/BecomeIB";
import CompanyStats from "@/our_pages/home/CompanyStats";
import CustomerCare from "@/our_pages/home/CustomerCare";
import GetStarted from "@/our_pages/home/GetStarted";
import OurRecognition from "@/our_pages/home/OurRecognition";
import Rewards from "@/our_pages/home/Rewards";
import TradingOpportunities from "@/our_pages/home/TradingOpportunities";
import { useTranslations } from "next-intl";
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import Link from "next/link";
import { HiBellAlert } from "react-icons/hi2";
import { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function Home() {
  const t = useTranslations("home");
  const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();
  useEffect(() => {
    // Open the modal when the component mounts
    onOpen();

    // Set a timer to close the modal after 10 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [onOpen, onClose]);

  const statsOne = [
    {
      value: 250000,
      description: t("hero.fact_desc1"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 5000,
      description: t("hero.fact_desc2"),
      symbol: "+",
      prepend: false,
    },
    {
      value: 300,
      description: t("hero.fact_desc3"),
      symbol: "$",
      prepend: "true",
      // suffix: t(""), // Adding suffix
    },
    {
      value: 7,
      description: t("hero.fact_desc4"),
      symbol: "$",
      prepend: "true",
      // suffix: t("fact_no4"),
    },
  ];
  
  return (
    <>
      <Banner />
      <CompanyStats stats={statsOne} />
      <TradingOpportunities />
      <AccountTtpes />
      <AdvancedPlatforms />
      <BecomeIB />
      {/* <Rewards /> */}
      <CustomerCare />
      <Academy />
      {/* <GetStarted /> */}
      <OurRecognition />
      <Modal className="overflow-auto"  isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="overflow-visible bg-accent" >
          {(onClose) => (
            <>
              <ModalHeader 
              className="relative overflow-visible">
                <HiBellAlert color="#FFD000" className="absolute top-[-25px] right-[50%] translate-x-[50%]" size={60}/>
                </ModalHeader>
              <ModalBody>
                <div className="px-10">
                <h1 className="text-secondary font-semibold text-center pt-5 pb-6">{t("modal.title")}</h1>
                <p className="text-secondary text-center">{t("modal.para1")}<Link className="underline decoration-primary" href='https://www.primexcapital.com'>www.primexcapital.com</Link></p>
                <p className="text-center text-secondary pt-6">{t("modal.para2")}</p>
                <p className="text-secondary text-center">{t("modal.para3")}</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-primary text-secondary font-semibold mx-auto"   onPress={onClose}>
               {t("modal.acknowledged")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
