import { Metadata } from "next";
import Image from "next/image";
import dhoopPic4 from "@/assets/dhoop4.jpeg";

export const metadata: Metadata = {
  title: "About Shivam Enterprises | The Brand Behind pujaitem.in",
  description: "Learn about Shivam Enterprises' heritage in Dehradun, our commitment to natural ingredients, and why pujaitem.in is India's trusted wholesale manufacturer.",
  alternates: {
    canonical: "https://www.pujaitem.in/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-900 mb-6 leading-tight">
            Rooted in Tradition. <br className="hidden md:block"/> Crafted for Purity.
          </h1>
          <p className="text-xl text-forest-700 leading-relaxed">
            Welcome to <strong className="text-saffron-600">Shivam Enterprises</strong>, Dehradun's premier authentic Dhoop Batti manufacturer. For over a decade, we have been bridging the gap between ancient spiritual purity and modern wholesale supply.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[500px] mb-20 rounded-3xl overflow-hidden shadow-2xl relative group">
          <Image src={dhoopPic4} alt="Shivam Enterprises Dehradun Manufacturing Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent flex items-end p-8 md:p-12">
            <h2 className="text-white font-serif text-2xl md:text-4xl font-bold">Our Factory in Dehradun</h2>
          </div>
        </div>

        {/* The Company Story */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-saffron-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Origin</span>
            <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">A Journey Born from Devotion</h2>
            <p className="text-forest-700 text-lg leading-relaxed mb-6">
              Our journey began in the peaceful surroundings of Haripur Kala, Dehradun. What started as a small, family-owned endeavor to create 100% pure, chemical-free incense for our local temple has blossomed into one of India’s most trusted wholesale manufacturing networks.
            </p>
            <p className="text-forest-700 text-lg leading-relaxed">
              We realized early on that the market was flooded with charcoal-heavy, synthetic agarbattis that caused breathing issues and lacked authentic spiritual essence. We set out to change this by reverting strictly to Vedic recipes—using raw Guggal, Loban, Sandalwood, and natural botanical binders. Today, <strong className="text-forest-900">Shivam Enterprises</strong> supplies countless temples, retail stores, and pan-India distributors.
            </p>
          </div>
          <div className="bg-sandalwood-50 rounded-3xl p-10 border border-sandalwood-200 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">Our Core Values</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-1">🌿</div>
                <div>
                  <h4 className="font-bold text-forest-900 text-lg">Zero Charcoal Policy</h4>
                  <p className="text-forest-700">We refuse to use cheap carbon fillers. Our smoke is clean and respiratory-friendly.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-1">🤝</div>
                <div>
                  <h4 className="font-bold text-forest-900 text-lg">Ethical Wholesale Partnerships</h4>
                  <p className="text-forest-700">We empower local distributors with high margins and reliable supply chains.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-1">⚙️</div>
                <div>
                  <h4 className="font-bold text-forest-900 text-lg">Masterful Craftsmanship</h4>
                  <p className="text-forest-700">Every batch passes strict quality checks before it leaves our Dehradun facility.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Standards & Certifications */}
        <div className="bg-forest-900 text-white rounded-3xl p-10 md:p-16 mb-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-50"></div>
          
          <span className="text-saffron-500 font-bold tracking-widest uppercase text-sm mb-4 block">Uncompromising Quality</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Manufacturing Expertise</h2>
          <p className="text-sandalwood-200 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            As a leading dhoop batti manufacturer in India, we understand that quality is non-negotiable. Our production facility bridges traditional hand-rolling techniques with scalable, hygienic mechanical extrusion to fulfill large volume orders seamlessly.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-forest-800 rounded-2xl border border-forest-700">
              <h3 className="text-4xl font-serif text-saffron-500 mb-2">10+</h3>
              <p className="text-sandalwood-200 font-medium">Years of Experience</p>
            </div>
            <div className="p-6 bg-forest-800 rounded-2xl border border-forest-700">
              <h3 className="text-4xl font-serif text-saffron-500 mb-2">100%</h3>
              <p className="text-sandalwood-200 font-medium">Natural Ingredients</p>
            </div>
            <div className="p-6 bg-forest-800 rounded-2xl border border-forest-700">
              <h3 className="text-4xl font-serif text-saffron-500 mb-2">15+</h3>
              <p className="text-sandalwood-200 font-medium">Unique Fragrance Profiles</p>
            </div>
            <div className="p-6 bg-forest-800 rounded-2xl border border-forest-700">
              <h3 className="text-4xl font-serif text-saffron-500 mb-2">Pan-India</h3>
              <p className="text-sandalwood-200 font-medium">Distribution Network</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-forest-700 text-lg mb-8">
            Whether you need custom white-label packaging or bulk supply for your retail chain, let's discuss your requirements on WhatsApp.
          </p>
          <a href="https://wa.me/919634921654?text=Hello,%20I%20am%20reading%20your%20About%20Us%20page%20and%20want%20to%20discuss%20a%20partnership." 
             target="_blank" rel="noreferrer" 
             className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all text-lg">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
            Chat with our Founders
          </a>
        </div>

      </div>
    </main>
  );
}
