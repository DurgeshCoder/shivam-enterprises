import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Sandalwood Dhoop",
    description: "Pure sandalwood fragrance for meditation and peace",
    price: 199,
    discount: 20, // 20% discount
    emoji: "🕉️",
  },
  {
    id: 2,
    name: "Rose Dhoop",
    description: "Floral fragrance for positive energy",
    price: 149,
    discount: 10, // 10% discount
    emoji: "🌺",
  },
  {
    id: 3,
    name: "Herbal Mix Dhoop",
    description: "Blend of sacred herbs for purification",
    price: 249,
    discount: 15, // 15% discount
    emoji: "🌿",
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
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const discountedPrice = (
              product.price -
              (product.price * product.discount) / 100
            ).toFixed(2);

            return (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{product.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="text-yellow-500 font-semibold text-lg">
                  ₹{discountedPrice}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ₹{product.price}
                  </span>
                </div>
                <p className="text-green-500 text-sm mb-4">
                  Save {product.discount}%!
                </p>
                <Link
                  href={`https://wa.me/919434921654?text=I want buy this : ${product.name}`}
                  target="_blank"
                >
                  <button className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    Buy Now
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
