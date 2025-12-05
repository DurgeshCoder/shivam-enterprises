import React from "react";
import { FaHeart, FaMoon, FaHome } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Stress Relief",
    description:
      "Natural aromatherapy properties help reduce stress and anxiety, promoting mental wellness.",
    icon: <FaHeart className="text-3xl" />,
  },
  {
    id: 2,
    title: "Better Sleep",
    description:
      "Calming fragrances help create a peaceful environment conducive to quality sleep.",
    icon: <FaMoon className="text-3xl" />,
  },
  {
    id: 3,
    title: "Home Purification",
    description:
      "Natural fragrances help purify the air and create a soothing atmosphere for your home.",
    icon: <FaHome className="text-3xl" />,
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-6 bg-deep-purple-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-deep-purple-900 to-deep-purple-950"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-warm-gold-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Why Choose Our <span className="text-gradient">Dhoop Batti?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the unique benefits of our handcrafted, natural products designed for your well-being.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="glass-card p-8 rounded-2xl relative group hover:bg-white/10 transition-all duration-300 mt-8"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-warm-gold-400 to-warm-gold-600 rounded-full flex items-center justify-center text-deep-purple-900 shadow-lg shadow-warm-gold-500/30 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;


