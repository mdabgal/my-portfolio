export default function Footer() {
  return (
    <footer className="bg-gray-200  border-t border-gray-300 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">
              My Portfolio
            </h2>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              I am a passionate Frontend Developer building modern,
              responsive and user-friendly web applications using
              Next.js and Tailwind CSS.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2 text-gray-600">

              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/skills" className="hover:text-blue-600">Skills</a></li>
              <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            <p className="text-gray-600 text-sm">
             jannati2917@gmail.com
            </p>

            <p className="text-gray-600 text-sm mt-1">
             Bangladesh
            </p>
            <p className="text-gray-600 text-sm mt-1">o1754252246</p>

            <div className="flex gap-4 mt-4 text-sm">

              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} My Portfolio. Built with Next.js 

        </div>

      </div>

    </footer>
  );
}