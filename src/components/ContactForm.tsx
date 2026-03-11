"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    buyerType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, phone, buyerType, message } = formData;
    
    // Formatting the message
    const waText = `Hello, I want to inquire about your Dhoop Batti products.

Name: ${firstName} ${lastName}
Phone: ${phone}
Buyer Type: ${buyerType || 'Not Specified'}
Message: ${message}`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/919634921654?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input 
          type="text" 
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name" 
          className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" 
        />
        <input 
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name" 
          className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" 
        />
      </div>
      <input 
        type="tel" 
        name="phone"
        required
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone / WhatsApp Number" 
        className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500" 
      />
      
      <select 
        name="buyerType"
        value={formData.buyerType}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white text-forest-700 focus:outline-none focus:ring-2 focus:ring-saffron-500"
      >
        <option value="">I am a...</option>
        <option value="Retailer">Retailer</option>
        <option value="Distributor / Wholesaler">Distributor / Wholesaler</option>
        <option value="Temple Administrator">Temple Administrator</option>
        <option value="Personal Use Buyer">Personal Use Buyer</option>
      </select>

      <textarea 
        rows={4} 
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="How can we help you?" 
        className="w-full px-4 py-3 rounded-xl border border-sandalwood-200 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
      ></textarea>

      <button type="submit" className="w-full py-4 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-xl shadow-md transition-colors flex justify-center items-center gap-2">
        <span>Send on WhatsApp</span>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.2 0-65.8-9-94.4-25.9l-6.7-4-70.2 18.4 18.7-68.5-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
      </button>
    </form>
  );
}
