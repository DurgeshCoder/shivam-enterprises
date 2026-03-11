import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for Bulk Wholesale Agarbatti | Shivam Enterprises",
  description: "Get in touch for temple orders, retail distribution, and bulk dhoop batti. Located in Haripur Kala, Dehradun.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">Let's Begin a Divine Partnership</h1>
          <p className="text-lg text-forest-700">
            Whether you are a local retailer, a temple administrator, or a large-scale distributor, our team in Dehradun is ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sandalwood-100">
            <h2 className="text-2xl font-serif font-bold text-forest-900 mb-8">Direct Contact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-saffron-600 uppercase tracking-wider mb-2">Manufacturing Facility</h3>
                <p className="text-forest-900 font-medium">Prem Vihar Colony (Near Sai Garden),<br/>Haripur Kala, Dehradun, 249205, INDIA</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-saffron-600 uppercase tracking-wider mb-2">Phone / WhatsApp</h3>
                <a href="tel:+919634921654" className="text-forest-900 font-bold text-xl hover:text-saffron-500">+91 9634921654</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-sandalwood-50 p-8 md:p-12 rounded-3xl shadow-inner border border-sandalwood-200">
            <h2 className="text-2xl font-serif font-bold text-forest-900 mb-8">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" />
              </div>
              <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" />
              
              <select className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white text-forest-700 focus:outline-none focus:ring-2 focus:ring-saffron-500">
                <option value="">I am a...</option>
                <option value="retail">Retailer</option>
                <option value="wholesale">Distributor / Wholesaler</option>
                <option value="temple">Temple Administrator</option>
                <option value="personal">Personal Use Buyer</option>
              </select>

              <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500"></textarea>

              <button type="button" className="w-full py-4 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-xl shadow-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
