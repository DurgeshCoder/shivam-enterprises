"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navActive = !isHome || scrolled;

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
    { name: t("navbar.home") || "Home", path: "/" },
    { name: t("navbar.about") || "About Us", path: "/about-us" },
    { name: t("navbar.products") || "Products", path: "/products" },
    { name: t("navbar.how_its_made") || "Manufacturing", path: "/how-we-manufacture" },
    { name: t("navbar.wholesale") || "Wholesale Suppliers", path: "/wholesale-suppliers" },
    { name: t("navbar.contact") || "Contact Us", path: "/contact-us" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-sandalwood-100 shadow-sm py-3"
          : isHome ? "bg-transparent py-5" : "bg-[#FAFAFA]/95 border-b border-sandalwood-100 py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={language === "hi" ? "/?lang=hi" : "/"} className="relative z-50 group">
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${navActive ? "text-forest-900" : "text-white"}`}>
              Shivam <span className="text-saffron-500">Enterprises</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-500 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={language === "hi" ? `${item.path}?lang=hi` : item.path}
                  className={`font-medium text-sm tracking-wide transition-colors relative group py-2 ${
                    isActive 
                      ? (navActive ? "text-saffron-600 font-bold" : "text-saffron-400 font-bold") 
                      : (navActive ? "text-forest-700 hover:text-saffron-600" : "text-gray-200 hover:text-white")
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-saffron-500 transition-all duration-300 group-hover:w-full ${isActive ? "w-full opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-bold tracking-wider ${navActive ? "border-forest-200 text-forest-700 hover:text-forest-900 hover:border-saffron-400 hover:bg-sandalwood-50" : "border-white/20 text-white/80 hover:text-white hover:border-warm-gold-400 hover:bg-white/5"}`}
            >
              <span className={language === "en" ? (navActive ? "text-saffron-600" : "text-saffron-400") : ""}>EN</span>
              <span className={`w-px h-3 ${navActive ? "bg-forest-200" : "bg-white/20"}`}></span>
              <span className={language === "hi" ? (navActive ? "text-saffron-600" : "text-saffron-400") : ""}>हिंदी</span>
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
            className={`lg:hidden text-2xl p-2 rounded-full transition-colors ${navActive ? "text-forest-900 hover:bg-sandalwood-50" : "text-white hover:bg-white/10"}`}
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
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white border-l border-sandalwood-100 z-[101] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-sandalwood-100">
                <span className="text-xl font-serif font-bold text-forest-900">
                  Shivam <span className="text-saffron-500">Enterprises</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-forest-400 hover:text-forest-900 p-2 rounded-full hover:bg-sandalwood-50 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={language === "hi" ? `${item.path}?lang=hi` : item.path}
                        onClick={handleNavClick}
                        className={`block text-lg font-medium py-3 border-b px-4 rounded-lg transition-all ${
                          isActive 
                            ? "text-saffron-600 bg-sandalwood-50 border-sandalwood-100 font-bold" 
                            : "text-forest-700 hover:text-saffron-600 border-sandalwood-50 hover:bg-sandalwood-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
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
                  href="https://wa.me/919634921654?text=Hi Shivam Enterprises, I am looking for your bulk pricing catalog."
                  target="_blank"
                  className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-saffron-500/20"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Inquiry
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
