"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

type Language = "en" | "hi";
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [language, setLanguageState] = useState<Language>("en");

    // Initialize language based on URL or localStorage
    useEffect(() => {
        const isHindiPath = pathname?.startsWith("/hi");
        const newLang = isHindiPath ? "hi" : "en";
        setLanguageState(newLang);
        document.documentElement.lang = newLang;
    }, [pathname]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);

        // Handle Routing
        if (lang === "hi" && !pathname?.startsWith("/hi")) {
            router.push("/hi");
        } else if (lang === "en" && pathname?.startsWith("/hi")) {
            router.push("/");
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "hi" : "en");
    };

    const t = (key: string): any => {
        const keys = key.split(".");
        let value: any = language === "en" ? en : hi;

        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k as keyof typeof value];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
