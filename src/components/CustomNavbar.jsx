"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-serif font-bold text-warm-gold-400">
          PujaItem.in - Shivam Enterprises
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button
          as={Link}
          href="https://wa.me/919434921654?text=I want buy dhoop batti"
          target="_blank"
          className="bg-warm-gold-500 hover:bg-warm-gold-600 text-deep-purple-900 font-bold rounded-full px-4 transition-transform hover:scale-105"
        >
          Buy on WhatsApp
        </Button>
        <Navbar.Toggle className="text-warm-gold-400 hover:bg-white/10" />
      </div>
      <Navbar.Collapse>
        {[
          { name: "Home", id: "hero" },
          { name: "About", id: "story" },
          { name: "Products", id: "products" },
          { name: "Testimonials", id: "testimonials" },
          { name: "Contact", id: "contact" },
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
