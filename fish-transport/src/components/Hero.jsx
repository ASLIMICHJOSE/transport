export default function Hero() {
  return (
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
  );
}