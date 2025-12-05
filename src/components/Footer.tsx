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

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-warm-gold-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-warm-gold-400">PujaItem.in</h3>
          <p className="text-gray-400 leading-relaxed">
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
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-warm-gold-500 hover:text-deep-purple-900 transition-all duration-300 hover:scale-110"
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
              { name: t("navbar.home"), id: "hero" },
              { name: t("navbar.about"), id: "story" },
              { name: t("navbar.products"), id: "products" },
              { name: t("navbar.contact"), id: "contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-gray-400 hover:text-warm-gold-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">{t("footer.contact_us")}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-warm-gold-500 mt-1 flex-shrink-0" />
              <p className="text-gray-400">
                Shivam Enterprises<br />
                Prem Vihar Colony (Near Sai Garden)<br />
                Haripur Kala, Dehradun<br />
                PIN: 249205, INDIA
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-warm-gold-500 flex-shrink-0" />
              <a href="tel:+919634921654" className="text-gray-400 hover:text-warm-gold-400 transition-colors">
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
