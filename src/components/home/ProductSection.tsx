"use client";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

import product1 from "@/assets/products/product1.jpeg";
import product2 from "@/assets/products/product2.jpeg";
import product3 from "@/assets/products/product3.jpeg";
import product4 from "@/assets/products/product4.jpeg";
import product5 from "@/assets/products/product5.jpeg";
import product6 from "@/assets/products/product6.jpeg";
import product7 from "@/assets/products/product7.jpeg";
import product8 from "@/assets/products/product8.jpeg";

import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const products = [
  {
    id: 1,
    name: "Puja Cotton or Vicks",
    description:
      'Puja Cotton is a premium quality cotton designed specifically for religious rituals, prayers, and spiritual offerings. Soft, pure, and absorbent, it is the perfect choice for creating sacred offerings like "cotton wicks" and "cotton balls" used during Puja ceremonies.',
    price: 160,
    discount: 40,
    emoji: "🕉️",
    note: "Buy 2 bundles and get 1 free",
    images: [
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
      product7,
      product8,
    ],
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="relative py-24 px-6 bg-deep-purple-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-warm-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Premium <span className="text-gradient">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          {products.map((product) => {
            const discountedPrice = (
              product.price -
              (product.price * product.discount) / 100
            ).toFixed(2);

            return (
              <div
                key={product.id}
                className="glass-card w-full md:w-2/3 lg:w-1/2 rounded-3xl overflow-hidden hover:shadow-warm-gold-500/20 transition-all duration-500 group"
              >
                <div className="w-full relative">
                  <Swiper
                    effect="coverflow"
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    centeredSlides={true}
                    grabCursor={true}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                    className="w-full h-[400px] md:h-[500px]"
                  >
                    {product.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={slide}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          width={800}
                          height={500}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                    {product.discount}% OFF
                  </div>
                </div>

                <div className="p-8 text-center space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl font-bold text-warm-gold-400">₹{discountedPrice}</span>
                    <span className="text-xl text-gray-500 line-through">₹{product.price}</span>
                  </div>

                  {product.note && (
                    <div className="inline-block bg-warm-gold-500/20 border border-warm-gold-500/30 text-warm-gold-300 px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                      {product.note}
                    </div>
                  )}

                  <div className="pt-4">
                    <Link
                      href={`https://wa.me/919434921654?text=I want buy this : ${product.name}`}
                      target="_blank"
                    >
                      <button className="w-full md:w-auto px-12 py-4 bg-warm-gold-500 hover:bg-warm-gold-600 text-deep-purple-900 font-bold rounded-full shadow-lg shadow-warm-gold-500/20 transition-all hover:scale-105 hover:shadow-warm-gold-500/40 text-lg">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
