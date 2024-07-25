"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

const webinarCards = [
    {
        iconUrl: "/images/education/academy/webinar_icon1.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon1_hover.svg",
        title: "Safe Investment",
        name: "By Mustafa Riad"
    },
    {
        iconUrl: "/images/education/academy/webinar_icon2.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon2_hover.svg",
        title: "History Of Gold",
        name: "By Hussein Al-Mehna"
    },
    {
        iconUrl: "/images/education/academy/webinar_icon3.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon3_hover.svg",
        title: "Volume Profile",
        name: "By Rasul Al-Musawi"
    },
    {
        iconUrl: "/images/education/academy/webinar_icon1.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon1_hover.svg",
        title: "Safe Investment",
        name: "By Mustafa Riad"
    },
    {
        iconUrl: "/images/education/academy/webinar_icon2.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon2_hover.svg",
        title: "History Of Gold",
        name: "By Hussein Al-Mehna"
    },
    {
        iconUrl: "/images/education/academy/webinar_icon3.svg",
        iconHoverUrl: "/images/education/academy/webinar_icon3_hover.svg",
        title: "Volume Profile",
        name: "By Rasul Al-Musawi"
    }
]

const WebinarLibrary = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleIconEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleIconLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <section className='py-8 container'>
            <h1 className='md:text-2xl text-secondary text-center font-semibold pb-4'>Webinar Library</h1>
            <p className='md:text-lg text-secondary text-center max-w-xl mx-auto'>Missed Out On The Live Session? No Worries, Catch Up With Our Webinar Library And Stay Ahead Of The Curve</p>
            <div className="mt-12">
                <Swiper
                 className="webinar_slider"
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {webinarCards.map((card, index) => (
                        <SwiperSlide className="webinar_slider_slide" key={index}>
                            <div
                                onMouseEnter={() => handleIconEnter(index)}
                                onMouseLeave={handleIconLeave}
                                key={index}
                                className="flex flex-col justify-center bg-accent cursor-pointer rounded-2xl border-b-5 w-[250px] h-[250px] group
                 hover:bg-[#3F3F3E] border-black hover:border-primary transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500"
                            >
                                <div className="flex justify-start mb-4">
                                    <Image
                                        src={hoveredIndex === index ? card.iconHoverUrl : card.iconUrl}
                                        alt="academy icon"
                                        width="100"
                                        height="70"
                                        className="block mx-0 academy_img"
                                    />
                                </div>
                                <h1 className="pl-4 sectionHeading text-xl text-left group-hover:text-white">
                                    {card.title}
                                </h1>
                                <p className="pl-4 sectionPara text-left text-sm group-hover:text-white">
                                    {card.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default WebinarLibrary