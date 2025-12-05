import React from "react";
import { FaCheckCircle, FaLeaf, FaHandHoldingHeart, FaOm } from "react-icons/fa";

const StorySection = () => {
  const features = [
    {
      title: "Traditional Craftsmanship",
      description: "Our dhoop battis are handcrafted using age-old techniques passed down through generations, ensuring authentic quality and pure fragrance.",
      icon: <FaHandHoldingHeart className="text-4xl text-warm-gold-500 mb-4" />,
    },
    {
      title: "Natural Ingredients",
      description: "We source only the finest natural ingredients, including herbs, essential oils, and pure flowers, to create our premium dhoop battis.",
      icon: <FaLeaf className="text-4xl text-warm-gold-500 mb-4" />,
    },
    {
      title: "Spiritual Connection",
      description: "Each dhoop batti is crafted with devotion, helping create a serene atmosphere for meditation and spiritual practices.",
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
            Our Story & <span className="text-gradient">Heritage</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"></div>
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
              <h3 className="text-3xl font-serif font-bold text-white mb-6">Why Choose Us?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                We are dedicated to bringing you the purest spiritual experience through our meticulously crafted products.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "100% Natural Ingredients",
                  "Eco-friendly Packaging",
                  "Quality Assurance",
                  "Traditional Methods"
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
