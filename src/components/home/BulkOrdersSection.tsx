"use client";
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaOm, FaStore, FaSpa } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
    "Special Wholesale Pricing",
    "Consistent Premium Quality",
    "Reliable Regular Supply",
    "Custom Packaging Options",
];

const BulkOrdersSection = () => {
    return (
        <section className="relative py-24 px-6 bg-deep-purple-900 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-purple-900 via-deep-purple-800 to-deep-purple-900"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-warm-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-warm-gold-500/30 shadow-2xl shadow-warm-gold-500/10 text-center relative overflow-hidden"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-warm-gold-500/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-warm-gold-500/30 rounded-br-3xl"></div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Bulk & <span className="text-warm-gold-400">Temple Orders</span>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We invite <span className="text-white font-semibold">Temples, Yoga Centers, and Retail Shops</span> to partner with us.
                        Bring the divine fragrance of pure, handcrafted dhoop batti to your devotees and customers.
                    </p>

                    {/* Icons Row */}
                    <div className="flex justify-center gap-8 mb-10 text-warm-gold-400/50">
                        <FaOm className="text-4xl" />
                        <FaSpa className="text-4xl" />
                        <FaStore className="text-4xl" />
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <FaCheckCircle className="text-warm-gold-500 flex-shrink-0" />
                                <span className="text-gray-200 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="tel:+919634921654">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-deep-purple-900 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                <FaPhoneAlt /> Call Now
                            </button>
                        </Link>
                        <Link href="https://wa.me/919634921654?text=I am interested in bulk orders" target="_blank">
                            <button className="w-full sm:w-auto px-8 py-4 bg-warm-gold-500 text-deep-purple-900 font-bold rounded-full shadow-lg shadow-warm-gold-500/20 hover:bg-warm-gold-600 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                <FaWhatsapp className="text-xl" /> WhatsApp Us
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BulkOrdersSection;
