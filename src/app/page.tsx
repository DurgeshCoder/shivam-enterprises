import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BulkOrdersSection from "@/components/home/BulkOrdersSection";
import { Metadata } from "next";
import SlideUp from "@/components/SlideUp";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pure Natural Dhoop Batti | Handcrafted Incense | Shivam Enterprises",
  description:
    "Buy handcrafted 100% natural dhoop batti & agarbatti from Shivam Enterprises, Dehradun. Pure fragrance for puja, temples, and wholesale distributors.",
  keywords:
    "Dhoop Batti manufacturer, pure dhoop batti supplier, wholesale agarbatti supplier india, natural incense sticks",
  alternates: {
    canonical: "https://www.pujaitem.in",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Shivam Enterprises",
        "image": "https://www.pujaitem.in/logo.png",
        "description": "Premium manufacturer of 100% pure, natural, and charcoal-free dhoop batti in Dehradun.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Prem Vihar Colony (Near Sai Garden), Haripur Kala",
          "addressLocality": "Dehradun",
          "postalCode": "249205",
          "addressCountry": "IN"
        },
        "telephone": "+919634921654"
      },
      {
        "@type": "Manufacturer",
        "name": "Shivam Enterprises",
        "description": "Bulk manufacturer and wholesale supplier of authentic spiritual incense and agarbatti.",
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <SlideUp>
        <HeroSection />
      </SlideUp>

      {/* Trust Badges Bar */}
      <div className="bg-forest-900 border-y border-sandalwood-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center text-center text-sandalwood-100 font-bold tracking-wide gap-4">
          <span>🌿 100% Natural Herbs</span>
          <span className="hidden md:inline">•</span>
          <span>🚫 Zero Charcoal</span>
          <span className="hidden md:inline">•</span>
          <span>🤲 Handcrafted in Dehradun</span>
          <span className="hidden md:inline">•</span>
          <span>🚚 Pan-India Wholesale Delivery</span>
        </div>
      </div>

      <SlideUp>
        <StorySection />
      </SlideUp>
      
      <SlideUp>
        <TestimonialSection />
      </SlideUp>
      
      <SlideUp>
        <BulkOrdersSection />
      </SlideUp>
    </main>
  );
}
