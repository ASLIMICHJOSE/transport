export default function About() {
  return (
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
  );
}