"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-slate-800 p-6 rounded-xl shadow-lg text-center space-y-4">
        
        <p className="text-gray-300">
          Feel free to contact me for any project or collaboration 
        </p>

        {/* Email */}
        <div className="bg-slate-700 p-3 rounded">
          <p className="text-sm text-gray-400">Email</p>
          <p className="font-semibold">jannati2917@email.com</p>
        </div>

        {/* Phone */}
        <div className="bg-slate-700 p-3 rounded">
          <p className="text-sm text-gray-400">Phone</p>
          <p className="font-semibold">0154252246</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="mailto:jannati2917@email.com"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Email
          </a>

          <a
            href="https://wa.me/8801754252246"
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}