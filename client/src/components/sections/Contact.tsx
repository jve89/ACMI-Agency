export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600">We’ll respond within 24 hours.</p>
        <form className="mt-8 grid gap-4 text-left">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" required />
          <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" required />
          <textarea placeholder="Your Message" className="border p-3 rounded-md w-full h-32" required />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
