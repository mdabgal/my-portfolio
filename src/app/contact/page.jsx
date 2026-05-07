export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-6 py-16 mt-20">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">
            Contact Me
          </h1>
          <p className="text-gray-500">
            Feel free to reach out for any project or collaboration
          </p>
        </div>

        {/* INFO CARD */}
        <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-xl mb-10">

          <p className="mb-2">
             Email:{" "}
            <span className="text-blue-600">
              jannati2917@email.com
            </span>
          </p>

          <p className="mb-2">
             Phone:{" "}
            <span className="text-blue-600">
              01754252246
            </span>
          </p>

          <p>
             Location: Dhaka / Bangladesh
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}