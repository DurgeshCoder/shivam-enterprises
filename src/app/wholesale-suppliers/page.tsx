import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Agarbatti & Dhoop Batti Supplier in India",
  description: "Looking for a reliable wholesale agarbatti supplier? We manufacture premium, 100% natural dhoop batti for temples, distributors, and bulk buyers across India.",
};

export default function WholesaleSuppliersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
          Premium Bulk Dhoop Batti Manufacturing Partner
        </h1>
        <p className="text-lg text-forest-700 max-w-3xl mb-8">
          We provide high-margin, ethically manufactured dhoop battti explicitly customized for temples, distributors, and bulk retail.
        </p>
        
        <div className="flex gap-4 mb-16">
          <a href="https://wa.me/919634921654?text=Hi%20Shivam%20Enterprises,%20I%20am%20looking%20for%20your%20bulk%20pricing%20catalog." 
             target="_blank" rel="noreferrer"
             className="px-8 py-4 bg-saffron-500 text-white font-bold rounded-full hover:bg-saffron-600 shadow-md">
            Inquire on WhatsApp
          </a>
          <button className="px-8 py-4 border border-forest-900 text-forest-900 font-bold rounded-full hover:bg-sandalwood-50">
            Get Custom Quote
          </button>
        </div>

        <section className="bg-sandalwood-50 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold text-forest-900 mb-8">Benefits of Choosing Us as Your Bulk Dhoop Batti Supplier</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-saffron-600 mb-2">Competitive Margins for Distributors</h3>
              <p className="text-forest-700">We control the manufacturing end-to-end, meaning you get the best bulk wholesale prices in the region.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-saffron-600 mb-2">100% Natural Guarantee</h3>
              <p className="text-forest-700">Zero charcoal, no toxic smoke. Clean burning ingredients that temples and eco-conscious buyers demand.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
