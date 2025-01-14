"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dhoopPic1 from "@/assets/dhoop1.jpeg";
import dhoopPic2 from "@/assets/dhoop2.jpeg";
import dhoopPic3 from "@/assets/dhoop3.jpeg";
import dhoopPic4 from "@/assets/dhoop4.jpeg";
import dhoopPic5 from "@/assets/dhoop5.jpeg";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

const HeroSection = () => {
  const slides = [dhoopPic1, dhoopPic2, dhoopPic3, dhoopPic4, dhoopPic5];

  return (
    <div className="relative overflow-hidden min-h-[700px] flex flex-col md:flex-row items-center md:justify-between px-6 md:px-24 py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[200px] h-[200px] bg-yellow-500 rounded-full opacity-20 blur-2xl top-10 left-10 animate-pulse dark:opacity-30"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full opacity-10 blur-3xl top-1/2 left-1/4 animate-pulse dark:opacity-20"></div>
        <div className="absolute w-[250px] h-[250px] bg-pink-500 rounded-full opacity-10 blur-2xl bottom-10 right-10 animate-pulse dark:opacity-20"></div>
      </div>

      {/* Left Section: Text Content */}
      <div className="relative z-10 text-center md:text-left md:w-1/2 lg:ml-32 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Pure & Natural <span className="text-yellow-500">Dhoop Batti</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8">
          Experience the divine fragrance of traditional handcrafted incense
          sticks, made with natural ingredients and ancient wisdom.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-yellow-500 text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section: Swiper Carousel */}
      <div className="relative z-10 md:w-1/2 flex justify-start items-center">
        <Swiper
          effect="coverflow"
          modules={[Autoplay, Pagination, EffectCoverflow]}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="w-96 h-96 md:w-[400px] md:h-[400px] mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full rounded-lg object-cover shadow-lg"
                src={slide?.src}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
