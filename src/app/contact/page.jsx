export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 pt-28 pb-20">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold mb-3">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400">
            Feel free to reach out for any project or collaboration
          </p>

        </div>

        {/* INFO CARD */}
        <div className="bg-[#111] border border-white/10 p-6 rounded-3xl mb-10 space-y-3">

          <p className="text-gray-400">
             Email:{" "}
            <span className="text-white">jannati2917@email.com</span>
          </p>

          <p className="text-gray-400">
             Phone:{" "}
            <span className="text-white">01754252246</span>
          </p>

          <p className="text-gray-400">
             Location: Dhaka, Bangladesh
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-4 bg-[#111] border border-white/10 p-6 rounded-3xl">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-white/10 p-3 rounded-xl focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-white/10 p-3 rounded-xl focus:outline-none focus:border-cyan-400"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-black border border-white/10 p-3 rounded-xl focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-xl hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}