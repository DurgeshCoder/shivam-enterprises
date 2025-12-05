"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
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
    <section id="testimonials" className="relative py-24 px-6 bg-deep-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-warm-gold-500/5 rounded-tr-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all hover:scale-110"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all hover:scale-110"
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
                <div className="glass-card h-full p-8 rounded-2xl flex flex-col relative group hover:bg-white/10 transition-colors duration-300">
                  <FaQuoteLeft className="text-4xl text-warm-gold-500/20 absolute top-6 right-6" />

                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-warm-gold-400 to-warm-gold-600 flex items-center justify-center text-deep-purple-900 font-bold text-xl shadow-lg">
                      {testimonial.initial}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                      <p className="text-warm-gold-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="text-warm-gold-400" />
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
