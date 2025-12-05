"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      fluid
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-deep-purple-900/80 backdrop-blur-md border-b border-white/10 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <Navbar.Brand href={language === 'hi' ? '/hi' : '/'}>
        <span className="self-center whitespace-nowrap text-2xl font-serif font-bold text-warm-gold-400">
          PujaItem.in - Shivam Enterprises
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3 items-center">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-full border border-warm-gold-500/50 text-warm-gold-400 hover:bg-warm-gold-500 hover:text-deep-purple-900 transition-all font-bold text-sm"
        >
          {language === "en" ? "हिंदी" : "EN"}
        </button>

        <Button
          as={Link}
          href="https://wa.me/919634921654?text=I want buy dhoop batti"
          target="_blank"
          className="bg-warm-gold-500 hover:bg-warm-gold-600 text-deep-purple-900 font-bold rounded-full px-4 transition-transform hover:scale-105 hidden sm:flex"
        >
          {t("navbar.buy_whatsapp")}
        </Button>
        <Navbar.Toggle className="text-warm-gold-400 hover:bg-white/10" />
      </div>
      <Navbar.Collapse>
        {[
          { name: t("navbar.home"), id: "hero" },
          { name: t("navbar.about"), id: "story" },
          { name: t("navbar.products"), id: "products" },
          { name: t("navbar.testimonials"), id: "testimonials" },
          { name: t("navbar.contact"), id: "contact" },
        ].map((item) => (
          <Navbar.Link
            key={item.name}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className="text-gray-300 hover:text-warm-gold-400 text-lg font-medium transition-colors md:hover:bg-transparent"
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
