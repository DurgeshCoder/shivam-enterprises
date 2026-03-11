import { Metadata } from "next";
import Image from "next/image";
import dhoopPic4 from "@/assets/dhoop4.jpeg";

export const metadata: Metadata = {
  title: "Rooted in Tradition. Crafted for Purity. | About Us",
  description: "Learn about Shivam Enterprises' heritage in Dehradun, our commitment to natural ingredients, and our transition into a trusted wholesale manufacturer.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6 font-devanagari">
          Rooted in Tradition. Crafted for Purity.
        </h1>
        <p className="text-lg text-forest-700 max-w-3xl leading-relaxed mb-12">
          From a small beginning in Haripur Kala, Dehradun, to becoming India's trusted wholesale supplier, our journey has always been guided by devotion and a refusal to compromise on natural purity.
        </p>

        <div className="w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 relative">
          <Image src={dhoopPic4} alt="Shivam Enterprises Dehradun Manufacturing" className="w-full h-full object-cover" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 bg-white p-8 rounded-3xl shadow-sm border border-sandalwood-100">
          <div>
            <h2 className="text-2xl font-serif font-bold text-saffron-600 mb-4">Our Origin Story</h2>
            <p className="text-forest-700 mb-6">
              What started as a small endeavor to create pure, chemical-free incense for our local temple has grown into a trusted supply network across India—without ever compromising our original recipe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-saffron-600 mb-4">The Manufacturing Philosophy</h2>
            <p className="text-forest-700">
              Every batch of our Dhoop is mixed by hand, using herbs sourced directly from trusted farmers. We don't take shortcuts, because devotion deserves purity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
