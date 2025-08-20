"use client";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
      'Puja Cotton is a premium quality cotton designed specifically for religious rituals, prayers, and spiritual offerings. Soft, pure, and absorbent, it is the perfect choice for creating sacred offerings like "cotton wicks" and "cotton balls" used during Puja ceremonies. ',
    price: 160,
    discount: 40, // 20% discount
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
    <div className="relative py-16 " id="products">
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 blur-lg opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Our Premium Products
        </h2>
        <div className="border-t-4 border-yellow-500 w-20 mx-auto mb-10"></div>

        {/* Product Cards */}
        <div className="flex justify-center">
          {products.map((product) => {
            const discountedPrice = (
              product.price -
              (product.price * product.discount) / 100
            ).toFixed(2);

            return (
              <div
                key={product.id}
                className="bg-white w-full md:w-1/2 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="w-full">
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
                    className="w-full h-96   mySwiper"
                  >
                    {product.images.map((slide, index) => (
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
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="text-green-500 font-bold text-xl">
                    ₹{discountedPrice}{" "}
                    <span className="line-through text-gray-400 text-sm">
                      ₹{product.price}
                    </span>
                  </div>
                  <p className="text-green-500 font-semibold text-sm mb-4">
                    Save {product.discount}%!
                  </p>
                  <Link
                    href={`https://wa.me/919634921654?text=I want buy this : ${product.name}`}
                    target="_blank"
                  >
                    <div className="text-red-600 mb-3 animate-bounce">
                      {product.note}
                    </div>
                    <button className="bg-red-500 text-gray-100 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
