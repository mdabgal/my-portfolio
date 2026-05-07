"use client";

import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">

        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >

          {/* IMAGE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              show: { opacity: 1, scale: 1 }
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image
              src={profilePic}
              width={130}
              height={130}
              alt="profile"
              className="mx-auto rounded-full border-4 border-blue-500 mb-6 shadow-lg"
            />
          </motion.div>

          {/* ROLE */}
          <motion.p
            className="text-blue-500 tracking-widest mb-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            FRONTEND WEB DEVELOPER
          </motion.p>

          {/* TITLE */}
          <motion.h1
            className="text-5xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
          >
            Hi, I'm <span className="text-blue-600">Jannati</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-600 mb-6"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 }
            }}
          >
            Junior Frontend Developer | Programming Hero Learner |
            I build modern responsive websites using Next.js & Tailwind CSS
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="/about"
                className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                About Me
              </Link>
            </motion.div>

          </motion.div>

        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">8+</h2>
            <p className="text-gray-600">Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">2+</h2>
            <p className="text-gray-600">Years Learning</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">5+</h2>
            <p className="text-gray-600">Technologies</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-bold mb-2">Frontend</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, React, Next.js</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-bold mb-2">Styling</h3>
            <p className="text-gray-600">Tailwind CSS, Responsive Design</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-bold mb-2">Tools</h3>
            <p className="text-gray-600">Git, GitHub, VS Code</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I am a passionate Junior Frontend Developer from Bangladesh.
            I love building modern and user-friendly web applications.
          </p>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 mb-6">
          Have a project idea? Let’s build it
        </p>

        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Contact Me
        </Link>

      </section>

    </main>
  );
}