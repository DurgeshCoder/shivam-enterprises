"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919634921654?text=Hello,%20I%20want%20to%20inquire%20about%20your%20Dhoop%20Batti%20products."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3
        }}
      >
        <FaWhatsapp className="text-4xl" />
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute -top-12 right-0 bg-white text-forest-900 border border-sandalwood-200 shadow-md text-sm font-bold px-3 py-1.5 rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap">
        Chat with us!
      </span>
    </motion.a>
  );
}
