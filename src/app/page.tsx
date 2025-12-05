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
  title: "Pure Natural Dhoop Batti | Handcrafted Incense | Shivam Enterprises Dehradun",
  description:
    "Buy handcrafted 100% natural dhoop batti & incense sticks from Shivam Enterprises, Dehradun. Pure fragrance for puja, meditation & home. Order on WhatsApp!",
  keywords:
    "Pure Dhoop Batti, Natural Incense Sticks, Handcrafted Dhoop Batti, Buy Dhoop Batti Online, Meditation Dhoop Batti, Spiritual Incense, Prem Vihar Colony Dhoop Batti, Haripur Kala Dehradun Dhoop Batti, Dehradun Incense Sticks, Relaxation Incense",
  alternates: {
    canonical: "https://www.pujaitem.in",
  },
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Shivam Enterprises",
    "image": "https://www.pujaitem.in/logo.png", // Assuming logo exists or generic
    "description": "Handcrafted pure and natural Dhoop Batti made with authentic ingredients and traditional methods.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prem Vihar Colony (Near Sai Garden), Haripur Kala",
      "addressLocality": "Dehradun",
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
      "name": "Dhoop Batti Products",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Premium Puja Cotton",
          "description": "100% Pure Cotton for daily puja rituals.",
          "offers": {
            "@type": "Offer",
            "price": "50",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Natural Dhoop Batti",
          "description": "Handcrafted with natural herbs and essential oils.",
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
        id="json-ld"
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
