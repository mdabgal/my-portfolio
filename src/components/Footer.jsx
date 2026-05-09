"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Jannati
            </h2>

            <div className="w-20 h-1 bg-cyan-400 rounded-full mb-5"></div>

            <p className="text-gray-400 leading-relaxed">
              Passionate Frontend Developer focused on building modern,
              responsive and user-friendly web applications using Next.js,
              React and Tailwind CSS.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
              <li><Link href="/skills" className="hover:text-cyan-400">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-cyan-400">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
            </ul>
          </motion.div>

          {/* CONTACT + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >

            <h3 className="text-2xl font-bold text-white mb-5">
              Contact
            </h3>

            {/* CONTACT INFO */}
            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="w-6 h-6" />
                <span className="text-white">jannati2917@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="w-6 h-6" />
                <span className="text-white">Bangladesh</span>
              </div>

              <div className="flex items-center gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" className="w-6 h-6" />
                <span className="text-white">01754252246</span>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-3 mt-8">

              <Link
                href="https://github.com/mdabgal"
                target="_blank"
                className="px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/jannati-jannati-0203693b4/"
                target="_blank"
                className="px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400"
              >
                LinkedIn
              </Link>

              <Link
                href="https://www.facebook.com/share/18TdQE5oAm"
                target="_blank"
                className="px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400"
              >
                Facebook
              </Link>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jannati Portfolio. Built with Next.js & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}