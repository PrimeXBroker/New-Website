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
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";

const PrimeTrade = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.becomeTrader");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container mx-auto px-4">
        <div className="pt-12 px-8 rounded-[20px] bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div
              className={`${
                locale === "ar" || locale === "ps" || locale === "ps"
                  ? "text-center sm:text-right"
                  : "text-center sm:text-left"
              }`}
            >
              <h2 className="text-tm dark:text-tm-dark text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {t("title1")}{" "}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
              </h2>
              <p className="text-tm dark:text-tm-dark pt-3 text-base lg:text-2xl font-normal">
                {t("description")}
              </p>
            </div>
            <CustomYellowButton
              title={t("btnTxt")}
              onClick={() => window.open(getRegisterUrl(locale))}
              className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
            />
          </div>
          <div className="flex justify-center md:justify-end mt-6">
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/CTA-Mockup-Desktop.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/CTA+Mockup+Desktop+Light.webp"
              }
              width="100"
              height="100"
              alt="CTA Mockup Desktop"
              className={`w-full hidden sm:block`}
            />
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/CTA-Mockup-Mobile.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/CTA+Mockup+Mobile+Light.webp"
              }
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
