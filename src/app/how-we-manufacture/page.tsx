import { Metadata } from "next";
import Image from "next/image";
import dhoopPic4 from "@/assets/dhoop4.jpeg";
import dhoopPic5 from "@/assets/dhoop5.jpeg";

export const metadata: Metadata = {
  title: "Manufacturing Process & Natural Guarantee | Shivam Enterprises",
  description: "Discover our step-by-step process of crafting pure, charcoal-free dhoop batti using raw natural herbs at our Dehradun facility.",
};

export default function ManufacturePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
          From Nature to the Divine: How We Craft Our Dhoop
        </h1>
        <p className="text-lg text-forest-700 max-w-3xl leading-relaxed mb-12">
          We believe devotion deserves nothing less than complete purity. Discover our meticulous, multi-step process for crafting India's finest chemical-free dhoop batti.
        </p>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sandalwood-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-sandalwood-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic4} alt="Sourcing Raw Materials" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-saffron-600 mb-4">1. Sourcing Ethical Herbs</h2>
              <p className="text-forest-700 text-lg">
                Instead of synthetic oils, our process begins with raw herbs, roots, and pure resins sourced directly from authentic farmers. We meticulously select the finest Guggal, Loban, and Sandalwood.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sandalwood-100 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-sandalwood-300 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic5} alt="Blending and Pressing" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-saffron-600 mb-4">2. Blending & Natural Binding</h2>
              <p className="text-forest-700 text-lg">
                We absolutely prohibit the use of charcoal. Our proprietary natural binder is mixed with the crushed herbs to form an aromatic paste.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-forest-900 text-white font-bold rounded-full hover:bg-forest-800 shadow-md">
            Partner With Us
          </button>
        </div>
      </div>
    </main>
  );
}
