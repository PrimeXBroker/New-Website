"use client";
import AccountTypes1 from "@/components/AccountTypes1";
import Academy from "@/components/home/Academy";
import AdvancedPlatforms from "@/components/home/AdvancedPlatforms";
import Banner from "@/components/home/Banner";
import BecomeIB from "@/components/home/BecomeIB";
import CustomerCare from "@/components/home/CustomerCare";
import OurRecognition from "@/components/home/OurRecognition";
import Rewards from "@/components/home/Rewards";
import TradingOpportunities from "@/components/home/TradingOpportunities";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@nextui-org/modal";
  import Link from "next/link";
  import { HiBellAlert } from "react-icons/hi2";
  import { Button } from "@nextui-org/button";
import NewBanner from "@/components/home/NewBanner";

const HomePage = () => {
    const t = useTranslations("home");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
    const timer = setTimeout(() => {
      onClose();
    }, 10000);
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
    <NewBanner/>
    {/* <Banner/> */}
    <TradingOpportunities />
      <AccountTypes1 />
      <AdvancedPlatforms />
      <BecomeIB />
      <Rewards />
      <CustomerCare />
      <Academy />
      <OurRecognition />
      <Modal
        classNames={{
          closeButton: "z-50",
        }}
        className="overflow-auto"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
      >
        <ModalContent className="overflow-visible bg-accent max-w-xs md:max-w-md">
          {(onClose) => (
            <>
              <ModalHeader className="relative overflow-visible ">
                <HiBellAlert
                  color="#FFD000"
                  className="absolute top-[-25px] right-[50%] translate-x-[50%]"
                  size={60}
                />
              </ModalHeader>
              <ModalBody>
                <div className="px-3 md:px-10">
                  <h1 className="text-secondary text-[16px] md:text-3xl font-semibold text-center pt-5 pb-6">
                    {t("modal.title")}
                  </h1>
                  <p className="text-secondary text-sm md:text-lg  text-center">
                    {t("modal.para1")}
                    <Link
                      className="underline decoration-primary text-sm md:text-lg"
                      href="https://www.primexcapital.com"
                    >
                      www.primexcapital.com
                    </Link>
                  </p>
                  <p className="text-center text-secondary text-sm md:text-lg pt-6">
                    {t("modal.para2")}
                  </p>
                  <p className="text-secondary text-center text-sm md:text-lg">
                    {t("modal.para3")}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-primary text-xs md:text-lg text-secondary font-semibold mx-auto"
                  onPress={onClose}
                >
                  {t("modal.acknowledged")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default HomePage