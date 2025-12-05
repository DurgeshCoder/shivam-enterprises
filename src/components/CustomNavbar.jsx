"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Items
  const navItems = [
    { name: t("navbar.home"), id: "hero" },
    { name: t("navbar.products"), id: "products" },
    { name: t("navbar.why_us"), id: "benefits" }, // Linking to Benefits section
    { name: t("navbar.how_its_made"), id: "process" }, // Linking to Process section
    { name: t("navbar.testimonials"), id: "testimonials" },
    { name: t("navbar.contact"), id: "contact" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-deep-purple-900/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={language === "hi" ? "/hi" : "/"} className="relative z-50 group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              PujaItem <span className="text-warm-gold-400">.in</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold-500 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-gray-300 hover:text-warm-gold-400 font-medium text-sm tracking-wide transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-warm-gold-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-warm-gold-400 hover:bg-white/5 transition-all text-xs font-bold tracking-wider"
            >
              <span className={language === "en" ? "text-warm-gold-400" : ""}>EN</span>
              <span className="w-px h-3 bg-white/20"></span>
              <span className={language === "hi" ? "text-warm-gold-400" : ""}>हिंदी</span>
            </button>

            {/* CTA Button */}
            <Link
              href="https://wa.me/919634921654?text=I want buy dhoop batti"
              target="_blank"
              className="relative group overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold-400 to-warm-gold-600 transition-transform duration-300 group-hover:scale-105"></div>
              <div className="relative px-6 py-2.5 flex items-center gap-2 text-deep-purple-900 font-bold text-sm">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
                >
                  <FaWhatsapp className="text-lg" />
                </motion.div>
                {t("navbar.buy_whatsapp")}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-deep-purple-950 border-l border-white/10 z-[101] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <span className="text-xl font-serif font-bold text-white">
                  PujaItem<span className="text-warm-gold-400">.in</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-lg font-medium text-gray-300 hover:text-warm-gold-400 py-3 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-all"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-white/10 space-y-4 bg-black/20">
                {/* Language Toggle Mobile */}
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span className="text-gray-400 text-sm">Language / भाषा</span>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-purple-900 border border-white/20 text-white text-xs font-bold"
                  >
                    <span className={language === "en" ? "text-warm-gold-400" : "text-gray-500"}>EN</span>
                    <span className="w-px h-3 bg-white/20"></span>
                    <span className={language === "hi" ? "text-warm-gold-400" : "text-gray-500"}>हिंदी</span>
                  </button>
                </div>

                {/* CTA Mobile */}
                <Link
                  href="https://wa.me/919634921654?text=I want buy dhoop batti"
                  target="_blank"
                  className="w-full bg-warm-gold-500 hover:bg-warm-gold-600 text-deep-purple-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-warm-gold-500/20"
                >
                  <FaWhatsapp className="text-xl" />
                  {t("navbar.buy_whatsapp")}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomNavbar;
