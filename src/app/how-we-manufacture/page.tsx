import { Metadata } from "next";
import Image from "next/image";
import dhoopPic4 from "@/assets/dhoop4.jpeg";
import dhoopPic5 from "@/assets/dhoop5.jpeg";

export const metadata: Metadata = {
  title: "How We Manufacture Dhoop Batti | Shivam Enterprises",
  description: "Discover the step-by-step process of Shivam Enterprises crafting pure, charcoal-free dhoop batti using raw natural herbs at our Dehradun facility. Brought to you by pujaitem.in.",
  alternates: {
    canonical: "https://www.pujaitem.in/how-we-manufacture",
  },
};

export default function ManufacturePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Process</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-900 mb-6 leading-tight">
            From Nature to the Divine: <br/> How We Craft Our Dhoop
          </h1>
          <p className="text-xl text-forest-700 leading-relaxed mb-8">
            We believe devotion deserves nothing less than complete purity. Step inside our Dehradun facility and discover our meticulous, multi-step process for crafting India's finest chemical-free dhoop batti.
          </p>
        </div>

        <div className="space-y-24 mb-24 relative before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-sandalwood-200 hidden md:block z-0"></div>

        <div className="space-y-20 relative z-10 w-full mb-20">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-sandalwood-100 rounded-3xl overflow-hidden shadow-lg border border-sandalwood-200">
              <Image src={dhoopPic4} alt="Sourcing Raw Materials from farmers" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 relative">
              <div className="hidden md:flex absolute top-1/2 -left-[4.5rem] -translate-y-1/2 w-12 h-12 rounded-full bg-forest-900 text-saffron-500 font-serif text-2xl font-bold items-center justify-center border-4 border-[#FAFAFA] shadow-xl z-20">1</div>
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">Sourcing Ethical Herbs & Resins</h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-4">
                Our process bypasses modern synthetic labs. We begin by sourcing raw elements directly from organic farmers and trusted wild-harvesters. We strictly procure pure Guggal resin, raw Loban chunks, real Sandalwood dust, and dried rose petals.
              </p>
              <p className="text-forest-700 text-lg leading-relaxed font-semibold italic text-saffron-600">
                Absolutely no synthetic oils or chemical perfumes are used to fake our scents.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-sandalwood-100 rounded-3xl overflow-hidden shadow-lg border border-sandalwood-200">
              <Image src={dhoopPic5} alt="Blending and Pressing the raw herbal paste" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 md:pr-8 text-left md:text-right relative">
              <div className="hidden md:flex absolute top-1/2 -right-[4.2rem] -translate-y-1/2 w-12 h-12 rounded-full bg-forest-900 text-saffron-500 font-serif text-2xl font-bold items-center justify-center border-4 border-[#FAFAFA] shadow-xl z-20">2</div>
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">Milling, Blending & Binding</h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-4">
                The dried herbs are stone-milled into a fine powder. Because we have a strict <strong className="text-forest-900">Zero Charcoal Policy</strong>, we rely on a proprietary mix of natural tree gums (Jigat) and pure ghee to act as a binder.
              </p>
              <p className="text-forest-700 text-lg leading-relaxed">
                Our master craftsmen then hand-knead the powder into a thick, aromatic paste. This stage requires years of expertise to ensure the mixture holds perfectly while allowing the herbs to express their true fragrance when burning.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-sandalwood-100 rounded-3xl overflow-hidden shadow-lg border border-sandalwood-200 flex items-center justify-center bg-forest-900 relative">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-700 to-forest-900"></div>
               <div className="text-center z-10 px-6">
                 <span className="text-6xl mb-4 block">☀️</span>
                 <h3 className="text-white font-serif text-2xl font-bold">Natural Sun-Drying</h3>
               </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 relative">
              <div className="hidden md:flex absolute top-1/2 -left-[4.5rem] -translate-y-1/2 w-12 h-12 rounded-full bg-forest-900 text-saffron-500 font-serif text-2xl font-bold items-center justify-center border-4 border-[#FAFAFA] shadow-xl z-20">3</div>
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">Extrusion, Rolling & Sun Curing</h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-4">
                Depending on the client's request, the paste is either hand-rolled into sturdy logs or extruded mechanically for uniformity. 
              </p>
              <p className="text-forest-700 text-lg leading-relaxed">
                Rather than using harsh electric kilns that bake out the essential oils, we patiently cure our dhoop battis under natural sunlight for several days in our specialized drying racks. This locks in the earthy scent.
              </p>
            </div>
          </div>

        </div>

        <div className="bg-sandalwood-50 rounded-3xl p-10 md:p-14 border border-sandalwood-200 shadow-sm text-center">
          <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">See It to Believe It</h2>
          <p className="text-forest-700 text-lg max-w-2xl mx-auto mb-10">
            We operate with complete transparency. We invite wholesale buyers and distributors to request video samples of our manufacturing process or schedule a visit to our factory in Dehradun.
          </p>
          <a href="https://wa.me/919634921654?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20your%20manufacturing%20quality." 
             target="_blank" rel="noreferrer" 
             className="inline-flex items-center gap-2 px-10 py-4 bg-forest-900 text-white font-bold rounded-full hover:bg-forest-800 shadow-xl hover:scale-105 transition-all text-lg">
             Request Factory Information
          </a>
        </div>

      </div>
    </main>
  );
}
