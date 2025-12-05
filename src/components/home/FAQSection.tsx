"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const AccordionItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <motion.div
            initial={false}
            className={`glass-card rounded-xl border border-white/5 overflow-hidden mb-4 transition-all duration-300 ${isOpen ? "bg-white/10 border-warm-gold-500/30" : "hover:bg-white/5"
                }`}
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? "text-warm-gold-400" : "text-white"}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 text-warm-gold-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();

    const faqs = [
        {
            question: t("faq.questions.1.q"),
            answer: t("faq.questions.1.a"),
        },
        {
            question: t("faq.questions.2.q"),
            answer: t("faq.questions.2.a"),
        },
        {
            question: t("faq.questions.3.q"),
            answer: t("faq.questions.3.a"),
        },
        {
            question: t("faq.questions.4.q"),
            answer: t("faq.questions.4.a"),
        },
        {
            question: t("faq.questions.5.q"),
            answer: (
                <>
                    {t("faq.questions.5.a")}
                </>
            ),
        },
        {
            question: t("faq.questions.6.q"),
            answer: t("faq.questions.6.a"),
        },
    ];

    return (
        <section id="faq" className="relative py-24 px-6 bg-deep-purple-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                    >
                        {t("faq.title")}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"
                    ></motion.div>
                    <p className="text-gray-400 mt-6 text-lg">
                        {t("faq.subtitle")}
                    </p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
