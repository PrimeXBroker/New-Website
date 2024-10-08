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
import StatsCard from "../../components/home/StatsCard";
import TradingSection from "./TradingSection";
// import SignalsCenter from "./SignalsCenter";

const HomePage = () => {
  const t = useTranslations("home");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  // useEffect(() => {
  //   onOpen();
  //   const timer = setTimeout(() => {
  //     onClose();
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, [onOpen, onClose]);

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

  const statsData = [
    {
      title: "Served Clients",
      value1: "250k+",
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Served+Clients.svg",
    },
    {
      title: "Paid-up Capital",
      value1: "$300+ ",
      value2: "Million",
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Paid-up+Capital.svg",
    },
    {
      title: "Introducing Brokers",
      value1: "5,000+",
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Introducing+Brokers.svg",
    },
    {
      title: "Daily Trades",
      value1: "$7+ ",
      value2: "Billion",
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Daily+Trades.svg",
    },
  ];

  return (
    <>
      <NewBanner />
      <TradingOpportunities />
      <AccountTypes1 />
      <AdvancedPlatforms />
      <BecomeIB />
      <Rewards />
      <CustomerCare />
      <Academy />
      <OurRecognition />
    </>
  );
};

export default HomePage;
