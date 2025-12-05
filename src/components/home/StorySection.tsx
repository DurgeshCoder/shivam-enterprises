"use client";
import React from "react";
import { FaCheckCircle, FaLeaf, FaHandHoldingHeart, FaOm } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const StorySection = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("story.feature_1_title"),
      description: t("story.feature_1_desc"),
      icon: <FaHandHoldingHeart className="text-4xl text-warm-gold-500 mb-4" />,
    },
    {
      title: t("story.feature_2_title"),
      description: t("story.feature_2_desc"),
      icon: <FaLeaf className="text-4xl text-warm-gold-500 mb-4" />,
    },
    {
      title: t("story.feature_3_title"),
      description: t("story.feature_3_desc"),
      icon: <FaOm className="text-4xl text-warm-gold-500 mb-4" />,
    },
  ];

  return (
    <section id="story" className="relative py-20 px-6 bg-deep-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-deep-purple-900/50 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t("story.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"></div>
          <p className="text-xl text-warm-gold-400 mt-4 font-serif italic">
            {t("story.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">{t("story.title")}</h3>
              <p className="text-gray-300 mb-8 text-lg">
                {t("story.description")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t("hero.badge_natural"),
                  t("hero.badge_eco"),
                  t("bulk.benefits.1"),
                  t("hero.badge_handcrafted")
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <FaCheckCircle className="text-warm-gold-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative w-full">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-warm-gold-500/10 to-deep-purple-500/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-6xl text-white/10 font-serif font-bold tracking-widest">PURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
