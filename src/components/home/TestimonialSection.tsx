"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    review:
      "The fragrance of these dhoop battis is amazing! Creates such a peaceful atmosphere during my morning meditation.",
    rating: 5,
    initial: "R",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Verified Buyer",
    review:
      "Pure and natural ingredients. I love how long-lasting these dhoop battis are. Will definitely buy again!",
    rating: 5,
    initial: "P",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Temple Committee",
    review:
      "We use these dhoop battis in our temple daily. The quality is consistently excellent.",
    rating: 5,
    initial: "A",
  },
  {
    id: 4,
    name: "Anita Kapoor",
    role: "Yoga Instructor",
    review:
      "I recommend these dhoop battis to all my clients for their yoga sessions. Such calming energy!",
    rating: 5,
    initial: "A",
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-gradient-to-b px-10 from-gray-900 to-black text-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <div className="border-t-4 border-yellow-500 w-20 mx-auto mb-8"></div>

        {/* Swiper Wrapper */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-[-40px] bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-white shadow-md transition-transform transform hover:scale-110 z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-[-40px] bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-white shadow-md transition-transform transform hover:scale-110 z-10"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiperInstance) => {
              swiperRef.current = swiperInstance;
            }}
            className="mt-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col justify-between h-[300px] hover:shadow-2xl transition-transform transform hover:scale-105">
                  {/* User Info */}
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-500 text-black font-bold w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md">
                      {testimonial.initial}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  {/* Review */}
                  <p className="text-gray-300 italic mb-6 line-clamp-3">
                    {`"${testimonial.review}"`}
                  </p>
                  {/* Rating */}
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
