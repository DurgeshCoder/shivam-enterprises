import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNavbar";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { LanguageProvider } from "@/context/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
});

export const metadata: Metadata = {
  title: "Shivam Enterprises - Pure & Natural Dhoop Batti",
  description: "Shop handcrafted pure and natural Dhoop Batti made with authentic ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${notoSansDevanagari.variable}`}>
      <body className="bg-[#FAFAFA] text-forest-900 font-sans antialiased selection:bg-saffron-500 selection:text-white">
        <LanguageProvider>
          <ReadingProgressBar />
          <CustomNavbar />
          <Flowbite>{children}</Flowbite>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
