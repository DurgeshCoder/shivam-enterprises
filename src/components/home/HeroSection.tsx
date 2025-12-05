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
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaLeaf, FaHandHoldingHeart, FaBoxOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const slides = [dhoopPic1, dhoopPic2, dhoopPic3, dhoopPic4, dhoopPic5];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-purple-900 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>

      {/* Light Rays / Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-warm-gold-500/10 via-transparent to-transparent rotate-45 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-deep-purple-500/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-warm-gold-500/10 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>

      {/* Particles (CSS only representation) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Text & CTAs */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white drop-shadow-2xl">
              Pure & Natural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 animate-shimmer bg-[length:200%_100%]">
                Dhoop Batti
              </span> <br />
              for Your Daily Puja
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0 font-light leading-relaxed tracking-wide">
              Handcrafted in Dehradun with traditional methods, natural ingredients, and divine fragrance.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-warm-gold-300/90 uppercase tracking-wider"
          >
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <FaLeaf /> 100% Natural
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <FaHandHoldingHeart /> Handcrafted
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <FaBoxOpen /> Eco-friendly
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <Link href="https://wa.me/919634921654?text=I want buy dhoop batti" target="_blank">
              <button className="w-full sm:w-auto px-8 py-4 bg-warm-gold-500 hover:bg-warm-gold-600 text-deep-purple-900 font-bold rounded-full shadow-lg shadow-warm-gold-500/20 transition-all hover:scale-105 hover:shadow-warm-gold-500/40 flex items-center justify-center gap-2 relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                <FaWhatsapp className="text-xl" /> {t("hero.cta_whatsapp")}
              </button>
            </Link>
            <Link href="#products">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full transition-all hover:scale-105">
                {t("hero.cta_products")}
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 w-full max-w-lg perspective-1000"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-warm-gold-500/30 blur-[80px] rounded-full transform scale-90 animate-pulse-slow"></div>

            <Swiper
              effect="coverflow"
              modules={[Autoplay, Pagination, EffectCoverflow]}
              centeredSlides={true}
              grabCursor={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              slidesPerView={1.2}
              className="w-full py-8"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="transition-all duration-500">
                  <div className="glass-card p-3 rounded-2xl overflow-hidden transform transition-transform hover:scale-105 border border-white/20 shadow-2xl">
                    <Image
                      src={slide}
                      alt={`Pure natural dhoop batti sticks for daily puja - Image ${index + 1}`}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
                      width={500}
                      height={600}
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/919634921654?text=Hi, I'm interested in your Dhoop Batti products."
        target="_blank"
        className="fixed bottom-24 right-6 z-50 animate-float"
      >
        <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
          <FaWhatsapp className="text-3xl relative z-10" />
        </div>
      </Link>
    </section>
  );
};

export default HeroSection;
