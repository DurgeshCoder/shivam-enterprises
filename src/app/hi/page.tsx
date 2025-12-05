import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import ProductSection from "@/components/home/ProductSection";
import ShopByNeedSection from "@/components/home/ShopByNeedSection";
import BenefitsSection from "@/components/home/BenifitsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BulkOrdersSection from "@/components/home/BulkOrdersSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";
import SlideUp from "@/components/SlideUp";
import Script from "next/script";

export const metadata: Metadata = {
    title: "शुद्ध प्राकृतिक धूप बत्ती | हस्तनिर्मित अगरबत्ती | शिवम एंटरप्राइजेज देहरादून",
    description:
        "शिवम एंटरप्राइजेज, देहरादून से हस्तनिर्मित 100% प्राकृतिक धूप बत्ती और अगरबत्ती खरीदें। पूजा, ध्यान और घर के लिए शुद्ध सुगंध। व्हाट्सएप पर ऑर्डर करें!",
    keywords:
        "शुद्ध धूप बत्ती, प्राकृतिक अगरबत्ती, हस्तनिर्मित धूप बत्ती, ऑनलाइन धूप बत्ती खरीदें, ध्यान धूप बत्ती, आध्यात्मिक अगरबत्ती, प्रेम विहार कॉलोनी धूप बत्ती, हरिपुर कला देहरादून धूप बत्ती, देहरादून अगरबत्ती",
    alternates: {
        canonical: "https://www.pujaitem.in/hi",
        languages: {
            en: "https://www.pujaitem.in",
            hi: "https://www.pujaitem.in/hi",
        },
    },
};

export default function HindiHome() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "शिवम एंटरप्राइजेज",
        "image": "https://www.pujaitem.in/logo.png",
        "description": "प्रामाणिक सामग्री और पारंपरिक विधियों से बनी हस्तनिर्मित शुद्ध और प्राकृतिक धूप बत्ती।",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "प्रेम विहार कॉलोनी (साई गार्डन के पास), हरिपुर कला",
            "addressLocality": "देहरादून",
            "postalCode": "249205",
            "addressCountry": "IN"
        },
        "telephone": "+919634921654",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "14:00"
            }
        ],
        "priceRange": "₹₹",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "धूप बत्ती उत्पाद",
            "itemListElement": [
                {
                    "@type": "Product",
                    "name": "प्रीमियम पूजा कॉटन",
                    "description": "दैनिक पूजा अनुष्ठानों के लिए 100% शुद्ध कपास।",
                    "offers": {
                        "@type": "Offer",
                        "price": "50",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                    }
                },
                {
                    "@type": "Product",
                    "name": "प्राकृतिक धूप बत्ती",
                    "description": "प्राकृतिक जड़ी-बूटियों और आवश्यक तेलों के साथ हस्तनिर्मित।",
                    "offers": {
                        "@type": "Offer",
                        "price": "120",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                    }
                }
            ]
        }
    };

    return (
        <main className="bg-deep-purple-900 min-h-screen">
            <Script
                id="json-ld-hi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SlideUp>
                <HeroSection />
            </SlideUp>
            <SlideUp>
                <StorySection />
            </SlideUp>
            <SlideUp>
                <ProductSection />
            </SlideUp>
            <SlideUp>
                <ShopByNeedSection />
            </SlideUp>
            <SlideUp>
                <BenefitsSection />
            </SlideUp>
            <SlideUp>
                <ProcessSection />
            </SlideUp>
            <SlideUp>
                <TestimonialSection />
            </SlideUp>
            <SlideUp>
                <BulkOrdersSection />
            </SlideUp>
            <SlideUp>
                <FAQSection />
            </SlideUp>
            <SlideUp>
                <ContactSection />
            </SlideUp>
        </main>
    );
}
