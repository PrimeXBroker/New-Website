"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";

const Rewards = () => {
  const t = useTranslations("home.rewards");

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="py-12 home_swiper">
      <h1
        className="sectionHeading mt-8"
        data-aos-easing="ease-out"
        data-aos-duration={1100}
        data-aos="slide-up"
      >
        {t("rewards_title")}
      </h1>
      {/* <div className="mx-auto flex flex-col lg:flex-row my-12">
        <div
          className="flex flex-col-reverse sm:flex-row bg-accent p-8 w-full lg:w-[50%] justify-evenly"
          data-aos-easing="ease-out"
          data-aos-duration={1100}
          data-aos="slide-up"
        >
          <div className="flex flex-col">
            <h1 className="sectionHeading">
              {t("rewards_gift_title_1")}
              <br className="hidden sm:block" /> {t("rewards_gift_title_2")}
              <br className="hidden sm:block" /> {t("rewards_gift_title_3")}
            </h1>
            <p className="sectionPara mb-5 sm:text-left text-center">
              {t("rewards_gift_desc_1")}
              <br className="hidden sm:block" /> {t("rewards_gift_desc_2")}
            </p>
            <Button
              radius="full"
              variant="solid"
              color="primary"
              className="w-[250px] mx-auto sm:mx-0 sm:w-full"
            >
              <p className="text-secondary font-semibold">
                {t("rewards_gift_btn")}
              </p>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/campaign01.webp"
              alt="campaign1"
              width="230"
              height="300"
            />{" "}
          </div>
        </div>
        <div
          className="flex flex-col-reverse sm:flex-row bg-secondary p-8 w-full lg:w-[50%] justify-evenly"
          data-aos-easing="ease-out"
          data-aos-duration={1100}
          data-aos="slide-up"
        >
          <div>
            <h1 className="sectionHeading text-white sm:text-left text-center pt-4 sm:pt-0">
              {t("rewards_trade_win_title_1")}
              <br className="hidden sm:block" />
              {t("rewards_trade_win_title_2")}
            </h1>
            <p className="sectionPara text-white mb-5 text-center sm:text-left">
              {t("rewards_trade_win_desc_1")} <br className="hidden sm:block" />
              {t("rewards_trade_win_desc_2")} <br />
              {t("rewards_trade_win_desc_3")}
              <br className="hidden sm:block" />
              {t("rewards_trade_win_desc_4")}
            </p>
            <Button
              radius="full"
              variant="solid"
              className="bg-accent sm:w-[13rem] block sm:mx-0 mx-auto w-[250px]"
            >
              <p className="text-secondary font-semibold">
                {t("rewards_trade_win_btn")}
              </p>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/campaign02.webp"
              alt="campaign2"
              width="230"
              height="300"
            />
          </div>
        </div>
      </div> */}
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse sm:flex-row bg-accent p-8 w-full justify-evenly">
              <div className="flex flex-col">
                <h1 className="sectionHeading">
                  {t("rewards_gift_title_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_2")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_3")}
                </h1>
                <p className="sectionPara mb-5 sm:text-left text-center">
                  {t("rewards_gift_desc_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_desc_2")}
                </p>
                {/* <Button
                  radius="full"
                  variant="solid"
                  color="primary"
                  className="w-[250px] mx-auto sm:mx-0 sm:w-full"
                >
                  <p className="text-secondary font-semibold">
                    {t("rewards_gift_btn")}
                  </p>
                </Button> */}
                <p className="text-danger text-sm text-center">
              This Promotion has ended. Stay tuned for more exciting promotions
            </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/images/campaign01.webp"
                  alt="campaign1"
                  width="300"
                  height="300"
                />{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse sm:flex-row bg-secondary p-8 w-full justify-evenly">
              <div>
                <h1 className="sectionHeading text-white sm:text-left text-center pt-4 sm:pt-0">
                  {t("rewards_trade_win_title_1")}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_title_2")}
                </h1>
                <p className="sectionPara text-white mb-5 text-center sm:text-left">
                  {t("rewards_trade_win_desc_1")}{" "}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_desc_2")} <br />
                  {t("rewards_trade_win_desc_3")}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_desc_4")}
                </p>
                {/* <Button
                  radius="full"
                  variant="solid"
                  className="bg-accent sm:w-[13rem] block sm:mx-0 mx-auto w-[250px]"
                >
                  <p className="text-secondary font-semibold">
                    {t("rewards_trade_win_btn")}
                  </p>
                </Button> */}
                <p className="text-danger text-sm text-center">
              This Promotion has ended. Stay tuned for more exciting promotions
            </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/images/campaign02.webp"
                  alt="campaign2"
                  width="230"
                  height="300"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse sm:flex-row bg-accent p-8 w-full justify-evenly">
              <div className="flex flex-col">
                <h1 className="sectionHeading">
                  {t("rewards_gift_title_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_2")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_3")}
                </h1>
                <p className="sectionPara mb-5 sm:text-left text-center">
                  {t("rewards_gift_desc_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_desc_2")}
                </p>
                {/* <Button
                  radius="full"
                  variant="solid"
                  color="primary"
                  className="w-[250px] mx-auto sm:mx-0 sm:w-full"
                >
                  <p className="text-secondary font-semibold">
                    {t("rewards_gift_btn")}
                  </p>
                </Button> */}
                <p className="text-danger text-sm text-center">
                  This Promotion has ended. Stay tuned for more exciting promotions
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/images/campaign01.webp"
                  alt="campaign1"
                  width="300"
                  height="300"
                />{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse sm:flex-row bg-secondary p-8 w-full justify-evenly">
              <div>
                <h1 className="sectionHeading text-white sm:text-left text-center pt-4 sm:pt-0">
                  {t("rewards_trade_win_title_1")}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_title_2")}
                </h1>
                <p className="sectionPara text-white mb-5 text-center sm:text-left">
                  {t("rewards_trade_win_desc_1")}{" "}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_desc_2")} <br />
                  {t("rewards_trade_win_desc_3")}
                  <br className="hidden sm:block" />
                  {t("rewards_trade_win_desc_4")}
                </p>
                {/* <Button
              radius="full"
              variant="solid"
              className="bg-accent sm:w-[13rem] block sm:mx-0 mx-auto w-[250px]"
            >
              <p className="text-secondary font-semibold">
                {t("rewards_trade_win_btn")}
              </p>
            </Button> */}
                <p className="text-danger text-sm text-center">
                  This Promotion has ended. Stay tuned for more exciting
                  promotions
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  src="/images/campaign02.webp"
                  alt="campaign2"
                  width="230"
                  height="300"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse sm:flex-row bg-accent p-8 w-full justify-evenly">
              <div className="flex flex-col">
                <h1 className="sectionHeading">
                  {t("rewards_gift_title_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_2")}
                  <br className="hidden sm:block" /> {t("rewards_gift_title_3")}
                </h1>
                <p className="sectionPara mb-5 sm:text-left text-center">
                  {t("rewards_gift_desc_1")}
                  <br className="hidden sm:block" /> {t("rewards_gift_desc_2")}
                </p>

                {/* <Button
                radius="full"
                variant="solid"
                color="primary"
                className="w-[250px] mx-auto sm:mx-0 sm:w-full"
              >
                <p className="text-secondary font-semibold">
                  {t("rewards_gift_btn")}
                </p>
              </Button> */}
                <p className="text-danger text-sm text-center">
                  This Promotion has ended. Stay tuned for more exciting
                  promotions
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  src="/images/campaign01.webp"
                  alt="campaign1"
                  width="300"
                  height="300"
                />{" "}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Rewards;
