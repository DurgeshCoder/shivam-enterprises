"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6 bg-deep-purple-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-gold-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-warm-gold-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaMapMarkerAlt className="text-2xl text-warm-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Shivam Enterprises<br />
              Prem Vihar Colony (Near Sai Garden)<br />
              Haripur Kala, Dehradun<br />
              PIN: 249205, INDIA
            </p>
            <p className="text-gray-400 text-sm">
              Located in the serene foothills of Dehradun, Shivam Enterprises is dedicated to crafting pure, natural dhoop batti using traditional methods.
            </p>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-warm-gold-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaPhoneAlt className="text-2xl text-warm-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-gray-300 mb-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <a href="tel:+919634921654" className="text-2xl font-bold text-warm-gold-400 hover:text-warm-gold-300 transition-colors">
              +91 9634921654
            </a>
          </div>

          {/* Social Media */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-warm-gold-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaWhatsapp className="text-2xl text-warm-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, label: "Facebook" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaTwitter />, label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-warm-gold-500 hover:text-deep-purple-900 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
