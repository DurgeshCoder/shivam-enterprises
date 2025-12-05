"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "Are your dhoop battis made from 100% natural ingredients?",
        answer:
            "Yes, absolutely. We use only 100% natural ingredients including pure cow dung, natural herbs, flowers, and essential oils. We do not use any charcoal or harmful chemicals.",
    },
    {
        question: "Do you use any chemicals or synthetic fragrances?",
        answer:
            "No, we strictly avoid synthetic fragrances and chemicals. Our fragrances come from natural essential oils and dried flowers, ensuring a safe and divine experience.",
    },
    {
        question: "How long does one dhoop batti burn?",
        answer:
            "Our handcrafted dhoop battis are designed to burn for approximately 45 to 60 minutes, providing a long-lasting and soothing aroma for your puja or meditation.",
    },
    {
        question: "Do you provide bulk or temple orders?",
        answer:
            "Yes, we specialize in bulk orders for temples, yoga centers, and retail shops. We offer special wholesale pricing and custom packaging options. Please check our 'Bulk & Temple Orders' section for more details.",
    },
    {
        question: "How can I place an order via WhatsApp?",
        answer: (
            <>
                It's very simple! Just click on the 'Buy on WhatsApp' button anywhere on our website or visit our <a href="#contact" className="text-warm-gold-400 hover:underline">Contact section</a>. It will open a chat with us where you can tell us your requirements, and we will confirm your order instantly.
            </>
        ),
    },
    {
        question: "Do you ship outside Dehradun?",
        answer:
            "Yes, we ship across India. While we are based in Dehradun, we ensure our premium dhoop battis reach you wherever you are. Shipping charges may vary based on location and order size.",
    },
];

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
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-warm-gold-300 to-warm-gold-500 mx-auto rounded-full"
                    ></motion.div>
                    <p className="text-gray-400 mt-6 text-lg">
                        Have questions? We're here to help you understand our products better.
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
