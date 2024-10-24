"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CareersApplyForm from "./CareersApplyForm";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("careersPage.banner");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="bg-[#000000] pt-24 sm:pt-28 md:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#ffffff] md:mt-0 lg:my-1">
                {t("title")}
              </h1>
              <p className="text-[#c6c6c6] mt-4">{t("description")}</p>
            </div>
            <div className="mt-2 md:mt-5 flex justify-center md:justify-start">
              <button
                className="py-[16px] px-[46px] font-semibold mt-5 w-full sm:w-[70%] md:w-auto custom-button"
                onClick={onOpen}
              >
                {t("btnTxt")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Careers-banner-right.webp"
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[70%] ms:w-full`}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        size="3xl"
        className="w-auto bg-[#000000]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <CareersApplyForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Banner;
