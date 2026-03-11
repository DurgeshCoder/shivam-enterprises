import { Metadata } from "next";
import Image from "next/image";
import dhoopPic6 from "@/assets/dhoop6.jpeg";
import dhoopPic3 from "@/assets/dhoop3.jpeg";
import dhoopPic4 from "@/assets/dhoop4.jpeg";

export const metadata: Metadata = {
  title: "pujaitem.in Blog - Spiritual Insights & Puja Business Guides",
  description: "Read about the benefits of natural dhoop batti, differences between agarbatti and dhoop, and insights for wholesale distributors by Shivam Enterprises at pujaitem.in.",
  alternates: {
    canonical: "https://www.pujaitem.in/blog",
  },
};

export default function BlogPage() {
  const articles = [
    {
      title: "Benefits of Using Natural Dhoop Batti vs. Chemical Alternatives",
      category: "Health & Purity",
      preview: "Why is lighting synthetic incense harmful for your lungs? Discover the profound respiratory and spiritual benefits of burning 100% natural, charcoal-free dhoop batti during your daily puja.",
      image: dhoopPic6
    },
    {
      title: "How Dhoop Batti is Manufactured at Shivam Enterprises",
      category: "Manufacturing",
      preview: "Step inside our Dehradun facility to see how we crush raw Guggal and Loban, blend it with pure tree gums, and sun-cure traditional dhoop batti logs without any charcoal.",
      image: dhoopPic4
    },
    {
      title: "Difference Between Agarbatti and Dhoop Batti",
      category: "Spiritual Guide",
      preview: "Both are essential for temples, but what sets them apart? We break down the structural differences, burn times, and why dhoop logs are preferred for heavy, grounding fragrances.",
      image: dhoopPic3
    },
    {
      title: "Best Extruded Dhoop for Large Temples and Ashrams",
      category: "Wholesale Insights",
      preview: "Large temples require slow-burning, high-volume incense that doesn't blacken the walls. Learn which variants of pure Sandalwood and Sambrani are best suited for massive spiritual halls.",
      image: null
    },
    {
      title: "Why Elite Wholesale Buyers Choose Our Dehradun Factory",
      category: "B2B Business",
      preview: "From massive retail chains to individual temple trusts, find out why distributors drop their middlemen to source directly from our ethical manufacturing network in Uttarakhand.",
      image: null
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-900 mb-6 leading-tight">
            Insights on Devotion, <br/> Fragrances, and Business
          </h1>
          <p className="text-lg text-forest-700 leading-relaxed mb-6">
            From discerning pure ingredients to expanding your retail network, read expert articles from the leading manufacturers at Shivam Enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sandalwood-100 flex flex-col group transition-all hover:shadow-xl hover:-translate-y-2 relative">
              
              <div className="h-56 bg-sandalwood-100 overflow-hidden relative border-b border-sandalwood-100 flex items-center justify-center">
                 {article.image ? (
                   <Image src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 ) : (
                   <div className="absolute inset-0 bg-forest-900 flex items-center justify-center">
                     <span className="text-4xl text-saffron-500 opacity-50">✍️</span>
                   </div>
                 )}
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                   {article.category}
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif font-bold text-forest-900 mb-4 group-hover:text-saffron-600 transition-colors">
                   {article.title}
                </h2>
                <p className="text-forest-700 leading-relaxed mb-8 flex-grow">
                   {article.preview}
                </p>
                <a href="#read" className="font-bold text-forest-900 underline underline-offset-4 decoration-saffron-500 hover:text-saffron-600 uppercase text-sm tracking-wider inline-flex items-center gap-2">
                   Read Full Article 
                   <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
