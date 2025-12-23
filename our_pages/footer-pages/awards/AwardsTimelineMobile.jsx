import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AwardsTimelineMobile = () => {
  const t = useTranslations("newAwards.awardCards");
  const awardIds = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="bg-p dark:bg-p-dark py-16">
      <div className="container">
        <div className="timeline-mobile flex justify-center">
          <div className="outer inline-block">
            {awardIds.map((id, index) => {
              const isFirst = index === 0;
              const isLast = index === awardIds.length - 1;
              const isEven = index % 2 === 0;

              return (
                <div key={id} className="card-mobile relative">
                  <div
                    className={`bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute flex justify-center items-center ${
                      isFirst
                        ? "-top-3 -left-3"
                        : isLast
                        ? "-bottom-1 -right-3"
                        : isEven
                        ? "top-1/2 -left-3"
                        : "top-1/2 -right-3"
                    }`}
                  >
                    <span className="text-ts dark:text-ts-dark text-sm">
                      {t(`award_count${id}`)}
                    </span>
                  </div>
                  <div className="rounded-[20px] p-5 transition-all duration-700 bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark">
                    <div
                      className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                      dir="ltr"
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          unoptimized={true}
                          width="120"
                          height="120"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                          alt="Left Leaf"
                          className="w-full"
                        />
                        <Image
                          unoptimized={true}
                          width="120"
                          height="120"
                          src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/primex-awards/award+${id}.png`}
                          alt="Award"
                          className="w-[106px] h-[106px]"
                        />
                        <Image
                          unoptimized={true}
                          width="120"
                          height="120"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                          alt="Right Leaf"
                          className="w-full"
                        />
                      </div>
                      <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                        {t(`awardYear${id}`)}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                        {t(`subtitle${id}`)}
                      </h3>
                      <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark">
                        {t(`title${id}`)}
                      </h2>
                      <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                        {t(`description${id}`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsTimelineMobile;
