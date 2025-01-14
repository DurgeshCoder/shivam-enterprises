import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import CustomNavbar from "@/components/CustomNavbar";
import StorySection from "@/components/home/StorySection";
import ProductSection from "@/components/home/ProductSection";
import BenefitsSection from "@/components/home/BenifitsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";
import SlideUp from "@/components/SlideUp";
export const metadata: Metadata = {
  title:
    "Buy Pure & Natural Dhoop Batti Online | Shivam Enterprises| Prem Vihar Colony, Haripur Kala, Dehradun",
  description:
    "Shop handcrafted pure and natural Dhoop Batti made with authentic ingredients and traditional methods. Located at Prem Vihar Colony, Haripur Kala, Dehradun, PIN 249205, India. Perfect for meditation, spiritual wellness, and relaxation.",
  keywords:
    "Pure Dhoop Batti, Natural Incense Sticks, Handcrafted Dhoop Batti, Buy Dhoop Batti Online, Meditation Dhoop Batti, Spiritual Incense, Prem Vihar Colony Dhoop Batti, Haripur Kala Dehradun Dhoop Batti, Dehradun Incense Sticks, Relaxation Incense",
};
export default function Home() {
  return (
    <div>
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
        <BenefitsSection />
      </SlideUp>
      <SlideUp>
        <TestimonialSection />
      </SlideUp>
      <SlideUp>
      <ContactSection />
      </SlideUp>
    </div>
  );
}
