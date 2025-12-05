"use client";
import React from "react";
import { FaLeaf, FaHands, FaSun, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const ProcessSection = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            title: t("process.steps.1.title"),
            description: t("process.steps.1.desc"),
            icon: <FaLeaf className="text-3xl" />,
        },
        {
            id: 2,
            title: t("process.steps.2.title"),
            description: t("process.steps.2.desc"),
            icon: <FaHands className="text-3xl" />,
        },
        {
            id: 3,
            title: t("process.steps.3.title"),
            description: t("process.steps.3.desc"),
            icon: <FaSun className="text-3xl" />,
        },
    ];

    return (
        <section id="process" className="relative py-24 px-6 bg-deep-purple-900 overflow-hidden">
            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-purple-900 via-deep-purple-800 to-deep-purple-900 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-warm-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                    >
                        {t("process.title")}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-white/10 rounded-full"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Number & Icon */}
                            <div className="relative z-10 w-24 h-24 rounded-full bg-deep-purple-800 border-4 border-deep-purple-900 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-warm-gold-400 to-warm-gold-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-20 text-warm-gold-400 group-hover:text-deep-purple-900 transition-colors duration-300">
                                    {step.icon}
                                </div>
                                {/* Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warm-gold-500 text-deep-purple-900 font-bold flex items-center justify-center shadow-lg">
                                    {step.id}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="glass-card p-6 rounded-2xl w-full hover:bg-white/10 transition-colors duration-300 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-warm-gold-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
