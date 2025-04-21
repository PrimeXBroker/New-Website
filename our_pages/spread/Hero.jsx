"use client";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRef } from "react";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

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
    <section className="bg-[#000000] pt-24 sm:pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff]">
                {t("title")}
              </h1>
              <p className="text-[#c6c6c6] mt-5 w-full">{t("description1")}</p>
              <p className="text-[#c6c6c6] mt-4 w-full">{t("description2")}</p>
            </div>
            <div className="lg:mt-3 flex justify-center md:justify-start">
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="px-8 py-5 font-semibold mt-5 w-full sm:w-[70%] mx-auto md:mx-0 md:w-auto flex items-center justify-center gap-3 custom-button-yellow-white"
              >
                {t("btnTxt")}
                {locale === "ar" || locale === "ku" ? (
                  <BsArrowUpLeftCircleFill />
                ) : (
                  <BsArrowUpRightCircleFill />
                )}
              </button>
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
