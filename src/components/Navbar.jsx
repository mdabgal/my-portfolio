"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed   top-0 left-0 w-full z-50">

      <div className="max-w-8xl mx-auto  flex items-center justify-between px-5 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <Image
            src={profilePic}
            width={45}
            height={45}
            alt="profile"
            className="rounded-full h-14"
          />

          <h1 className="font-bold text-blue-600">
            My Portfolio
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link className="hover:text-blue-600" href="/">Home</Link>
          <Link className="hover:text-blue-600" href="/about">About</Link>
          <Link className="hover:text-blue-600" href="/skills">Skills</Link>
          <Link className="hover:text-blue-600" href="/education">Education</Link>
          <Link className="hover:text-blue-600" href="/projects">Projects</Link>
          <Link className="hover:text-blue-600" href="/contact">Contact</Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-5 py-4 flex flex-col gap-4">

          <button
            onClick={() => setOpen(false)}
            className="text-right text-xl text-gray-600"
          >
            ✕
          </button>

          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/skills">Skills</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/education">Education</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-blue-600" href="/contact">Contact</Link>

        </div>
      )}

    </nav>
  );
}