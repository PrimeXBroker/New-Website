"use client";
import ProgressIndicator from "./ProgressIndicator";
import SignUpStep from "./SignUpStep";
import PersonalInfoStep from "./PersonalInfoStep";
import CreatePasswordStep from "./CreatePasswordStep";
import ConfirmEmailStep from "./ConfirmEmailStep";
import SuccessStep from "./SuccessStep";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { phoneOptions } from "@/utils/data";

export default function Register({ step, setStep }) {
  const locale = useLocale();
  const { theme } = useTheme();
  const userTimeZone = moment.tz.guess();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: new Date(),
    country: null,
    city: "",
    language: "",
    password: { first: "", second: "" },
    token: "",
  });
  const [selectedPhone, setSelectedPhone] = useState(phoneOptions[0]);
  const [isChecked, setIsChecked] = useState(true);

  const url = new URL(window.location.href);
  const pidParam = url.searchParams.get("pid");
  const lid = url.searchParams.get("lid");

  const t = useTranslations("registration.register");
  const p = useTranslations("registration.app");
  const d = useTranslations("primeXTradingApp.downloadAppToady");
  const handleNext = (val) => setStep(val);
  const handleBack = () => setStep((prev) => prev - 1);
  console.log(isChecked, "isChecked");

  const sendEmail = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    console.log(formData?.password?.first, "formData?.password?.first");

    if (isChecked) {
      try {
        const birthDateObj =
          formData.birthDate instanceof Date
            ? formData.birthDate
            : new Date(formData.birthDate);

        const data = {
          ...formData,
          birthDate: {
            year: birthDateObj.getFullYear(),
            month: birthDateObj.getMonth() + 1,
            day: birthDateObj.getDate(),
          },
          country: formData?.country?.isoCode,
          phone: `${selectedPhone?.code}${formData?.phone}`,
          ...(pidParam && { partnerId: parseInt(pidParam) }),
          ...(lid && { referralLinkId: parseInt(lid) }),
        };
        const config = {
          method: "put",
          url: "https://my.primexcapital.com/client-api/registration?version=1.0.0",
          data: data,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };

        try {
          const result = await axios(config);
          console.log(result, "result");

          if (result?.data?.registrationToken) {
            const config1 = {
              method: "post",
              url: "https://my.primexcapital.com/client-api/registration/send-pin-by-token?version=1.0.0",
              data: { token: result?.data?.registrationToken },
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            };
            const response = await axios(config1);
            console.log(result, "result");

            console.log(
              JSON.stringify(response, null, 2),
              "response send email"
            );
            if (response) {
              setFormData({
                ...formData,
                token: result?.data?.registrationToken,
              });
              handleNext(2);
            }
          }
        } catch (error) {
          console.log(error, "error");
        }
      } catch (error) {
        console.log(error, "error 1");
      }
    }
  };

  return (
    <div className="px-3 sm:px-12 md:px-16 lg:px-10 xl:px-16 2xl:px-20 pt-28 relative">
      {step !== 5 && (
        <div className="sm:hidden bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/mobile-mockup.webp)] bg-cover bg-center rounded-xl p-4">
          <div className="bg-white/70 dark:bg-white/70 backdrop-blur dark:backdrop-blur rounded-xl p-3">
            <Image
              unoptimized={true}
              width="160"
              height="160"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
              alt="Logo Image"
              className="mb-3 mx-auto"
            />
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm-dark dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts-dark dark:text-ts-dark leading-tight">
                    {d("google_play-btn_part1")}
                  </p>
                  <p className="text-lg font-semibold leading-tight">
                    {d("google_play-btn_part2")}
                  </p>
                </div>
              </a>
              <a
                href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                  }
                  alt="Apple Store"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm-dark dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts-dark dark:text-ts-dark leading-tight">
                    {d("app_store_btn_part1")}
                  </p>
                  <p className="text-lg font-semibold leading-tight">
                    {d("app_store_btn_part2")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      {step !== 5 && (
        <div className="hidden sm:block lg:hidden relative">
          <Image
            unoptimized={true}
            src={
              locale === "ar" || locale === "ps" || locale === "ku"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/tablet-mockup-ar.webp"
                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/tablet-mockup.webp"
            }
            alt="Tablet Mockup"
            width={32}
            height={32}
            className="rounded-xl w-full h-full relative"
          />
          <div className={`hidden sm:flex justify-start items-end`}>
            <div className="absolute top-1/2 end-6 -translate-y-1/2 bg-white/50 dark:bg-white/50 backdrop-blur dak:backdrop-blur rounded-xl p-3">
              <Image
                unoptimized={true}
                width="160"
                height="160"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
                alt="Logo Image"
                className="mb-3 mx-auto"
              />
              <div className="flex flex-col sm:flex-row justify-start items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center px-3 gap-3 sm:gap-0 w-[150px] h-12 rounded-lg group"
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                    alt="Google Play"
                    width={20}
                    height={20}
                  />
                  <div
                    className={`text-tm-dark dark:text-tm-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-3 text-right"
                        : "ml-3 text-left"
                    }`}
                  >
                    <p className="text-[10px] lg:text-xs text-ts-dark dark:text-ts-dark leading-tight">
                      {d("google_play-btn_part1")}
                    </p>
                    <p className="text-xs lg:text-lg font-semibold leading-tight">
                      {d("google_play-btn_part2")}
                    </p>
                  </div>
                </a>
                <a
                  href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center px-3 gap-3 sm:gap-0 w-[150px] h-12 rounded-lg group"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                    }
                    alt="Apple Store"
                    width={20}
                    height={20}
                  />
                  <div
                    className={`text-tm-dark dark:text-tm-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-3 text-right"
                        : "ml-3 text-left"
                    }`}
                  >
                    <p className="text-[10px] lg:text-xs text-ts-dark dark:text-ts-dark leading-tight">
                      {d("app_store_btn_part1")}
                    </p>
                    <p className="text-xs lg:text-lg font-semibold leading-tight">
                      {d("app_store_btn_part2")}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between mb-2 mt-8 sm:mt-6 lg:mt-0 relative z-0">
        {step === 1 && (
          <h2 className="text-tm dark:text-tm-dark font-bold text-[32px] sm:text-[40px]">
            {t("step_1_title")}
          </h2>
        )}
        {/* {step === 2 && (
          <h2 className="text-tm dark:text-tm-dark font-bold text-[32px] sm:text-[40px]">
            {t("step_2_title")}
          </h2>
        )}
        {step === 3 && (
          <h2 className="text-tm dark:text-tm-dark font-bold text-[32px] sm:text-[40px]">
            {t("step_3_title")}
          </h2>
        )} */}
        {step === 2 && (
          <h2 className="text-tm dark:text-tm-dark font-bold text-[32px] sm:text-[40px]">
            {t("step_4_title")}
          </h2>
        )}
        {step !== 3 && <ProgressIndicator step={step} />}
      </div>
      <div className="pb-5 sm:pb-6">
        {step === 1 && (
          <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-lg mb-0">
            {t("step_1_description")}
          </p>
        )}
        {/* {step === 2 && (
          <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-lg mb-0">
            {t("step_2_description")}
          </p>
        )}
        {step === 3 && (
          <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-lg mb-0">
            {t("step_3_description")}
          </p>
        )} */}
        {step === 2 && (
          <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-lg mb-0">
            {t("step_4_description")} {formData?.email}
          </p>
        )}
      </div>
      <div className="flex-1">
        {step === 1 && (
          <SignUpStep
            handleNext={handleNext}
            setFormData={setFormData}
            formData={formData}
            setSelectedPhone={setSelectedPhone}
            selectedPhone={selectedPhone}
            sendEmail={sendEmail}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        )}
        {/* {step === 2 && (
          <PersonalInfoStep
            handleNext={handleNext}
            handleBack={handleBack}
            setFormData={setFormData}
            formData={formData}
          />
        )} */}
        {/* {step === 2 && (
          <CreatePasswordStep
            handleBack={handleBack}
            setFormData={setFormData}
            formData={formData}
            sendEmail={sendEmail}
          />
        )} */}
        {step === 2 && (
          <ConfirmEmailStep
            handleBack={handleBack}
            sendEmail={sendEmail}
            formData={formData}
          />
        )}
        {step === 3 && <SuccessStep />}
      </div>
    </div>
  );
}
