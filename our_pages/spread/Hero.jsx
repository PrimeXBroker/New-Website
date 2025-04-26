"use client";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRef } from "react";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("spreadPage.hero");
  const spreadVideoPlayer = useRef(null);

  const spreadVideoClick = () => {
    if (
      spreadVideoPlayer &&
      spreadVideoPlayer.current &&
      spreadVideoPlayer.current.video
    ) {
      spreadVideoPlayer.current.video.play();
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title")}
              </h1>
              <p className="text-ts dark:text-ts-dark mt-5 w-full">
                {t("description1")}
              </p>
              <p className="text-ts dark:text-ts-dark mt-4 w-full">
                {t("description2")}
              </p>
            </div>
            <div className="lg:mt-3 flex justify-center md:justify-start">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-5"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-5 md:mt-0">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <div className="relative m-auto" onClick={spreadVideoClick}>
                <video
                  ref={spreadVideoPlayer}
                  src="/assets/spread.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="sm:w-[60%] m-auto rounded-3xl"
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
