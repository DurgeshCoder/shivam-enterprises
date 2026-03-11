import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNavbar";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { LanguageProvider } from "@/context/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
  metadataBase: new URL('https://www.pujaitem.in'),
  title: {
    default: "Shivam Enterprises | Premium Dhoop Batti Manufacturer in Dehradun",
    template: "%s | Shivam Enterprises - pujaitem.in"
  },
  description: "Shivam Enterprises configures India's most authentic pure & natural Dhoop Batti. Order handcrafted agarbatti directly from our Dehradun manufacturer explicitly at pujaitem.in.",
  keywords: ["Shivam Enterprises", "pujaitem.in", "Dhoop Batti", "Agarbatti", "Wholesale incense", "Natural Dhoop India", "Dehradun Dhoop Manufacturer"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pujaitem.in",
    siteName: "Shivam Enterprises",
    title: "Shivam Enterprises | Natural Dhoop Batti Manufacturer",
    description: "Wholesale manufacturer of organic, charcoal-free agarbatti from Dehradun. Visit pujaitem.in for premium temple supplies.",
  },
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
          <FloatingWhatsApp />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
