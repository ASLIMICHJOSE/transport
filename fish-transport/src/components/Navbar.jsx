import { useState } from "react";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
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
  );
}