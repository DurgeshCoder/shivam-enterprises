import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNavbar";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgressBar from "@/components/ReadingProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-gray-100 dark:bg-gray-900`}>
        <ReadingProgressBar />
        <CustomNavbar />
        <Flowbite>{children}</Flowbite>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
