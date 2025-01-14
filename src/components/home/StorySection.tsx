import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const StorySection = () => {
  return (
    <div
      id="story"
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Our Story & Heritage
        </h2>
        <div className="border-t-4 border-yellow-500 w-20 mx-auto mb-10"></div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Traditional Craftsmanship
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our dhoop battis are handcrafted using age-old techniques passed
                down through generations, ensuring authentic quality and pure
                fragrance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Natural Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We source only the finest natural ingredients, including herbs,
                essential oils, and pure flowers, to create our premium dhoop
                battis.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Spiritual Connection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each dhoop batti is crafted with devotion, helping create a
                serene atmosphere for meditation and spiritual practices.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-yellow-500 mr-3" />
                100% Natural Ingredients
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-yellow-500 mr-3" />
                Eco-friendly Packaging
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-yellow-500 mr-3" />
                Quality Assurance
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-yellow-500 mr-3" />
                Traditional Methods
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
