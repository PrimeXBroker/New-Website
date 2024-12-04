"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import CopyProgramFormWrapper from "./CopyProgramFormWrapper";

const PrimeTrade = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.becomeTrader");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="bg-[#000000] pb-8 sm:pb-20">
      <div className="container mx-auto px-4">
        <div className="pt-12 px-8 rounded-[20px] bg-[#111111] text-[#ffffff]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div
              className={`${
                locale === "ar" || locale === "fa" || locale === "fa"
                  ? "text-center sm:text-right"
                  : "text-center sm:text-left"
              }`}
            >
              <h2 className="text-[#ffffff] text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {t("title1")}{" "}
                <span className="text-[#FED100]">{t("title2")}</span>
              </h2>
              <p className="text-[#ffffff] pt-3 text-base lg:text-2xl font-normal">
                {t("description")}
              </p>
            </div>
            <button
              onClick={onOpen}
              className="py-3 px-6 lg:py-4 lg:px-12 text-base md:text-[15px] lg:text-base font-semibold rounded-md w-full md:w-auto custom-button"
            >
              {t("btnTxt")}
            </button>
          </div>
          <div className="flex justify-center md:justify-end mt-6">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/CTA+Mockup+Desktop.webp"
              width="100"
              height="100"
              alt="CTA Mockup Desktop"
              className={`w-full hidden sm:block`}
            />
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/CTA+Mockup+Mobile.webp"
              width="100"
              height="100"
              alt="CTA Mockup Mobile"
              className={`w-full block sm:hidden`}
            />
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top"
          className="bg-[#1D1D1D] border-[#222222] border-3 rounded-[24px] xl:p-[24px] ms:p-[40px] max-w-[100%] xl:max-w-[80%] copy-program-modal"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="px-0">
                  <CopyProgramFormWrapper />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default PrimeTrade;
