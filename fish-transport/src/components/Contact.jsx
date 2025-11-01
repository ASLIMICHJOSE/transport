export default function Contact() {
  return (
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
  );
}