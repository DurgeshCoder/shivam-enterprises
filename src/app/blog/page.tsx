import { Metadata } from "next";
import Image from "next/image";
import dhoopPic6 from "@/assets/dhoop6.jpeg";
import dhoopPic3 from "@/assets/dhoop3.jpeg";

export const metadata: Metadata = {
  title: "Blog - Spiritual Insights & Business Guides | Shivam Enterprises",
  description: "Read about the benefits of natural dhoop batti, differences between agarbatti and dhoop, and insights for wholesale distributors.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
          Insights on Devotion, Fragrances, and Business
        </h1>
        <p className="text-lg text-forest-700 max-w-3xl mb-12">
          Everything you need to know about the agarbatti industry, from discerning pure ingredients to expanding your retail network.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-sandalwood-100 p-6 flex flex-col">
            <div className="h-48 bg-sandalwood-200 rounded-xl mb-6 overflow-hidden">
              <Image src={dhoopPic6} alt="Blog post 1" className="w-full h-full object-cover" />
            </div>
            <span className="text-saffron-600 font-bold mb-2">Guide</span>
            <h2 className="text-xl font-serif font-bold text-forest-900 mb-4">Benefits of Natural Dhoop Batti vs. Chemical Alternatives</h2>
            <p className="text-forest-700 mb-6 flex-grow">Why is lighting synthetic incense bad for you? Learn the difference pure herbs make to your health during daily puja.</p>
            <a href="#" className="font-bold text-forest-900 underline underline-offset-4 hover:text-saffron-600">Read Article →</a>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-sandalwood-100 p-6 flex flex-col">
            <div className="h-48 bg-sandalwood-200 rounded-xl mb-6 overflow-hidden">
              <Image src={dhoopPic3} alt="Blog post 2" className="w-full h-full object-cover" />
            </div>
            <span className="text-saffron-600 font-bold mb-2">Industry Insights</span>
            <h2 className="text-xl font-serif font-bold text-forest-900 mb-4">Maximizing Profit Margins: Tips for Agarbatti Distributors</h2>
            <p className="text-forest-700 mb-6 flex-grow">Strategies for local distributors to maximize returns by sourcing direct from Dehradun manufacturers.</p>
            <a href="#" className="font-bold text-forest-900 underline underline-offset-4 hover:text-saffron-600">Read Article →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
