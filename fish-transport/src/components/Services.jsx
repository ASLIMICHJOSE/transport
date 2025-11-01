export default function Services() {
  const services = [
    { title: "Cold Chain Logistics", desc: "Maintaining ideal temperature throughout transit." },
    { title: "Live Fish Transport", desc: "Special tanks and oxygen systems for live fish." },
    { title: "Statewide Delivery", desc: "Serving every district in Tamil Nadu efficiently." },
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}