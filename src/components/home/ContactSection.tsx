"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-16 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <div className="border-t-4 border-yellow-500 w-20 mx-auto my-6"></div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              Prem Vihar Colony(Near Sai Garden) Haripur Kala dehradun
              pin.249205, INDIA
            </p>
            {/* <p className="flex items-center mb-3">
              <FaEnvelope className="text-yellow-500 mr-3" />
              info@dhoopbatti.com
            </p> */}
            <p className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 mr-3" />
              +91 9434921654
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 2:00 PM</p>
          </div>

          {/* Follow Us */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-yellow-500 text-black p-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-yellow-500 text-black p-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-yellow-500 text-black p-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
