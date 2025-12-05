"use client";
import React from "react";
import { FaHeart, FaMoon, FaHome, FaOm, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const ShopByNeedSection = () => {
    const { t } = useLanguage();

    const needs = [
        {
            id: 1,
            title: t("shop_by_need.needs.stress_relief.title"),
            description: t("shop_by_need.needs.stress_relief.desc"),
            icon: <FaHeart className="text-4xl" />,
            gradient: "from-pink-500 to-rose-500",
        },
        {
            id: 2,
            title: t("shop_by_need.needs.better_sleep.title"),
            description: t("shop_by_need.needs.better_sleep.desc"),
            icon: <FaMoon className="text-4xl" />,
            gradient: "from-indigo-400 to-blue-600",
        },
        {
            id: 3,
            title: t("shop_by_need.needs.home_purification.title"),
            description: t("shop_by_need.needs.home_purification.desc"),
            icon: <FaHome className="text-4xl" />,
            gradient: "from-emerald-400 to-green-600",
        },
        {
            id: 4,
            title: t("shop_by_need.needs.meditation_yoga.title"),
            description: t("shop_by_need.needs.meditation_yoga.desc"),
            icon: <FaOm className="text-4xl" />,
            gradient: "from-orange-400 to-amber-600",
        },
    ];

    return (
        <section id="shop-by-need" className="relative py-24 px-6 bg-deep-purple-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-warm-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                    >
                        {t("shop_by_need.title")}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
                    >
                        {t("shop_by_need.subtitle")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {needs.map((need, index) => (
                        <motion.div
                            key={need.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl relative group hover:bg-white/10 transition-all duration-300 flex flex-col h-full border border-white/5 hover:border-white/20"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${need.gradient} flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                {need.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-warm-gold-400 transition-colors">
                                {need.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {need.description}
                            </p>

                            <Link href="#products" className="inline-flex items-center text-warm-gold-400 text-sm font-semibold group-hover:text-warm-gold-300 transition-colors mt-auto">
                                {t("shop_by_need.link")}
                                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${need.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByNeedSection;
