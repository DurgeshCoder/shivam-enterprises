import { Metadata } from "next";
import Image from "next/image";
import dhoopPic1 from "@/assets/dhoop1.jpeg";
import dhoopPic2 from "@/assets/dhoop2.jpeg";
import dhoopPic3 from "@/assets/dhoop3.jpeg";

export const metadata: Metadata = {
  title: "Buy Natural Dhoop Batti & Spiritual Fragrances | pujaitem.in",
  description: "Explore premium spiritual fragrances by Shivam Enterprises including Sandalwood, Rose, Guggal, and Loban. Wholesale packaging available explicitly on pujaitem.in.",
  alternates: {
    canonical: "https://www.pujaitem.in/products",
  },
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
            <a href="https://wa.me/919634921654?text=Hello,%20I%20am%20interested%20in%20buying%20your%20product%20in%20bulk." target="_blank" rel="noreferrer" className="mt-auto px-6 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-colors w-full flex justify-center items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              Inquire on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-sandalwood-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic2} alt="Sandalwood Agarbatti" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Sandalwood (Chandan)</h3>
            <p className="text-forest-700 text-sm mb-6">Experience the calming and grounding essence of real sandalwood. 100% charcoal-free.</p>
            <a href="https://wa.me/919634921654?text=Hello,%20I%20am%20interested%20in%20buying%20your%20product%20in%20bulk." target="_blank" rel="noreferrer" className="mt-auto px-6 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-colors w-full flex justify-center items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              Inquire on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-sandalwood-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <Image src={dhoopPic3} alt="Premium Puja Cotton" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">Premium Puja Cotton</h3>
            <p className="text-forest-700 text-sm mb-6">Unbleached, tightly woven cotton wicks designed for long-lasting diyas and aarti.</p>
            <a href="https://wa.me/919634921654?text=Hello,%20I%20am%20interested%20in%20buying%20your%20product%20in%20bulk." target="_blank" rel="noreferrer" className="mt-auto px-6 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-colors w-full flex justify-center items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              Inquire on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://wa.me/919634921654?text=Hello,%20I%20would%20like%20to%20request%20your%20Wholesale%20Product%20Catalog." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-forest-900 border-2 border-forest-900 text-white font-bold rounded-full hover:bg-forest-800 transition-colors shadow-xl">
            Request Product Catalog
          </a>
        </div>
      </div>
    </main>
  );
}
