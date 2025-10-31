// src/App.jsx
import { useState } from "react";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">AquaTrans Tamil Nadu</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-blue-200">Home</a>
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
          <button 
            className="md:hidden bg-blue-800 px-3 py-2 rounded"
            onClick={() => setContactOpen(!contactOpen)}
          >
            ☰
          </button>
        </div>
        {contactOpen && (
          <div className="md:hidden bg-blue-600 px-4 pb-4 space-y-2">
            <a href="#home" className="block hover:text-blue-200">Home</a>
            <a href="#services" className="block hover:text-blue-200">Services</a>
            <a href="#about" className="block hover:text-blue-200">About</a>
            <a href="#contact" className="block hover:text-blue-200">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-blue-50">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-4xl font-bold text-blue-700">
            Efficient Fish Transport Across Tamil Nadu 🐟
          </h2>
          <p className="text-gray-700">
            We specialize in safe, temperature-controlled fish transportation services 
            from coastal areas to inland markets — ensuring freshness every step of the way.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
          >
            Get in Touch
          </a>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1618221412931-4a76e32c5e9f" 
          alt="Fish transport truck"
          className="md:w-1/2 rounded-lg shadow-lg mt-6 md:mt-0"
        />
      </section>

      {/* Services */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cold Chain Logistics", desc: "Maintaining ideal temperature throughout transit." },
              { title: "Live Fish Transport", desc: "Special tanks and oxygen systems for live fish." },
              { title: "Statewide Delivery", desc: "Serving every district in Tamil Nadu efficiently." },
            ].map((service, i) => (
              <div key={i} className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 md:flex items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-700">About AquaTrans</h3>
            <p className="text-gray-700 leading-relaxed">
              AquaTrans is a Tamil Nadu-based fish transport service provider 
              focused on delivering fresh fish from hatcheries to markets with 
              top-tier cold chain management and sustainable logistics.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1618221412931-4a76e32c5e9f"
            alt="About AquaTrans"
            className="md:w-1/2 mt-6 md:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6">Contact Us</h3>
          <form className="max-w-lg mx-auto bg-blue-100 p-6 rounded-xl shadow space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded border border-gray-300" />
            <textarea placeholder="Message" className="w-full p-3 rounded border border-gray-300"></textarea>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 mt-auto">
        © {new Date().getFullYear()} AquaTrans Tamil Nadu | All Rights Reserved
      </footer>
    </div>
  );
}
