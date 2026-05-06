export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen px-6 py-16">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Contact Me</h1>
          <p className="text-gray-500">
            Feel free to reach out for any project or collaboration
          </p>
        </div>

        {/* CONTACT INFO CARD */}
        <div className="bg-gray-100 p-6 rounded-lg mb-10">

          <p className="mb-2">
            📧 Email: <span className="text-blue-600">your@email.com</span>
          </p>

          <p className="mb-2">
            📱 Phone: <span className="text-blue-600">01XXXXXXXXX</span>
          </p>

          <p>
             Location: Bangladesh
          </p>

        </div>

        {/* CONTACT FORM */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded focus:outline-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded focus:outline-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded focus:outline-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}