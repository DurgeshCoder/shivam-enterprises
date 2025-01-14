import React from "react";
import { FaHeart, FaMoon, FaHome } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Stress Relief",
    description:
      "Natural aromatherapy properties help reduce stress and anxiety, promoting mental wellness.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Better Sleep",
    description:
      "Calming fragrances help create a peaceful environment conducive to quality sleep.",
    icon: <FaMoon />,
  },
  {
    id: 3,
    title: "Home Purification",
    description:
      "Natural fragrances help purify the air and create a soothing atmosphere for your home.",
    icon: <FaHome />,
  },
];

const BenefitsSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black py-16 px-6">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-400 via-red-400 to-purple-500 opacity-10 blur-lg"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Why Choose Our Dhoop Batti?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Discover the unique benefits of our handcrafted, natural products.
        </p>
        <div className="border-t-4 border-yellow-500 w-20 mx-auto my-8"></div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3  gap-8 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 hover:-translate-y-3 group"
            >
              {/* Icon Section */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>

              {/* Card Content */}
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-500 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
