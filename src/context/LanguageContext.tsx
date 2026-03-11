"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
    const searchParams = useSearchParams();
    const [language, setLanguageState] = useState<Language>("en");

    // Initialize language based on URL query parameter or localStorage
    useEffect(() => {
        const urlLang = searchParams?.get("lang") as Language;
        const savedLang = localStorage.getItem("language") as Language;
        
        // Prioritize URL parameter, then localStorage, defaulting to 'en'
        const initialLang = urlLang === "hi" || urlLang === "en" ? urlLang 
                            : (savedLang === "hi" || savedLang === "en" ? savedLang : "en");
        
        setLanguageState(initialLang);
        document.documentElement.lang = initialLang;
    }, [searchParams]);

    const setLanguage = (newLang: Language) => {
        setLanguageState(newLang);
        localStorage.setItem("language", newLang);
        document.documentElement.lang = newLang;

        // Create a new URLSearchParams object from the current ones
        const currentParams = new URLSearchParams(Array.from(searchParams?.entries() || []));
        
        // Update or delete the 'lang' parameter based on whether it is Hindi or English default
        if (newLang === "hi") {
            currentParams.set("lang", "hi");
        } else {
            currentParams.delete("lang"); // Keep English URLs clean
        }

        // Construct the new URL maintaining the current pathname and any other query params
        const search = currentParams.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
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
