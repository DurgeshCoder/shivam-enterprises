"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide the purest, handcrafted dhoop battis for meditation and
            spiritual wellness. Our products are made with natural ingredients
            and age-old techniques.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="flex items-center mb-3">
            <FaEnvelope className="text-yellow-500 mr-3" />
            info@dhoopbatti.com
          </p>
          <p className="flex items-center mb-3">
            <FaPhoneAlt className="text-yellow-500 mr-3" />
            +91 9434921654
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-400">
          © 2025 Dhoop Batti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
