"use client";
import React from "react";
import { FaCheckCircle, FaLeaf, FaHandHoldingHeart, FaOm } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import dhoopPic1 from "@/assets/dhoop1.jpeg";

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
    <section id="story" className="relative py-20 px-6 bg-[#FAFAFA] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sandalwood-50 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-4">
            {t("story.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-400 to-saffron-500 mx-auto rounded-full"></div>
          <p className="text-xl text-saffron-600 mt-4 font-serif italic">
            {t("story.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-sandalwood-100 shadow-sm p-8 rounded-2xl hover:shadow-md transition-all duration-300 group">
              <div className="transform group-hover:scale-110 transition-transform duration-300 text-saffron-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-forest-900 mb-4">{feature.title}</h3>
              <p className="text-forest-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        {/* Why Choose Us */}
        <div className="mt-16 bg-white border border-sandalwood-100 shadow-sm p-8 md:p-12 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-serif font-bold text-forest-900 mb-6">{t("story.title")}</h3>
              <p className="text-forest-700 mb-8 text-lg">
                {t("story.description")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t("hero.badge_natural"),
                  t("hero.badge_eco"),
                  t("bulk.benefits.1"),
                  t("hero.badge_handcrafted")
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-forest-800 font-medium">
                    <FaCheckCircle className="text-saffron-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative w-full">

              <div className="aspect-video rounded-2xl bg-sandalwood-100 border border-sandalwood-200 overflow-hidden relative shadow-lg">
                <img 
                  src={dhoopPic1.src}
                  alt={t("story.title")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full border border-sandalwood-100">
                  <span className="text-xs font-serif font-bold tracking-widest text-forest-900 uppercase">Pure & Natural</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
