import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Agarbatti & Dhoop Batti Suppliers in India | pujaitem.in",
  description: "Looking for a reliable wholesale agarbatti supplier from Dehradun? Shivam Enterprises manufactures premium, 100% natural dhoop batti. Explore our catalog at pujaitem.in.",
  alternates: {
    canonical: "https://www.pujaitem.in/wholesale-suppliers",
  },
};

export default function WholesaleSuppliersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-sm mb-4 block">B2B Manufacturing</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-900 mb-6 leading-tight">
            Premium Bulk Dhoop Batti Manufacturing Partner
          </h1>
          <p className="text-xl text-forest-700 leading-relaxed mb-8">
            We provide high-margin, ethically manufactured dhoop batti specially customized for temples, large-scale distributors, and pan-India retail networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919634921654?text=Hi%20Shivam%20Enterprises,%20I%20am%20looking%20for%20your%20bulk%20pricing%20catalog." 
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all shadow-xl hover:scale-105">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              Inquire Catalog on WhatsApp
            </a>
            <a href="https://wa.me/919634921654?text=Hi%20Shivam%20Enterprises,%20I%20need%20a%20custom%20quote%20for%20a%20bulk%20temple%20order." 
               target="_blank" rel="noreferrer" className="inline-flex justify-center px-8 py-4 border-2 border-forest-900 text-forest-900 font-bold rounded-full hover:bg-forest-900 hover:text-white transition-colors">
              Get Custom Quote
            </a>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <section className="bg-sandalwood-50 rounded-3xl p-8 md:p-14 mb-20 border border-sandalwood-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/5 rounded-full blur-[100px]"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-12 text-center">
            Why Choose Us as Your B2B Partner?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">📈</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Competitive Margins</h3>
              <p className="text-forest-700 leading-relaxed">By manufacturing directly in Dehradun, we cut out middlemen. Distributors enjoy unmatched pricing and healthy retail margins.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">🪷</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">100% Pure & Natural Guarantee</h3>
              <p className="text-forest-700 leading-relaxed">Unlike cheap incense, our agarbattis and dhoops are charcoal-free and eco-friendly. Temples and premium buyers trust our ingredients.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">🚚</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Pan-India Logistics</h3>
              <p className="text-forest-700 leading-relaxed">We securely package our bulk boxes specifically for long-distance transport. Reliable shipping from Uttarakhand to any state in India.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">🎁</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Custom Packaging Options</h3>
              <p className="text-forest-700 leading-relaxed">Need unbranded supplies for your own label? We offer loose bulk dhoop options as well as retail-ready display boxes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">🏛️</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Temple Supply Contracts</h3>
              <p className="text-forest-700 leading-relaxed">We provide specialized thick dhoop logs and bulk havan samagri at discounted rates for trusts and temple administrations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sandalwood-100">
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-2xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Dedicated Wholesale Support</h3>
              <p className="text-forest-700 leading-relaxed">You will get a direct line to our manufacturing supervisors. Replenishing your inventory is always one WhatsApp message away.</p>
            </div>
          </div>
        </section>

        {/* Distributor Program Section */}
        <div className="bg-forest-900 text-white rounded-3xl p-10 md:p-16 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Become a Official Regional Distributor</h2>
          <p className="text-sandalwood-200 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            We are actively expanding our distribution network. If you have an established network of retail stores or puja samagri shops in your city, we invite you to become the official Shivam Enterprises distributor for your region.
          </p>
          <a href="https://wa.me/919634921654?text=Hello,%20I%20want%20to%20apply%20to%20be%20a%20regional%20distributor%20for%20Shivam%20Enterprises." 
             target="_blank" rel="noreferrer" 
             className="inline-block px-10 py-5 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-lg tracking-wide uppercase">
            Apply For Distributorship
          </a>
        </div>

      </div>
    </main>
  );
}
