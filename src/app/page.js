"use client";

import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";
import { motion } from "framer-motion";
import { projects } from "@/data/projects"; // বা তোমার path অনুযায়ী
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <main className="bg-black mt-10 text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 relative pt-32 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent"></div>

        <motion.div
          className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <motion.p
              className="text-cyan-400 tracking-[6px] mb-5 uppercase text-sm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Frontend Web Developer
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                Hi, I'm
              </h1>

              <motion.h2
                className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    borderRight: '4px solid #22d3ee',
                  }}
                >
                  Jannati
                </motion.span>
              </motion.h2>

              <motion.div
                className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-5"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 160, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
            >
              Programming Hero learner passionate about building modern,
              responsive and interactive websites using Next.js, React,
              Tailwind CSS, Node.js and MongoDB.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link
                  href="/projects"
                  className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20"
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }}>
                <Link
                  href="/contact"
                  className="border border-cyan-400 px-7 py-3 rounded-2xl hover:bg-cyan-500/10 transition"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

              <Image
                src={profilePic}
                width={360}
                height={360}
                alt="profile"
                className="relative rounded-[40px] border border-white/10 shadow-2xl object-cover bg-white/5 backdrop-blur-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-white/10 border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">
          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">8+</h2>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">2+</h2>
            <p className="text-gray-400">Years Learning</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">9+</h2>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </section>

     {/* SKILLS */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold text-center mb-16"
    >
      My <span className="text-cyan-400">Skills</span>
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {/* HTML */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">HTML</h3>
      </motion.div>

      {/* CSS */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">CSS</h3>
      </motion.div>

      {/* JavaScript */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">JavaScript</h3>
      </motion.div>

      {/* React */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-16 h-16 mx-auto mb-4 animate-spin"
        />

        <h3 className="text-lg font-semibold">React.js</h3>
      </motion.div>

      {/* Next.js */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          className="w-16 h-16 mx-auto mb-4 bg-white rounded-full p-1"
        />

        <h3 className="text-lg font-semibold">Next.js</h3>
      </motion.div>

      {/* Tailwind */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">Tailwind CSS</h3>
      </motion.div>

      {/* Node.js */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">Node.js</h3>
      </motion.div>

      {/* MongoDB */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">MongoDB</h3>
      </motion.div>

    </div>
  </div>
</section>


{/* PROJECTS PREVIEW */}
<section className="py-24 px-6 bg-[#0b0b0b]">
  <div className="max-w-7xl mx-auto text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      My <span className="text-cyan-400">Projects</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {projects.slice(0, 3).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

    <div className="mt-10">
      <Link
        href="/projects"
        className="text-cyan-400 hover:underline"
      >
        View All Projects →
      </Link>
    </div>

  </div>
</section>





      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-[#0b0b0b]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I am a passionate Junior Frontend Developer from Bangladesh.
            Currently learning MERN Stack development from Programming Hero.
            I enjoy building beautiful UI, responsive layouts and modern web
            applications.
          </p>
        </div>
      </section>

      

      {/* CONTACT CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Have a project idea or collaboration? Feel free to contact me.
          </p>

          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              href="/contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </main>

  );
}
