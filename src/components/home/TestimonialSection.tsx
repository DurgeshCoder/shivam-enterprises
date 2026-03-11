"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
      review: t("testimonials.items.1.review"),
      rating: 5,
      initial: "R",
    },
    {
      id: 2,
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
      review: t("testimonials.items.2.review"),
      rating: 5,
      initial: "P",
    },
    {
      id: 3,
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
      review: t("testimonials.items.3.review"),
      rating: 5,
      initial: "A",
    },
    {
      id: 4,
      name: t("testimonials.items.4.name"),
      role: t("testimonials.items.4.role"),
      review: t("testimonials.items.4.review"),
      rating: 5,
      initial: "A",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-sandalwood-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-saffron-500/5 rounded-tr-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-400 to-saffron-500 mx-auto rounded-full"></div>
          <p className="text-forest-700 mt-4 text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20 bg-white/50 hover:bg-white/80 backdrop-blur-md p-4 rounded-full text-forest-900 shadow-md transition-all hover:scale-110"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20 bg-white/50 hover:bg-white/80 backdrop-blur-md p-4 rounded-full text-forest-900 shadow-md transition-all hover:scale-110"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiperInstance) => {
              swiperRef.current = swiperInstance;
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white border border-sandalwood-100 shadow-sm h-full p-8 rounded-2xl flex flex-col relative group hover:bg-sandalwood-50 transition-colors duration-300">
                  <FaQuoteLeft className="text-4xl text-saffron-500/20 absolute top-6 right-6" />

                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonial.initial}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-forest-900 text-lg">{testimonial.name}</h3>
                      <p className="text-saffron-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-forest-700 italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="text-saffron-500" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
