"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative bg-forest-900 text-white py-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-saffron-500">Shivam Enterprises</h3>
          <p className="text-sandalwood-100 leading-relaxed">
            {t("footer.about_desc")}
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebook />, label: "Facebook" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaYoutube />, label: "YouTube" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-sandalwood-200 hover:bg-saffron-500 hover:text-forest-900 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">{t("footer.quick_links")}</h3>
          <ul className="space-y-4">
            {[
              { name: t("navbar.home") || "Home", path: "/" },
              { name: t("navbar.about") || "About Us", path: "/about-us" },
              { name: t("navbar.products") || "Products", path: "/products" },
              { name: t("navbar.wholesale") || "Wholesale", path: "/wholesale-suppliers" },
              { name: t("navbar.contact") || "Contact Us", path: "/contact-us" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={language === "hi" ? `${link.path}?lang=hi` : link.path}
                  className="text-sandalwood-300 hover:text-saffron-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">{t("footer.contact_us")}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-saffron-500 mt-1 flex-shrink-0" />
              <p className="text-sandalwood-300">
                Shivam Enterprises<br />
                Prem Vihar Colony (Near Sai Garden)<br />
                Haripur Kala, Dehradun<br />
                PIN: 249205, INDIA
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-saffron-500 flex-shrink-0" />
              <a href="tel:+919634921654" className="text-sandalwood-300 hover:text-saffron-400 transition-colors">
                +91 9634921654
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
