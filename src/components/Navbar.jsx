"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full  z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-4"
        >
          <Image
            src={profilePic}
            width={50}
            height={50}
            alt="profile"
            className="rounded-full border border-cyan-400 object-cover"
          />

          <div>
            <h1 className="text-white font-bold text-xl">
              Jannati
            </h1>

            <p className="text-cyan-400 text-xs tracking-[3px] uppercase">
              Developer
            </p>
          </div>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/about"
          >
            About
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/skills"
          >
            Skills
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/education"
          >
            Education
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/projects"
          >
            Projects
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            href="/contact"
          >
            Contact
          </Link>

        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2 rounded-xl text-black font-semibold shadow-lg shadow-cyan-500/20"
          >
            Hire Me
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-gray-300"
          >

            <button
              onClick={() => setOpen(false)}
              className="text-right text-2xl text-white"
            >
              ✕
            </button>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/"
            >
              Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/about"
            >
              About
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/skills"
            >
              Skills
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/education"
            >
              Education
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/projects"
            >
              Projects
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
              href="/contact"
            >
              Contact
            </Link>

          </motion.div>
        )}

      </AnimatePresence>

    </nav>
  );
}