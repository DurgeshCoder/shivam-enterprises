import { Metadata } from "next";
import Image from "next/image";
import dhoopPic1 from "@/assets/dhoop1.jpeg";
import dhoopPic2 from "@/assets/dhoop2.jpeg";
import dhoopPic3 from "@/assets/dhoop3.jpeg";

export const metadata: Metadata = {
  title: "Our Products & Natural Fragrances | Shivam Enterprises",
  description: "Explore our premium spiritual fragrances including Sandalwood, Rose, Guggal, and Loban. Wholesale packaging available.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
          Premium Spiritual Fragrances for Every Need
        </h1>
        <p className="text-lg text-forest-700 max-w-3xl mb-12">
          Earthy, grounding, and slow-burning. Discover our 100% natural, charcoal-free dhoop batti.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Cards */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-sandalwood-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic1} alt="Natural Guggal Dhoop" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Natural Guggal Dhoop</h3>
            <p className="text-forest-700 text-sm mb-6">Purify your home with the ancient, earthy aroma of pure Guggal resin. Perfect for daily rituals.</p>
            <button className="mt-auto px-6 py-2 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-full transition-colors w-full">
              Inquire on WhatsApp
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-sandalwood-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic2} alt="Sandalwood Agarbatti" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Sandalwood (Chandan)</h3>
            <p className="text-forest-700 text-sm mb-6">Experience the calming and grounding essence of real sandalwood. 100% charcoal-free.</p>
            <button className="mt-auto px-6 py-2 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-full transition-colors w-full">
              Inquire on WhatsApp
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-sandalwood-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic3} alt="Premium Puja Cotton" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Premium Puja Cotton</h3>
            <p className="text-forest-700 text-sm mb-6">Unbleached, tightly woven cotton wicks designed for long-lasting diyas and aarti.</p>
            <button className="mt-auto px-6 py-2 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-full transition-colors w-full">
              Inquire on WhatsApp
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-4 border-2 border-forest-900 text-forest-900 font-bold rounded-full hover:bg-forest-900 hover:text-white transition-colors">
            Download Product Catalog (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
